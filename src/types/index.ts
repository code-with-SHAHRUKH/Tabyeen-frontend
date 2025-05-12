export type QuranReference = {
  surahNumber: number;
  ayahNumber: number;
  ayahArabic: string;
  ayahEnglish: string;
  ayahUrdu: string;
};


export type Video = {
 _id: string;
  termArabic: string;
  termRoman?: string;
  explanationEnglish?: string;
  explanationUrdu?: string;
  explanationHindi?: string;
  source?: string;
  reference?: string;
  videoLink?: string;
  quranReferences?: QuranReference[];
  createdAt: string;
};

