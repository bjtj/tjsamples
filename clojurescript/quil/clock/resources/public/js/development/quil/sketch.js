// Compiled by ClojureScript 1.10.520 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.object');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(p5.prototype["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(p5.prototype["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(p5.prototype["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p3d","p3d",-850380194),mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5735__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var inner_canvas = el.querySelector("canvas");
applet.resizeCanvas(width,height);

inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height"));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__21030 = arguments.length;
switch (G__21030) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).createCanvas((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer.call(null,mode));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__21032 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"mouseWheel","mouseWheel",-1057803856),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__21033 = null;
var count__21034 = (0);
var i__21035 = (0);
while(true){
if((i__21035 < count__21034)){
var vec__21046 = cljs.core._nth.call(null,chunk__21033,i__21035);
var processing_name = cljs.core.nth.call(null,vec__21046,(0),null);
var quil_name = cljs.core.nth.call(null,vec__21046,(1),null);
var temp__5735__auto___21056 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5735__auto___21056)){
var handler_21057 = temp__5735__auto___21056;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__21032,chunk__21033,count__21034,i__21035,handler_21057,temp__5735__auto___21056,vec__21046,processing_name,quil_name){
return (function() { 
var G__21058__delegate = function (args){
var _STAR_applet_STAR__orig_val__21049 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__21050 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__21050;

try{return cljs.core.apply.call(null,handler_21057,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__21049;
}};
var G__21058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21059__i = 0, G__21059__a = new Array(arguments.length -  0);
while (G__21059__i < G__21059__a.length) {G__21059__a[G__21059__i] = arguments[G__21059__i + 0]; ++G__21059__i;}
  args = new cljs.core.IndexedSeq(G__21059__a,0,null);
} 
return G__21058__delegate.call(this,args);};
G__21058.cljs$lang$maxFixedArity = 0;
G__21058.cljs$lang$applyTo = (function (arglist__21060){
var args = cljs.core.seq(arglist__21060);
return G__21058__delegate(args);
});
G__21058.cljs$core$IFn$_invoke$arity$variadic = G__21058__delegate;
return G__21058;
})()
;})(seq__21032,chunk__21033,count__21034,i__21035,handler_21057,temp__5735__auto___21056,vec__21046,processing_name,quil_name))
);
} else {
}


var G__21061 = seq__21032;
var G__21062 = chunk__21033;
var G__21063 = count__21034;
var G__21064 = (i__21035 + (1));
seq__21032 = G__21061;
chunk__21033 = G__21062;
count__21034 = G__21063;
i__21035 = G__21064;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21032);
if(temp__5735__auto__){
var seq__21032__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21032__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21032__$1);
var G__21065 = cljs.core.chunk_rest.call(null,seq__21032__$1);
var G__21066 = c__4550__auto__;
var G__21067 = cljs.core.count.call(null,c__4550__auto__);
var G__21068 = (0);
seq__21032 = G__21065;
chunk__21033 = G__21066;
count__21034 = G__21067;
i__21035 = G__21068;
continue;
} else {
var vec__21051 = cljs.core.first.call(null,seq__21032__$1);
var processing_name = cljs.core.nth.call(null,vec__21051,(0),null);
var quil_name = cljs.core.nth.call(null,vec__21051,(1),null);
var temp__5735__auto___21069__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5735__auto___21069__$1)){
var handler_21070 = temp__5735__auto___21069__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__21032,chunk__21033,count__21034,i__21035,handler_21070,temp__5735__auto___21069__$1,vec__21051,processing_name,quil_name,seq__21032__$1,temp__5735__auto__){
return (function() { 
var G__21071__delegate = function (args){
var _STAR_applet_STAR__orig_val__21054 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__21055 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__21055;

try{return cljs.core.apply.call(null,handler_21070,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__21054;
}};
var G__21071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21072__i = 0, G__21072__a = new Array(arguments.length -  0);
while (G__21072__i < G__21072__a.length) {G__21072__a[G__21072__i] = arguments[G__21072__i + 0]; ++G__21072__i;}
  args = new cljs.core.IndexedSeq(G__21072__a,0,null);
} 
return G__21071__delegate.call(this,args);};
G__21071.cljs$lang$maxFixedArity = 0;
G__21071.cljs$lang$applyTo = (function (arglist__21073){
var args = cljs.core.seq(arglist__21073);
return G__21071__delegate(args);
});
G__21071.cljs$core$IFn$_invoke$arity$variadic = G__21071__delegate;
return G__21071;
})()
;})(seq__21032,chunk__21033,count__21034,i__21035,handler_21070,temp__5735__auto___21069__$1,vec__21051,processing_name,quil_name,seq__21032__$1,temp__5735__auto__))
);
} else {
}


var G__21074 = cljs.core.next.call(null,seq__21032__$1);
var G__21075 = null;
var G__21076 = (0);
var G__21077 = (0);
seq__21032 = G__21074;
chunk__21033 = G__21075;
count__21034 = G__21076;
i__21035 = G__21077;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__4131__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for the provided `p5` object.
 *   Fullscreen is enabled when the user presses `F11`. We turn
 *   the sketch `<canvas>` element to fullscreen storing the old size
 *   in an `atom`. When the user cancels fullscreen (`F11` or `Esc`)
 *   we resize the sketch back to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.call(null,null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_.call(null))){
cljs.core.reset_BANG_.call(null,old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size.call(null,applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.call(null,quil.sketch.set_size,applet,cljs.core.deref.call(null,old_size));
}
});})(old_size))
;
goog.events.listen(window,goog.events.EventType.KEYDOWN,((function (old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.call(null,event.key,"F11")) && (cljs.core.not.call(null,quil.sketch.in_fullscreen_QMARK_.call(null))))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(old_size,adjust_canvas_size))
);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

return goog.events.listen(document,"fullscreenerror",((function (old_size,adjust_canvas_size){
return (function (p1__21078_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__21078_SHARP_);
});})(old_size,adjust_canvas_size))
);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__21079_SHARP_){
return p1__21079_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var wheel_handler = temp__5735__auto__;
return ((function (wheel_handler,temp__5735__auto__,opts,sketch_size,renderer,features,setup){
return (function (evt){
return wheel_handler.call(null,goog.object.get(evt,"delta"));
});
;})(wheel_handler,temp__5735__auto__,opts,sketch_size,renderer,features,setup))
} else {
return null;
}
})();
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var sketch = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.quil_internal_state = cljs.core.atom.call(null,quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5735__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5735__auto__)){
var proc_obj = temp__5735__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21081 = arguments.length;
var i__4731__auto___21082 = (0);
while(true){
if((i__4731__auto___21082 < len__4730__auto___21081)){
args__4736__auto__.push((arguments[i__4731__auto___21082]));

var G__21083 = (i__4731__auto___21082 + (1));
i__4731__auto___21082 = G__21083;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem__$1.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch.call(null,opts_map),host_elem__$1));
host_elem__$1.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem__$1;

quil.sketch.add_fullscreen_support.call(null,proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq21080){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21080));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__21088 = quil.sketch.empty_body_QMARK_.call(null);
var seq__21084_21089 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__21085_21090 = null;
var count__21086_21091 = (0);
var i__21087_21092 = (0);
while(true){
if((i__21087_21092 < count__21086_21091)){
var sk_21093 = cljs.core._nth.call(null,chunk__21085_21090,i__21087_21092);
if(add_elem_QMARK__21088){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_21093));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_21093).call(null);


var G__21094 = seq__21084_21089;
var G__21095 = chunk__21085_21090;
var G__21096 = count__21086_21091;
var G__21097 = (i__21087_21092 + (1));
seq__21084_21089 = G__21094;
chunk__21085_21090 = G__21095;
count__21086_21091 = G__21096;
i__21087_21092 = G__21097;
continue;
} else {
var temp__5735__auto___21098 = cljs.core.seq.call(null,seq__21084_21089);
if(temp__5735__auto___21098){
var seq__21084_21099__$1 = temp__5735__auto___21098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21084_21099__$1)){
var c__4550__auto___21100 = cljs.core.chunk_first.call(null,seq__21084_21099__$1);
var G__21101 = cljs.core.chunk_rest.call(null,seq__21084_21099__$1);
var G__21102 = c__4550__auto___21100;
var G__21103 = cljs.core.count.call(null,c__4550__auto___21100);
var G__21104 = (0);
seq__21084_21089 = G__21101;
chunk__21085_21090 = G__21102;
count__21086_21091 = G__21103;
i__21087_21092 = G__21104;
continue;
} else {
var sk_21105 = cljs.core.first.call(null,seq__21084_21099__$1);
if(add_elem_QMARK__21088){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_21105));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_21105).call(null);


var G__21106 = cljs.core.next.call(null,seq__21084_21099__$1);
var G__21107 = null;
var G__21108 = (0);
var G__21109 = (0);
seq__21084_21089 = G__21106;
chunk__21085_21090 = G__21107;
count__21086_21091 = G__21108;
i__21087_21092 = G__21109;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1632532615202
