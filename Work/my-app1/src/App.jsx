// import Gallery from "./Gallery.jsx";
// import { Profile } from "./Gallery.jsx";
import { getImageUrl } from "./utils.jsx";

// export default function App() {
//   return <Gallery />;
// }

// export default function App() {
//   return <Profile />;
// }

//PROPS
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }}
      />
      <Avatar
        size={70}
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
      />
      <Avatar size={40} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
    </div>
  );
}
