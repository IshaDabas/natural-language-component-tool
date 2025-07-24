import { useState } from "react";
import InputSection from "./components/InputSection";
import ComponentList from "./components/ComponentList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getMatchedComponents } from "./utils/parser";
import { componentUI } from "./objects";
import "./styles/theme.css";

export default function App() {
  const [input, setInput] = useState("");
  const [components, setComponents] = useState(componentUI);

  const handleGenerate = () => {
    if (!input.trim()) {
      setComponents(componentUI);
    } else {
      const matched = getMatchedComponents(input);
      setComponents(matched);
    }
  };

  return (
    <div className="page-container">
      <div className="main-content">
        <Header />
        <InputSection
          input={input}
          setInput={setInput}
          onGenerate={handleGenerate}
        />
        <ComponentList data={components} />
        <Footer />
      </div>
    </div>
  );
}
