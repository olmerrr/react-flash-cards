import "./App.css";
import questions from "./data";
import FlashCards from "./components/FlashCards";
export default function App() {
  return (
    <div className="App">
      <FlashCards questions={questions}/>
    </div>
  );
}

