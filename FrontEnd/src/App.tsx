import {Routes, Route} from 'react-router-dom'
import EventHub from "./Components/EventHub";
import AddEvent from './Components/AddEvent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventHub/>}/>
      <Route path="/add-event" element={<AddEvent/>}/>
    </Routes>
  );
}

export default App;