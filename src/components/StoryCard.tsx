import React from 'react';
import { Story } from '../types';
import { Star, GitFork, BookOpen, Flame, Award } from 'lucide-react';

interface StoryCardProps {
  story: Story;
  onSelect: (story: Story) => void;
  unlockedEndingsCount?: number;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onSelect, unlockedEndingsCount = 0 }) => {
  return (
    <div
      onClick={() => onSelect(story)}
      className="group relative bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-950/20 transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-stone-950">
        <img
          src={story.coverImage}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlays & Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 z-10">
          <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-rose-600/90 text-white rounded-md backdrop-blur-md shadow-md">
            {story.ageRating}
          </span>

          {story.isInteractive && (
            <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold bg-amber-500/90 text-stone-950 rounded-md backdrop-blur-md shadow-md">
              <GitFork className="w-3 h-3" />
              {story.totalEndings} Endings
            </span>
          )}
        </div>

        {/* Unlocked Progress Badge */}
        {story.isInteractive && unlockedEndingsCount > 0 && (
          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 bg-stone-900/90 backdrop-blur-md border border-amber-500/40 rounded-lg p-1.5 flex items-center justify-between text-xs">
            <span className="text-[11px] font-medium text-stone-300 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Progres Ending:
            </span>
            <span className="text-[11px] font-bold text-amber-400">
              {unlockedEndingsCount} / {story.totalEndings}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-amber-400 mb-1">
            <span>{story.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-stone-400">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              {story.rating}
            </span>
          </div>

          <h3 className="font-bold text-base text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-1">
            {story.title}
          </h3>

          <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
            {story.synopsis}
          </p>
        </div>

        <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-stone-500" />
            {story.chaptersCount} Bab
          </span>
          <span className="flex items-center gap-1 text-stone-400">
            <Flame className="w-3 h-3 text-rose-400" />
            {(story.readCount / 1000).toFixed(1)}k Pembaca
          </span>
        </div>
      </div>
    </div>
  );
};
