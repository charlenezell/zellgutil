/// <reference path="../../../typings/globals/react/index.d.ts" />
require("./main.css");
var React = require('react');
var ReactDOM = require('react-dom');
var classNames=require("classnames");

let Statusbar=React.createClass({
    componentDidMount:function(){
        setInterval(()=>{
            this.setState({
            time:new Date()
            })
        },1000)
    },
    getInitialState:function(){
        return Object.assign({},{
            time:new Date()
        });
    },
    render:function(){
        var g=this.props.items;
        return (
            <div className="statusbar">
                <div className="statusbar__info">{this.props.info||"欢迎使用zellgutil"}</div>
                <div className="statusbar__info2">{this.state.time.toString()}</div>
            </div>
        )
    }
})

export default Statusbar;