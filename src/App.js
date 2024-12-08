import { Provider } from 'react-redux';
import store from './redux/store';
import logo from "./logo.svg";
import Header from "./header/Header";

import Dashboard from "./dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className='app-div'>
        {/* <Header /> */}
        <Dashboard/>
       
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </Provider>
  );
}

export default App;
