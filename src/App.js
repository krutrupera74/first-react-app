import './App.css';
import CounterWithHooks from './Components/reacthook';
import Blog from './Containers/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Blog />
      <CounterWithHooks />
    </div>
  );
}

export default App;
