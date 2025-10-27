export interface IPhoto {
  id: string;
  alt_description: string | null;
  width: number;
  height: number;

  urls: {
    small: string;
    full: string;
    regular: string;
    thumb: string;
  };
  user: {
    name: string;
    portfolio_url: string | null;
  };
}
