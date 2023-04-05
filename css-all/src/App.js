import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import StyledComponent from "./StyledComponent";

function App() {
  return (
    <>
      {/* PostCSS 적용 */}
      <Button1 />
      <Button2 />
      {/* styled-components 적용 */}
      <StyledComponent />
    </>
  );
}

export default App;
