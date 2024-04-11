/*! For license information please see main.c5eee3c52bd1b09219f7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatesalongtanova("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var i=s("./node_modules/lodash/each.js"),n=s.n(i),a=s("./node_modules/lodash/map.js"),l=s.n(a),r=s("./node_modules/gsap/index.js"),o=s("./node_modules/prefix/index.js"),h=s.n(o),m=s("./node_modules/normalize-wheel/index.js"),c=s.n(m),d=s("./app/animations/Title.js"),p=s("./app/animations/Paragraph.js"),u=s("./app/classes/AsyncLoad.js"),g=s("./app/classes/Colors.js");class w{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationTitles:'[data-animation="title"]',animationParagraphs:'[data-animation="paragraph"]',preloaders:"[src]"},this.id=s,this.transformPrefix=h()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},n()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations(),this.createPreloader()}createAnimations(){this.animations=[],this.animationTitles=l()(this.elements.animationTitles,(e=>new d.default({element:e}))),this.animations.push(...this.animationTitles),this.animationParagraphs=l()(this.elements.animationParagraphs,(e=>new p.default({element:e}))),this.animations.push(...this.animationParagraphs)}createPreloader(){this.preloaders=l()(this.elements.preloaders,(e=>new u.default({element:e})))}show(){return new Promise((e=>{g.ColorsManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animationIn=r.gsap.timeline(),this.animationIn.from(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((()=>{this.addEventlistener(),e()}))}))}hide(){return new Promise((e=>{this.removeEventlistener(),this.animationOut=r.gsap.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=c()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight+277),n()(this.animations,(e=>e.onResize()))}update(){this.scroll.target=r.gsap.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=r.gsap.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventlistener(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventlistener(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"11a2e2748e8ffd60ce1b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixZQUNqRCxDQUVBSyxNQUFBQSxHQUNFakUsS0FBS2MsT0FBT0UsT0FBUzhCLEVBQUFBLEtBQUtvQixNQUFNQyxNQUM5QixFQUNBbkUsS0FBS2MsT0FBT0ksTUFDWmxCLEtBQUtjLE9BQU9FLFFBR2RoQixLQUFLYyxPQUFPQyxRQUFVK0IsRUFBQUEsS0FBS29CLE1BQU1FLFlBQy9CcEUsS0FBS2MsT0FBT0MsUUFDWmYsS0FBS2MsT0FBT0UsT0FDWixJQUdFaEIsS0FBS2MsT0FBT0MsUUFBVSxNQUN4QmYsS0FBS2MsT0FBT0MsUUFBVSxHQUdwQmYsS0FBS0YsU0FBUytELFVBQ2hCN0QsS0FBS0YsU0FBUytELFFBQVFRLE1BQ3BCckUsS0FBS00saUJBQ0YsZUFBY04sS0FBS2MsT0FBT0MsYUFFbkMsQ0FFQW9DLGdCQUFBQSxHQUNFN0IsT0FBT2dELGlCQUFpQixhQUFjdEUsS0FBS1Esa0JBQzdDLENBRUE2QyxtQkFBQUEsR0FDRS9CLE9BQU9pRCxvQkFBb0IsYUFBY3ZFLEtBQUtRLGtCQUNoRCxrQkNwTEZnRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Fsb25ndGFub3ZhLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9zYWxvbmd0YW5vdmEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcclxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJztcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCc7XHJcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnO1xyXG5cclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2FuaW1hdGlvbnMvVGl0bGUnO1xyXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2FuaW1hdGlvbnMvUGFyYWdyYXBoJztcclxuXHJcbmltcG9ydCBBc3luY0xvYWQgZnJvbSAnLi9Bc3luY0xvYWQnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JzTWFuYWdlciB9IGZyb20gJy4vQ29sb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcclxuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xyXG4gICAgICAuLi5lbGVtZW50cyxcclxuXHJcbiAgICAgIGFuaW1hdGlvblRpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcclxuICAgICAgYW5pbWF0aW9uUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXHJcblxyXG4gICAgICBwcmVsb2FkZXJzOiAnW3NyY10nLFxyXG4gICAgfTtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRyYW5zZm9ybVByZWZpeCk7XHJcblxyXG4gICAgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICBjdXJyZW50OiAwLFxyXG4gICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgIGxhc3Q6IDAsXHJcbiAgICAgIGxpbWl0OiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XHJcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcclxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xyXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcclxuXHJcbiAgICAvL1RpdGxlcyBhbmltYXRpb25cclxuICAgIHRoaXMuYW5pbWF0aW9uVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uVGl0bGVzLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRpdGxlKHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uVGl0bGVzKTtcclxuXHJcbiAgICAvL1BhcmFncmFwaHMgYW5pbWF0aW9uXHJcbiAgICB0aGlzLmFuaW1hdGlvblBhcmFncmFwaHMgPSBtYXAoXHJcbiAgICAgIHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uUGFyYWdyYXBocyxcclxuICAgICAgKGVsZW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhcmFncmFwaCh7XHJcbiAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uUGFyYWdyYXBocyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XHJcbiAgICB0aGlzLnByZWxvYWRlcnMgPSBtYXAodGhpcy5lbGVtZW50cy5wcmVsb2FkZXJzLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEFzeW5jTG9hZCh7XHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgQ29sb3JzTWFuYWdlci5jaGFuZ2Uoe1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyksXHJcbiAgICAgICAgY29sb3I6IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb20oXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIHlvdSBjYW4gY2hhbmdlIHRoaXMgdG8vZnJvbSBnc2FwLnRvIHRvIHNlZSB0aGUgYW5pbWF0aW9uXHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICApOyAvLyB5b3UgY2FuIGNoYW5nZSB0aGlzIHRvIDEgdG8gc2VlIHRoZSBhbmltYXRpb25cclxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50bGlzdGVuZXIoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRsaXN0ZW5lcigpO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VXaGVlbChldmVudCkge1xyXG4gICAgY29uc3QgeyBwaXhlbFkgfSA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAyNzc7XHJcbiAgICB9XHJcblxyXG4gICAgZWFjaCh0aGlzLmFuaW1hdGlvbnMsIChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGdzYXAudXRpbHMuY2xhbXAoXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxyXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcclxuICAgICAgMC4xXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xyXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxyXG4gICAgICBdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnRsaXN0ZW5lcigpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFdmVudGxpc3RlbmVyKCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTFhMmUyNzQ4ZThmZmQ2MGNlMWJcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uVGl0bGVzIiwiYW5pbWF0aW9uUGFyYWdyYXBocyIsInByZWxvYWRlcnMiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiY3JlYXRlUHJlbG9hZGVyIiwiYW5pbWF0aW9ucyIsIm1hcCIsIlRpdGxlIiwicHVzaCIsIlBhcmFncmFwaCIsIkFzeW5jTG9hZCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsIkNvbG9yc01hbmFnZXIiLCJjaGFuZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJjb2xvciIsImFuaW1hdGlvbkluIiwiZ3NhcCIsInRpbWVsaW5lIiwiZnJvbSIsImF1dG9BbHBoYSIsImNhbGwiLCJhZGRFdmVudGxpc3RlbmVyIiwiaGlkZSIsInJlbW92ZUV2ZW50bGlzdGVuZXIiLCJhbmltYXRpb25PdXQiLCJ0byIsIm9uQ29tcGxldGUiLCJldmVudCIsInBpeGVsWSIsIk5vcm1hbGl6ZVdoZWVsIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJ1dGlscyIsImNsYW1wIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9