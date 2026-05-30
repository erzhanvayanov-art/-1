import { Person } from "./App";

export function getImageUrl(person: Person) {
    return (
         person.imageId + '.jpg'
    );
}