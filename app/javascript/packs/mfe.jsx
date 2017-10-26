// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

class Mfe extends React.Component {


  render() {

    return (

      <div style={{backgroundColor: this.props.mfe.question1}}>Hello</div>
      // <div style="position: relative">
      //   <div class="row">
      //     <div class="col-xs-12 col-sm-8 col-sm-offset-2">
      //       <div style="background: linear-gradient(-225deg, rgba(0,150,179,0.6) 0%, rgba(80,207,140,0.6) 80%); height: 5vh;"></div>
      //     </div>
      //   </div>

      //   <div class="row">
      //     <div class="col-xs-12 col-sm-8 col-sm-offset-2">
      //       <div class="mfe-example-1 text-center" style={{backgroundColor: this.props.mfe.color}}>
      //         <div class="row">
      //           <div class="col-xs-12 col-sm-10 col-sm-offset-1">
      //             // image
      //           </div>
      //         </div>

      //         <div class="row">
      //           <div class="col-xs-12 col-sm-10 col-sm-offset-1">
      //             <p>
      //               <b>Bonjour !</b>
      //               From Monday to Friday, Novexpat helps you discover, learn or fine-tune a tricky grammatical rule, some handy vocabulary and common French idioms that will make you feel like a Parisian...<br/><br/>
      //               <em>en 45 secondes chrono</em> !<br/><br/>
      //               <b>Prêt ?</b><br/><br/>
      //             </p>
      //           </div>
      //         </div>

      //         <div id="mfe-learn">
      //           <div class="row">
      //             <div class="col-xs-12 col-sm-10 col-sm-offset-1">
      //               <h4>AUJOURDHUI VOUS APPRENDREZ À</h4>
      //             </div>
      //           </div>

      //           <div class="row">
      //             <div class="col-xs-12 col-sm-10 col-sm-offset-1">
      //               <h3><span style="border-bottom: 10px solid #FCFFFA;" dangerouslySetInnerHTML={{__html: this.props.mfe.learn}}></span></h3>
      //             </div>
      //           </div>
      //         </div>

      //         <div id="mfe-question">
      //           <div class="row">
      //             <div class="col-xs-12 col-sm-10 col-sm-offset-1">
      //               <h4>LA QUESTION DU JOUR</h4>
      //             </div>
      //           </div>
      //           <div class="row">
      //             <div class="col-xs-12 col-sm-10 col-sm-offset-1">
      //               <p style="margin-top: 3vh;" dangerouslySetInnerHTML={{__html: this.props.mfe.question1}}><b> :</b></p>
      //             </div>
      //           </div>
      //           <div class="row">
      //             <div class="col-xs-10 col-xs-offset-2 col-md-6 col-md-offset-4">
      //               <ul>
      //                 <li><b>a)</b> <span dangerouslySetInnerHTML={{__html: this.props.mfe.option1}}></span></li>
      //                 <li><b>b)</b> <span dangerouslySetInnerHTML={{__html: this.props.mfe.option2}}></span></li>
      //               </ul>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('mfe_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Mfe mfe={data} style={{backgroundColor: white}}/>,
    document.getElementById('mfe_data'),
  )
})
