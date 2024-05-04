import './App.css';
import Tesk from './Tesk/Tesk';
function App() {
  return (
    <div className="App">
      <h1>
        My Tesks
      </h1>
      <div className='container'>
      <Tesk tesk="this is a tesk" check={true} id='tesk1'/>
      <Tesk tesk="this is a tesk 2" check={false} id='tesk2'/>
      <Tesk tesk="this is a tesk 3" check={true}id='tesk3'/>
      <Tesk tesk="this is a tesk 4" check={false}id='tesk4'/>
      <Tesk tesk="this is a tesk 5" check={true}id='tesk5'/>
      </div>
    </div>
  );
}

export default App;
