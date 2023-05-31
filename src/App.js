import logo from './logo.svg';
import './App.css';
import Task from './Task';
import CustomSlider from './Slider/CustomSlider';
import Slider from './Slider/Slider';

function App() {
  
  return (
    <div className="App">
      <CustomSlider slides={1}/>
      {/* <Task/> */}
    </div>
  );
}

export default App;
