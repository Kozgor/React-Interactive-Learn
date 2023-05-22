import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  const selectMock = () => {};

  return (
    <>
      <Header />
      <Wrapper>
        <div data-testid="app-container">
          <h1>React Interactive Learn available here...</h1>
        </div>
        <Button onClick={selectMock}>Test</Button>
      </Wrapper>
    </>
  );
}

export default App;
