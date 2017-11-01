import React from 'react'
import ReactDOM from 'react-dom'
import MfeCard from './mfe_card';


class MfeCards extends React.Component {

  render() {
    const node = document.getElementById('mfe_card')
    const data = node.getAttribute('data')
    return data
  }
}

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <MfeCards/>,
    document.getElementById('mfe-cards'),
  )
})
