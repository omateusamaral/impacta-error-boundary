import ErrorBoundary from "./ErrorBoundary";
import HelloWorld from "./HelloWorld";
import "./App.css";

function App() {
  return (
    <>
      <ErrorBoundary>
        <HelloWorld />
      </ErrorBoundary>
    </>
  );
}

export default App;
