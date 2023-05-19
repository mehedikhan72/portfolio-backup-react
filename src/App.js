import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import './index.css';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <div className="App bg-[#323437] text-[#D1D0C5] min-h-screen">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
