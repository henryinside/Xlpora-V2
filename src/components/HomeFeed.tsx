import React, { useState } from 'react';
import { Story } from '../types';
import { StoryCard } from './StoryCard';
import { Sparkles, GitFork, Play, Award, Flame, Zap, CheckCircle2 } from 'lucide-react';

interface HomeFeedProps {
  featuredStory: Story;
  allStories: Story[];
  onSelectStory: (story: Story) => void;
  onStartReading: (story: Story) => void;
  unlockedEndingsCount: number;
  storyProgressMap?: Record<string, { unlockedEndings: string[] }>;
}

export const HomeFeed: React.FC<HomeFeedProps> = ({
  featuredStory,
  allStories,
  onSelectStory,
  onStartReading,
  unlockedEndingsCount,
  storyProgressMap
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Pilihan Bercabang', 'Romance', 'Drama', 'Thriller', 'Fantasy'];

  const filteredStories = allStories.filter((s) => {
    if (selectedCategory === 'Semua') return true;
    if (selectedCategory === 'Pilihan Bercabang') return s.isInteractive;
    return s.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Featured Banner - Gairah Irene */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 border border-stone-800 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent z-10" />

        {/* Background Image Accent */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/3 opacity-30 md:opacity-50 overflow-hidden">
          <img
            src={featuredStory.coverImage}
            alt={featuredStory.title}
            className="w-full h-full object-cover object-center scale-105 filter blur-sm md:blur-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />
        </div>

        {/* Banner Content */}
        <div className="relative z-20 p-6 sm:p-8 md:p-10 max-w-2xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-500 to-rose-600 text-stone-950 font-bold text-xs rounded-full shadow-lg">
              <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
              Novel Interaktif Utama
            </span>
            <span className="px-2.5 py-1 bg-stone-800/80 text-rose-300 border border-rose-500/30 text-xs font-semibold rounded-full">
              {featuredStory.ageRating}
            </span>
            <span className="flex items-center gap-1 text-xs text-amber-300 font-semibold px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <GitFork className="w-3.5 h-3.5" />
              {featuredStory.totalEndings || 2} Ending Bercabang
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {featuredStory.title}
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
            {featuredStory.synopsis}
          </p>

          {/* Interactive Tags */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            {featuredStory.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 bg-stone-900/80 border border-stone-800 px-3 py-1.5 rounded-xl text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onStartReading(featuredStory)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-stone-950 font-bold text-sm rounded-xl shadow-lg shadow-rose-950/50 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-stone-950" />
              Mulai Baca & Tentukan Pilihan
            </button>

            <button
              onClick={() => onSelectStory(featuredStory)}
              className="px-5 py-3 bg-stone-800/90 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-sm rounded-xl transition-all cursor-pointer"
            >
              Lihat Rincian & Peta Story
            </button>
          </div>

          {/* Progress Tracker */}
          {unlockedEndingsCount > 0 && (
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Kamu telah membuka <strong>{unlockedEndingsCount} dari {featuredStory.totalEndings || 2} Ending</strong>! Coba cabang lain untuk koleksi lengkap.</span>
            </div>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-950/30'
                : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
            }`}
          >
            {cat === 'Pilihan Bercabang' && <GitFork className="w-3.5 h-3.5 inline mr-1.5" />}
            {cat}
          </button>
        ))}
      </div>

      {/* Story Grid Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl font-bold text-stone-100">Katalog Novel Xplora Play</h2>
          </div>
          <span className="text-xs text-stone-400 font-medium">{filteredStories.length} Judul Tersedia</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onSelect={onSelectStory}
              unlockedEndingsCount={storyProgressMap?.[story.id]?.unlockedEndings.length || 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
