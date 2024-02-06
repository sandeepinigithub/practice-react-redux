import './App.css';
import AddEmployee from './components/addEmployee'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddEmployee></AddEmployee>
      </div>
    </Provider>

  );
}

export default App;
