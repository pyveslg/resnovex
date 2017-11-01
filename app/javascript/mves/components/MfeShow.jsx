import React from 'react'
import ReactDOM from 'react-dom'

class MfeShow extends React.Component {

  render () {
    const style = {
      backgroundColor: this.props.mfe.color
    };

    const learn = this.props.mfe.learn;
    const expfr1 = this.props.mfe.expfr1;

    return(
      <div className="container-fluid">
        <div id="mfe-container" style={style}>
          <div className="mfe-upper-bar">
            <div className="row">
              <div className="col-xs-12">
                <div className="mfe-upper-bar-content"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="mfe-example-1 text-center">
              {/* TODAY LEARNING */}
                <div id="mfe-learn">
                  <div className="row">
                    <div className="col-xs-12">
                      <h4>#{`AUJOURD'HUI VOUS APPRENDREZ À`}</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12">
                      <h3><span className="mfe-data-under-highlights">{learn}</span></h3>
                      <p>{expfr1}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MfeShow;
