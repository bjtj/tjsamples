// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e28963){if((e28963 instanceof Error)){
var e = e28963;
return "Error: Unable to stringify";
} else {
throw e28963;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28966 = arguments.length;
switch (G__28966) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28964_SHARP_){
if(typeof p1__28964_SHARP_ === 'string'){
return p1__28964_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28964_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28969 = arguments.length;
var i__4731__auto___28970 = (0);
while(true){
if((i__4731__auto___28970 < len__4730__auto___28969)){
args__4736__auto__.push((arguments[i__4731__auto___28970]));

var G__28971 = (i__4731__auto___28970 + (1));
i__4731__auto___28970 = G__28971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28968){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28968));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28973 = arguments.length;
var i__4731__auto___28974 = (0);
while(true){
if((i__4731__auto___28974 < len__4730__auto___28973)){
args__4736__auto__.push((arguments[i__4731__auto___28974]));

var G__28975 = (i__4731__auto___28974 + (1));
i__4731__auto___28974 = G__28975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28972){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28972));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28976){
var map__28977 = p__28976;
var map__28977__$1 = (((((!((map__28977 == null))))?(((((map__28977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28977):map__28977);
var message = cljs.core.get.call(null,map__28977__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28977__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23743__auto___29056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___29056,ch){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___29056,ch){
return (function (state_29028){
var state_val_29029 = (state_29028[(1)]);
if((state_val_29029 === (7))){
var inst_29024 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29030_29057 = state_29028__$1;
(statearr_29030_29057[(2)] = inst_29024);

(statearr_29030_29057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (1))){
var state_29028__$1 = state_29028;
var statearr_29031_29058 = state_29028__$1;
(statearr_29031_29058[(2)] = null);

(statearr_29031_29058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (4))){
var inst_28981 = (state_29028[(7)]);
var inst_28981__$1 = (state_29028[(2)]);
var state_29028__$1 = (function (){var statearr_29032 = state_29028;
(statearr_29032[(7)] = inst_28981__$1);

return statearr_29032;
})();
if(cljs.core.truth_(inst_28981__$1)){
var statearr_29033_29059 = state_29028__$1;
(statearr_29033_29059[(1)] = (5));

} else {
var statearr_29034_29060 = state_29028__$1;
(statearr_29034_29060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (15))){
var inst_28988 = (state_29028[(8)]);
var inst_29003 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28988);
var inst_29004 = cljs.core.first.call(null,inst_29003);
var inst_29005 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29004);
var inst_29006 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29005)].join('');
var inst_29007 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29006);
var state_29028__$1 = state_29028;
var statearr_29035_29061 = state_29028__$1;
(statearr_29035_29061[(2)] = inst_29007);

(statearr_29035_29061[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (13))){
var inst_29012 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29036_29062 = state_29028__$1;
(statearr_29036_29062[(2)] = inst_29012);

(statearr_29036_29062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (6))){
var state_29028__$1 = state_29028;
var statearr_29037_29063 = state_29028__$1;
(statearr_29037_29063[(2)] = null);

(statearr_29037_29063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (17))){
var inst_29010 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29038_29064 = state_29028__$1;
(statearr_29038_29064[(2)] = inst_29010);

(statearr_29038_29064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (3))){
var inst_29026 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29028__$1,inst_29026);
} else {
if((state_val_29029 === (12))){
var inst_28987 = (state_29028[(9)]);
var inst_29001 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28987,opts);
var state_29028__$1 = state_29028;
if(inst_29001){
var statearr_29039_29065 = state_29028__$1;
(statearr_29039_29065[(1)] = (15));

} else {
var statearr_29040_29066 = state_29028__$1;
(statearr_29040_29066[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (2))){
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29028__$1,(4),ch);
} else {
if((state_val_29029 === (11))){
var inst_28988 = (state_29028[(8)]);
var inst_28993 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28994 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28988);
var inst_28995 = cljs.core.async.timeout.call(null,(1000));
var inst_28996 = [inst_28994,inst_28995];
var inst_28997 = (new cljs.core.PersistentVector(null,2,(5),inst_28993,inst_28996,null));
var state_29028__$1 = state_29028;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29028__$1,(14),inst_28997);
} else {
if((state_val_29029 === (9))){
var inst_28988 = (state_29028[(8)]);
var inst_29014 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29015 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28988);
var inst_29016 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29015);
var inst_29017 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29016)].join('');
var inst_29018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29017);
var state_29028__$1 = (function (){var statearr_29041 = state_29028;
(statearr_29041[(10)] = inst_29014);

return statearr_29041;
})();
var statearr_29042_29067 = state_29028__$1;
(statearr_29042_29067[(2)] = inst_29018);

(statearr_29042_29067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (5))){
var inst_28981 = (state_29028[(7)]);
var inst_28983 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28984 = (new cljs.core.PersistentArrayMap(null,2,inst_28983,null));
var inst_28985 = (new cljs.core.PersistentHashSet(null,inst_28984,null));
var inst_28986 = figwheel.client.focus_msgs.call(null,inst_28985,inst_28981);
var inst_28987 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28986);
var inst_28988 = cljs.core.first.call(null,inst_28986);
var inst_28989 = figwheel.client.autoload_QMARK_.call(null);
var state_29028__$1 = (function (){var statearr_29043 = state_29028;
(statearr_29043[(8)] = inst_28988);

(statearr_29043[(9)] = inst_28987);

return statearr_29043;
})();
if(cljs.core.truth_(inst_28989)){
var statearr_29044_29068 = state_29028__$1;
(statearr_29044_29068[(1)] = (8));

} else {
var statearr_29045_29069 = state_29028__$1;
(statearr_29045_29069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (14))){
var inst_28999 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29046_29070 = state_29028__$1;
(statearr_29046_29070[(2)] = inst_28999);

(statearr_29046_29070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (16))){
var state_29028__$1 = state_29028;
var statearr_29047_29071 = state_29028__$1;
(statearr_29047_29071[(2)] = null);

(statearr_29047_29071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (10))){
var inst_29020 = (state_29028[(2)]);
var state_29028__$1 = (function (){var statearr_29048 = state_29028;
(statearr_29048[(11)] = inst_29020);

return statearr_29048;
})();
var statearr_29049_29072 = state_29028__$1;
(statearr_29049_29072[(2)] = null);

(statearr_29049_29072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (8))){
var inst_28987 = (state_29028[(9)]);
var inst_28991 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28987,opts);
var state_29028__$1 = state_29028;
if(cljs.core.truth_(inst_28991)){
var statearr_29050_29073 = state_29028__$1;
(statearr_29050_29073[(1)] = (11));

} else {
var statearr_29051_29074 = state_29028__$1;
(statearr_29051_29074[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23743__auto___29056,ch))
;
return ((function (switch__23648__auto__,c__23743__auto___29056,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23649__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23649__auto____0 = (function (){
var statearr_29052 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29052[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23649__auto__);

(statearr_29052[(1)] = (1));

return statearr_29052;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23649__auto____1 = (function (state_29028){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_29028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e29053){if((e29053 instanceof Object)){
var ex__23652__auto__ = e29053;
var statearr_29054_29075 = state_29028;
(statearr_29054_29075[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29076 = state_29028;
state_29028 = G__29076;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23649__auto__ = function(state_29028){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23649__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23649__auto____1.call(this,state_29028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23649__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23649__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___29056,ch))
})();
var state__23745__auto__ = (function (){var statearr_29055 = f__23744__auto__.call(null);
(statearr_29055[(6)] = c__23743__auto___29056);

return statearr_29055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___29056,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29077_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29077_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29083 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29083){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29079 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29080 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29081 = true;
var _STAR_print_fn_STAR__temp_val__29082 = ((function (_STAR_print_newline_STAR__orig_val__29079,_STAR_print_fn_STAR__orig_val__29080,_STAR_print_newline_STAR__temp_val__29081,sb,base_path_29083){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29079,_STAR_print_fn_STAR__orig_val__29080,_STAR_print_newline_STAR__temp_val__29081,sb,base_path_29083))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29081;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29082;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29080;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29079;
}}catch (e29078){if((e29078 instanceof Error)){
var e = e29078;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29083], null));
} else {
var e = e29078;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29083))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29084){
var map__29085 = p__29084;
var map__29085__$1 = (((((!((map__29085 == null))))?(((((map__29085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29085):map__29085);
var opts = map__29085__$1;
var build_id = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29085,map__29085__$1,opts,build_id){
return (function (p__29087){
var vec__29088 = p__29087;
var seq__29089 = cljs.core.seq.call(null,vec__29088);
var first__29090 = cljs.core.first.call(null,seq__29089);
var seq__29089__$1 = cljs.core.next.call(null,seq__29089);
var map__29091 = first__29090;
var map__29091__$1 = (((((!((map__29091 == null))))?(((((map__29091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29091):map__29091);
var msg = map__29091__$1;
var msg_name = cljs.core.get.call(null,map__29091__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29089__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29088,seq__29089,first__29090,seq__29089__$1,map__29091,map__29091__$1,msg,msg_name,_,map__29085,map__29085__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29088,seq__29089,first__29090,seq__29089__$1,map__29091,map__29091__$1,msg,msg_name,_,map__29085,map__29085__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29085,map__29085__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29093){
var vec__29094 = p__29093;
var seq__29095 = cljs.core.seq.call(null,vec__29094);
var first__29096 = cljs.core.first.call(null,seq__29095);
var seq__29095__$1 = cljs.core.next.call(null,seq__29095);
var map__29097 = first__29096;
var map__29097__$1 = (((((!((map__29097 == null))))?(((((map__29097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var msg = map__29097__$1;
var msg_name = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29095__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29099){
var map__29100 = p__29099;
var map__29100__$1 = (((((!((map__29100 == null))))?(((((map__29100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);
var on_compile_warning = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29100,map__29100__$1,on_compile_warning,on_compile_fail){
return (function (p__29102){
var vec__29103 = p__29102;
var seq__29104 = cljs.core.seq.call(null,vec__29103);
var first__29105 = cljs.core.first.call(null,seq__29104);
var seq__29104__$1 = cljs.core.next.call(null,seq__29104);
var map__29106 = first__29105;
var map__29106__$1 = (((((!((map__29106 == null))))?(((((map__29106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29106):map__29106);
var msg = map__29106__$1;
var msg_name = cljs.core.get.call(null,map__29106__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29104__$1;
var pred__29108 = cljs.core._EQ_;
var expr__29109 = msg_name;
if(cljs.core.truth_(pred__29108.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29109))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29108.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29109))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29100,map__29100__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__,msg_hist,msg_names,msg){
return (function (state_29198){
var state_val_29199 = (state_29198[(1)]);
if((state_val_29199 === (7))){
var inst_29118 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
if(cljs.core.truth_(inst_29118)){
var statearr_29200_29247 = state_29198__$1;
(statearr_29200_29247[(1)] = (8));

} else {
var statearr_29201_29248 = state_29198__$1;
(statearr_29201_29248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (20))){
var inst_29192 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29202_29249 = state_29198__$1;
(statearr_29202_29249[(2)] = inst_29192);

(statearr_29202_29249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (27))){
var inst_29188 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29203_29250 = state_29198__$1;
(statearr_29203_29250[(2)] = inst_29188);

(statearr_29203_29250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (1))){
var inst_29111 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29198__$1 = state_29198;
if(cljs.core.truth_(inst_29111)){
var statearr_29204_29251 = state_29198__$1;
(statearr_29204_29251[(1)] = (2));

} else {
var statearr_29205_29252 = state_29198__$1;
(statearr_29205_29252[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (24))){
var inst_29190 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29206_29253 = state_29198__$1;
(statearr_29206_29253[(2)] = inst_29190);

(statearr_29206_29253[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (4))){
var inst_29196 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29198__$1,inst_29196);
} else {
if((state_val_29199 === (15))){
var inst_29194 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29207_29254 = state_29198__$1;
(statearr_29207_29254[(2)] = inst_29194);

(statearr_29207_29254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (21))){
var inst_29147 = (state_29198[(2)]);
var inst_29148 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29149 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29148);
var state_29198__$1 = (function (){var statearr_29208 = state_29198;
(statearr_29208[(7)] = inst_29147);

return statearr_29208;
})();
var statearr_29209_29255 = state_29198__$1;
(statearr_29209_29255[(2)] = inst_29149);

(statearr_29209_29255[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (31))){
var inst_29177 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29198__$1 = state_29198;
if(inst_29177){
var statearr_29210_29256 = state_29198__$1;
(statearr_29210_29256[(1)] = (34));

} else {
var statearr_29211_29257 = state_29198__$1;
(statearr_29211_29257[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (32))){
var inst_29186 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29212_29258 = state_29198__$1;
(statearr_29212_29258[(2)] = inst_29186);

(statearr_29212_29258[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (33))){
var inst_29173 = (state_29198[(2)]);
var inst_29174 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29175 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29174);
var state_29198__$1 = (function (){var statearr_29213 = state_29198;
(statearr_29213[(8)] = inst_29173);

return statearr_29213;
})();
var statearr_29214_29259 = state_29198__$1;
(statearr_29214_29259[(2)] = inst_29175);

(statearr_29214_29259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (13))){
var inst_29132 = figwheel.client.heads_up.clear.call(null);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(16),inst_29132);
} else {
if((state_val_29199 === (22))){
var inst_29153 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29154 = figwheel.client.heads_up.append_warning_message.call(null,inst_29153);
var state_29198__$1 = state_29198;
var statearr_29215_29260 = state_29198__$1;
(statearr_29215_29260[(2)] = inst_29154);

(statearr_29215_29260[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (36))){
var inst_29184 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29216_29261 = state_29198__$1;
(statearr_29216_29261[(2)] = inst_29184);

(statearr_29216_29261[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (29))){
var inst_29164 = (state_29198[(2)]);
var inst_29165 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29166 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29165);
var state_29198__$1 = (function (){var statearr_29217 = state_29198;
(statearr_29217[(9)] = inst_29164);

return statearr_29217;
})();
var statearr_29218_29262 = state_29198__$1;
(statearr_29218_29262[(2)] = inst_29166);

(statearr_29218_29262[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (6))){
var inst_29113 = (state_29198[(10)]);
var state_29198__$1 = state_29198;
var statearr_29219_29263 = state_29198__$1;
(statearr_29219_29263[(2)] = inst_29113);

(statearr_29219_29263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (28))){
var inst_29160 = (state_29198[(2)]);
var inst_29161 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29162 = figwheel.client.heads_up.display_warning.call(null,inst_29161);
var state_29198__$1 = (function (){var statearr_29220 = state_29198;
(statearr_29220[(11)] = inst_29160);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(29),inst_29162);
} else {
if((state_val_29199 === (25))){
var inst_29158 = figwheel.client.heads_up.clear.call(null);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(28),inst_29158);
} else {
if((state_val_29199 === (34))){
var inst_29179 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(37),inst_29179);
} else {
if((state_val_29199 === (17))){
var inst_29138 = (state_29198[(2)]);
var inst_29139 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29140 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29139);
var state_29198__$1 = (function (){var statearr_29221 = state_29198;
(statearr_29221[(12)] = inst_29138);

return statearr_29221;
})();
var statearr_29222_29264 = state_29198__$1;
(statearr_29222_29264[(2)] = inst_29140);

(statearr_29222_29264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (3))){
var inst_29130 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29198__$1 = state_29198;
if(inst_29130){
var statearr_29223_29265 = state_29198__$1;
(statearr_29223_29265[(1)] = (13));

} else {
var statearr_29224_29266 = state_29198__$1;
(statearr_29224_29266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (12))){
var inst_29126 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29225_29267 = state_29198__$1;
(statearr_29225_29267[(2)] = inst_29126);

(statearr_29225_29267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (2))){
var inst_29113 = (state_29198[(10)]);
var inst_29113__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29198__$1 = (function (){var statearr_29226 = state_29198;
(statearr_29226[(10)] = inst_29113__$1);

return statearr_29226;
})();
if(cljs.core.truth_(inst_29113__$1)){
var statearr_29227_29268 = state_29198__$1;
(statearr_29227_29268[(1)] = (5));

} else {
var statearr_29228_29269 = state_29198__$1;
(statearr_29228_29269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (23))){
var inst_29156 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29198__$1 = state_29198;
if(inst_29156){
var statearr_29229_29270 = state_29198__$1;
(statearr_29229_29270[(1)] = (25));

} else {
var statearr_29230_29271 = state_29198__$1;
(statearr_29230_29271[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (35))){
var state_29198__$1 = state_29198;
var statearr_29231_29272 = state_29198__$1;
(statearr_29231_29272[(2)] = null);

(statearr_29231_29272[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (19))){
var inst_29151 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29198__$1 = state_29198;
if(inst_29151){
var statearr_29232_29273 = state_29198__$1;
(statearr_29232_29273[(1)] = (22));

} else {
var statearr_29233_29274 = state_29198__$1;
(statearr_29233_29274[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (11))){
var inst_29122 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29234_29275 = state_29198__$1;
(statearr_29234_29275[(2)] = inst_29122);

(statearr_29234_29275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (9))){
var inst_29124 = figwheel.client.heads_up.clear.call(null);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(12),inst_29124);
} else {
if((state_val_29199 === (5))){
var inst_29115 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29198__$1 = state_29198;
var statearr_29235_29276 = state_29198__$1;
(statearr_29235_29276[(2)] = inst_29115);

(statearr_29235_29276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (14))){
var inst_29142 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29198__$1 = state_29198;
if(inst_29142){
var statearr_29236_29277 = state_29198__$1;
(statearr_29236_29277[(1)] = (18));

} else {
var statearr_29237_29278 = state_29198__$1;
(statearr_29237_29278[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (26))){
var inst_29168 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29198__$1 = state_29198;
if(inst_29168){
var statearr_29238_29279 = state_29198__$1;
(statearr_29238_29279[(1)] = (30));

} else {
var statearr_29239_29280 = state_29198__$1;
(statearr_29239_29280[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (16))){
var inst_29134 = (state_29198[(2)]);
var inst_29135 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29136 = figwheel.client.heads_up.display_exception.call(null,inst_29135);
var state_29198__$1 = (function (){var statearr_29240 = state_29198;
(statearr_29240[(13)] = inst_29134);

return statearr_29240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(17),inst_29136);
} else {
if((state_val_29199 === (30))){
var inst_29170 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29171 = figwheel.client.heads_up.display_warning.call(null,inst_29170);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(33),inst_29171);
} else {
if((state_val_29199 === (10))){
var inst_29128 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29241_29281 = state_29198__$1;
(statearr_29241_29281[(2)] = inst_29128);

(statearr_29241_29281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (18))){
var inst_29144 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29145 = figwheel.client.heads_up.display_exception.call(null,inst_29144);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(21),inst_29145);
} else {
if((state_val_29199 === (37))){
var inst_29181 = (state_29198[(2)]);
var state_29198__$1 = state_29198;
var statearr_29242_29282 = state_29198__$1;
(statearr_29242_29282[(2)] = inst_29181);

(statearr_29242_29282[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29199 === (8))){
var inst_29120 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29198__$1 = state_29198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29198__$1,(11),inst_29120);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23743__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23648__auto__,c__23743__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto____0 = (function (){
var statearr_29243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29243[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto__);

(statearr_29243[(1)] = (1));

return statearr_29243;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto____1 = (function (state_29198){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_29198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e29244){if((e29244 instanceof Object)){
var ex__23652__auto__ = e29244;
var statearr_29245_29283 = state_29198;
(statearr_29245_29283[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29284 = state_29198;
state_29198 = G__29284;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto__ = function(state_29198){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto____1.call(this,state_29198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__,msg_hist,msg_names,msg))
})();
var state__23745__auto__ = (function (){var statearr_29246 = f__23744__auto__.call(null);
(statearr_29246[(6)] = c__23743__auto__);

return statearr_29246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__,msg_hist,msg_names,msg))
);

return c__23743__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23743__auto___29313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___29313,ch){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___29313,ch){
return (function (state_29299){
var state_val_29300 = (state_29299[(1)]);
if((state_val_29300 === (1))){
var state_29299__$1 = state_29299;
var statearr_29301_29314 = state_29299__$1;
(statearr_29301_29314[(2)] = null);

(statearr_29301_29314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (2))){
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29299__$1,(4),ch);
} else {
if((state_val_29300 === (3))){
var inst_29297 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29299__$1,inst_29297);
} else {
if((state_val_29300 === (4))){
var inst_29287 = (state_29299[(7)]);
var inst_29287__$1 = (state_29299[(2)]);
var state_29299__$1 = (function (){var statearr_29302 = state_29299;
(statearr_29302[(7)] = inst_29287__$1);

return statearr_29302;
})();
if(cljs.core.truth_(inst_29287__$1)){
var statearr_29303_29315 = state_29299__$1;
(statearr_29303_29315[(1)] = (5));

} else {
var statearr_29304_29316 = state_29299__$1;
(statearr_29304_29316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (5))){
var inst_29287 = (state_29299[(7)]);
var inst_29289 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29287);
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29299__$1,(8),inst_29289);
} else {
if((state_val_29300 === (6))){
var state_29299__$1 = state_29299;
var statearr_29305_29317 = state_29299__$1;
(statearr_29305_29317[(2)] = null);

(statearr_29305_29317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (7))){
var inst_29295 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
var statearr_29306_29318 = state_29299__$1;
(statearr_29306_29318[(2)] = inst_29295);

(statearr_29306_29318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (8))){
var inst_29291 = (state_29299[(2)]);
var state_29299__$1 = (function (){var statearr_29307 = state_29299;
(statearr_29307[(8)] = inst_29291);

return statearr_29307;
})();
var statearr_29308_29319 = state_29299__$1;
(statearr_29308_29319[(2)] = null);

(statearr_29308_29319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23743__auto___29313,ch))
;
return ((function (switch__23648__auto__,c__23743__auto___29313,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23649__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23649__auto____0 = (function (){
var statearr_29309 = [null,null,null,null,null,null,null,null,null];
(statearr_29309[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23649__auto__);

(statearr_29309[(1)] = (1));

return statearr_29309;
});
var figwheel$client$heads_up_plugin_$_state_machine__23649__auto____1 = (function (state_29299){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_29299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e29310){if((e29310 instanceof Object)){
var ex__23652__auto__ = e29310;
var statearr_29311_29320 = state_29299;
(statearr_29311_29320[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29321 = state_29299;
state_29299 = G__29321;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23649__auto__ = function(state_29299){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23649__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23649__auto____1.call(this,state_29299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23649__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23649__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___29313,ch))
})();
var state__23745__auto__ = (function (){var statearr_29312 = f__23744__auto__.call(null);
(statearr_29312[(6)] = c__23743__auto___29313);

return statearr_29312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___29313,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__){
return (function (state_29327){
var state_val_29328 = (state_29327[(1)]);
if((state_val_29328 === (1))){
var inst_29322 = cljs.core.async.timeout.call(null,(3000));
var state_29327__$1 = state_29327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29327__$1,(2),inst_29322);
} else {
if((state_val_29328 === (2))){
var inst_29324 = (state_29327[(2)]);
var inst_29325 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29327__$1 = (function (){var statearr_29329 = state_29327;
(statearr_29329[(7)] = inst_29324);

return statearr_29329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29327__$1,inst_29325);
} else {
return null;
}
}
});})(c__23743__auto__))
;
return ((function (switch__23648__auto__,c__23743__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23649__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23649__auto____0 = (function (){
var statearr_29330 = [null,null,null,null,null,null,null,null];
(statearr_29330[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23649__auto__);

(statearr_29330[(1)] = (1));

return statearr_29330;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23649__auto____1 = (function (state_29327){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_29327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e29331){if((e29331 instanceof Object)){
var ex__23652__auto__ = e29331;
var statearr_29332_29334 = state_29327;
(statearr_29332_29334[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29335 = state_29327;
state_29327 = G__29335;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23649__auto__ = function(state_29327){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23649__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23649__auto____1.call(this,state_29327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23649__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23649__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__))
})();
var state__23745__auto__ = (function (){var statearr_29333 = f__23744__auto__.call(null);
(statearr_29333[(6)] = c__23743__auto__);

return statearr_29333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__))
);

return c__23743__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29342){
var state_val_29343 = (state_29342[(1)]);
if((state_val_29343 === (1))){
var inst_29336 = cljs.core.async.timeout.call(null,(2000));
var state_29342__$1 = state_29342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29342__$1,(2),inst_29336);
} else {
if((state_val_29343 === (2))){
var inst_29338 = (state_29342[(2)]);
var inst_29339 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29340 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29339);
var state_29342__$1 = (function (){var statearr_29344 = state_29342;
(statearr_29344[(7)] = inst_29338);

return statearr_29344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29342__$1,inst_29340);
} else {
return null;
}
}
});})(c__23743__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23648__auto__,c__23743__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto____0 = (function (){
var statearr_29345 = [null,null,null,null,null,null,null,null];
(statearr_29345[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto__);

(statearr_29345[(1)] = (1));

return statearr_29345;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto____1 = (function (state_29342){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_29342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e29346){if((e29346 instanceof Object)){
var ex__23652__auto__ = e29346;
var statearr_29347_29349 = state_29342;
(statearr_29347_29349[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29350 = state_29342;
state_29342 = G__29350;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto__ = function(state_29342){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto____1.call(this,state_29342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23745__auto__ = (function (){var statearr_29348 = f__23744__auto__.call(null);
(statearr_29348[(6)] = c__23743__auto__);

return statearr_29348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__,figwheel_version,temp__5735__auto__))
);

return c__23743__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29351){
var map__29352 = p__29351;
var map__29352__$1 = (((((!((map__29352 == null))))?(((((map__29352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29352):map__29352);
var file = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29354 = "";
var G__29354__$1 = (cljs.core.truth_(file)?[G__29354,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29354);
var G__29354__$2 = (cljs.core.truth_(line)?[G__29354__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29354__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29354__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29354__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29355){
var map__29356 = p__29355;
var map__29356__$1 = (((((!((map__29356 == null))))?(((((map__29356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29356):map__29356);
var ed = map__29356__$1;
var exception_data = cljs.core.get.call(null,map__29356__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29356__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29359 = (function (){var G__29358 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29358)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29358;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29359);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29360){
var map__29361 = p__29360;
var map__29361__$1 = (((((!((map__29361 == null))))?(((((map__29361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29361):map__29361);
var w = map__29361__$1;
var message = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29363 = cljs.core.seq.call(null,plugins);
var chunk__29364 = null;
var count__29365 = (0);
var i__29366 = (0);
while(true){
if((i__29366 < count__29365)){
var vec__29373 = cljs.core._nth.call(null,chunk__29364,i__29366);
var k = cljs.core.nth.call(null,vec__29373,(0),null);
var plugin = cljs.core.nth.call(null,vec__29373,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29379 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29363,chunk__29364,count__29365,i__29366,pl_29379,vec__29373,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29379.call(null,msg_hist);
});})(seq__29363,chunk__29364,count__29365,i__29366,pl_29379,vec__29373,k,plugin))
);
} else {
}


var G__29380 = seq__29363;
var G__29381 = chunk__29364;
var G__29382 = count__29365;
var G__29383 = (i__29366 + (1));
seq__29363 = G__29380;
chunk__29364 = G__29381;
count__29365 = G__29382;
i__29366 = G__29383;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29363);
if(temp__5735__auto__){
var seq__29363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29363__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29363__$1);
var G__29384 = cljs.core.chunk_rest.call(null,seq__29363__$1);
var G__29385 = c__4550__auto__;
var G__29386 = cljs.core.count.call(null,c__4550__auto__);
var G__29387 = (0);
seq__29363 = G__29384;
chunk__29364 = G__29385;
count__29365 = G__29386;
i__29366 = G__29387;
continue;
} else {
var vec__29376 = cljs.core.first.call(null,seq__29363__$1);
var k = cljs.core.nth.call(null,vec__29376,(0),null);
var plugin = cljs.core.nth.call(null,vec__29376,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29388 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29363,chunk__29364,count__29365,i__29366,pl_29388,vec__29376,k,plugin,seq__29363__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29388.call(null,msg_hist);
});})(seq__29363,chunk__29364,count__29365,i__29366,pl_29388,vec__29376,k,plugin,seq__29363__$1,temp__5735__auto__))
);
} else {
}


var G__29389 = cljs.core.next.call(null,seq__29363__$1);
var G__29390 = null;
var G__29391 = (0);
var G__29392 = (0);
seq__29363 = G__29389;
chunk__29364 = G__29390;
count__29365 = G__29391;
i__29366 = G__29392;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29394 = arguments.length;
switch (G__29394) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29395_29400 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29396_29401 = null;
var count__29397_29402 = (0);
var i__29398_29403 = (0);
while(true){
if((i__29398_29403 < count__29397_29402)){
var msg_29404 = cljs.core._nth.call(null,chunk__29396_29401,i__29398_29403);
figwheel.client.socket.handle_incoming_message.call(null,msg_29404);


var G__29405 = seq__29395_29400;
var G__29406 = chunk__29396_29401;
var G__29407 = count__29397_29402;
var G__29408 = (i__29398_29403 + (1));
seq__29395_29400 = G__29405;
chunk__29396_29401 = G__29406;
count__29397_29402 = G__29407;
i__29398_29403 = G__29408;
continue;
} else {
var temp__5735__auto___29409 = cljs.core.seq.call(null,seq__29395_29400);
if(temp__5735__auto___29409){
var seq__29395_29410__$1 = temp__5735__auto___29409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29395_29410__$1)){
var c__4550__auto___29411 = cljs.core.chunk_first.call(null,seq__29395_29410__$1);
var G__29412 = cljs.core.chunk_rest.call(null,seq__29395_29410__$1);
var G__29413 = c__4550__auto___29411;
var G__29414 = cljs.core.count.call(null,c__4550__auto___29411);
var G__29415 = (0);
seq__29395_29400 = G__29412;
chunk__29396_29401 = G__29413;
count__29397_29402 = G__29414;
i__29398_29403 = G__29415;
continue;
} else {
var msg_29416 = cljs.core.first.call(null,seq__29395_29410__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29416);


var G__29417 = cljs.core.next.call(null,seq__29395_29410__$1);
var G__29418 = null;
var G__29419 = (0);
var G__29420 = (0);
seq__29395_29400 = G__29417;
chunk__29396_29401 = G__29418;
count__29397_29402 = G__29419;
i__29398_29403 = G__29420;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29425 = arguments.length;
var i__4731__auto___29426 = (0);
while(true){
if((i__4731__auto___29426 < len__4730__auto___29425)){
args__4736__auto__.push((arguments[i__4731__auto___29426]));

var G__29427 = (i__4731__auto___29426 + (1));
i__4731__auto___29426 = G__29427;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29422){
var map__29423 = p__29422;
var map__29423__$1 = (((((!((map__29423 == null))))?(((((map__29423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);
var opts = map__29423__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29421){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29421));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29428){if((e29428 instanceof Error)){
var e = e29428;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29428;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29429){
var map__29430 = p__29429;
var map__29430__$1 = (((((!((map__29430 == null))))?(((((map__29430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29430):map__29430);
var msg_name = cljs.core.get.call(null,map__29430__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1573202560763
