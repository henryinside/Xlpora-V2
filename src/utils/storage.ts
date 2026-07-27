import { ReaderSettings, UserProgress } from '../types';

const DEFAULT_SETTINGS: ReaderSettings = {
  fontSize: 'md',
  fontFamily: 'serif',
  theme: 'parchment',
  lineHeight: 'relaxed'
};

const SETTINGS_KEY = 'xplora_play_reader_settings';
const PROGRESS_PREFIX = 'xplora_play_progress_';
const BOOKMARKS_KEY = 'xplora_play_bookmarks';

export function getStoredSettings(): ReaderSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (e) {
    console.error('Failed to parse settings:', e);
  }
  return DEFAULT_SETTINGS;
}

export function saveStoredSettings(settings: ReaderSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings:', e);
  }
}

export function getStoredProgress(storyId: string, defaultSceneId: string): UserProgress {
  try {
    const raw = localStorage.getItem(`${PROGRESS_PREFIX}${storyId}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        storyId,
        currentSceneId: parsed.currentSceneId || defaultSceneId,
        unlockedEndings: parsed.unlockedEndings || [],
        visitedScenes: parsed.visitedScenes || [defaultSceneId],
        choiceHistory: parsed.choiceHistory || {},
        lastReadTime: parsed.lastReadTime || Date.now()
      };
    }
  } catch (e) {
    console.error('Failed to get progress:', e);
  }

  return {
    storyId,
    currentSceneId: defaultSceneId,
    unlockedEndings: [],
    visitedScenes: [defaultSceneId],
    choiceHistory: {},
    lastReadTime: Date.now()
  };
}

export function saveStoredProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(`${PROGRESS_PREFIX}${progress.storyId}`, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function getBookmarkedStoryIds(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to get bookmarks:', e);
  }
  return ['gairah-irene']; // default bookmark
}

export function toggleBookmarkStoryId(storyId: string): boolean {
  try {
    const list = getBookmarkedStoryIds();
    const exists = list.includes(storyId);
    let updated: string[];
    if (exists) {
      updated = list.filter((id) => id !== storyId);
    } else {
      updated = [...list, storyId];
    }
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    return !exists;
  } catch (e) {
    console.error('Failed to toggle bookmark:', e);
    return false;
  }
}
