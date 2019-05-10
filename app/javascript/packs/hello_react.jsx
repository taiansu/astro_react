// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
function clicked() {
  console.log('clickeddddd!!!')
}
function Lucky(props) {
  return (
    <h1 className="lalala">{props.name}</h1>
  )
}

const Hello = props => (
  <div onClick={clicked}>
    Hello {props.name}!
    <Lucky name={props.name + "'s child"} />
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Oh ya Elixir" />,
    document.body.appendChild(document.createElement('div')),
  )
})
