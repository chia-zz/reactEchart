import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import Navbar from './components/Navbar';
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";

function App() {
  useEffect(() => {
    async () => {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
    };
  });

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
