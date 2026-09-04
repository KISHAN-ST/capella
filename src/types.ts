export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  isSpecial?: boolean;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  isEggless?: boolean;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'villa' | 'desserts' | 'savory' | 'drinks';
  categoryLabel: string;
  isVideo?: boolean;
  videoSrc?: string;
}
