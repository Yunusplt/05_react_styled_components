import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import ContainerStyle from "./components/styles/ContainerStyle";
import "./index.css";

//! responsivelik icin app.js de genel bir style yapiyoruz. yapilan bu style themeProvider ile birlikte kullaniliyor.

const style = {
  responsive: "724px",
};

function App() {
  return (
    <ThemeProvider theme={style}>
      <ContainerStyle>
        <Header />
        <Card />
      </ContainerStyle>
    </ThemeProvider>
  );
}

export default App;
