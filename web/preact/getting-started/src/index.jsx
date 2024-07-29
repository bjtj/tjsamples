import { h, render, Component } from 'preact';
import { Clock } from './clock';

import preactLogo from './assets/preact.svg';
import './style.css';

class App extends Component {

  state = { value: '', name: 'World' }

  onInput = ev => {
    this.setState({ value: ev.currentTarget.value });
  }

  onSubmit = ev => {
    ev.preventDefault();
    this.setState({ name: this.state.value });
  }

  render() {
    return <div>
      <h1>Hello, {this.state.name}!</h1>
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.value} onInput={this.onInput} />
        <button type="submit">Update</button>
      </form>
      <Clock />
    </div>;
  }
}

render(<App />, document.getElementById('app'));
