import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Components/Recipe.js'
import axios from 'axios'
import Search from './Components/Search.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [{
        id: 14,
        title: 'Bacon Wrapped Jalapeno Popper Stuffed Chicken',
        image_url: 'http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg',
        source_url: 'http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html'
      }]
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.that = this;
  }
  componentDidMount() {
    axios.get('/api/recipes')
     .then(response => {
      this.that.setState({recipes: response.data})
    })
  }
  handleDelete(title) {
    axios.post('/api/delete', {title})
    .then(this.that.setState({recipes: this.state.recipes.filter(recipe => recipe.title !== title)}))
  }
  removeTodo(name){
    this.setState({
        todo: this.state.todo.filter(el => el !== name)
    })
}
  handleSearch(value) {
    axios.post('api/search', {
      value
    }).then(response => {
      this.that.setState({recipes: response.data.recipes})
    }
    )
  }

  random() {
    axios.get('/api/recipes')
     .then(response => {
      this.setState({recipes: response.data})
    })
  }
  render()  {
    return (
    <div>
      <h1 class='header'>Recipe Generator</h1>
      <button class="randomizer" onClick={() => (this.that.random())}>RANDOMIZE</button>
      <Search onSearch={this.handleSearch}/>
      <ul id='parent'>
      {
        this.state.recipes.map((recipe,index) => (
          <Recipe key={index} srcUrl={recipe.source_url} imgUrl={recipe.image_url} title={recipe.title} handleDelete={this.handleDelete}/>
        ))
      }
      </ul>
    </div>
    );
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById('app'));
