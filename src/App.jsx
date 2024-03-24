
import { Routes, Route } from "react-router";
import ShoePage from "./pages/ShoePage.jsx";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main className="bg-main-gradient text-white max-md:text-center">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:productID" element={<ShoePage />} />
      </Routes>
      <Footer/>
    </main>
  );
};

export default App;
