import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


const list = [
    {
	title: 'React',
	url: 'https://reactjs.org/',
	author: 'Jordan Walke',
	num_comments: 3,
	points: 4,
	objectID: 0,
    },
    {
	title: 'Redux',
	url: 'https://redux.js.org/',
	author: 'Dan Abramov, Andrew Clark',
	num_comments: 2,
	points: 5,
	objectID: 1,
    },
];

// ES5
// function isSearched(searchTerm) {
//     return function (item) {
// 	return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
//     }
// }

// ES6
const isSearched = searchTerm => item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

    constructor(props) {
	super(props);

	this.state = {
	    list,
	    searchTerm: '',
	};

	this.onSearchChange = this.onSearchChange.bind(this);
	this.onDismiss = this.onDismiss.bind(this);
    }

    onSearchChange(event) {
	this.setState({ searchTerm: event.target.value });
    }

    onDismiss(id) {
	const updatedList = this.state.list.filter(item => item.objectID !== id);
	this.setState({ list: updatedList });
    }

    render() {
	const { searchTerm, list } = this.state;
	return (
	    <div className="page">
	      <div className="interactions">
		<Search
		  value={searchTerm}
		  onChange={this.onSearchChange}
		  >
		  Search
		</Search>
	      </div>
	      <Table
		list={list}
		pattern={searchTerm}
		onDismiss={this.onDismiss}
		/>
	    </div>
	);
    }
}

class Button extends Component {
    render() {
	const {
	    onClick,
	    className = '',
	    children,
	} = this.props;

	return (
	    <button
	      onClick={onClick}
	      className={className}
	      type="button"
	      >
	      {children}
	    </button>
	)
    }
}

// class Search extends Component {
//     render() {
// 	const { value, onChange, children } = this.props;
// 	return (
// 	    <form>
// 	      {children} <input
// 		type="text"
// 		value={value}
// 		onChange={onChange}
// 		/>
// 	    </form>
// 	);
//     }
// }


// function Search(props) {
//     const { value, onChange, children } = props;
//     return (
// 	<form>
// 	  {children} <input
// 		       type="text"
// 		       value={value}
// 		       onChange={onChange}
// 		       />
// 	</form>
//     );
// }


// function Search({ value, onChange, children }) {
//     return (
// 	<form>
// 	  {children} <input
// 		       type="text"
// 		       value={value}
// 		       onChange={onChange}
// 		       />
// 	</form>
//     );
// }


// const Search = ({ value, onChange, children }) =>
//       <form>
//       {children} <input
// type="text"
// value={value}
// onChange={onChange}
//     />
//     </form>


const Search = ({ value, onChange, children }) => {
    // do something
    return (
	<form>
	  {children} <input
		       type="text"
		       value={value}
		       onChange={onChange}
		       />
	</form>
    )
}


// class Table extends Component {
//     render() {
// 	const { list, pattern, onDismiss } = this.props;
// 	return (
// 	    <div>
// 	      {
// 		  list.filter(isSearched(pattern)).map(
// 		      item =>
// 			  <div key={item.objectID}>
// 				<span><a href={item.url}>{item.title}</a></span>
// 				    <span>{item.author}</span>
// 					<span>{item.num_comments}</span>
// 					    <span>{item.points}</span>
// 						<span>
// 						      <Button
// 							    onClick={() => onDismiss(item.objectID)}
// 							    >
// 							    Dismiss
// 							  </Button>
// 						    </span>
// 			      </div>
// 		  )}
// 	    </div>
// 	);
//     }
// }

const largeColumn = {
    width: '40%',
}

const midColumn = {
    width: '30%',
}

const smallColumn = {
    width: '10%',
}

const Table = ({list, pattern, onDismiss}) =>
      <div className="table">
      {
	  list.filter(isSearched(pattern)).map(
	      item =>
		  <div key={item.objectID} className="table-row">
		  <span style={largeColumn}>
		  <a href={item.url}>{item.title}</a>
		  </span>
		  <span style={midColumn}>
		  {item.author}
	      </span>
		  <span style={smallColumn}>
		  {item.num_comments}
	      </span>
		  <span style={smallColumn}>
		  {item.points}
	      </span>
		  <span>
		  <Button
	      onClick={() => onDismiss(item.objectID)}
	      className="button-inline"
		  >
		  Dismiss
	      </Button>
		  </span>
		  </div>
	  )}
</div>


export default App;
