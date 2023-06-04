import './App.css';
import Show from './firebase/Show.js';
import Me from './Me.js';

function App() {
  
const center={
  paddingLeft:"1%",
  margin:"auto",
  width:"90%",
  textAlign:"center",
  borderRadius:"20px",
  border:"2.5px solid #1D60B8"
}
  return (
    <div className="App">
    <p>This is a website that shows a different meme every 15 seconds ENJOY</p>
    <br></br>
    <br></br>
    <br></br>
  
<div style={center}>

<Show />

</div>
<br></br>
    <br></br>
    <br></br>
<Me />

    </div>
  );
}

export default App;
