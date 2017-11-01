import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

class MfeShow extends React.Component {

  render () {
    const style = {
      backgroundColor: this.props.mfe.color
    };

    const learn = this.props.mfe.learn;
    const question1 = this.props.mfe.question1;
    const option1 = this.props.mfe.option1;
    const option2 = this.props.mfe.option2;
    const answer = this.props.mfe.answer;
    const rulefr = this.props.mfe.rulefr;
    const ruleen = this.props.mfe.ruleen;
    const expfr1 = this.props.mfe.expfr1;
    const expfr2 = this.props.mfe.expfr2;
    const expfr3 = this.props.mfe.expfr3;
    const expfr4 = this.props.mfe.expfr4;
    const expfr5 = this.props.mfe.expfr5;
    const expen1 = this.props.mfe.expen1;
    const expen2 = this.props.mfe.expen2;
    const expen3 = this.props.mfe.expen3;
    const expen4 = this.props.mfe.expen4;
    const expen5 = this.props.mfe.expen5;
    const question2 = this.props.mfe.question2;


    const condition_answer = (e) => {
      if (e === 0) {
        return `a) et b) sont possibles ;-)`
      }
      else if (e % 2 === 0) {
        return `b) ${option2}`
      }
      else {
        return `a) ${option1}`
      }
    }

    const condition_exp5 = (e) => {
      if (e !== null) {
      return <li><em><ReactMarkdown inlineHtml={true} source={e} /></em></li>
      }
    }

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
                    </div>
                  </div>
                </div>
              {/* QUESTION */}
              <div id="mfe-question">
                <div class="row">
                  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                    <h4>#LA QUESTION DU JOUR</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                    <p><strong>{question1}</strong></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-10 col-xs-offset-2 col-md-6 col-md-offset-4">
                    <ul>
                      <li><b>a) </b>{option1}</li>
                      <li><b>b) </b>{option2}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ANSWER */}
              <div id="mfe-answer">
                <div class="row">
                  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                    <p><b>Réponse:</b><br/>
                      {condition_answer(answer)}
                    </p>
                  </div>
                </div>
              </div>
              {/* RULE */}
              <div id="mfe-rule">
                <div class="row">
                  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                    <h4>#AH BON ?</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                    <p>
                      <span class="mfe-highlights">
                        <ReactMarkdown
                        inlineHtml={true}
                        source={rulefr} />
                      </span>
                    </p>
                    <p id="mfe-english">
                      <span class="mfe-highlights">
                      * <ReactMarkdown
                      inlineHtml={true}
                      source={ruleen} />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* GOING FURTHER */}
              <div id="mfe-going-further">
                <div class="row">
                  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                    <h4>#ON VA PLUS LOIN !</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                    <p><b>Quelques expressions à apprendre par coeur :</b></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-11 col-sm-5 col-sm-offset-1">
                    <ul>
                      <li><ReactMarkdown inlineHtml={true} source={expfr1} /></li>
                      <li><ReactMarkdown inlineHtml={true} source={expfr2} /></li>
                      <li><ReactMarkdown inlineHtml={true} source={expfr3} /></li>
                      <li><ReactMarkdown inlineHtml={true} source={expfr4} /></li>
                      {condition_exp5(expfr5)}

                    </ul>
                  </div>
                  <div class="col-xs-11 col-sm-5">
                    <ul>
                      <li><em><ReactMarkdown inlineHtml={true} source={expen1} /></em></li>
                      <li><em><ReactMarkdown inlineHtml={true} source={expen2} /></em></li>
                      <li><em><ReactMarkdown inlineHtml={true} source={expen3} /></em></li>
                      <li><em><ReactMarkdown inlineHtml={true} source={expen4} /></em></li>
                      {condition_exp5(expen5)}

                    </ul>
                  </div>
                </div>
              </div>
              {/* FINAL QUESTION */}
              <div id="final-question">
                <div class="row">
                  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                    <h3><span class="mfe-subtitle">{question2}</span></h3>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="mfe-upper-bar">
            <div className="row">
              <div className="col-xs-12">
                <div className="mfe-upper-bar-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MfeShow;
