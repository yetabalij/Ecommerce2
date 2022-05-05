import Home from "./pages/Home";
import styled from "styled-components";
import tw from "twin.macro";

const AppContainer = styled.div`
  ${tw`
    bg-red-200
  `}
`;

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
