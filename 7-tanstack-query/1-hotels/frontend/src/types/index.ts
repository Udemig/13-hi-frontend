interface Place {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}

interface PlacesResponse {
  message: string;
  results: number;
  places: Place[];
}

interface PlaceResponse {
  message: string;
  place: Place;
}

interface FilterParams {
  location?: string;
  title?: string;
  order?: string;
}

export type { Place, PlacesResponse, FilterParams, PlaceResponse };
