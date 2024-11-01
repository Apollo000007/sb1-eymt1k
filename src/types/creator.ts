export interface Creator {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  followers: string;
  social: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
}