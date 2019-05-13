import React, { Component } from 'react';

class ExplainBindingsComponent extends Component {

    constructor() {
	super();
	// this.onClickMe = this.onClickMe.bind(this);
	this.onClickMe = () => {
	    console.log(this);
	}
    }

    // onClickMe() {
    // 	console.log(this);
    // }

    render() {
	return (
	    <button
	      onClick={this.onClickMe.bind(this)}
	      type="button"
	      >
	      Click Me
	      </button>
	);
    }
}
