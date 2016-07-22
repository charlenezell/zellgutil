require("./app.css");
var React = require('react');
var ReactDOM = require('react-dom');
import config from "../../config.es6";
import Sidebar from "./sidebar/main.jsx";
import StatusBar from "./StatusBar/main.jsx";
let App = React.createClass({
    getInitialState: function () {
        return Object.assign({}, {
            mainContent: this.props.defaultContent
        });
    },
    taskItemClick: function (item, index) {
        var _new = Object.assign({}, this.state, {
            mainContent: item.description
        })
        this.setState(_new);
    },//{this.state.mainContent}
    render: function () {
        return (
            <div className="l_w00">
                <div className="l_top">
                    <div className="l_w01">
                        <div className="l_main" ref="main"></div>
                        <div className="l_side">
                            <Sidebar items={config.taskList} clickHandler={this.taskItemClick} />
                        </div>
                    </div>
                </div>
                <div className="l_btm">
                    <StatusBar />
                </div>
            </div>
        )
    }
});
function init() {
    ReactDOM.render(
        <App defaultContent="请选择左侧任务" />,
        document.getElementById("main")
    )
}
export {init};