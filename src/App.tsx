import { createGlobalStyle, styled } from "styled-components";
import PageRouter from "./pages/PageRouters";
import { IssuesProvider } from "./store/IssuesContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <CommonLayout>
      <IssuesProvider>
        <GlobalStyle />
        <Header />
        <PageRouter />
      </IssuesProvider>
    </CommonLayout>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html,body{
    height:100%
  }
  #root{
    width:100%;
    height:100%;
    color: black;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button{
    cursor: pointer;
  }
`;

const CommonLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
