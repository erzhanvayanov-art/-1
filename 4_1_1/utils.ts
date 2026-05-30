import { PlaceType } from "./data";

export function getImageUrl(place: PlaceType) {
    return (
      'https://i.imgur.com/' +
      place.imageId +
      'l.jpg'
    );
  }
  