import React from 'react';
import ReactDOM from 'react-dom';

class MfeCard extends React.Component {


  render() {
    const style = {
      backgroundColor: this.props.data.color
    };

    const intro = this.props.data.intro;


    return (
      <div className="mfe-card">
        <div className="mfe-card-upp" style={style}>
          <div className="mfe-card-upp-picture"></div>
          <div className="mfe-card-upp-intro">{intro}</div>
        </div>
        <div className="mfe-card-sub">
          <div className="mfe-card-sub-learn"></div>
          <div className="mfe-card-sub-tag"></div>
        </div>
      </div>
    );
  }
}

export default MfeCard;

