import React from 'react';
class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.that = this;
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault();
    this.props.handleDelete(this.props.title);
  }
  render() {
    return (
      <li class='container'>
        <button class='item-c' type="submit" onClick={this.onClick}>I HATE IT</button>
        <h2 class='item-a'>{this.props.title}</h2>
        <a href={this.props.srcUrl} target="_blank"><img class='item-b'src={this.props.imgUrl}></img></a>
      </li>
    );
  }
}
export default Recipe;