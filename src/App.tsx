import Profile from "./components/Profile";

const App = () => {

  return (
    <div className="App">
      <h4>안녕하십니까</h4>
      <Profile name={`ina`} age={20} />
    </div>
  );
};

export default App;
