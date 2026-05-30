import { Person } from "./App";

export function getImageUrl(person: Person, size = 's') {
    return person.imageId + size + '.jpg';
}