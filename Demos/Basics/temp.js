import { TimerDisplay } from './Timer.js'

class SecondCounter extends React.Component {
    render() {

        // `this` doesn't exist in function components. I guess you'll need to turn
        // this into a class component!
        const count = this ? this.count : -1
        return React.createElement(TimerDisplay, { time: count, title: 'ACTUAL' })
    }
}

function renderApp(count) {
    ReactDOM.render(
        React.createElement('div', {},
            React.createElement(SecondCounter),
            React.createElement(TimerDisplay, { time: count, title: 'EXPECTED' })
        ),
        document.getElementById('app')
    )
    setTimeout(() => renderApp(count + 1), 1000)
}
renderApp(1)

