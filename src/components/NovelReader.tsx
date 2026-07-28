import React, { useState, useEffect, useRef } from 'react';
import { Story, Scene, ReaderSettings, StoryChoice } from '../types';
import { paginateSceneContent } from '../utils/textPager';
import { motion, useAnimation } from 'motion/react';
import {
  ArrowLeft,
  Settings,
  Bookmark,
  ChevronRight,
  Trophy,
  X,
  Lock,
  BookOpen
} from 'lucide-react';

interface NovelReaderProps {
  story: Story;
  currentSceneId: string;
  onSceneChange: (nextSceneId: string) => void;
  onBackToDetail: () => void;
  unlockedEndings: string[];
  readerSettings: ReaderSettings;
  onUpdateSettings: (settings: ReaderSettings) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

/**
 * Check if a scene/chapter should be locked in the Chapter Picker dropdown.
 * Locks Bab 2a, 2b, 7a, 7b, and all Ending scenes.
 */
export const isSceneLocked = (sId: string, sceneObj?: Scene): boolean => {
  if (!sId) return false;
  const idLower = sId.toLowerCase();

  // Branch scenes 2a, 2b, 7a, 7b
  const isBranchLocked =
    idLower === 'scene-2a' ||
    idLower === 'scene-2b' ||
    idLower === 'scene-7a' ||
    idLower === 'scene-7b' ||
    idLower === '2a' ||
    idLower === '2b' ||
    idLower === '7a' ||
    idLower === '7b' ||
    idLower.endsWith('2a') ||
    idLower.endsWith('2b') ||
    idLower.endsWith('7a') ||
    idLower.endsWith('7b');

  // All ending scenes
  const isEndingLocked = Boolean(sceneObj?.isEnding) || idLower.includes('ending');

  return isBranchLocked || isEndingLocked;
};

export const NovelReader: React.FC<NovelReaderProps> = ({
  story,
  currentSceneId,
  onSceneChange,
  onBackToDetail,
  unlockedEndings,
  readerSettings,
  onUpdateSettings,
  isBookmarked,
  onToggleBookmark
}) => {
  const [showSettingsDrawer, setShowSettingsDrawer] = useState<boolean>(false);
  const [showPagePickerModal, setShowPagePickerModal] = useState<boolean>(false);
  const [selectedPickerSceneId, setSelectedPickerSceneId] = useState<string>(currentSceneId);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [peekDirection, setPeekDirection] = useState<'next' | 'prev' | null>(null);

  // Animation controls for top sliding card
  const controls = useAnimation();

  // Scene navigation history stack & transition lock
  const historyStackRef = useRef<string[]>([]);
  const pendingLastPageRef = useRef<boolean>(false);
  const isTransitioningRef = useRef<boolean>(false);

  const scene: Scene = story.scenes[currentSceneId] || story.scenes[story.initialSceneId];

  // Paginate scene text: max 9 lines per page
  const textPages = paginateSceneContent(scene.content, 9, 48);
  const totalTextPages = textPages.length;

  const choices = scene.choices || [];
  const hasMultipleChoices = choices.length > 1;
  const isSingleChoice = choices.length === 1;
  const isEndingScene = Boolean(scene.isEnding);

  // Page structure:
  // Page 0 = Standalone Chapter Title Page
  // Page 1..totalTextPages = Text Pages
  // Final Page (if choices > 1 or ending) = Choice or Ending Page
  const extraPage = hasMultipleChoices || isEndingScene ? 1 : 0;
  const totalPages = 1 + totalTextPages + extraPage;

  const isChoicePage = (hasMultipleChoices || isEndingScene) && currentPageIndex === totalPages - 1;

  // Track scene history stack
  useEffect(() => {
    if (currentSceneId) {
      const stack = historyStackRef.current;
      if (stack.length === 0 || stack[stack.length - 1] !== currentSceneId) {
        if (!pendingLastPageRef.current) {
          stack.push(currentSceneId);
        }
      }
    }
  }, [currentSceneId]);

  // Handle scene & page index initialization
  useEffect(() => {
    if (pendingLastPageRef.current) {
      pendingLastPageRef.current = false;
      // When going back to a previous chapter, open at the LAST page
      const textPgs = paginateSceneContent(scene.content, 9, 48);
      const hasMultChoices = (scene.choices || []).length > 1;
      const isEnd = Boolean(scene.isEnding);
      const totPages = 1 + textPgs.length + (hasMultChoices || isEnd ? 1 : 0);
      setCurrentPageIndex(Math.max(0, totPages - 1));
    } else {
      setCurrentPageIndex(0);
    }
  }, [currentSceneId]);

  // Reset top card position whenever current page or scene changes
  useEffect(() => {
    controls.set({ x: 0 });
    setDragOffset(0);
    setPeekDirection(null);
  }, [currentPageIndex, currentSceneId, controls]);

  // Find previous scene ID for chapter navigation
  const getPreviousSceneId = (): string | null => {
    const stack = historyStackRef.current;
    const currentIdx = stack.lastIndexOf(currentSceneId);

    if (currentIdx > 0) {
      return stack[currentIdx - 1];
    }

    // Fallback: search for parent scene in story.scenes
    for (const [sId, sObj] of Object.entries(story.scenes)) {
      const sceneObj = sObj as Scene;
      if (sceneObj.choices && sceneObj.choices.some((c) => c.targetSceneId === currentSceneId)) {
        return sId;
      }
    }
    return null;
  };

  const handleNextPage = async () => {
    if (isTransitioningRef.current || isChoicePage) return;

    const hasNextPage = currentPageIndex < totalPages - 1;
    const hasNextScene = currentPageIndex === totalPages - 1 && isSingleChoice;

    if (!hasNextPage && !hasNextScene) {
      await controls.start({ x: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } });
      setDragOffset(0);
      setPeekDirection(null);
      return;
    }

    isTransitioningRef.current = true;
    setPeekDirection('next');

    await controls.start({
      x: '-100%',
      transition: { type: 'spring', stiffness: 350, damping: 32 }
    });

    if (hasNextPage) {
      setCurrentPageIndex((prev) => prev + 1);
    } else if (hasNextScene) {
      onSceneChange(choices[0].targetSceneId);
    }

    controls.set({ x: 0 });
    setDragOffset(0);
    setPeekDirection(null);
    isTransitioningRef.current = false;
  };

  const handlePrevPage = async () => {
    if (isTransitioningRef.current) return;

    const hasPrevPage = currentPageIndex > 0;
    const prevId = getPreviousSceneId();
    const hasPrevScene = currentPageIndex === 0 && Boolean(prevId);

    if (!hasPrevPage && !hasPrevScene) {
      await controls.start({ x: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } });
      setDragOffset(0);
      setPeekDirection(null);
      return;
    }

    isTransitioningRef.current = true;
    setPeekDirection('prev');

    await controls.start({
      x: '100%',
      transition: { type: 'spring', stiffness: 350, damping: 32 }
    });

    if (hasPrevPage) {
      setCurrentPageIndex((prev) => prev - 1);
    } else if (hasPrevScene && prevId) {
      pendingLastPageRef.current = true;
      onSceneChange(prevId);
    }

    controls.set({ x: 0 });
    setDragOffset(0);
    setPeekDirection(null);
    isTransitioningRef.current = false;
  };

  // Keyboard navigation (Left/Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isChoicePage) return; // Disable keyboard page advance on choice page
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex, totalPages, isSingleChoice, choices, currentSceneId, isChoicePage]);

  // Immediate choice selection for multiple choices
  const handleSelectChoiceDirectly = async (choice: StoryChoice) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setPeekDirection('next');
    await controls.start({
      x: '-100%',
      transition: { type: 'spring', stiffness: 350, damping: 32 }
    });
    onSceneChange(choice.targetSceneId);
    controls.set({ x: 0 });
    setDragOffset(0);
    setPeekDirection(null);
    isTransitioningRef.current = false;
  };

  // Theme Style classes
  const getThemeClasses = () => {
    switch (readerSettings.theme) {
      case 'dark':
        return 'bg-stone-900 text-stone-200';
      case 'pitch':
        return 'bg-black text-stone-300';
      case 'sepia':
        return 'bg-[#f8f1e5] text-[#4a3b32]';
      case 'light':
        return 'bg-stone-50 text-stone-900';
      case 'parchment':
      default:
        return 'bg-[#211e1c] text-[#e8dfd8]';
    }
  };

  // Font Size Classes - Default is 15pt as requested
  const getFontSizeClass = () => {
    switch (readerSettings.fontSize) {
      case 'sm':
        return 'text-[14pt] leading-[1.65]';
      case 'lg':
        return 'text-[18pt] leading-[1.65]';
      case 'xl':
        return 'text-[20pt] leading-[1.65]';
      case '2xl':
        return 'text-[22pt] leading-[1.65]';
      case 'md':
      default:
        return 'text-[15pt] leading-[1.65]';
    }
  };

  // Font Family Classes
  const getFontFamilyClass = () => {
    switch (readerSettings.fontFamily) {
      case 'sans':
        return 'font-sans';
      case 'serif':
      default:
        return 'font-serif';
    }
  };

  // Determine underlying page target for peeking (completely static behind top card)
  const getUnderlyingTarget = () => {
    const dir = peekDirection || (dragOffset < -5 ? 'next' : dragOffset > 5 ? 'prev' : 'next');

    if (dir === 'next') {
      if (currentPageIndex < totalPages - 1) {
        return { sceneObj: scene, pageIdx: currentPageIndex + 1 };
      } else if (currentPageIndex === totalPages - 1 && isSingleChoice) {
        const nextSceneId = choices[0]?.targetSceneId;
        const nextScene = story.scenes[nextSceneId];
        if (nextScene) {
          return { sceneObj: nextScene, pageIdx: 0 };
        }
      }
    } else if (dir === 'prev') {
      if (currentPageIndex > 0) {
        return { sceneObj: scene, pageIdx: currentPageIndex - 1 };
      } else if (currentPageIndex === 0) {
        const prevId = getPreviousSceneId();
        if (prevId) {
          const prevScene = story.scenes[prevId];
          if (prevScene) {
            const prevPgs = paginateSceneContent(prevScene.content, 9, 48);
            const hasMult = (prevScene.choices || []).length > 1;
            const isEnd = Boolean(prevScene.isEnding);
            const totP = 1 + prevPgs.length + (hasMult || isEnd ? 1 : 0);
            return { sceneObj: prevScene, pageIdx: Math.max(0, totP - 1) };
          }
        }
      }
    }
    return null;
  };

  const underlyingTarget = getUnderlyingTarget();

  // Reusable page renderer function for active & underlying pages
  const renderPageContent = (sceneObj: Scene, pageIdx: number, isUnderlying: boolean = false) => {
    const textPgs = paginateSceneContent(sceneObj.content, 9, 48);
    const totalTextPgs = textPgs.length;
    const choicesList = sceneObj.choices || [];
    const hasMultChoices = choicesList.length > 1;
    const isEndScene = Boolean(sceneObj.isEnding);
    const totPgs = 1 + totalTextPgs + (hasMultChoices || isEndScene ? 1 : 0);

    if (pageIdx < 0 || pageIdx >= totPgs) return null;

    const isTitleP = pageIdx === 0;
    const isTextP = pageIdx >= 1 && pageIdx <= totalTextPgs;
    const isChoiceP = hasMultChoices && pageIdx === totPgs - 1;
    const isEndP = isEndScene && pageIdx === totPgs - 1;
    const textParaIndex = isTextP ? pageIdx - 1 : 0;
    const paras = isTextP ? textPgs[textParaIndex] || [] : [];

    return (
      <div
        className={`w-full h-full flex flex-col justify-center px-6 py-6 select-none ${getThemeClasses()} ${
          isUnderlying ? 'pointer-events-none' : ''
        }`}
      >
        {/* Page 0: Standalone Dedicated Chapter Title Page */}
        {isTitleP && (
          <div className="w-full h-full flex flex-col items-center justify-center text-center my-auto px-4 py-8 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl">
              <BookOpen className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400/90 block">
                {sceneObj.chapterNumber ? `Bab ${sceneObj.chapterNumber}` : 'Halaman Judul'}
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight leading-snug max-w-sm mx-auto">
                {sceneObj.title}
              </h1>
            </div>

            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto opacity-80" />

            <p className="text-xs text-stone-400 font-medium animate-pulse">
              Geser / Ketuk layar untuk mulai membaca &rarr;
            </p>
          </div>
        )}

        {/* Text Paragraphs Page */}
        {isTextP && (
          <div
            className={`space-y-3 ${getFontSizeClass()} ${getFontFamilyClass()} tracking-normal transition-all duration-200 my-auto`}
          >
            {paras.map((para, idx) => (
              <p key={idx} className="indent-6 text-left opacity-95 leading-[1.65]">
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Choice Selection Page (Swipe Disabled!) */}
        {isChoiceP && (
          <div className="space-y-4 text-center my-auto w-full max-w-md mx-auto">
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-stone-100">
                Pilih Langkah Irene Selanjutnya:
              </h3>
              <p className="text-[11px] text-stone-400">
                Sentuh salah satu pilihan di bawah untuk melanjutkan alur cerita
              </p>
            </div>

            <div className="space-y-2.5 pt-2 text-left">
              {choicesList.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => !isUnderlying && handleSelectChoiceDirectly(choice)}
                  className="w-full p-4 rounded-2xl bg-stone-900/95 border-2 border-stone-800 hover:border-amber-500 hover:bg-stone-850 transition-all cursor-pointer flex items-center justify-between gap-3 text-left group active:scale-[0.98] shadow-lg"
                >
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-xs text-stone-100 group-hover:text-amber-300 transition-colors">
                      {choice.text}
                    </h4>
                    {choice.description && (
                      <p className="text-[10px] text-stone-400 leading-tight">
                        {choice.description}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 w-7 h-7 rounded-full border border-stone-700 group-hover:border-amber-400 group-hover:bg-amber-400 flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-950" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Ending Scene Page */}
        {isEndP && (
          <div className="bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border-2 border-amber-500/60 rounded-2xl p-5 space-y-3 text-center my-auto shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 to-rose-600 rounded-xl mx-auto flex items-center justify-center text-stone-950 font-bold shadow-md">
              <Trophy className="w-6 h-6 fill-stone-950" />
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-extrabold text-stone-100">{sceneObj.endingTitle}</h2>
              <p className="text-[11px] text-stone-400 leading-relaxed max-w-xs mx-auto">
                Kamu telah berhasil menempuh perjalanan hingga mencapai akhir cerita ini.
              </p>
            </div>

            {!isUnderlying && (
              <div className="pt-2 flex justify-center gap-2">
                <button
                  onClick={onBackToDetail}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Kembali ke Detail Novel
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`fixed inset-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden select-none ${getThemeClasses()} transition-colors duration-300 z-50`}>
      {/* Top Fixed Header (52px height) */}
      <header className="h-13 shrink-0 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 px-3 flex items-center justify-between text-stone-200 z-30">
        <div className="flex items-center gap-2 overflow-hidden">
          <button
            onClick={onBackToDetail}
            className="p-1.5 rounded-lg hover:bg-stone-800 transition-colors text-stone-400 hover:text-stone-100 cursor-pointer shrink-0"
            title="Kembali"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="truncate">
            <h1 className="text-xs font-bold text-amber-400 truncate">{story.title}</h1>
            <span className="text-[10px] text-stone-400 block truncate">
              {scene.title}
            </span>
          </div>
        </div>

        {/* Right Info & Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              setSelectedPickerSceneId(currentSceneId);
              setShowPagePickerModal(true);
            }}
            className="text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full hover:bg-amber-500/30 transition-colors cursor-pointer flex items-center gap-1"
            title="Pilih Bab & Halaman"
          >
            <span>{currentPageIndex === 0 ? 'Judul' : `Hal ${currentPageIndex}/${totalPages - 1}`}</span>
          </button>

          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isBookmarked ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-stone-800/80 text-stone-400'
            }`}
            title="Simpan Penanda"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
          </button>

          <button
            onClick={() => setShowSettingsDrawer(!showSettingsDrawer)}
            className="p-1.5 bg-stone-800/80 hover:bg-stone-800 text-stone-300 rounded-lg transition-colors cursor-pointer"
            title="Pengaturan"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Page & Bab Picker Modal */}
      {showPagePickerModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-sm p-4 space-y-4 shadow-2xl text-stone-200">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <h3 className="font-bold text-sm text-amber-400">Pilih Bab & Halaman</h3>
              <button
                onClick={() => setShowPagePickerModal(false)}
                className="p-1 text-stone-400 hover:text-stone-100 rounded-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Select Bab (Locked Bab 2a, 2b, 7a, 7b & Endings) */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-stone-400 block">Pilih Bab:</label>
              <select
                value={selectedPickerSceneId}
                onChange={(e) => {
                  const newId = e.target.value;
                  const sObj = story.scenes[newId];
                  if (!isSceneLocked(newId, sObj) || newId === currentSceneId) {
                    setSelectedPickerSceneId(newId);
                  }
                }}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {(Object.values(story.scenes) as Scene[]).map((s) => {
                  const locked = isSceneLocked(s.id, s) && s.id !== currentSceneId;
                  return (
                    <option key={s.id} value={s.id} disabled={locked}>
                      {s.title} {locked ? '🔒 (Terkunci)' : ''}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Select Page Grid or Locked Alert */}
            {(() => {
              const targetScene = story.scenes[selectedPickerSceneId] || scene;
              const isTargetLocked = isSceneLocked(selectedPickerSceneId, targetScene) && selectedPickerSceneId !== currentSceneId;

              if (isTargetLocked) {
                return (
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center space-y-1">
                    <div className="flex items-center justify-center gap-1.5 text-amber-400 font-bold text-xs">
                      <Lock className="w-4 h-4" />
                      <span>Bab Terkunci</span>
                    </div>
                    <p className="text-[10px] text-stone-400 leading-relaxed">
                      Bab cabang (2a, 2b, 7a, 7b) dan Bab Ending tidak dapat dipilih langsung. Kamu harus memainkannya melalui pilihan cerita.
                    </p>
                  </div>
                );
              }

              const pgs = paginateSceneContent(targetScene.content, 9, 48);
              const targetChoices = targetScene.choices || [];
              const extraP = targetChoices.length > 1 || targetScene.isEnding ? 1 : 0;
              const totP = 1 + pgs.length + extraP;

              return (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-stone-400 block">Pilih Halaman:</label>
                  <div className="grid grid-cols-5 gap-1.5 max-h-40 overflow-y-auto p-1">
                    {Array.from({ length: totP }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (selectedPickerSceneId !== currentSceneId) {
                            onSceneChange(selectedPickerSceneId);
                          }
                          setCurrentPageIndex(i);
                          setShowPagePickerModal(false);
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          selectedPickerSceneId === currentSceneId && currentPageIndex === i
                            ? 'bg-amber-500 text-stone-950 border-amber-400'
                            : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-amber-500/50'
                        }`}
                      >
                        {i === 0 ? 'Judul' : i}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Settings Drawer Overlay */}
      {showSettingsDrawer && (
        <div className="absolute top-13 left-0 right-0 z-40 bg-stone-900 border-b border-stone-800 p-4 text-stone-200 text-xs space-y-3 shadow-2xl">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <span className="font-bold text-amber-400">Pengaturan Tampilan</span>
            <button
              onClick={() => setShowSettingsDrawer(false)}
              className="text-stone-400 hover:text-stone-100 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Font Size */}
            <div className="space-y-1">
              <span className="text-stone-400 block text-[11px] font-medium">Ukuran Teks:</span>
              <div className="flex items-center gap-1 bg-stone-950 p-1 rounded-lg border border-stone-800">
                {(['sm', 'md', 'lg', 'xl'] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => onUpdateSettings({ ...readerSettings, fontSize: sz })}
                    className={`flex-1 py-1 text-center font-bold rounded uppercase cursor-pointer text-[10px] ${
                      readerSettings.fontSize === sz
                        ? 'bg-amber-500 text-stone-950'
                        : 'text-stone-400'
                    }`}
                  >
                    {sz === 'md' ? '15pt' : sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme */}
            <div className="space-y-1">
              <span className="text-stone-400 block text-[11px] font-medium">Tema Warna:</span>
              <div className="flex items-center gap-1">
                {[
                  { id: 'parchment', name: 'Warm', bg: 'bg-[#211e1c]', text: 'text-[#e8dfd8]' },
                  { id: 'dark', name: 'Dark', bg: 'bg-stone-900', text: 'text-stone-200' },
                  { id: 'pitch', name: 'Pitch', bg: 'bg-black', text: 'text-stone-400' },
                  { id: 'sepia', name: 'Sepia', bg: 'bg-[#f8f1e5]', text: 'text-[#4a3b32]' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => onUpdateSettings({ ...readerSettings, theme: t.id as any })}
                    className={`flex-1 py-1 rounded text-[10px] font-bold border cursor-pointer ${t.bg} ${t.text} ${
                      readerSettings.theme === t.id ? 'ring-2 ring-amber-500' : 'border-stone-700'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Reader Viewport */}
      <main className="relative flex-1 w-full max-w-xl mx-auto flex flex-col justify-center items-center overflow-hidden my-auto">
        {/* Underlying Page Layer (Static background behind active card - NEVER moves) */}
        {underlyingTarget && (
          <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none">
            {renderPageContent(underlyingTarget.sceneObj, underlyingTarget.pageIdx, true)}
          </div>
        )}

        {/* Top Active Page Card (Sliding layer with drop shadow on sides) */}
        <motion.div
          animate={controls}
          drag={isChoicePage ? false : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragSnapToOrigin={false}
          dragElastic={0.6}
          onDrag={(event, info) => {
            if (isChoicePage) return;
            setDragOffset(info.offset.x);
            if (info.offset.x < -5) setPeekDirection('next');
            else if (info.offset.x > 5) setPeekDirection('prev');
          }}
          onDragEnd={async (event, info) => {
            if (isChoicePage) return;
            const offset = info.offset.x;
            const velocity = info.velocity.x;

            if (offset < -40 || velocity < -200) {
              handleNextPage();
            } else if (offset > 40 || velocity > 200) {
              handlePrevPage();
            } else {
              await controls.start({
                x: 0,
                transition: { type: 'spring', stiffness: 400, damping: 30 }
              });
              setDragOffset(0);
              setPeekDirection(null);
            }
          }}
          onTap={(event, info) => {
            if (isTransitioningRef.current || isChoicePage) return;
            const clientX = info.point.x;
            if (clientX < window.innerWidth * 0.35) {
              handlePrevPage();
            } else if (clientX > window.innerWidth * 0.65) {
              handleNextPage();
            }
          }}
          className={`absolute inset-0 z-10 w-full h-full flex flex-col justify-center ${
            isChoicePage ? 'cursor-default' : 'cursor-grab active:cursor-grabbing touch-pan-y'
          } select-none shadow-[-20px_0_35px_rgba(0,0,0,0.65),20px_0_35px_rgba(0,0,0,0.65)] ${getThemeClasses()}`}
        >
          {renderPageContent(scene, currentPageIndex, false)}
        </motion.div>
      </main>
    </div>
  );
};
