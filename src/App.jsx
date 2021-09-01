import BottomBar from "./components/BottomBar";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
// import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div className="bg-blue-50 h-screen">
      <div style={{maxWidth:'768px'}} className="bg-white mx-auto">
        <Nav />
        <Menu/>
        <BottomBar/>
        {/* <TestComponent/> */}
      </div>
    </div>
  );
}

export default App;
