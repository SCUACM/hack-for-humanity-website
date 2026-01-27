import { Analytics } from "@vercel/analytics/react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Prizes from './components/Prizes';
import Stats from "./components/Stats";
import Sponsors from "./components/Sponsors";
import FAQ from './components/FAQ';
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Prizes/>
      <Stats/>
      <Sponsors/>
      <FAQ/>
      <Footer/>
      <Analytics />
    </>
  );
}

export default App;
