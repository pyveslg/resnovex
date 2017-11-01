import React from 'react'
import ReactDOM from 'react-dom'
import MfeCard from './MfeCard'
import MfeShow from './MfeShow'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mfes: [],
      selectedMfe: {
        "id":1,
        "color":"#f9dc24",
        "intro":"C'est un plaisir de vous rencontrer !",
        "learn":"présenter quelqu'un"
      }
    };
  }

  componentDidMount() {
    const url = "/api/mves/";
    fetch(url)
      .then(response => response.json())
      .then( (data) => {
        this.setState({
          mfes: data
        });
      })
  }

  selectMfe = (mfe) => {
    this.setState({
      selectedMfe: mfe
    })
  }

  render () {
    return (
      <div className="mfe-app">
        <div className="mves-main">
          <div className="search"></div>
          <div className="mves-cards">
            {this.state.mfes.map((mfe) => {
              return <MfeCard
                key={mfe.id}
                mfe={mfe}
                selectMfe={this.selectMfe} />
            })}
          </div>
        </div>
        <div className="mves-show">
          <MfeShow mfe={this.state.selectedMfe} />
        </div>
      </div>
    );
  }
}

export default App;
