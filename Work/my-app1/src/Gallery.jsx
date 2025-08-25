function DogProfile() {
  return <img src="https://picsum.photos/id/237/200/300" alt="Scenery" />;
}

//Default Export
export default function Gallery() {
  return (
    <section>
      <h1>Good Dog</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//Named Export
export function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}
