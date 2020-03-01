import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
  
export default class App extends Component{

  state = {
    persons: [
      {name: 'dilip'},
      {name: 'kumar'}
    ]
  }

  clickPrintName = (e) => {
    //<h3 style={{textAlign: 'right'}}> By:  {this.state.persons[0].name} {this.state.persons[1].name}</h3>
    ReactDOM.render(<h3 style={{textAlign: 'right'}}> By:  {this.state.persons[0].name} {this.state.persons[1].name}</h3>,document.getElementById('by'))
    console.log('hit');
  }


  render() {
    return(
      <div className='App'>
        <h1> Starting to the end with {this.props.name} </h1>
        <h2>
          {this.props.children}
        </h2>
          <button onClick={this.clickPrintName}> Click here to know the author </button>
          <div id="by"></div>
      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//         <h1>Starting to the end</h1>
//     </div>
//   );
// }

// export default App;
