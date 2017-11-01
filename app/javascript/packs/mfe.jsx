// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

class Mfe extends React.Component {


  render() {
    const mfeDivStyle = {
      backgroundColor: this.props.mfe.color
    }

    return (

      <div className="container">
        <div id="mfe-container" style={mfeDivStyle}>
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
                <div id="mfe-logo" className="row">
                  <div className="col-xs-12">
                    {/* image */}
                  </div>
                </div>
                <div id="mfe-intro" className="row">
                  <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                    <p>
                      <b>Bonjour !</b><br/><br/>
                      From Monday to Friday, Novexpat helps you discover, learn or fine-tune a tricky grammatical rule, some handy vocabulary and common French idioms that will make you feel like a Parisian...<br/><br/>
                      <em>en 45 secondes chrono</em> !<br/><br/>
                      <b>Prêt ?</b><br/><br/>
                    </p>
                  </div>
                </div>
              {/* TODAY LEARNING */}
                <div id="mfe-learn">
                  <div className="row">
                    <div className="col-xs-12">
                      <h4>#{`AUJOURD'HUI VOUS APPRENDREZ À`}</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12">
                      <h3><span className="mfe-data-under-highlights">{this.props.mfe.learn}</span></h3>
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

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('mfe_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Mfe mfe={data} />,
    document.getElementById('mfe_data'),
  )
})
