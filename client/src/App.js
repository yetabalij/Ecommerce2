import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
// import styled from "styled-components";
// import tw from "twin.macro";

// const AppContainer = styled.div`
//   ${tw`
//     bg-red-200
//   `}
// `;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notfound" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
