/*! For license information please see main.876fe5b9541895eb0d61.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatesalongtanova("main",{"./app/classes/Page.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var s=n("./node_modules/lodash/each.js"),i=n.n(s),o=n("./node_modules/lodash/map.js"),a=n.n(o),h=n("./node_modules/gsap/index.js"),r=n("./node_modules/prefix/index.js"),l=n.n(r),m=n("./node_modules/normalize-wheel/index.js"),c=n.n(m),d=n("./app/animations/Title.js"),u=n("./app/animations/Images.js"),p=n("./app/animations/Paragraph.js"),v=n("./app/classes/AsyncLoad.js"),w=n("./app/classes/Colors.js");class E{constructor({element:e,elements:t,id:n}){this.selector=e,this.selectorChildren={...t,animationTitles:'[data-animation="title"]',animationParagraphs:'[data-animation="paragraph"]',animationImages:'[data-animation="image"]',preloaders:"[data-src]"},this.id=n,this.transformPrefix=l()("transform"),this.startY=0,this.isTouching=!1,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.onTouchStartEvent=this.onTouchStart.bind(this),this.onTouchMoveEvent=this.onTouchMove.bind(this),this.onTouchEndEvent=this.onTouchEnd.bind(this)}create(){this.element=document.querySelector(this.selector),console.log(this.element),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations(),this.createPreloader()}createPreloader(){this.preloaders=a()(this.elements.preloaders,(e=>new v.default({element:e})))}createAnimations(){this.animations=[],this.animationTitles=a()(this.elements.animationTitles,(e=>new d.default({element:e}))),this.animations.push(...this.animationTitles),this.animationParagraphs=a()(this.elements.animationParagraphs,(e=>new p.default({element:e}))),this.animationImages=a()(this.elements.animationImages,(e=>new u.default({element:e,elements:{title:this.elements.title}}))),this.animations.push(...this.animationParagraphs)}show(){return new Promise((e=>{w.ColorsManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animationIn=h.gsap.timeline(),this.animationIn.from(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((()=>{this.addEventlistener(),e()}))}))}hide(){return new Promise((e=>{this.removeEventlistener(),this.animationOut=h.gsap.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=c()(e);this.scroll.target+=t}onTouchStart(e){this.isTouching=!0,this.startY=e.touches?e.touches[0].clientY:e.clientY}onTouchMove(e){if(this.isTouching){const t=e.touches?e.touches[0].clientY:e.clientY;this.scroll.target+=this.startY-t,this.startY=t}}onTouchEnd(e){this.isTouching=!1}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i()(this.animations,(e=>e.onResize()))}update(){this.scroll.target=h.gsap.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=h.gsap.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventlistener(){window.addEventListener("mousewheel",this.onMouseWheelEvent),window.addEventListener("mousedown",this.onTouchStartEvent),window.addEventListener("mouseup",this.onTouchEndEvent),window.addEventListener("touchstart",this.onTouchStartEvent),window.addEventListener("touchmove",this.onTouchMoveEvent),window.addEventListener("touchend",this.onTouchEndEvent)}removeEventlistener(){window.removeEventListener("mousewheel",this.onMouseWheelEvent),window.removeEventListener("mousedown",this.onTouchStartEvent),window.removeEventListener("mouseup",this.onTouchEndEvent),window.removeEventListener("touchstart",this.onTouchStartEvent),window.removeEventListener("touchmove",this.onTouchMoveEvent),window.removeEventListener("touchend",this.onTouchEndEvent)}destroy(){this.removeEventlistener()}}}},(function(e){e.h=()=>"741be6be224d8375d611"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NzZmZTViOTU0MTg5NWViMGQ2MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MGdCQWFlLE1BQU1BLEVBQ25CQyxXQUFBQSxFQUFZLFFBQUVDLEVBQU8sU0FBRUMsRUFBUSxHQUFFQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUNuQkosRUFFSEssZ0JBQWlCLDJCQUNqQkMsb0JBQXFCLCtCQUNyQkMsZ0JBQWlCLDJCQUVqQkMsV0FBWSxjQUVkTixLQUFLRCxHQUFLQSxFQUNWQyxLQUFLTyxnQkFBa0JDLElBQU8sYUFFOUJSLEtBQUtTLE9BQVMsRUFDZFQsS0FBS1UsWUFBYSxFQUNsQlYsS0FBS1csa0JBQW9CWCxLQUFLWSxhQUFhQyxLQUFLYixNQUNoREEsS0FBS2Msa0JBQW9CZCxLQUFLZSxhQUFhRixLQUFLYixNQUNoREEsS0FBS2dCLGlCQUFtQmhCLEtBQUtpQixZQUFZSixLQUFLYixNQUM5Q0EsS0FBS2tCLGdCQUFrQmxCLEtBQUttQixXQUFXTixLQUFLYixLQUM5QyxDQUVBb0IsTUFBQUEsR0FDRXBCLEtBQUtILFFBQVV3QixTQUFTQyxjQUFjdEIsS0FBS0MsVUFDM0NzQixRQUFRQyxJQUFJeEIsS0FBS0gsU0FDakJHLEtBQUtGLFNBQVcsQ0FBQyxFQUVqQkUsS0FBS3lCLE9BQVMsQ0FDWkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsTUFBTyxHQUdUQyxJQUFLOUIsS0FBS0Usa0JBQWtCLENBQUM2QixFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWQvQixLQUFLRixTQUFTa0MsR0FBT0QsR0FFckIvQixLQUFLRixTQUFTa0MsR0FBT1gsU0FBU2lCLGlCQUFpQlAsR0FFYixJQUE5Qi9CLEtBQUtGLFNBQVNrQyxHQUFLTyxPQUNyQnZDLEtBQUtGLFNBQVNrQyxHQUFPLEtBQ2tCLElBQTlCaEMsS0FBS0YsU0FBU2tDLEdBQUtPLFNBQzVCdkMsS0FBS0YsU0FBU2tDLEdBQU9YLFNBQVNDLGNBQWNTLElBRWhELElBR0YvQixLQUFLd0MsbUJBQ0x4QyxLQUFLeUMsaUJBQ1AsQ0FFQUEsZUFBQUEsR0FDRXpDLEtBQUtNLFdBQWFvQyxJQUFJMUMsS0FBS0YsU0FBU1EsWUFBYVQsR0FDeEMsSUFBSThDLEVBQUFBLFFBQVUsQ0FDbkI5QyxhQUdOLENBRUEyQyxnQkFBQUEsR0FDRXhDLEtBQUs0QyxXQUFhLEdBR2xCNUMsS0FBS0csZ0JBQWtCdUMsSUFBSTFDLEtBQUtGLFNBQVNLLGlCQUFrQk4sR0FDbEQsSUFBSWdELEVBQUFBLFFBQU0sQ0FDZmhELGNBSUpHLEtBQUs0QyxXQUFXRSxRQUFROUMsS0FBS0csaUJBRzdCSCxLQUFLSSxvQkFBc0JzQyxJQUN6QjFDLEtBQUtGLFNBQVNNLHFCQUNiUCxHQUNRLElBQUlrRCxFQUFBQSxRQUFVLENBQ25CbEQsY0FNTkcsS0FBS0ssZ0JBQWtCcUMsSUFBSTFDLEtBQUtGLFNBQVNPLGlCQUFrQlIsR0FDbEQsSUFBSW1ELEVBQUFBLFFBQU8sQ0FDaEJuRCxVQUNBQyxTQUFVLENBQ1JtRCxNQUFPakQsS0FBS0YsU0FBU21ELFdBSzNCakQsS0FBSzRDLFdBQVdFLFFBQVE5QyxLQUFLSSxvQkFDL0IsQ0FFQThDLElBQUFBLEdBQ0UsT0FBTyxJQUFJQyxTQUFTQyxJQUNsQkMsRUFBQUEsY0FBY0MsT0FBTyxDQUNuQkMsZ0JBQWlCdkQsS0FBS0gsUUFBUTJELGFBQWEsbUJBQzNDQyxNQUFPekQsS0FBS0gsUUFBUTJELGFBQWEsZ0JBRW5DeEQsS0FBSzBELFlBQWNDLEVBQUFBLEtBQUtDLFdBRXhCNUQsS0FBSzBELFlBQVlHLEtBQ2Y3RCxLQUFLSCxRQUNMLENBRUVpRSxVQUFXLEdBT2IsQ0FDRUEsVUFBVyxJQUlmOUQsS0FBSzBELFlBQVlLLE1BQUssS0FDcEIvRCxLQUFLZ0UsbUJBQ0xaLEdBQVMsR0FDVCxHQUVOLENBRUFhLElBQUFBLEdBQ0UsT0FBTyxJQUFJZCxTQUFTQyxJQUNsQnBELEtBQUtrRSxzQkFFTGxFLEtBQUttRSxhQUFlUixFQUFBQSxLQUFLQyxXQUV6QjVELEtBQUttRSxhQUFhQyxHQUFHcEUsS0FBS0gsUUFBUyxDQUNqQ2lFLFVBQVcsRUFDWE8sV0FBWWpCLEdBQ1osR0FFTixDQUVBeEMsWUFBQUEsQ0FBYTBELEdBQ1gsTUFBTSxPQUFFQyxHQUFXQyxJQUFlRixHQUNsQ3RFLEtBQUt5QixPQUFPRSxRQUFVNEMsQ0FDeEIsQ0FFQXhELFlBQUFBLENBQWF1RCxHQUNYdEUsS0FBS1UsWUFBYSxFQUNsQlYsS0FBS1MsT0FBUzZELEVBQU1HLFFBQVVILEVBQU1HLFFBQVEsR0FBR0MsUUFBVUosRUFBTUksT0FDakUsQ0FFQXpELFdBQUFBLENBQVlxRCxHQUNWLEdBQUl0RSxLQUFLVSxXQUFZLENBQ25CLE1BQU1pRSxFQUFXTCxFQUFNRyxRQUFVSCxFQUFNRyxRQUFRLEdBQUdDLFFBQVVKLEVBQU1JLFFBQ2xFMUUsS0FBS3lCLE9BQU9FLFFBQVUzQixLQUFLUyxPQUFTa0UsRUFDcEMzRSxLQUFLUyxPQUFTa0UsQ0FDaEIsQ0FDRixDQUVBeEQsVUFBQUEsQ0FBV21ELEdBQ1R0RSxLQUFLVSxZQUFhLENBQ3BCLENBRUFrRSxRQUFBQSxHQUNNNUUsS0FBS0YsU0FBUytFLFVBQ2hCN0UsS0FBS3lCLE9BQU9JLE1BQ1Y3QixLQUFLRixTQUFTK0UsUUFBUUMsYUFBZTdDLE9BQU84QyxhQUdoRGpELElBQUs5QixLQUFLNEMsWUFBYW9DLEdBQWNBLEVBQVVKLFlBQ2pELENBRUFLLE1BQUFBLEdBQ0VqRixLQUFLeUIsT0FBT0UsT0FBU2dDLEVBQUFBLEtBQUt1QixNQUFNQyxNQUM5QixFQUNBbkYsS0FBS3lCLE9BQU9JLE1BQ1o3QixLQUFLeUIsT0FBT0UsUUFHZDNCLEtBQUt5QixPQUFPQyxRQUFVaUMsRUFBQUEsS0FBS3VCLE1BQU1FLFlBQy9CcEYsS0FBS3lCLE9BQU9DLFFBQ1oxQixLQUFLeUIsT0FBT0UsT0FDWixJQUdFM0IsS0FBS3lCLE9BQU9DLFFBQVUsTUFDeEIxQixLQUFLeUIsT0FBT0MsUUFBVSxHQUdwQjFCLEtBQUtGLFNBQVMrRSxVQUNoQjdFLEtBQUtGLFNBQVMrRSxRQUFRUSxNQUNwQnJGLEtBQUtPLGlCQUNGLGVBQWNQLEtBQUt5QixPQUFPQyxhQUVuQyxDQUVBc0MsZ0JBQUFBLEdBQ0UvQixPQUFPcUQsaUJBQWlCLGFBQWN0RixLQUFLVyxtQkFDM0NzQixPQUFPcUQsaUJBQWlCLFlBQWF0RixLQUFLYyxtQkFDMUNtQixPQUFPcUQsaUJBQWlCLFVBQVd0RixLQUFLa0IsaUJBQ3hDZSxPQUFPcUQsaUJBQWlCLGFBQWN0RixLQUFLYyxtQkFDM0NtQixPQUFPcUQsaUJBQWlCLFlBQWF0RixLQUFLZ0Isa0JBQzFDaUIsT0FBT3FELGlCQUFpQixXQUFZdEYsS0FBS2tCLGdCQUMzQyxDQUVBZ0QsbUJBQUFBLEdBQ0VqQyxPQUFPc0Qsb0JBQW9CLGFBQWN2RixLQUFLVyxtQkFDOUNzQixPQUFPc0Qsb0JBQW9CLFlBQWF2RixLQUFLYyxtQkFDN0NtQixPQUFPc0Qsb0JBQW9CLFVBQVd2RixLQUFLa0IsaUJBQzNDZSxPQUFPc0Qsb0JBQW9CLGFBQWN2RixLQUFLYyxtQkFDOUNtQixPQUFPc0Qsb0JBQW9CLFlBQWF2RixLQUFLZ0Isa0JBQzdDaUIsT0FBT3NELG9CQUFvQixXQUFZdkYsS0FBS2tCLGdCQUM5QyxDQUVBc0UsT0FBQUEsR0FDRXhGLEtBQUtrRSxxQkFDUCxrQkN4T0Z1QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Fsb25ndGFub3ZhLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9zYWxvbmd0YW5vdmEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcclxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJztcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCc7XHJcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnO1xyXG5cclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2FuaW1hdGlvbnMvVGl0bGUnO1xyXG5pbXBvcnQgSW1hZ2VzIGZyb20gJy4uL2FuaW1hdGlvbnMvSW1hZ2VzJztcclxuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuLi9hbmltYXRpb25zL1BhcmFncmFwaCc7XHJcbmltcG9ydCBBc3luY0xvYWQgZnJvbSAnLi9Bc3luY0xvYWQnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JzTWFuYWdlciB9IGZyb20gJy4vQ29sb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcclxuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xyXG4gICAgICAuLi5lbGVtZW50cyxcclxuXHJcbiAgICAgIGFuaW1hdGlvblRpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcclxuICAgICAgYW5pbWF0aW9uUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXHJcbiAgICAgIGFuaW1hdGlvbkltYWdlczogJ1tkYXRhLWFuaW1hdGlvbj1cImltYWdlXCJdJyxcclxuXHJcbiAgICAgIHByZWxvYWRlcnM6ICdbZGF0YS1zcmNdJyxcclxuICAgIH07XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJyk7XHJcblxyXG4gICAgdGhpcy5zdGFydFkgPSAwO1xyXG4gICAgdGhpcy5pc1RvdWNoaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ub3VjaFN0YXJ0RXZlbnQgPSB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblRvdWNoTW92ZUV2ZW50ID0gdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblRvdWNoRW5kRXZlbnQgPSB0aGlzLm9uVG91Y2hFbmQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICBjdXJyZW50OiAwLFxyXG4gICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgIGxhc3Q6IDAsXHJcbiAgICAgIGxpbWl0OiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XHJcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcclxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xyXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcclxuICAgIHRoaXMucHJlbG9hZGVycyA9IG1hcCh0aGlzLmVsZW1lbnRzLnByZWxvYWRlcnMsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgQXN5bmNMb2FkKHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xyXG5cclxuICAgIC8vVGl0bGVzIGFuaW1hdGlvblxyXG4gICAgdGhpcy5hbmltYXRpb25UaXRsZXMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25UaXRsZXMsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25UaXRsZXMpO1xyXG5cclxuICAgIC8vUGFyYWdyYXBocyBhbmltYXRpb25cclxuICAgIHRoaXMuYW5pbWF0aW9uUGFyYWdyYXBocyA9IG1hcChcclxuICAgICAgdGhpcy5lbGVtZW50cy5hbmltYXRpb25QYXJhZ3JhcGhzLFxyXG4gICAgICAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGFyYWdyYXBoKHtcclxuICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy9JbWFnZXMgYW5pbWF0aW9uXHJcbiAgICB0aGlzLmFuaW1hdGlvbkltYWdlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbkltYWdlcywgKGVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBJbWFnZXMoe1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25QYXJhZ3JhcGhzKTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgQ29sb3JzTWFuYWdlci5jaGFuZ2Uoe1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyksXHJcbiAgICAgICAgY29sb3I6IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb20oXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIHlvdSBjYW4gY2hhbmdlIHRoaXMgdG8vZnJvbSBnc2FwLnRvIHRvIHNlZSB0aGUgYW5pbWF0aW9uXHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICAvLyBkZWxheTogMSwgLy90ZXN0XHJcbiAgICAgICAgICAvLyBzdGFnZ2VyOiAwLjUsIC8vIHRlc3RcclxuICAgICAgICAgIC8vIHNjYWxlWTogMCwgLy90ZXN0XHJcbiAgICAgICAgICAvLyB0cmFuc2Zvcm1PcmlnaW46ICcxMDAlIDEwMCUnLCAvL3Rlc3RcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICctPTEuNSdcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICctPTEuNSdcclxuICAgICAgKTsgLy8geW91IGNhbiBjaGFuZ2UgdGhpcyB0byAxIHRvIHNlZSB0aGUgYW5pbWF0aW9uXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudGxpc3RlbmVyKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50bGlzdGVuZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gZ3NhcC50aW1lbGluZSgpO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcclxuICAgIGNvbnN0IHsgcGl4ZWxZIH0gPSBOb3JtYWxpemVXaGVlbChldmVudCk7XHJcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICB0aGlzLmlzVG91Y2hpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydFkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5pc1RvdWNoaW5nKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRZID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSB0aGlzLnN0YXJ0WSAtIGN1cnJlbnRZO1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IGN1cnJlbnRZO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub3VjaEVuZChldmVudCkge1xyXG4gICAgdGhpcy5pc1RvdWNoaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWFjaCh0aGlzLmFuaW1hdGlvbnMsIChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGdzYXAudXRpbHMuY2xhbXAoXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxyXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcclxuICAgICAgMC4xXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xyXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxyXG4gICAgICBdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnRsaXN0ZW5lcigpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblRvdWNoU3RhcnRFdmVudCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Ub3VjaEVuZEV2ZW50KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnRFdmVudCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZUV2ZW50KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZEV2ZW50KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUV2ZW50bGlzdGVuZXIoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaFN0YXJ0RXZlbnQpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hFbmRFdmVudCk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0RXZlbnQpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmVFdmVudCk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmRFdmVudCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudGxpc3RlbmVyKCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc0MWJlNmJlMjI0ZDgzNzVkNjExXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvblRpdGxlcyIsImFuaW1hdGlvblBhcmFncmFwaHMiLCJhbmltYXRpb25JbWFnZXMiLCJwcmVsb2FkZXJzIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4Iiwic3RhcnRZIiwiaXNUb3VjaGluZyIsIm9uTW91c2VXaGVlbEV2ZW50Iiwib25Nb3VzZVdoZWVsIiwiYmluZCIsIm9uVG91Y2hTdGFydEV2ZW50Iiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmVFdmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZEV2ZW50Iiwib25Ub3VjaEVuZCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiY3JlYXRlUHJlbG9hZGVyIiwibWFwIiwiQXN5bmNMb2FkIiwiYW5pbWF0aW9ucyIsIlRpdGxlIiwicHVzaCIsIlBhcmFncmFwaCIsIkltYWdlcyIsInRpdGxlIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiQ29sb3JzTWFuYWdlciIsImNoYW5nZSIsImJhY2tncm91bmRDb2xvciIsImdldEF0dHJpYnV0ZSIsImNvbG9yIiwiYW5pbWF0aW9uSW4iLCJnc2FwIiwidGltZWxpbmUiLCJmcm9tIiwiYXV0b0FscGhhIiwiY2FsbCIsImFkZEV2ZW50bGlzdGVuZXIiLCJoaWRlIiwicmVtb3ZlRXZlbnRsaXN0ZW5lciIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsImV2ZW50IiwicGl4ZWxZIiwiTm9ybWFsaXplV2hlZWwiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImN1cnJlbnRZIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJ1dGlscyIsImNsYW1wIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==