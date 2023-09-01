import "./App.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Footer from "./assets/components/Footer";
import Card from "./assets/components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-center gap-10 p-10 flex-wrap">
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  );
}

export default App;
