import React from 'react';
import { Story, UserProgress } from '../types';
import { Bookmark, Award, Clock, Play, BookOpen, Trash2 } from 'lucide-react';

interface LibraryViewProps {
  allStories: Story[];
  bookmarkedStoryIds: string[];
  storyProgressMap: Record<string, UserProgress>;
  onSelectStory: (story: Story) => void;
  onContinueReading: (story: Story) => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  allStories,
  bookmarkedStoryIds,
  storyProgressMap,
  onSelectStory,
  onContinueReading
}) => {
  const bookmarkedStories = allStories.filter((s) => bookmarkedStoryIds.includes(s.id));

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-stone-100 flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-amber-500 fill-amber-500" />
            Koleksiku & Riwayat Membaca
          </h1>
          <p className="text-xs text-stone-400 mt-1">
            Pantau cerita favorit, kemajuan baca, dan ending yang berhasil kamu buka
          </p>
        </div>
      </div>

      {/* Bookmarked Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-stone-200">Buku Dalam Koleksi ({bookmarkedStories.length})</h2>

        {bookmarkedStories.length === 0 ? (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 text-center space-y-3">
            <BookOpen className="w-10 h-10 text-stone-600 mx-auto" />
            <p className="text-xs text-stone-400">Belum ada buku yang ditandai ke koleksi.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookmarkedStories.map((story) => {
              const prog = storyProgressMap[story.id];
              const unlockedCount = prog?.unlockedEndings?.length || 0;

              return (
                <div
                  key={story.id}
                  className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden p-4 space-y-4 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex gap-4">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="w-20 h-28 object-cover rounded-xl shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                        {story.category}
                      </span>
                      <h3 className="font-bold text-sm text-stone-100 line-clamp-1">{story.title}</h3>
                      <p className="text-xs text-stone-400 line-clamp-2">{story.synopsis}</p>

                      {story.isInteractive && (
                        <div className="pt-1 flex items-center gap-1 text-[11px] font-semibold text-rose-300">
                          <Award className="w-3.5 h-3.5" />
                          <span>{unlockedCount} / {story.totalEndings} Endings Terbuka</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-stone-800">
                    <button
                      onClick={() => onContinueReading(story)}
                      className="flex-1 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-stone-950" />
                      Lanjutkan Membaca
                    </button>
                    <button
                      onClick={() => onSelectStory(story)}
                      className="px-3 py-2 bg-stone-800 text-stone-300 font-semibold text-xs rounded-xl hover:bg-stone-750 cursor-pointer"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
