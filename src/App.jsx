import styled, { ThemeProvider } from "styled-components";
import AddLegComponent from "./components/AddLegComponent";
import "./App.css";
import GlobalStyle from "./GlobalStyles";
import { LightTheme } from "./Theme";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0px 32px 0px 32px;
  width: 100%;
  height: 62px;
  background-color: ${(props) => props.theme.textLead};
  color: ${(props) => props.theme.textSecondary};
`;
const Container = styled.div`
  height: calc(100vh - 62px);
  margin-top: 62px;
  display: flex;
`;
const SideBar = styled.nav`
  width: 185px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0px 32px 0px;
  align-items: center;
  background-color: ${(props) => props.theme.textLead};
  color: ${(props) => props.theme.textSecondary};
  @media (max-width: 720px) {
    display: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <MainContainer>
          <NavBar>nav</NavBar>
          <Container>
            <SideBar>Side</SideBar>
            <AddLegComponent/>
          </Container> 
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
