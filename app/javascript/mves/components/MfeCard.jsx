import React from 'react'
import ReactDOM from 'react-dom'

class MfeCard extends React.Component {
  handleClick = () => {
    this.props.selectMfe(this.props.mfe);
  }

  render () {
    const style = {
      backgroundColor: this.props.mfe.color
    };
    const intro = this.props.mfe.intro;
    const learn = this.props.mfe.learn;
    return (
      <div className="mfe-card" onClick={this.handleClick}>
        <div className="mfe-card-upp" style={style}>
          <div className="mfe-card-upp-picture">
            <img src="https://res.cloudinary.com/pywagon/image/upload/v1507115310/French_expresso_600x300_fghkpk.png"/>
          </div>
          <div className="mfe-card-upp-intro">{intro}</div>
        </div>
        <div className="mfe-card-sub">
          <div className="mfe-card-sub-learn">Apprendre à {learn}</div>
          <div className="mfe-card-sub-tag"></div>
        </div>
      </div>
    );
  }
}

export default MfeCard;
