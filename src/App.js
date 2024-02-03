import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation firstName = 'Satirtha' lastName="Roy"/>
      <Main/>
      <Footer list={['rice', 'potato', 'sugar', 'mango', 'apple', 'fish']}/>
    </>
  );
}

export default App;
