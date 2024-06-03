import "./App.css";

import LearnReact from "./LearnReact";
import NewStudent from "./NewStudent";

function App() {
  const greeting = "Hello, my name is Olga";
  const component = "student";
  return (
    <div className="App">
      <header className="App-header">
        <p>{greeting}</p>
        {component === "student" ? <NewStudent /> : <LearnReact />}
      </header>
    </div>
  );
}

export default App;
