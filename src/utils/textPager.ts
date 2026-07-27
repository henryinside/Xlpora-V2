export interface PageData {
  pageIndex: number;
  totalPages: number;
  paragraphs: string[];
  wordCount: number;
}

/**
 * Splits array of paragraphs into pages where each page has between 40 and 70 words.
 */
export function paginateSceneContent(
  paragraphs: string[],
  minWordsPerPage: number = 40,
  maxWordsPerPage: number = 60
): string[][] {
  if (!paragraphs || paragraphs.length === 0) return [['']];

  // Join all paragraphs into a continuous string
  const fullText = paragraphs.join(' ').trim();
  if (!fullText) return [['']];

  // Extract all words
  const words = fullText.split(/\s+/).filter(Boolean);
  const totalWords = words.length;

  if (totalWords <= maxWordsPerPage) {
    return [[words.join(' ')]];
  }

  const pages: string[][] = [];
  let index = 0;

  while (index < words.length) {
    const remaining = words.length - index;

    if (remaining <= maxWordsPerPage) {
      // If remaining is less than minWordsPerPage and we already have pages,
      // balance the last two pages so both are strictly within or close to 40-60
      if (remaining < minWordsPerPage && pages.length > 0) {
        const prevPageWords = pages[pages.length - 1][0].split(/\s+/).filter(Boolean);
        const combined = [...prevPageWords, ...words.slice(index)];
        const half = Math.ceil(combined.length / 2);
        pages[pages.length - 1] = [combined.slice(0, half).join(' ')];
        pages.push([combined.slice(half).join(' ')]);
      } else {
        pages.push([words.slice(index).join(' ')]);
      }
      break;
    }

    // Standard chunk size: 50 words (right in the middle of 40-60)
    const chunkSize = 50;
    pages.push([words.slice(index, index + chunkSize).join(' ')]);
    index += chunkSize;
  }

  return pages.length > 0 ? pages : [['']];
}

export function countWords(paragraphs: string[]): number {
  return paragraphs.reduce((sum, p) => sum + p.trim().split(/\s+/).filter(Boolean).length, 0);
}
