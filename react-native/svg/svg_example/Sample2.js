import React, { Component } from 'react'
import Logo from './Logo';

export default class Sample2 extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	return (
	    <Logo width={120} height={120} />
	);
    }
}
