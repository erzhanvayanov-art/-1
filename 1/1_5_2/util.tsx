import { Person } from "./App";

export function getImageUrl(person: Person, size: string) {
    return (
      'http://localhost:5173/' +
      person.imageId +
      size +
      '.jpg'
    );
  }