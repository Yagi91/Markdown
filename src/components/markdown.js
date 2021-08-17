import React from "react";
import { connect } from "react-redux";
import MsgCreator from "../actions/msgAction";
import "../styles/markdown.css";

// let markdown = require("markdown").markdown;
let marked = require("marked");
// console.log("this is the markdown : ", markdown.toHTML("Hello *World*!"));

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.input(event.target.value);
  }
  render() {
    return (
      <div className="markdown">
        <header></header>
        <form className="form sub">
          <label for="editor" className="head">
            Enter your text here:
          </label>
          <textarea
            wrap="on"
            // cols="80"
            rows="40"
            value={this.props.messages}
            id="editor"
            name="editor"
            onChange={this.handleChange}
          ></textarea>
          <p>
            <em>--bryan(Yagi91_coder)</em>
          </p>
        </form>
        <div className="sub">
          <div className="head">Previewer</div>
          <div>
            <div
              className="container"
              id="preview"
              dangerouslySetInnerHTML={{
                __html: marked(this.props.messages),
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.preview,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    input: (input) => {
      dispatch(MsgCreator(input));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);
