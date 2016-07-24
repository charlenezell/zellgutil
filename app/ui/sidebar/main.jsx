require("./main.css");
var React = require('react');
var ReactDOM = require('react-dom');
var classNames=require("classnames");
/*TODO: 绑定路由的转换*/
let Sidebar=React.createClass({
    getInitialState:function(){
        return Object.assign({},{
        });
    },
    itemHandler:function(...a){

    },
    itemMouseOut:function(menu,e){
        this.props.handleMouseOutInfo(menu);
    },
    itemMouseOver:function(menu,e){
        this.props.handleMouseOverInfo(menu);
    },
    toggleItem:function(item,index){
        var _new={};
        _new["st_"+index]=!this.state["st_"+index];
        this.setState(_new);
    },
    render:function(){
        /*
        onMouseOver={this.mouseOverHandler.bind(this,v,k)} onMouseOut={this.mouseOutHandler}
        */
        var g=this.props.items;
        return (
            <ol className="sidebar">
                {g.map((v,k)=>{
                    return (
                        <li key={k} className={classNames({
                            "sidebar__item":true,
                            "sidebar__item--open":this.state["st_"+k]
                        })} href={v.url}>
                        <span className="sidebar__item__label"   onClick={this.toggleItem.bind(this,v,k)}  onMouseOver={this.itemMouseOver.bind(this,v)} onMouseOut={this.itemMouseOut.bind(this,v)}>{v.name}</span>
                            {
                                v.menu&&v.menu.length>0&&(
                                    <div className="sidebar__wsubitem">
                                        {
                                            v.menu.map((menu,menuindex)=>{
                                            return (
                                                <a key={menuindex} href={menu.url} onClick={this.itemHandler} onMouseOver={this.itemMouseOver.bind(this,menu)} onMouseOut={this.itemMouseOut.bind(this,menu)} className="sidebar__subitem"><span>{menu.name}</span></a>
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