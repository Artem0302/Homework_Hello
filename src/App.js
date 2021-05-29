import {Component} from 'react';
import './App.css';
import Menu from './LeftMenu';
import Content from './Content'

class App extends Component{
  render(){
    return <div className="app">
      <Menu />
      <Content />
    </div>
  }
}

export default App;
