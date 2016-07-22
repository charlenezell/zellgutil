require("./main.css");
var React = require('react');
var ReactDOM = require('react-dom');
var classNames=require("classnames");

let Statusbar=React.createClass({
    getInitialState:function(){
        return Object.assign({},{

        });
    },

    render:function(){
        var g=this.props.items;
        return (
            <div>statusBar</div>
        )
    }
})

export default Statusbar;