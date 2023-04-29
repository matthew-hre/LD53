import Photocopy from "./assets/photocopy.jpg";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <>
      <img src={Photocopy} alt="" className="photocopy" />
      <div className="screen">
        <p>this is a light glow</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
