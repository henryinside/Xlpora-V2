import React from 'react';
import { BookOpen, Sparkles, Search, Compass, Bookmark, Map, Flame } from 'lucide-react';

interface HeaderProps {
  currentTab: 'home' | 'library' | 'detail' | 'reader';
  onNavigate: (tab: 'home' | 'library') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeStoryTitle?: string;
  unlockedEndingsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  searchQuery,
  onSearchChange,
  activeStoryTitle,
  unlockedEndingsCount = 0
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-600 to-red-500 flex items-center justify-center shadow-md shadow-rose-950/40 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-amber-200 via-rose-200 to-white bg-clip-text text-transparent">
                Xplora Play
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md">
                Interaktif
              </span>
            </div>
            <span className="text-[11px] text-stone-400 font-medium">Novel Pilihan Bercabang</span>
          </div>
        </div>

        {/* Search Bar (visible on md+) */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari novel interaktif, judul, atau genre..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-stone-800/80 border border-stone-700/70 rounded-full text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentTab === 'home'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="hidden sm:inline">Jelajah</span>
          </button>

          <button
            onClick={() => onNavigate('library')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentTab === 'library'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span className="hidden sm:inline">Koleksiku</span>
          </button>

          {/* Points / Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-stone-800 border border-stone-700/80 rounded-full text-xs text-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-semibold text-[11px]">X-Points: 1,250</span>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3 pt-1 border-t border-stone-800/80">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari novel..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-800 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>
    </header>
  );
};
