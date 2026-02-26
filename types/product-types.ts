// ─── Thumbnail ─────────────────────────────────────────────
export interface IThumbnail {
  _id: string;
  filename: string;
  mimeType: string;
  size: number;
  key: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isTemporary: boolean;
  url: string;
  id: string;
}

// ─── Category ─────────────────────────────────────────────
export interface ICategory {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  parent: string | null;
}

// ─── Gallery Item ─────────────────────────────────────────
export interface IGalleryItem {
  _id: string;
  label: string;
  file: string;
}

// ─── Product ──────────────────────────────────────────────
export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  crystalToUnlock: number;
  rating: number;
  reviewCount: number;
  status: "active" | "inactive";
  category: ICategory;
  thumbnail: IThumbnail;
  gallery: IGalleryItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  file: string;
}