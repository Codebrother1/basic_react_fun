import './App.css';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
// import Counter from './components/Counter';
// import Message from './components/Message';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <ClassClick/>
      <FunctionClick/>
      {/* <Counter/>
      {/* <Message/> */}
     {/* <Greet name="Bruce"  heroName="Batman">
       <p>This is children props</p>
     </Greet> */}
     {/* <Greet name="Clark" heroName="Superman">
       <button>Action</button>
     </Greet> */} 
     {/* <Greet name="Diana" heroName="Wonder Woman"/>  */}
     {/* <Welcome name="Bruce" heroName="Batman"/> */}
     {/* <Welcome name="Clark" heroName="Superman"/> */}
     {/* <Welcome name="Diana" heroName="Wonder Woman"/> */}

     {/* /* <Hello/> */}
    </div>
  );
}

export default App;
