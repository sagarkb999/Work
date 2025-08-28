import { useState } from "react";
import "./App.css";

export default function App() {
  const [customName, setCustomName] = useState("");
  const [region, setRegion] = useState("us");
  const [story, setStory] = useState("");

  // Arrays
  const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const insertY = ["the soup kitchen", "Disneyland", "the White House"];
  const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  // Template story
  const storyText =
    "It was 94 fahrenheit outside, so :insertx: went for a walk. " +
    "When they got to :inserty:, they stared in horror for a few moments, then :insertz:. " +
    "Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

  // picking random word from an array
  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  const generateStory = () => {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    // Custom name
    if (customName.trim() !== "") {
      newStory = newStory.replace("Bob", customName);
    }

    // Region conversion
    if (region === "uk") {
      const weight = Math.round(300 / 14) + " stone";
      const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";

      newStory = newStory.replace("300 pounds", weight);
      newStory = newStory.replace("94 fahrenheit", temperature);
    }

    setStory(newStory);
  };

  return (
    <div className="flex flex-col items-start p-6 max-w-md mx-auto font-sans">
      {/* Custom Name */}
      <div className="mb-4">
        <label htmlFor="customname" className="font-bold mr-2">
          Enter custom name:
        </label>
        <input
          id="customname"
          type="text"
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      </div>

      {/* Region Selection */}
      <div className="mb-4">
        <label className="font-bold mr-2">US</label>
        <input
          type="radio"
          name="region"
          value="us"
          checked={region === "us"}
          onChange={(e) => setRegion(e.target.value)}
          className="mr-4"
        />
        <label className="font-bold mr-2">UK</label>
        <input
          type="radio"
          name="region"
          value="uk"
          checked={region === "uk"}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>

      {/* Button */}
      <div className="mb-4">
        <button
          onClick={generateStory}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded shadow"
        >
          Generate Random Story
        </button>
      </div>

      {/* Story Output */}
      {story && (
        <p className="bg-yellow-200 text-brown-800 p-4 rounded shadow">
          {story}
        </p>
      )}
    </div>
  );
}
