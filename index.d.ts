declare module 'mangakakalot-api' {
  export interface Manga {
    id: string;
    title: string;
    image: string;
    latestChapter: string;
    views: number;
    genres: string[];
  }

  export interface MangaListResponse {
    mangas: Manga[];
    currentPage: number;
    hasNextPage: boolean;
    totalPages: number;
    totalMangas: number;
  }

  export interface MangaDetails {
    id: string;
    title: string;
    image: string;
    description: string;
    author: string;
    status: string;
    genres: string[];
    chapters: Chapter[];
    views: number;
    rating: number;
    alternativeTitles: string[];
  }

  export interface Chapter {
    id: string;
    title: string;
    url: string;
    date: string;
  }

  export interface ChapterImages {
    images: string[];
    chapterTitle: string;
    mangaTitle: string;
    prevChapter: string | null;
    nextChapter: string | null;
  }

  export interface HomeData {
    popularNow: Manga[];
    latestUpdates: Manga[];
  }

  export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
  }

  // Express app interface
  export interface MangaAPI {
    listen(port: number, callback?: () => void): void;
    close(callback?: () => void): void;
  }

  const app: MangaAPI;
  export default app;
}
