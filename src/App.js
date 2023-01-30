import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Transactions from "./components/Transactions";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
function App() {
  return (
    <Main>
      <Header />
      <Content>
        <SideBar />
        <Transactions />
      </Content>
    </Main>
  );
}

export default App;

const Main = styled.div``;
const Content = styled.div`
  display: flex;
  /* max-width: 100vw; */
`;
