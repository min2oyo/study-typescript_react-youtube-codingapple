import { useDispatch, useSelector } from 'react-redux';

import Profile from "./components/Profile";
import { increment, RootState } from './index';

const App = () => {

  const dispatch = useDispatch();

  const 꺼내온거 = useSelector((state: RootState) => state);

  return (
    <div className="App">
      <h4>안녕하십니까</h4>
      <Profile name={`ina`} age={20} />
      {꺼내온거.counter1.count}
      <button onClick={() => { dispatch(increment()); }}>버튼</button>
    </div>
  );
};

export default App;
