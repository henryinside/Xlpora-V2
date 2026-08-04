import React, { useState } from 'react';
import { Story, ReaderSettings, UserProgress } from './types';
import { gairahIreneStory } from './data/storyGairahIrene';
import { labirinSekteStory } from './data/storyLabirinSekteSesat';
import { kadoTerlarangStory } from './data/storyKadoTerlarang';
import { dummyStories } from './data/dummyStories';
import {
  getStoredSettings,
  saveStoredSettings,
  getStoredProgress,
  saveStoredProgress,
  getBookmarkedStoryIds,
  toggleBookmarkStoryId
} from './utils/storage';

import { Header } from './components/Header';
import { HomeFeed } from './components/HomeFeed';
import { StoryDetail } from './components/StoryDetail';
import { NovelReader } from './components/NovelReader';
import { LibraryView } from './components/LibraryView';

export default function App() {
  const allStories = [gairahIreneStory, labirinSekteStory, kadoTerlarangStory, ...dummyStories];

  const [activeTab, setActiveTab] = useState<'home' | 'library' | 'detail' | 'reader'>('home');
  const [selectedStory, setSelectedStory] = useState<Story>(gairahIreneStory);
  const [currentSceneId, setCurrentSceneId] = useState<string>(gairahIreneStory.initialSceneId);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [readerSettings, setReaderSettings] = useState<ReaderSettings>(getStoredSettings());
  const [bookmarkedStoryIds, setBookmarkedStoryIds] = useState<string[]>(getBookmarkedStoryIds());

  // Store progress map per story
  const [progressMap, setProgressMap] = useState<Record<string, UserProgress>>(() => {
    const map: Record<string, UserProgress> = {};
    allStories.forEach((s) => {
      map[s.id] = getStoredProgress(s.id, s.initialSceneId);
    });
    return map;
  });

  const selectedProgress = progressMap[selectedStory.id] || {
    storyId: selectedStory.id,
    currentSceneId: selectedStory.initialSceneId,
    unlockedEndings: [],
    visitedScenes: [selectedStory.initialSceneId],
    choiceHistory: {},
    lastReadTime: Date.now()
  };

  // Sync active scene with selected story's stored progress when switching to reader
  const handleStartReading = (storyToRead: Story = selectedStory, targetSceneId?: string) => {
    setSelectedStory(storyToRead);
    const sceneToLoad = targetSceneId || storyToRead.initialSceneId;

    setCurrentSceneId(sceneToLoad);
    setActiveTab('reader');
  };

  const handleSceneChange = (nextSceneId: string) => {
    setCurrentSceneId(nextSceneId);

    // Update progress
    const currentProg = progressMap[selectedStory.id] || {
      storyId: selectedStory.id,
      currentSceneId: nextSceneId,
      unlockedEndings: [],
      visitedScenes: [],
      choiceHistory: {},
      lastReadTime: Date.now()
    };

    const updatedVisited = Array.from(new Set([...currentProg.visitedScenes, nextSceneId]));

    // Check if nextSceneId is an ending
    const sceneObj = selectedStory.scenes[nextSceneId];
    let updatedEndings = [...currentProg.unlockedEndings];
    if (sceneObj?.isEnding) {
      if (!updatedEndings.includes(nextSceneId)) {
        updatedEndings.push(nextSceneId);
      }
      if (sceneObj.endingType && !updatedEndings.includes(`ending_${sceneObj.endingType.toLowerCase()}`)) {
        updatedEndings.push(`ending_${sceneObj.endingType.toLowerCase()}`);
      }
    }

    const updatedProgress: UserProgress = {
      ...currentProg,
      currentSceneId: nextSceneId,
      visitedScenes: updatedVisited,
      unlockedEndings: updatedEndings,
      lastReadTime: Date.now()
    };

    saveStoredProgress(updatedProgress);
    setProgressMap({ ...progressMap, [selectedStory.id]: updatedProgress });
  };

  const handleUpdateSettings = (newSettings: ReaderSettings) => {
    setReaderSettings(newSettings);
    saveStoredSettings(newSettings);
  };

  const handleToggleBookmark = (storyId: string = selectedStory.id) => {
    toggleBookmarkStoryId(storyId);
    setBookmarkedStoryIds(getBookmarkedStoryIds());
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans antialiased flex flex-col selection:bg-rose-600 selection:text-white">
      {/* Header Navbar (shown on home, library, detail) */}
      {activeTab !== 'reader' && (
        <Header
          currentTab={activeTab}
          onNavigate={(tab) => setActiveTab(tab)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeStoryTitle={selectedStory.title}
          unlockedEndingsCount={selectedProgress.unlockedEndings.length}
        />
      )}

      {/* Main Container */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <HomeFeed
              featuredStory={gairahIreneStory}
              allStories={allStories}
              onSelectStory={(s) => {
                setSelectedStory(s);
                setActiveTab('detail');
              }}
              onStartReading={(s) => handleStartReading(s)}
              unlockedEndingsCount={progressMap[gairahIreneStory.id]?.unlockedEndings.length || 0}
              storyProgressMap={progressMap}
            />
          </div>
        )}

        {activeTab === 'detail' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <StoryDetail
              story={selectedStory}
              onBack={() => setActiveTab('home')}
              onStartReading={(sceneId) => handleStartReading(selectedStory, sceneId)}
              unlockedEndings={progressMap[selectedStory.id]?.unlockedEndings || []}
            />
          </div>
        )}

        {activeTab === 'library' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <LibraryView
              allStories={allStories}
              bookmarkedStoryIds={bookmarkedStoryIds}
              storyProgressMap={progressMap}
              onSelectStory={(s) => {
                setSelectedStory(s);
                setActiveTab('detail');
              }}
              onContinueReading={(s) => handleStartReading(s)}
            />
          </div>
        )}

        {activeTab === 'reader' && (
          <NovelReader
            story={selectedStory}
            currentSceneId={currentSceneId}
            onSceneChange={handleSceneChange}
            onBackToDetail={() => setActiveTab('detail')}
            unlockedEndings={selectedProgress.unlockedEndings}
            readerSettings={readerSettings}
            onUpdateSettings={handleUpdateSettings}
            isBookmarked={bookmarkedStoryIds.includes(selectedStory.id)}
            onToggleBookmark={() => handleToggleBookmark(selectedStory.id)}
          />
        )}
      </main>
    </div>
  );
}
