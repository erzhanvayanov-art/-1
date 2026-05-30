export interface Story {
  id: string;
  label: string;
}

const stories: Story[] = [];

export default function Wrapper() {
  return <StoryTray stories={stories} />;
}

function StoryTray({ stories }: { stories: Story[] }) {
  // ✅ Создаём новый массив, не мутируя оригинал
  const storiesWithCreate = [...stories, { id: 'create', label: 'Create Story' }];

  return (
    <ul>
      {storiesWithCreate.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}