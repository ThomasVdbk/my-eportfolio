import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [currentSection, setBodyContent] = useState(null);

  return (
    <div className="App">
      <Header setBodyContent={setBodyContent} />
      <Body currentSection={currentSection} />
    </div>
  );
}

export default App;
