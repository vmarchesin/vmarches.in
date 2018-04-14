import React from 'react'

class Konami extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false,
      input: [],
    }

    this._code = props.code 
  }

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp)
  }

  onKeyUp = e => {
    const { done, input } = this.state
    input.push(e.keyCode)
    input.splice(-this._code.length - 1, input.length - this._code.length)
    this.setState({ input })

    if (this.state.input.join("").includes(this._code.join("")) && !done) {
      this.setState({ done: true }, () => { 
        this.props.action && this.props.action()
      })
    }
  }

  render = () => (
    <div style={{ display: !this.state.done ? "none" : "block" }}>
      {this.props.children}
    </div>
  )
}

Konami.defaultProps = {
  code: [38,38,40,40,37,39,37,39,66,65],
}

export default Konami