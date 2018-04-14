const React = require('react')

class Konami extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false,
      input: [],
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp)
    this._timer = new this.Timer(() => this.resetInput(), this.state.delay)
  }

  onKeyUp = e => {
    const { done, input } = this.state
    const { action, code, delay, disabled, onEnd, timeout } = this.props

    if (disabled) {
      return
    }

    this._timer.reset(delay)

    input.push(e.keyCode)
    input.splice(-code.length - 1, input.length - code.length)

    this.setState({ input }, () => {
      if (this.state.input.join('').includes(code.join('')) && !done) {
        this._timer.stop()
        this.setState({ done: true }, () => { 
          action && action()
        })

        if (timeout) {
          setTimeout(() => {
            this.setState({ done: false })
            onEnd && onEnd()
          }, timeout)
        }
      }
    })
  }

  resetInput = () => this.setState({ input: [] })

  Timer(fn, t) {
    var timerObj = setInterval(fn, t)

    this.stop = function() {
      if (timerObj) {
          clearInterval(timerObj)
          timerObj = null
      }
      return this
    }

    this.start = function() {
      if (!timerObj) {
          this.stop()
          timerObj = setInterval(fn, t)
      }
      return this
    }

    this.reset = function(newT) {
      t = newT
      return this.stop().start()
    }
  }

  render = () => {
    const { className, disabled } = this.props
    const { done } = this.state

    return (
      <div 
        className={className}
        style={{ display: (!done || disabled) ? 'none' : 'block' }}
      >
        {this.props.children}
      </div>
    )
  }
}

Konami.defaultProps = {
  action: () => { alert('KONAMI CODE') },
  className: "",
  code: [38,38,40,40,37,39,37,39,66,65],
  delay: 1000,
  disabled: false,
  timeout: null,
}

module.exports = Konami