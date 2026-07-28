export interface PageData {
  pageIndex: number;
  totalPages: number;
  paragraphs: string[];
  wordCount: number;
}

/**
 * Splits array of paragraphs into pages where each page has at most `maxLinesPerPage` lines (default 14).
 * Guarantees that sentences are NEVER split across pages or cut in the middle.
 */
export function paginateSceneContent(
  paragraphs: string[],
  maxLinesPerPage: number = 14,
  charsPerLine: number = 48
): string[][] {
  if (!paragraphs || paragraphs.length === 0) return [['']];

  // Clean empty paragraphs
  const cleanParagraphs = paragraphs.map((p) => p.trim()).filter(Boolean);
  if (cleanParagraphs.length === 0) return [['']];

  const pages: string[][] = [];
  let currentPageParagraphs: string[] = [];
  let currentLinesOnPage = 0;

  for (const para of cleanParagraphs) {
    // Regex to extract complete sentences without splitting mid-sentence
    // Matches anything ending in punctuation (.!?…) and optional quotes/parens, followed by space or end
    const sentences = para.match(/[^.!?…]+[.!?…]+["'”’)]*(?:\s+|$)|[^.!?…]+$/g) || [para];

    let currentBuildingPara = '';

    for (let i = 0; i < sentences.length; i++) {
      const rawSentence = sentences[i];
      const trimmedSentence = rawSentence.trim();
      if (!trimmedSentence) continue;

      const testPara = currentBuildingPara ? `${currentBuildingPara} ${trimmedSentence}` : trimmedSentence;
      const testParaLines = Math.max(1, Math.ceil(testPara.length / charsPerLine));

      // Extra line overhead for paragraph gap if this is a new paragraph on the page
      const paragraphGapOverhead = (currentPageParagraphs.length > 0 && !currentBuildingPara) ? 0.75 : 0;

      const projectedLines = currentLinesOnPage + testParaLines + paragraphGapOverhead;

      if (projectedLines <= maxLinesPerPage) {
        // Fits in the current page!
        currentBuildingPara = testPara;
      } else {
        // Does not fit! Commit accumulated paragraph to current page
        if (currentBuildingPara) {
          currentPageParagraphs.push(currentBuildingPara);
          currentBuildingPara = '';
        }

        // Push current page to pages array if it has content
        if (currentPageParagraphs.length > 0) {
          pages.push(currentPageParagraphs);
          currentPageParagraphs = [];
          currentLinesOnPage = 0;
        }

        // Start new page with current sentence
        currentBuildingPara = trimmedSentence;
      }

      // If this is the last sentence of the paragraph, finalize `currentBuildingPara` into `currentPageParagraphs`
      if (i === sentences.length - 1 && currentBuildingPara) {
        const finalParaLines = Math.max(1, Math.ceil(currentBuildingPara.length / charsPerLine));
        const gap = currentPageParagraphs.length > 0 ? 0.75 : 0;
        currentPageParagraphs.push(currentBuildingPara);
        currentLinesOnPage += finalParaLines + gap;
        currentBuildingPara = '';
      }
    }
  }

  if (currentPageParagraphs.length > 0) {
    pages.push(currentPageParagraphs);
  }

  return pages.length > 0 ? pages : [['']];
}

export function countWords(paragraphs: string[]): number {
  return paragraphs.reduce((sum, p) => sum + p.trim().split(/\s+/).filter(Boolean).length, 0);
}
