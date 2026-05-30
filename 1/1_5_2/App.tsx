import { getImageUrl } from "./util";

export type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
  // Определяем размер изображения: 's' для маленьких (менее 90px), 'b' для больших
  const imageSize = size < 90 ? 's' : 'b';

  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",  // ← изменили с "GregorioYZara" на "7vQD0fP"
        }}
      />
      <Avatar
        size={100}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",  // ← изменили
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",  // ← изменили
        }}
      />
    </>
  );
}