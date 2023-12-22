import Catalog  from "./components/Catalog";
import { Header } from "./components/Header";
import './App.css';
function App() {
  return (
    <div className="App-Content">
      <header>
        <Header />
      </header>
        <main>
        <Catalog />
        </main>
    </div>
  );

}

export default App;
