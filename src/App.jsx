import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecipeCard from "./components/RecipeCard";

import { Ingredients } from "./components/Ingredients";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RecipeCard />
      <Ingredients />
      <Footer />
    </div>
  );
}

export default App;