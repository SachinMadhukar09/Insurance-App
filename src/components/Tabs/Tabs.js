import React, { Component } from "react"
import ReactDOM from "react-dom"
// import Velocity from  'velocity-animate'
import { CSSTransition } from "react-transition-group"
import Carinsurance from "../PolicySections/Carinsurance"
// import TermLife from "../components/PolicySections/TermLife"
import TermLife from "../PolicySections/TermLife"
var demoMode = true

var tabs = [
  {
    title: "Term Life",
    text: <TermLife />,
  },
  {
    title: "Health",
    text: <TermLife />,
  },
  {
    title: "Investment",
    text: <TermLife />,
  },
  {
    title: "Car",
    text: <Carinsurance />,
  },
  {
    title: "Two Wheeler",
    text: <TermLife />,
  },
  {
    title: "Travel",
    text: <TermLife />,
  },
]

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 3,
    }
    this.changeTab = this.changeTab.bind(this)
    this.moveTracker = this.moveTracker.bind(this)
  }

  componentDidMount() {
    this.moveTracker()
  }

  moveTracker() {
    var title = ReactDOM.findDOMNode(this).querySelector(
      '.tabs__titles__title[data-active="true"]'
    )
    var tracker = ReactDOM.findDOMNode(this).querySelector(".tabs__tracker")
    // Velocity(
    //   tracker,
    //   { width: title.clientWidth, left: title.offsetLeft },
    //   { duration: 1000, easing: [250, 15] }
    // )
  }

  changeTab(e) {
    e.stopPropagation()
    this.setState(
      { current: e.target.getAttribute("data-index") },
      function () {
        this.moveTracker()
      }
    )
  }

  render() {
    return (
      <div className="tabs">
        <div className="tabs__tracker" />
        <div style={{ display: "flex" }} className="tabs__titles">
          {tabs.map((tab, index, array) => (
            <h2
              className="tabs__titles__title"
              data-active={this.state.current == index}
              data-index={index}
              key={"tab-title-" + index}
              onClick={this.changeTab}
            >
              {tab.title}
            </h2>
          ))}
        </div>
        <div className="tabs__contents">
          <CSSTransition classNames="scale" timeout={{ enter: 300, exit: 300 }}>
            <div
              className="tabs__contents__content"
              key={"tab-text-" + this.state.current}
            >
              {tabs[this.state.current].text}
            </div>
          </CSSTransition>
        </div>
      </div>
    )
  }
}
// if (demoMode) {
//   var titles = document.querySelectorAll(".tabs__titles__title")
//   setTimeout(function () {
//     titles[1].click()
//   }, 1500)
//   setTimeout(function () {
//     titles[2].click()
//   }, 3000)
//   setTimeout(function () {
//     titles[0].click()
//   }, 4500)
// }

// export default Tabs
