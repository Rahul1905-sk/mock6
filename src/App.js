import "./App.css";
import Footer from "./components/Footer";
import HamNav from "./components/HamNav";
import Nav from "./components/Nav";
import Offer from "./components/Offer";
import Teachers from "./components/Teachers";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Nav />
      <HamNav />
      <Welcome />
      <Offer />
      <Teachers />
      <Footer />
    </div>
  );
}

export default App;
