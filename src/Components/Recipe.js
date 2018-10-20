import React from 'react';
class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.that = this;
    this.onBadClick = this.onBadClick.bind(this)
    this.onGoodClick = this.onGoodClick.bind(this)
  }

  onBadClick(e) {
    e.preventDefault();
    this.props.handleDelete(this.props.title);
  }

  onGoodClick(e) {
    e.preventDefault();
    this.props.handleLove(this.props.title, this.props.imgUrl, this.props.srcUrl)
  }

  render() {
    return (
      <li class='container'>
        <button class='item-d' type="submit" onClick={this.onGoodClick}>I LOVE IT</button>
        <button class='item-c' type="submit" onClick={this.onBadClick}>I HATE IT</button>
        <h2 class='item-a'>{this.props.title}</h2>
        <a href={this.props.srcUrl} target="_blank"><img class='item-b'src={this.props.imgUrl}></img></a>
      </li>
    );
  }
}
export default Recipe;