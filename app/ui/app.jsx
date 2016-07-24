require("./app.css");
var React = require('react');
var ReactDOM = require('react-dom');
import config from "../../config.es6";
import Sidebar from "./sidebar/main.jsx";
import StatusBar from "./StatusBar/main.jsx";
let App = React.createClass({
    getInitialState: function () {
        return Object.assign({}, {
            info:"",
            mainContent: this.props.defaultContent
        });
    },
    handleMouseOverInfo:function(menu){
        this.setState({
            info:menu.description
        });
    },
    handleMouseOutInfo:function(){
        this.setState({
            info:""
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
                    <div className="l_main" ref="main"></div>
                    <div className="l_side">
                        <Sidebar items={config.taskList} clickHandler={this.taskItemClick} handleMouseOverInfo={this.handleMouseOverInfo} handleMouseOutInfo={this.handleMouseOutInfo}/>
                    </div>
                </div>
                <div className="l_btm">
                    <StatusBar info={this.state.info}/>
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