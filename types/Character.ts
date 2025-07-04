export type Character = {
  id: number;
  name: string;
  alias: string;
  description: string;
  image: string;
  abilities?: string[];
  category?: string;
  TBENum?: string;
  popularity?: number;
  story?: string;
  role?: string;
}