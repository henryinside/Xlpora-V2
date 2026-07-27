export interface StoryChoice {
  id: string;
  text: string;
  description?: string;
  targetSceneId: string;
  badge?: string;
}

export interface Scene {
  id: string;
  title: string;
  chapterNumber?: number;
  content: string[]; // Formatted paragraph array for clean line breaks and reading
  choices?: StoryChoice[];
  isEnding?: boolean;
  endingType?: 'A' | 'B' | 'C' | 'D';
  endingTitle?: string;
  endingBadge?: string;
}

export interface Story {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  synopsis: string;
  category: 'Romance' | 'Drama' | 'Thriller' | 'Mystery' | 'Fantasy';
  ageRating: '18+' | '13+' | 'Semua Umur';
  isInteractive: boolean;
  totalEndings: number;
  readCount: number;
  rating: number;
  chaptersCount: number;
  tags: string[];
  initialSceneId: string;
  scenes: Record<string, Scene>;
}

export interface ReaderSettings {
  fontSize: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  fontFamily: 'serif' | 'sans' | 'merriweather' | 'playfair';
  theme: 'parchment' | 'dark' | 'pitch' | 'sepia' | 'light';
  lineHeight: 'normal' | 'relaxed' | 'loose';
}

export interface UserProgress {
  storyId: string;
  currentSceneId: string;
  unlockedEndings: string[]; // e.g. ['ending_disappointed', 'ending_secret']
  visitedScenes: string[];
  choiceHistory: Record<string, string>; // sceneId -> choiceId
  lastReadTime: number;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
  endingReached?: string;
}
