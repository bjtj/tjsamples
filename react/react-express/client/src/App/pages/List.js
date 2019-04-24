import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    list: []
	}
    }

    componentDidMount() {
	this.getList();
    }

    getList = () => {
	fetch('/api/getList')
	    .then(res => res.json())
	    .then(list => this.setState({ list }))
    };

    render() {
	const { list } = this.state;

	return (
		<div className="App">
		<h1>List of Items</h1>
		{list.length ? (
			<div>
			{/**/}
		    {list.map((item) => {
			return (
				<div>
				{item}
			    </div>
			);
		    })}
		    </div>
		) : (
			<div>
			<h2>No List Items Found</h2>
			</div>
		)
		}
	    </div>
	);
    }
}


export default List;
