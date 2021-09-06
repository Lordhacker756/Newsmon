import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Component } from 'react';

export default class App extends Component {
  apiKey = "b263740674474c26905d1913e513ad8c"
  state={progress:0}
  setProgress = (progress) =>
  {
    this.setState({progress:progress})
  }
  render()
  {
  return(
    <div className="App">
    <Router>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
      <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize="6" country="in" category="General"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize="6" country="in" category="Business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize="6" country="in" category="Entertainment"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize="6" country="in" category="Health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize="6" country="in" category="Science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize="6" country="in" category="Sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize="6" country="in" category="Technology"/></Route>
        </Switch>
    </Router>
    </div>
  );
}
}
