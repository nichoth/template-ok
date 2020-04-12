var { h } = require('preact')
var EVENTS = require('../EVENTS')
var Router = require('../routes')

var router = Router()

function View (props) {
    var { emit } = props
    if (props.route.pathname) var m = router.match(props.route.pathname)
    if (m) var RouteView = m.action(m)
    else return <div>path not found</div>

    return <div>
        <RouteView {...props} />
        <hr />
        hello {props.foo + ' '}
        <button onClick={emit(EVENTS.hello.world)}>emit event</button>
    </div>
}

module.exports = View

