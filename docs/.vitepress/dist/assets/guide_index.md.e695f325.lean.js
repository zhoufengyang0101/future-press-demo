import{_ as J,o as n,c as t,x as e,t as A,a as G,F as m,K as h,D as p,y as S,b as g}from"./chunks/framework.0799945b.js";const z={props:["item"],methods:{handleClick(c){window.open(c.href)}}},W={class:"block-wrap"},d={class:"block-header"},v={class:"header-icon"},B=["src"],F={class:"header-title"},L={class:"block-content"},U={class:"block-footer"},D=e("img",{src:"",alt:""},null,-1),Z=["onClick"];function V(c,E,o,y,r,s){return n(),t("div",W,[e("div",d,[e("div",v,[e("img",{src:o.item.icon,alt:""},null,8,B)]),e("div",F,A(o.item.title),1)]),e("div",L,[G("  "),e("p",null,A(o.item.info),1),e("p",null,A(o.item.version),1)]),e("div",U,[(n(!0),t(m,null,h(o.item.links,(u,i)=>(n(),t("div",{key:i},[D,e("span",{onClick:a=>s.handleClick(u)},"点击",8,Z)]))),128))])])}const f=J(z,[["render",V]]);const l={components:{GroupItem:f},props:["title","desc","items"],methods:{}},k={class:"group-wrap"};function R(c,E,o,y,r,s){const u=p("group-item");return n(),t("div",k,[e("h2",null,A(o.title),1),e("p",null,A(o.desc),1),(n(!0),t(m,null,h(o.items,(i,a)=>(n(),S(u,{item:i,key:a,class:"group-item"},null,8,["item"]))),128))])}const w=J(l,[["render",R],["__scopeId","data-v-58e0cff4"]]),O=[{title:"图表类",desc:"用于数据可视化展示，丰富页面展示形式",items:[{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"/icons/1.jpg",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]}]},{title:"撒娇的离开家撒",desc:"用于数据可视化展示，丰富页面展示形式",items:[{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA05JREFUSEu11k1sVGUUBuDnTqczpWAoQknUqI38iKQ7NaRYEySN0UZW0LjyL0GJ2AUuTEw0Loyu3GhADMpC0UhiYSOGEGyUxAISdVclQiElRo0WbIlQmelwr/l6Z2DambbG6FnOd895z9973omST8wz4Q2Rzcj7b6wgsVujF6Jkr+0SvYiRmTt+hGSuz9JYkR1R8rExLCx7Be8ZrIydxESVPEKcuhYyCLEuBoDw1SyBy69XQwoR+SYKV4gSGuYsJgkAs9cbNRBfZcEyOt6ntZORAY4/yZ9naMgQqprBZgcIwa/GFBO6v2BJB0O7WL6F88c5vJ7GLEnpXwCE4MWQ+VJWPc/qFzn5Foe28fB2VvXy6TJGz5JvIAk9rLX6FYQhFmPu2ETHnnQIpcvpcM/t5bYe8q2ULvH1U5zdR65+q2oBKpmH4J19aSuOPkr4veMjWu/jtyN8/yrtr7B0HQM9ZZDaSqYChAxDz5tvZsNp/viGz7vSHk+uf3mLigVKcdr/rn5uvJcDKxj/pWbo0wCyFErc/RrtL3FgNWMnyWWJy5tS4UEmS7FIy11s+IHB1/nuZfJTh17bohDnkUEKYxzqJDe97ComV9r50AD5Fj5rr7kFVQARSUK2mU2jnHqHE9toyhEX669hJseVImveZOWz7FtEaZzoehK1AJkmNv7O8B4GetOSM6Xa8xNixOWWdu6g7XH2LyUOLK8HEAYcBhd6+uAxci0zM7ayDDdUsbs4xuG16cyy11d2agVxQteXLL6HoXdZsZULJ+hfNyWryZUK7ew6wuI1nN7J8me48C39D5CpqaDs0LiAnov8uIuDW+l+m+Wb6VtEPE6mMZ1FPEGmmZ5RhnZz8Dm6d3LnFvoWMnHpWkJ1KijfnDPv0fZYGrD/fkYGq45uQms7XV+l78MfsuzplJT96+tVEHzLJJvs6wcpY88fo/l2mm9h5GhKvGCBWOF9/GfGz7Fkbfp+/ImaCzuNaLh29+dRGGf+Tazs5daNzG9LAS4P89N+Tu3g8q/kmyn8VVcj6ghOtXJFqZCWAj/Q2JQCTFwhXOhslBIrDLy+yk0KzgySWdmETOocznEIFCzseWDxpNBUBHGKblVJ5j8W/emqOqsQVon+//y35W8RcHSuINiE/wAAAABJRU5ErkJggg==",title:"echarts-for-react",info:"一个基于 JavaScript 的开源可视化图表库",version:"推荐版本：3.0.2",links:[{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"},{icon:"",text:"进入官网",href:"https://yondesign.yonyou.com/website/#/openSource"}]}]}];const N=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","layoutClass":"guide-page"},"headers":[],"relativePath":"guide/index.md","lastUpdated":1679739992000}'),Q={name:"guide/index.md"},x=Object.assign(Q,{setup(c){return(E,o)=>(n(),t("div",null,[(n(!0),t(m,null,h(g(O),({title:y,desc:r,items:s})=>(n(),S(w,{title:y,desc:r,items:s},null,8,["title","desc","items"]))),256))]))}});export{N as __pageData,x as default};