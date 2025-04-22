// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
      });
  }, []);
  // th dpendecies is empty just to mak it run once

  if (!dogPic) return <p>Loading...</p>; // show loadig while react is still rendering the page

  return <img src={dogPic} alt="A Random Dog" />;
}

export default App;