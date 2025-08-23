import logo from './logo.svg';
import './App.css';


function App() {

  function Alert({info}){
    return (
      <div>
        {info?"Success":"Fail"}
      </div>
    );
  }

  return (
    <Alert info={true}></Alert>
  );
}

export default App;
