import { useState, useEffect } from "react";

function App() {
  const [storyData, setStoryData] = useState(null);
  const [story, setStory] = useState("");
  const [customName, setCustomName] = useState("");
  const [region, setRegion] = useState("us");

  useEffect(() => {
    fetch("/stories.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch JSON");
        return res.json();
      })
      .then((data) => {
        console.log("Loaded JSON:", data); 
        setStoryData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const generateStory = () => {
    if (!storyData || !storyData.stories) {
      console.warn("No story data yet!");
      return;
    }

    const storyObj = randomValueFromArray(storyData.stories);
    let newStory = storyObj.storyText;

    const xItem = randomValueFromArray(storyObj.insertX);
    const yItem = randomValueFromArray(storyObj.insertY);
    const zItem = randomValueFromArray(storyObj.insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if (customName.trim() !== "") {
      newStory = newStory.replace("Bob", customName);
    }

    if (region === "uk") {
      const weight = Math.round(300 / 14) + " stone";
      const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
      newStory = newStory.replace("300 pounds", weight);
      newStory = newStory.replace("94 fahrenheit", temperature);
    }

    console.log("Generated Story:", newStory); // ✅ Debug
    setStory(newStory);
  };

  return (
    <div>
      <h1>Silly Story Generator</h1>

      <input
        type="text"
        placeholder="Enter custom name"
        value={customName}
        onChange={(e) => setCustomName(e.target.value)}
      />

      <label>
        <input
          type="radio"
          name="region"
          value="us"
          checked={region === "us"}
          onChange={() => setRegion("us")}
        />
        US
      </label>

      <label>
        <input
          type="radio"
          name="region"
          value="uk"
          checked={region === "uk"}
          onChange={() => setRegion("uk")}
        />
        UK
      </label>

      <button onClick={generateStory}>Generate Random Story</button>

      {story && <p><strong>{story}</strong></p>}
    </div>
  );
}

export default App;
