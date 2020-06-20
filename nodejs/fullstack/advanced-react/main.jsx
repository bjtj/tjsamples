function start() {
    class Bookmark extends React.Component {
	constructor(props) {
	    super(props);
	    console.log("Bookmark component created");
	}
	// https://reactjs.org/docs/typechecking-with-proptypes.html
	// static propTypes = { description: PropTypes.number };
	// static propTypes = { description: descriptionValidator };
	title = this.props.title;
	titleStyle = { color: "red" }
	render() {
	    return (
		<li>
		  <h2 style={this.titleStyle}>{this.title}</h2>
		  <a href={this.props.href}>
		    { this.props.description || "Unknown" }
		  </a>
		  <button onClick={() => {
			this.title = this.title + "-CHANGED";
			this.setState({});
		    }}>
		    Click Me
		  </button>
		</li>
	    );
	}
    }

    ReactDOM.render(
	<div>
	  <h1>Bookmarks</h1>
	  <ul>
	    <Bookmark title={"Etherient"}
		      href={"https://www.etherient.com"}
		      description={"The home page of Etherient"}
		      />
	    <Bookmark title={"Frank's Site"}
		      href={"https://www.zammetti.com"}
		      description={"The web home of Frank W. Zammetti"}
		      />
	  </ul>
	</div>,
	document.getElementById("mainContainer")
    );
}
