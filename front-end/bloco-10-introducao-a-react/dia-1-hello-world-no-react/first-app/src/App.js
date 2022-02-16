import './App.css';

const compromissos = ['estudar', 'mercado', 'limpar a casa', 'lavar o carro'];

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}
function App() {
  return (
    <ol> {compromissos.map((item) => Task(item))} </ol>
  );
}

export default App;
