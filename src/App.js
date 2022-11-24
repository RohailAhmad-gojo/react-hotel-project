import "./App.css"
import About from "./components/About/About";
import Home from "./components/home/Home";
import Places from "./components/places/Places";
import Review from "./components/reviews/Review";
import Service from "./components/services/Service"
function App() {
  return (
    <>
      <Home/>
      <Review/>
      <Places/>
      <Service/>
      <About/>
    </>
  );
}

export default App;
