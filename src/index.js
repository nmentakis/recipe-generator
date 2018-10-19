import React from 'React';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

    render()  {
      return (
      <div>
        <h1>I am an App!</h1>
      </div>
    );
    }
};
export default App;
ReactDOM.render(<App />, document.getElementById('app'));
