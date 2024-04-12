import { Header } from '../../components/Header'
import background from '../../assets/bg-github.png'
import style from './style.css'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img className="background" src={background} alt="Background App"/>

        <div className="info">
          <input name='user' placeholder='@username'></input>
          <button>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default App;

