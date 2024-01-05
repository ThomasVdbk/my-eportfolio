import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentSection, setBodyContent] = useState(null);

  return (
    <div className="App">
      <Header setBodyContent={setBodyContent} />
      {/* Body parent de Category parent de Card  */}
      <Body currentSection={currentSection} />
    </div>
  );
}

export default App;
