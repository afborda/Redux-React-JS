import Madia from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
import Intervalo from "./components/Intervalo";

// import "./styles/GlobalStyles.css";

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className="row">
        <Intervalo />
      </div>
      <div className="row">
        <Madia></Madia>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
