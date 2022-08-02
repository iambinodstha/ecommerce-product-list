export interface FetchBeerListParams {
    page: number;
    per_page: number;
}

export interface BeerListItems {
    id: number;
    name: string;
    tagline: string; image_url: string;
    description: string;
    ingredients: {[key: string]: any}
}