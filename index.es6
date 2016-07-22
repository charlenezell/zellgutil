/// <reference path="./typings/index.d.ts" />
require("./app/ui/css.css")
let $=require("./bower_components/jquery/dist/jquery.min.js");
var app=require("./app/ui/app.jsx");
$(function(){
    app.init();
});