import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const secondTier = getReducedColor(initialColor)
    this.state = {
      color: initialColor,
      childColor: secondTier,
      grandchildColor: getReducedColor(secondTier)
    }
  }

  handleClick = () => {
    let randomColor = getRandomColor()
    let secondColor = getReducedColor(randomColor)
    this.setState({
      color: randomColor,
      childColor: secondColor,
      grandchildColor: getReducedColor(secondColor)
    })
  }

  handleChildClick = (e) => {
    e.stopPropagation()
    let color = getRandomColor()
    this.setState({
      childColor: color,
      grandchildColor: getReducedColor(color)
    })
  }

  handleGrandchildClick = (e) => {
    e.stopPropagation()
    this.setState({
      grandchildColor: getRandomColor()
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick} childColor={this.state.grandchildColor}/>
        <Tier2 color={this.state.childColor} handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick} childColor={this.state.grandchildColor}/>
      </div>
    )
  }
}
