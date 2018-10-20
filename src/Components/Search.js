import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this);
  }

  handleChange() {
    this.setState({
      query: this.search.value
    })
  }

  onClick(e) {
    e.preventDefault();
    this.props.onSearch(this.state.query);
    this.setState({
      query: ''
    })
  }

  render () {
    return (
      <form>
        <input class="searchbar" placeholder="Choose your Ingredient..." ref={input => this.search = input} onChange={this.handleChange} value={this.state.query}/>
        <button class="searchbutton" type="submit" onClick={this.onClick}>Submit</button>
      </form>
    )
  }
}

export default Search;