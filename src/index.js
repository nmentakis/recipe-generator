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
        imgUrl: 'http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg',
        sourceUrl: 'http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html'
      }]
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.that = this
  }
  componentDidMount() {
    axios.get('/api/recipes')
     .then(response => {
      this.that.setState({recipes: response.data})
    })
  }

  handleSearch(value) {
    axios.post('api/search', {
      value
    })
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
      <button class="randomizer" onClick={() => (this.that.random())}>RANDOMIZE</button>
      <Search onSearch={this.handleSearch}/>
      <ul id='parent'>
      {
        this.state.recipes.map((recipe,index) => (
          <Recipe key={index} srcUrl={recipe.sourceUrl} imgUrl={recipe.imgUrl} title={recipe.title}/>
        ))
      }
      </ul>
    </div>
    );
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById('app'));
