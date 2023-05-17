import "./App.css";
import Nav from "./component/Nav/Nav";
import Main from "./component/Main/Main";
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";
import Loading from "./component/loadinghi/Loading";
import Nava from "./component/Nav/Nava";
import Log from "./component/Login/Log";
import Fetch from "./component/fetch/Fetch";
import Menu from "./component/Menu/Menu";
import Footer from "./component/footer/Footer";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      {/* <Loading /> */}
      <Nava />
      {/* <Nav /> */}
      <Main />
      {/* <Log /> */}
      {/* <Nav /> */}
      {/* <Fetch /> */}
      {/* <Menu /> */}
      <Footer />
    </div>
  );
}

export default App;
