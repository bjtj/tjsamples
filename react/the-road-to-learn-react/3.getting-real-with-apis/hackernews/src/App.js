import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
// const PATH_BASE = 'https://hn.domain.com/api/v1'; // <-- force an error
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = "page=";
const PARAM_HPP = 'hitsPerPage=';

const isSearched = searchTerm => item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

    constructor(props) {
	super(props);

	this.state = {
	    results: null,
	    searchKey: '',
	    searchTerm: DEFAULT_QUERY,
	    error: null,
	};

	this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
	this.setSearchTopStories = this.setSearchTopStories.bind(this);
	this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
	this.onSearchChange = this.onSearchChange.bind(this);
	this.onSearchSubmit = this.onSearchSubmit.bind(this);
	this.onDismiss = this.onDismiss.bind(this);
    }

    needsToSearchTopStories(searchTerm) {
	return !this.state.results[searchTerm];
    }

    setSearchTopStories(result) {
	// this.setState({ result });
	const { hits, page } = result;
	const { searchKey, results } = this.state;
	
	// const oldHits = page !== 0 ?
	//       this.state.result.hits
	//       : [];

	const oldHits = results && results[searchKey]
	      ? results[searchKey].hits
	      : [];

	const updatedHits = [
	    ...oldHits,
	    ...hits
	];

	this.setState({
	    // result: { hits: updatedHits, page }
	    results: {
		...results,
		[searchKey] : { hits: updatedHits, page }
	    }
	});
    }


    // -- BASIC --

    // fetchSearchTopStories(searchTerm) {
    // 	fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
    // 	    .then(response => response.json())
    // 	    .then(result => this.setSearchTopStories(result))
    // 	    .catch(error => error);
    // }
    

    // -- HITS PER PAGE --

    // fetchSearchTopStories(searchTerm, page=0) {
    // 	fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    // 	    .then(response => response.json())
    // 	    .then(result => this.setSearchTopStories(result))
    // 	    .catch(error => error);
    // }


    // -- ERROR HANDLING --
    
    // fetchSearchTopStories(searchTerm, page=0) {
    // 	fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    // 	    .then(response => response.json())
    // 	    .then(result => this.setSearchTopStories(result))
    // 	    .catch(error => this.setState({ error }));
    // }


    // -- axios --

    fetchSearchTopStories(searchTerm, page=0) {
	axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
	    .then(result => this.setSearchTopStories(result.data))
	    .catch(error => this.setState({ error }));
    }

    componentDidMount() {
	const { searchTerm } = this.state;

	this.setState({ searchKey: searchTerm });

	// fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
	//     .then(response => response.json())
	//     .then(result => this.setSearchTopStories(result))
	//     .catch(error => error);

	this.fetchSearchTopStories(searchTerm);
    }


    // -- BASIC --

    // onSearchSubmit(event) {
    // 	const { searchTerm } = this.state;
    // 	this.setState({ searchKey: searchTerm });	
    // 	this.fetchSearchTopStories(searchTerm);
    // 	event.preventDefault();
    // }

    onSearchSubmit(event) {
	const { searchTerm } = this.state;
	this.setState({ searchKey: searchTerm });	
	if (this.needsToSearchTopStories(searchTerm)) {
	    this.fetchSearchTopStories(searchTerm);
	}
	event.preventDefault();
    }	

    onSearchChange(event) {
	this.setState({ searchTerm: event.target.value });
    }

    onDismiss(id) {
	const {searchKey, results} = this.state;
	const {hits, page} = results[searchKey];
	const isNotId = item => item.objectID !== id;
	// const updatedHits = this.state.result.hits.filter(isNotId);
	const updatedHits = hits.filter(isNotId);
	this.setState({
	    // result: Object.assign({}, this.state.result, { hits: updatedHits })
	    results: {
		...results,
		[searchKey]: { hits: updatedHits, page }
	    }
	});
    }

    render() {
	const {
	    searchTerm,
	    results,
	    searchKey,
	    error
	} = this.state;
	
	// const page = (result && result.page) || 0;
	const page = (
	    results &&
		results[searchKey] &&
		results[searchKey].page
	) || 0;

	const list = (
	    results &&
		results[searchKey] &&
		results[searchKey].hits
	) || [];

	// if (error) {
	//     return <p>Something went wrong.</p>;
	// }

	return (
	    <div className="page">
	      <div className="interactions">
		<Search
		  value={searchTerm}
		  onChange={this.onSearchChange}
		  onSubmit={this.onSearchSubmit}
		  >
		  Search
		</Search>
	      </div>
	      {
		  /*
		    result
		    ? <Table
			    list={result.hits}
			    pattern={searchTerm}
			    onDismiss={this.onDismiss}
			    />
			    : null
		  */
		  
		  /*
		    result && <Table
				    list={result.hits}
				    onDismiss={this.onDismiss}
				    />
		  */
	      }
	      {
		  /*
		    <Table
			  list={list}
			  onDismiss={this.onDismiss}
			  />
			*/
	      }
	      {
			error
			? <div className="interactions">
			  <p>Something went wrong.</p>
			</div>
			: <Table
				list={list}
				onDismiss={this.onDismiss}
				/>
	      }
	      <div className="interactions">
		<Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
		  More
		</Button>
	      </div>
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


const Search = ({ value, onChange, onSubmit, children }) => {
    // do something
    return (
	<form onSubmit={onSubmit}>
	  <input
	    type="text"
	    value={value}
	    onChange={onChange}
	    />
	  <button type="submit">
	    {children}
	  </button>
	</form>
    )
}


const largeColumn = {
    width: '40%',
}

const midColumn = {
    width: '30%',
}

const smallColumn = {
    width: '10%',
}

const Table = ({list, onDismiss}) =>
      <div className="table">
      {
	  list.map(
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
