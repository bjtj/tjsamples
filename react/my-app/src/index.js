import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor() {
	super();
	this.state = {
	    message: "my friend (from state)!"
	};
	this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
	this.setState({
	    message: "my friend (from changed state)!"
	});
    }
    
    render() {
	return (
	    <div>
		<h1>Hello {this.state.message}!</h1>
		<h1>Hello {this.props.message}!</h1>
		<button onClick={this.updateMessage}>Click me!</button>
	    </div>
	)
    }
}

ReactDOM.render(
	<Hello message="my friend" />,
    document.getElementById("root")
);
