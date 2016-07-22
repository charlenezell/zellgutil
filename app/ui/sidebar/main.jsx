require("./main.css");
var React = require('react');
var ReactDOM = require('react-dom');
var classNames=require("classnames");

let Sidebar=React.createClass({
    getInitialState:function(){
        return Object.assign({},{
            activeItemIndex:null,
            hoverItemIndex:null
        });
    },
    clickHandler:function(item,index){
        this.props.clickHandler(item,index);
        var _new=Object.assign({},{
            activeItemIndex:index
        });
        this.setState(_new);
    },
    mouseOverHandler:function(item,index){
        var _new=Object.assign({},{
            hoverItemIndex:index
        });
        this.setState(_new);
    },
    mouseOutHandler:function(){
        var _new=Object.assign({},{
            hoverItemIndex:null
        });
        this.setState(_new);
    },
    render:function(){
        var g=this.props.items;
        return (
            <ol className="sidebar">
                {g.map((v,k)=>{
                    return (
                        <li key={k} className={classNames({
                            "sidebar__item":true,
                            'sidebar__item--on':this.state.activeItemIndex==k,
                            'sidebar__item--hover':this.state.hoverItemIndex==k
                        })} onMouseOver={this.mouseOverHandler.bind(this,v,k)} onMouseOut={this.mouseOutHandler} onClick={this.clickHandler.bind(this,v,k)} href={v.url}>
                        <span className="sidebar__item__label">{v.name}</span>
                            {
                                v.menu&&v.menu.length>0&&(
                                    <div className="sidebar__wsubitem">
                                        {
                                            v.menu.map((menu,menuindex)=>{
                                            return (
                                                <a key={menuindex} href={menu.url} className="sidebar__subitem"><span>{menu.name}</span></a>
                                            );
                                            })
                                        }
                                    </div>)
                            }
                        </li>
                    );
                })}
            </ol>
        )
    }
})

export default Sidebar;