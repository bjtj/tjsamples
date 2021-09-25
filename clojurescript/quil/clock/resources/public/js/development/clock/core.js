// Compiled by ClojureScript 1.10.520 {}
goog.provide('clock.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
clock.core.setup = (function clock$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
clock.core.update_state = (function clock$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
clock.core.draw_state = (function clock$core$draw_state(state){
quil.core.background.call(null,(51));

var max_scale_h = ((1) - ((1) / (12)));
var max_scale_m = ((1) - ((1) / (60)));
var max_scale_s = ((1) - ((1) / (60)));
var h = quil.core.map_range.call(null,(((quil.core.hour.call(null) > (12)))?(quil.core.hour.call(null) - (12)):quil.core.hour.call(null)),(0),(11),(0),max_scale_h);
var m = quil.core.map_range.call(null,quil.core.minute.call(null),(0),(59),(0),max_scale_m);
var s = quil.core.map_range.call(null,quil.core.seconds.call(null),(0),(59),(0),max_scale_s);
var h_a = (quil.core.TWO_PI * h);
var m_a = (quil.core.TWO_PI * m);
var s_a = (quil.core.TWO_PI * s);
quil.core.stroke_weight.call(null,(8));

quil.core.no_fill.call(null);

var halfw = (quil.core.width.call(null) / (2));
var halfh = (quil.core.height.call(null) / (2));
var tr__21761__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw,halfh], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21761__auto__);

var tr__21767__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * quil.core.HALF_PI)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21767__auto__);

quil.core.stroke.call(null,(255),(100),(150));

var tr__21767__auto___35070__$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_a], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21767__auto___35070__$1);

quil.core.line.call(null,(0),(0),(60),(0));
}finally {quil.core.pop_matrix.call(null);
}
quil.core.arc.call(null,(0),(0),(400),(400),(0),h_a);

quil.core.stroke.call(null,(150),(100),(255));

var tr__21767__auto___35071__$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_a], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21767__auto___35071__$1);

quil.core.line.call(null,(0),(0),(100),(0));
}finally {quil.core.pop_matrix.call(null);
}
quil.core.arc.call(null,(0),(0),(360),(360),(0),m_a);

quil.core.stroke.call(null,(150),(255),(100));

var tr__21767__auto___35072__$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_a], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21767__auto___35072__$1);

quil.core.line.call(null,(0),(0),(160),(0));
}finally {quil.core.pop_matrix.call(null);
}
return quil.core.arc.call(null,(0),(0),(320),(320),(0),s_a);
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
clock.core.run_sketch = (function clock$core$run_sketch(){
clock.core.clock = (function clock$core$run_sketch_$_clock(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"clock",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,clock.core.update_state))?(function() { 
var G__35073__delegate = function (args){
return cljs.core.apply.call(null,clock.core.update_state,args);
};
var G__35073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35074__i = 0, G__35074__a = new Array(arguments.length -  0);
while (G__35074__i < G__35074__a.length) {G__35074__a[G__35074__i] = arguments[G__35074__i + 0]; ++G__35074__i;}
  args = new cljs.core.IndexedSeq(G__35074__a,0,null);
} 
return G__35073__delegate.call(this,args);};
G__35073.cljs$lang$maxFixedArity = 0;
G__35073.cljs$lang$applyTo = (function (arglist__35075){
var args = cljs.core.seq(arglist__35075);
return G__35073__delegate(args);
});
G__35073.cljs$core$IFn$_invoke$arity$variadic = G__35073__delegate;
return G__35073;
})()
:clock.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,clock.core.setup))?(function() { 
var G__35076__delegate = function (args){
return cljs.core.apply.call(null,clock.core.setup,args);
};
var G__35076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35077__i = 0, G__35077__a = new Array(arguments.length -  0);
while (G__35077__i < G__35077__a.length) {G__35077__a[G__35077__i] = arguments[G__35077__i + 0]; ++G__35077__i;}
  args = new cljs.core.IndexedSeq(G__35077__a,0,null);
} 
return G__35076__delegate.call(this,args);};
G__35076.cljs$lang$maxFixedArity = 0;
G__35076.cljs$lang$applyTo = (function (arglist__35078){
var args = cljs.core.seq(arglist__35078);
return G__35076__delegate(args);
});
G__35076.cljs$core$IFn$_invoke$arity$variadic = G__35076__delegate;
return G__35076;
})()
:clock.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,clock.core.draw_state))?(function() { 
var G__35079__delegate = function (args){
return cljs.core.apply.call(null,clock.core.draw_state,args);
};
var G__35079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35080__i = 0, G__35080__a = new Array(arguments.length -  0);
while (G__35080__i < G__35080__a.length) {G__35080__a[G__35080__i] = arguments[G__35080__i + 0]; ++G__35080__i;}
  args = new cljs.core.IndexedSeq(G__35080__a,0,null);
} 
return G__35079__delegate.call(this,args);};
G__35079.cljs$lang$maxFixedArity = 0;
G__35079.cljs$lang$applyTo = (function (arglist__35081){
var args = cljs.core.seq(arglist__35081);
return G__35079__delegate(args);
});
G__35079.cljs$core$IFn$_invoke$arity$variadic = G__35079__delegate;
return G__35079;
})()
:clock.core.draw_state));
});
goog.exportSymbol('clock.core.clock', clock.core.clock);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),clock.core.clock,new cljs.core.Keyword(null,"host-id","host-id",742376279),"clock"], null));
}
});
goog.exportSymbol('clock.core.run_sketch', clock.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1573203424853
