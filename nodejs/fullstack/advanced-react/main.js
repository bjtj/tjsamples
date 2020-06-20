function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function start() {
  class Bookmark extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "title", this.props.title);

      _defineProperty(this, "titleStyle", {
        color: "red"
      });

      console.log("Bookmark component created");
    } // https://reactjs.org/docs/typechecking-with-proptypes.html
    // static propTypes = { description: PropTypes.number };
    // static propTypes = { description: descriptionValidator };


    render() {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", {
        style: this.titleStyle
      }, this.title), /*#__PURE__*/React.createElement("a", {
        href: this.props.href
      }, this.props.description || "Unknown"), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          this.title = this.title + "-CHANGED";
          this.setState({});
        }
      }, "Click Me"));
    }

  }

  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Bookmarks"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Bookmark, {
    title: "Etherient",
    href: "https://www.etherient.com",
    description: "The home page of Etherient"
  }), /*#__PURE__*/React.createElement(Bookmark, {
    title: "Frank's Site",
    href: "https://www.zammetti.com",
    description: "The web home of Frank W. Zammetti"
  }))), document.getElementById("mainContainer"));
}
