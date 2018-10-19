import React from 'React';
import ReactDOM from 'react-dom';
import Recipe from './Components/Recipe.js'
import axios from 'axios'

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
  }
  componentDidMount() {
    axios.get('/api/recipes')
     .catch((error) => {
       console.log(error);
    }).then(response => this.setState(state =>
      {this.state.recipes = response}
      ))
  }

  render()  {
    return (
    <div>
      <h1>I am an App!</h1>
      <div>
      <Recipe srcUrl={this.state.recipes[0].sourceUrl} imgUrl={this.state.recipes[0].imgUrl} title={this.state.recipes[0].title}/>
      </div>
    </div>
    );
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById('app'));
