import { h, render, Component } from 'preact';

export class Clock extends Component {

  state = { time: Date.now() };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.state.time).toLocaleString();
    return <span>{time}</span>;
  }
}

// render(<Clock />, document.getElementById('app'));
