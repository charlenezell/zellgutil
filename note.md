# Note for relative Techniques

## flexbox layout

```html
<div class="container">
    <div class="child"></div>
    <div class="child">
        <div class="subchild"></div><!--这个没有关系-->
    </div>
    <div class="child"></div>
</div>
```
### parent

```css
.container{
    display:flex;

    flex-flow: <‘flex-direction’> || <‘flex-wrap’>
        flex-direction: row | row-reverse | column | column-reverse;
        flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content: flex-start | flex-end | center | space-between | space-around;
    align-items: flex-start | flex-end | center | baseline | stretch;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### child

```css
.child{
     order: <integer>;
     flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
        flex-grow: <number>; /* default 0 */
        flex-shrink: <number>; /* default 1 */
        flex-basis: <length> | auto; /* default auto */
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```


## grid layout

### concept

1. gridLine

    ![gridLine](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-line.png "gridLine")

2. grid track

    ![gridtrack](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-track.png "grid track")

3. Grid Cell

    ![Grid Cell](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-cell.png "Grid Cell")

4. Grid Area

    ![Grid Area](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-area.png "Grid Area")

```html
<div class="container">
    <div class="child"></div>
    <div class="child">
        <div class="subchild"></div><!--这个没有关系-->
    </div>
    <div class="child"></div>
</div>
```
### parent

```css
.container{
    display: grid | inline-grid	;
    /*单元格名字的定义*/
    grid: none | subgrid | <grid-template-rows> / <grid-template-columns> | <grid-auto-flow> [<grid-auto-rows> [/ <grid-auto-columns>]];

        grid-template-columns: <track-size> ... | <line-name> <track-size> ... | subgrid;
        grid-template-rows: <track-size> ... | <line-name> <track-size> ... | subgrid;
        grid-auto-columns:60px;
        /*grid-template-columns:
        [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end]; 见图1*/

        /*grid-template-columns: repeat(3, 20px [col-start]) 5%;
        ===
        grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start] 5%;
        */
        grid-auto-rows:60px;
        /*当指定的子元素超出定义的template时候会自动生成cell，而这些cell的宽高就是通过这两个属性定义 如图3*/

        grid-auto-flow: row | column | row dense | column dense;
        /*当html定义的子元素没有被生命在css中时候自动生成的cell用什么顺序表达定义在html的元素*/

    grid-template-areas: "<grid-area-name> | . | none | ..."
                       "...";/*给cell定义area*/
    /* grid-template-areas: "header header header header"
                       "main main . sidebar"
                       "footer footer footer footer 见图二"*/

    grid-gap: <grid-column-gap> <grid-row-gap>;
        grid-column-gap: 10px;
        grid-row-gap: 15px;

    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;


}
```

![图1](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-names.png "图1");
![图2](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-template-areas.png "图2");
![图3](https://cdn.css-tricks.com/wp-content/uploads/2016/03/implicit-tracks.png "图3");
![justify-items](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-items-start.png)
![align-items](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-align-items-start.png)
![justify-content](https://cdn.css-tricks.com/wp-content/uploads/2016/03/grid-justify-content-start.png)

#### grid shorthands
```css
.container{
    grid-template-areas: "header header header"
                         "footer footer footer";
    grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
    grid-template-columns: auto 50px auto;
}
===
.container{
    grid: [row1-start] "header header header" 1fr [row1-end]
          [row2-start] "footer footer footer" 25px [row2-end]
          / auto 50px auto;
}
```


### child

```css
.child{
    grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
        grid-column: <start-line> / <end-line> | <start-line> / span <value>;
            grid-column-start: <number> | <name> | span <number> | span <name> | auto;
            grid-column-end: <number> | <name> | span <number> | span <name> | auto;
        grid-row: <start-line> / <end-line> | <start-line> / span <value>;
            grid-row-start: <number> | <name> | span <number> | span <name> | auto;
            grid-row-end: <number> | <name> | span <number> | span <name> | auto;

    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```