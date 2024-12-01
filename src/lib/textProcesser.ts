interface Word {
    syllables: string[];
  }
  
  export function processText(text: string): Word[] {
    return text
      .trim()
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => ({
        syllables: word
          .split('-')
          .map(syllable => syllable.trim())
          .filter(syllable => syllable.length > 0)
      }));
  }