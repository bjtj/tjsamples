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
}catch (e35178){if((e35178 instanceof Error)){
var e = e35178;
return "Error: Unable to stringify";
} else {
throw e35178;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35181 = arguments.length;
switch (G__35181) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35179_SHARP_){
if(typeof p1__35179_SHARP_ === 'string'){
return p1__35179_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35179_SHARP_);
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
var len__4730__auto___35184 = arguments.length;
var i__4731__auto___35185 = (0);
while(true){
if((i__4731__auto___35185 < len__4730__auto___35184)){
args__4736__auto__.push((arguments[i__4731__auto___35185]));

var G__35186 = (i__4731__auto___35185 + (1));
i__4731__auto___35185 = G__35186;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35183){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35183));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35188 = arguments.length;
var i__4731__auto___35189 = (0);
while(true){
if((i__4731__auto___35189 < len__4730__auto___35188)){
args__4736__auto__.push((arguments[i__4731__auto___35189]));

var G__35190 = (i__4731__auto___35189 + (1));
i__4731__auto___35189 = G__35190;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35187){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35187));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35191){
var map__35192 = p__35191;
var map__35192__$1 = (((((!((map__35192 == null))))?(((((map__35192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35192):map__35192);
var message = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24577__auto___35271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___35271,ch){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___35271,ch){
return (function (state_35243){
var state_val_35244 = (state_35243[(1)]);
if((state_val_35244 === (7))){
var inst_35239 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35245_35272 = state_35243__$1;
(statearr_35245_35272[(2)] = inst_35239);

(statearr_35245_35272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (1))){
var state_35243__$1 = state_35243;
var statearr_35246_35273 = state_35243__$1;
(statearr_35246_35273[(2)] = null);

(statearr_35246_35273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (4))){
var inst_35196 = (state_35243[(7)]);
var inst_35196__$1 = (state_35243[(2)]);
var state_35243__$1 = (function (){var statearr_35247 = state_35243;
(statearr_35247[(7)] = inst_35196__$1);

return statearr_35247;
})();
if(cljs.core.truth_(inst_35196__$1)){
var statearr_35248_35274 = state_35243__$1;
(statearr_35248_35274[(1)] = (5));

} else {
var statearr_35249_35275 = state_35243__$1;
(statearr_35249_35275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (15))){
var inst_35203 = (state_35243[(8)]);
var inst_35218 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35203);
var inst_35219 = cljs.core.first.call(null,inst_35218);
var inst_35220 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35219);
var inst_35221 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35220)].join('');
var inst_35222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35221);
var state_35243__$1 = state_35243;
var statearr_35250_35276 = state_35243__$1;
(statearr_35250_35276[(2)] = inst_35222);

(statearr_35250_35276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (13))){
var inst_35227 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35251_35277 = state_35243__$1;
(statearr_35251_35277[(2)] = inst_35227);

(statearr_35251_35277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (6))){
var state_35243__$1 = state_35243;
var statearr_35252_35278 = state_35243__$1;
(statearr_35252_35278[(2)] = null);

(statearr_35252_35278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (17))){
var inst_35225 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35253_35279 = state_35243__$1;
(statearr_35253_35279[(2)] = inst_35225);

(statearr_35253_35279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (3))){
var inst_35241 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35243__$1,inst_35241);
} else {
if((state_val_35244 === (12))){
var inst_35202 = (state_35243[(9)]);
var inst_35216 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35202,opts);
var state_35243__$1 = state_35243;
if(inst_35216){
var statearr_35254_35280 = state_35243__$1;
(statearr_35254_35280[(1)] = (15));

} else {
var statearr_35255_35281 = state_35243__$1;
(statearr_35255_35281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (2))){
var state_35243__$1 = state_35243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35243__$1,(4),ch);
} else {
if((state_val_35244 === (11))){
var inst_35203 = (state_35243[(8)]);
var inst_35208 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35209 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35203);
var inst_35210 = cljs.core.async.timeout.call(null,(1000));
var inst_35211 = [inst_35209,inst_35210];
var inst_35212 = (new cljs.core.PersistentVector(null,2,(5),inst_35208,inst_35211,null));
var state_35243__$1 = state_35243;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35243__$1,(14),inst_35212);
} else {
if((state_val_35244 === (9))){
var inst_35203 = (state_35243[(8)]);
var inst_35229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35230 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35203);
var inst_35231 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35230);
var inst_35232 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35231)].join('');
var inst_35233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35232);
var state_35243__$1 = (function (){var statearr_35256 = state_35243;
(statearr_35256[(10)] = inst_35229);

return statearr_35256;
})();
var statearr_35257_35282 = state_35243__$1;
(statearr_35257_35282[(2)] = inst_35233);

(statearr_35257_35282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (5))){
var inst_35196 = (state_35243[(7)]);
var inst_35198 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35199 = (new cljs.core.PersistentArrayMap(null,2,inst_35198,null));
var inst_35200 = (new cljs.core.PersistentHashSet(null,inst_35199,null));
var inst_35201 = figwheel.client.focus_msgs.call(null,inst_35200,inst_35196);
var inst_35202 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35201);
var inst_35203 = cljs.core.first.call(null,inst_35201);
var inst_35204 = figwheel.client.autoload_QMARK_.call(null);
var state_35243__$1 = (function (){var statearr_35258 = state_35243;
(statearr_35258[(9)] = inst_35202);

(statearr_35258[(8)] = inst_35203);

return statearr_35258;
})();
if(cljs.core.truth_(inst_35204)){
var statearr_35259_35283 = state_35243__$1;
(statearr_35259_35283[(1)] = (8));

} else {
var statearr_35260_35284 = state_35243__$1;
(statearr_35260_35284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (14))){
var inst_35214 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35261_35285 = state_35243__$1;
(statearr_35261_35285[(2)] = inst_35214);

(statearr_35261_35285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (16))){
var state_35243__$1 = state_35243;
var statearr_35262_35286 = state_35243__$1;
(statearr_35262_35286[(2)] = null);

(statearr_35262_35286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (10))){
var inst_35235 = (state_35243[(2)]);
var state_35243__$1 = (function (){var statearr_35263 = state_35243;
(statearr_35263[(11)] = inst_35235);

return statearr_35263;
})();
var statearr_35264_35287 = state_35243__$1;
(statearr_35264_35287[(2)] = null);

(statearr_35264_35287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (8))){
var inst_35202 = (state_35243[(9)]);
var inst_35206 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35202,opts);
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35206)){
var statearr_35265_35288 = state_35243__$1;
(statearr_35265_35288[(1)] = (11));

} else {
var statearr_35266_35289 = state_35243__$1;
(statearr_35266_35289[(1)] = (12));

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
});})(c__24577__auto___35271,ch))
;
return ((function (switch__24410__auto__,c__24577__auto___35271,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24411__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24411__auto____0 = (function (){
var statearr_35267 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35267[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24411__auto__);

(statearr_35267[(1)] = (1));

return statearr_35267;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24411__auto____1 = (function (state_35243){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_35243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e35268){if((e35268 instanceof Object)){
var ex__24414__auto__ = e35268;
var statearr_35269_35290 = state_35243;
(statearr_35269_35290[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35291 = state_35243;
state_35243 = G__35291;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24411__auto__ = function(state_35243){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24411__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24411__auto____1.call(this,state_35243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24411__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24411__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___35271,ch))
})();
var state__24579__auto__ = (function (){var statearr_35270 = f__24578__auto__.call(null);
(statearr_35270[(6)] = c__24577__auto___35271);

return statearr_35270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___35271,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35292_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35292_SHARP_));
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
var base_path_35298 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35298){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35294 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35295 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35296 = true;
var _STAR_print_fn_STAR__temp_val__35297 = ((function (_STAR_print_newline_STAR__orig_val__35294,_STAR_print_fn_STAR__orig_val__35295,_STAR_print_newline_STAR__temp_val__35296,sb,base_path_35298){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__35294,_STAR_print_fn_STAR__orig_val__35295,_STAR_print_newline_STAR__temp_val__35296,sb,base_path_35298))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35296;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35297;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35295;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35294;
}}catch (e35293){if((e35293 instanceof Error)){
var e = e35293;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35298], null));
} else {
var e = e35293;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35298))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35299){
var map__35300 = p__35299;
var map__35300__$1 = (((((!((map__35300 == null))))?(((((map__35300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35300):map__35300);
var opts = map__35300__$1;
var build_id = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35300,map__35300__$1,opts,build_id){
return (function (p__35302){
var vec__35303 = p__35302;
var seq__35304 = cljs.core.seq.call(null,vec__35303);
var first__35305 = cljs.core.first.call(null,seq__35304);
var seq__35304__$1 = cljs.core.next.call(null,seq__35304);
var map__35306 = first__35305;
var map__35306__$1 = (((((!((map__35306 == null))))?(((((map__35306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35306):map__35306);
var msg = map__35306__$1;
var msg_name = cljs.core.get.call(null,map__35306__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35304__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35303,seq__35304,first__35305,seq__35304__$1,map__35306,map__35306__$1,msg,msg_name,_,map__35300,map__35300__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35303,seq__35304,first__35305,seq__35304__$1,map__35306,map__35306__$1,msg,msg_name,_,map__35300,map__35300__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35300,map__35300__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35308){
var vec__35309 = p__35308;
var seq__35310 = cljs.core.seq.call(null,vec__35309);
var first__35311 = cljs.core.first.call(null,seq__35310);
var seq__35310__$1 = cljs.core.next.call(null,seq__35310);
var map__35312 = first__35311;
var map__35312__$1 = (((((!((map__35312 == null))))?(((((map__35312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35312):map__35312);
var msg = map__35312__$1;
var msg_name = cljs.core.get.call(null,map__35312__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35310__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35314){
var map__35315 = p__35314;
var map__35315__$1 = (((((!((map__35315 == null))))?(((((map__35315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35315):map__35315);
var on_compile_warning = cljs.core.get.call(null,map__35315__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35315__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35315,map__35315__$1,on_compile_warning,on_compile_fail){
return (function (p__35317){
var vec__35318 = p__35317;
var seq__35319 = cljs.core.seq.call(null,vec__35318);
var first__35320 = cljs.core.first.call(null,seq__35319);
var seq__35319__$1 = cljs.core.next.call(null,seq__35319);
var map__35321 = first__35320;
var map__35321__$1 = (((((!((map__35321 == null))))?(((((map__35321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35321):map__35321);
var msg = map__35321__$1;
var msg_name = cljs.core.get.call(null,map__35321__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35319__$1;
var pred__35323 = cljs.core._EQ_;
var expr__35324 = msg_name;
if(cljs.core.truth_(pred__35323.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35324))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35323.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35324))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35315,map__35315__$1,on_compile_warning,on_compile_fail))
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
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__,msg_hist,msg_names,msg){
return (function (state_35413){
var state_val_35414 = (state_35413[(1)]);
if((state_val_35414 === (7))){
var inst_35333 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35333)){
var statearr_35415_35462 = state_35413__$1;
(statearr_35415_35462[(1)] = (8));

} else {
var statearr_35416_35463 = state_35413__$1;
(statearr_35416_35463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (20))){
var inst_35407 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35417_35464 = state_35413__$1;
(statearr_35417_35464[(2)] = inst_35407);

(statearr_35417_35464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (27))){
var inst_35403 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35418_35465 = state_35413__$1;
(statearr_35418_35465[(2)] = inst_35403);

(statearr_35418_35465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (1))){
var inst_35326 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35326)){
var statearr_35419_35466 = state_35413__$1;
(statearr_35419_35466[(1)] = (2));

} else {
var statearr_35420_35467 = state_35413__$1;
(statearr_35420_35467[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (24))){
var inst_35405 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35421_35468 = state_35413__$1;
(statearr_35421_35468[(2)] = inst_35405);

(statearr_35421_35468[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (4))){
var inst_35411 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35413__$1,inst_35411);
} else {
if((state_val_35414 === (15))){
var inst_35409 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35422_35469 = state_35413__$1;
(statearr_35422_35469[(2)] = inst_35409);

(statearr_35422_35469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (21))){
var inst_35362 = (state_35413[(2)]);
var inst_35363 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35364 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35363);
var state_35413__$1 = (function (){var statearr_35423 = state_35413;
(statearr_35423[(7)] = inst_35362);

return statearr_35423;
})();
var statearr_35424_35470 = state_35413__$1;
(statearr_35424_35470[(2)] = inst_35364);

(statearr_35424_35470[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (31))){
var inst_35392 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35413__$1 = state_35413;
if(inst_35392){
var statearr_35425_35471 = state_35413__$1;
(statearr_35425_35471[(1)] = (34));

} else {
var statearr_35426_35472 = state_35413__$1;
(statearr_35426_35472[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (32))){
var inst_35401 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35427_35473 = state_35413__$1;
(statearr_35427_35473[(2)] = inst_35401);

(statearr_35427_35473[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (33))){
var inst_35388 = (state_35413[(2)]);
var inst_35389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35390 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35389);
var state_35413__$1 = (function (){var statearr_35428 = state_35413;
(statearr_35428[(8)] = inst_35388);

return statearr_35428;
})();
var statearr_35429_35474 = state_35413__$1;
(statearr_35429_35474[(2)] = inst_35390);

(statearr_35429_35474[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (13))){
var inst_35347 = figwheel.client.heads_up.clear.call(null);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(16),inst_35347);
} else {
if((state_val_35414 === (22))){
var inst_35368 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35369 = figwheel.client.heads_up.append_warning_message.call(null,inst_35368);
var state_35413__$1 = state_35413;
var statearr_35430_35475 = state_35413__$1;
(statearr_35430_35475[(2)] = inst_35369);

(statearr_35430_35475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (36))){
var inst_35399 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35431_35476 = state_35413__$1;
(statearr_35431_35476[(2)] = inst_35399);

(statearr_35431_35476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (29))){
var inst_35379 = (state_35413[(2)]);
var inst_35380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35381 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35380);
var state_35413__$1 = (function (){var statearr_35432 = state_35413;
(statearr_35432[(9)] = inst_35379);

return statearr_35432;
})();
var statearr_35433_35477 = state_35413__$1;
(statearr_35433_35477[(2)] = inst_35381);

(statearr_35433_35477[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (6))){
var inst_35328 = (state_35413[(10)]);
var state_35413__$1 = state_35413;
var statearr_35434_35478 = state_35413__$1;
(statearr_35434_35478[(2)] = inst_35328);

(statearr_35434_35478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (28))){
var inst_35375 = (state_35413[(2)]);
var inst_35376 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35377 = figwheel.client.heads_up.display_warning.call(null,inst_35376);
var state_35413__$1 = (function (){var statearr_35435 = state_35413;
(statearr_35435[(11)] = inst_35375);

return statearr_35435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(29),inst_35377);
} else {
if((state_val_35414 === (25))){
var inst_35373 = figwheel.client.heads_up.clear.call(null);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(28),inst_35373);
} else {
if((state_val_35414 === (34))){
var inst_35394 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(37),inst_35394);
} else {
if((state_val_35414 === (17))){
var inst_35353 = (state_35413[(2)]);
var inst_35354 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35355 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35354);
var state_35413__$1 = (function (){var statearr_35436 = state_35413;
(statearr_35436[(12)] = inst_35353);

return statearr_35436;
})();
var statearr_35437_35479 = state_35413__$1;
(statearr_35437_35479[(2)] = inst_35355);

(statearr_35437_35479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (3))){
var inst_35345 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35413__$1 = state_35413;
if(inst_35345){
var statearr_35438_35480 = state_35413__$1;
(statearr_35438_35480[(1)] = (13));

} else {
var statearr_35439_35481 = state_35413__$1;
(statearr_35439_35481[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (12))){
var inst_35341 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35440_35482 = state_35413__$1;
(statearr_35440_35482[(2)] = inst_35341);

(statearr_35440_35482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (2))){
var inst_35328 = (state_35413[(10)]);
var inst_35328__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35413__$1 = (function (){var statearr_35441 = state_35413;
(statearr_35441[(10)] = inst_35328__$1);

return statearr_35441;
})();
if(cljs.core.truth_(inst_35328__$1)){
var statearr_35442_35483 = state_35413__$1;
(statearr_35442_35483[(1)] = (5));

} else {
var statearr_35443_35484 = state_35413__$1;
(statearr_35443_35484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (23))){
var inst_35371 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35413__$1 = state_35413;
if(inst_35371){
var statearr_35444_35485 = state_35413__$1;
(statearr_35444_35485[(1)] = (25));

} else {
var statearr_35445_35486 = state_35413__$1;
(statearr_35445_35486[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (35))){
var state_35413__$1 = state_35413;
var statearr_35446_35487 = state_35413__$1;
(statearr_35446_35487[(2)] = null);

(statearr_35446_35487[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (19))){
var inst_35366 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35413__$1 = state_35413;
if(inst_35366){
var statearr_35447_35488 = state_35413__$1;
(statearr_35447_35488[(1)] = (22));

} else {
var statearr_35448_35489 = state_35413__$1;
(statearr_35448_35489[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (11))){
var inst_35337 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35449_35490 = state_35413__$1;
(statearr_35449_35490[(2)] = inst_35337);

(statearr_35449_35490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (9))){
var inst_35339 = figwheel.client.heads_up.clear.call(null);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(12),inst_35339);
} else {
if((state_val_35414 === (5))){
var inst_35330 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35413__$1 = state_35413;
var statearr_35450_35491 = state_35413__$1;
(statearr_35450_35491[(2)] = inst_35330);

(statearr_35450_35491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (14))){
var inst_35357 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35413__$1 = state_35413;
if(inst_35357){
var statearr_35451_35492 = state_35413__$1;
(statearr_35451_35492[(1)] = (18));

} else {
var statearr_35452_35493 = state_35413__$1;
(statearr_35452_35493[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (26))){
var inst_35383 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35413__$1 = state_35413;
if(inst_35383){
var statearr_35453_35494 = state_35413__$1;
(statearr_35453_35494[(1)] = (30));

} else {
var statearr_35454_35495 = state_35413__$1;
(statearr_35454_35495[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (16))){
var inst_35349 = (state_35413[(2)]);
var inst_35350 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35351 = figwheel.client.heads_up.display_exception.call(null,inst_35350);
var state_35413__$1 = (function (){var statearr_35455 = state_35413;
(statearr_35455[(13)] = inst_35349);

return statearr_35455;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(17),inst_35351);
} else {
if((state_val_35414 === (30))){
var inst_35385 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35386 = figwheel.client.heads_up.display_warning.call(null,inst_35385);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(33),inst_35386);
} else {
if((state_val_35414 === (10))){
var inst_35343 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35456_35496 = state_35413__$1;
(statearr_35456_35496[(2)] = inst_35343);

(statearr_35456_35496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (18))){
var inst_35359 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35360 = figwheel.client.heads_up.display_exception.call(null,inst_35359);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(21),inst_35360);
} else {
if((state_val_35414 === (37))){
var inst_35396 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35457_35497 = state_35413__$1;
(statearr_35457_35497[(2)] = inst_35396);

(statearr_35457_35497[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (8))){
var inst_35335 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(11),inst_35335);
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
});})(c__24577__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24410__auto__,c__24577__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto____0 = (function (){
var statearr_35458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35458[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto__);

(statearr_35458[(1)] = (1));

return statearr_35458;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto____1 = (function (state_35413){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_35413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e35459){if((e35459 instanceof Object)){
var ex__24414__auto__ = e35459;
var statearr_35460_35498 = state_35413;
(statearr_35460_35498[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35499 = state_35413;
state_35413 = G__35499;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto__ = function(state_35413){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto____1.call(this,state_35413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__,msg_hist,msg_names,msg))
})();
var state__24579__auto__ = (function (){var statearr_35461 = f__24578__auto__.call(null);
(statearr_35461[(6)] = c__24577__auto__);

return statearr_35461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,msg_hist,msg_names,msg))
);

return c__24577__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24577__auto___35528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___35528,ch){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___35528,ch){
return (function (state_35514){
var state_val_35515 = (state_35514[(1)]);
if((state_val_35515 === (1))){
var state_35514__$1 = state_35514;
var statearr_35516_35529 = state_35514__$1;
(statearr_35516_35529[(2)] = null);

(statearr_35516_35529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35515 === (2))){
var state_35514__$1 = state_35514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35514__$1,(4),ch);
} else {
if((state_val_35515 === (3))){
var inst_35512 = (state_35514[(2)]);
var state_35514__$1 = state_35514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35514__$1,inst_35512);
} else {
if((state_val_35515 === (4))){
var inst_35502 = (state_35514[(7)]);
var inst_35502__$1 = (state_35514[(2)]);
var state_35514__$1 = (function (){var statearr_35517 = state_35514;
(statearr_35517[(7)] = inst_35502__$1);

return statearr_35517;
})();
if(cljs.core.truth_(inst_35502__$1)){
var statearr_35518_35530 = state_35514__$1;
(statearr_35518_35530[(1)] = (5));

} else {
var statearr_35519_35531 = state_35514__$1;
(statearr_35519_35531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35515 === (5))){
var inst_35502 = (state_35514[(7)]);
var inst_35504 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35502);
var state_35514__$1 = state_35514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35514__$1,(8),inst_35504);
} else {
if((state_val_35515 === (6))){
var state_35514__$1 = state_35514;
var statearr_35520_35532 = state_35514__$1;
(statearr_35520_35532[(2)] = null);

(statearr_35520_35532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35515 === (7))){
var inst_35510 = (state_35514[(2)]);
var state_35514__$1 = state_35514;
var statearr_35521_35533 = state_35514__$1;
(statearr_35521_35533[(2)] = inst_35510);

(statearr_35521_35533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35515 === (8))){
var inst_35506 = (state_35514[(2)]);
var state_35514__$1 = (function (){var statearr_35522 = state_35514;
(statearr_35522[(8)] = inst_35506);

return statearr_35522;
})();
var statearr_35523_35534 = state_35514__$1;
(statearr_35523_35534[(2)] = null);

(statearr_35523_35534[(1)] = (2));


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
});})(c__24577__auto___35528,ch))
;
return ((function (switch__24410__auto__,c__24577__auto___35528,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24411__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24411__auto____0 = (function (){
var statearr_35524 = [null,null,null,null,null,null,null,null,null];
(statearr_35524[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24411__auto__);

(statearr_35524[(1)] = (1));

return statearr_35524;
});
var figwheel$client$heads_up_plugin_$_state_machine__24411__auto____1 = (function (state_35514){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_35514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e35525){if((e35525 instanceof Object)){
var ex__24414__auto__ = e35525;
var statearr_35526_35535 = state_35514;
(statearr_35526_35535[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35536 = state_35514;
state_35514 = G__35536;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24411__auto__ = function(state_35514){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24411__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24411__auto____1.call(this,state_35514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24411__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24411__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___35528,ch))
})();
var state__24579__auto__ = (function (){var statearr_35527 = f__24578__auto__.call(null);
(statearr_35527[(6)] = c__24577__auto___35528);

return statearr_35527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___35528,ch))
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
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__){
return (function (state_35542){
var state_val_35543 = (state_35542[(1)]);
if((state_val_35543 === (1))){
var inst_35537 = cljs.core.async.timeout.call(null,(3000));
var state_35542__$1 = state_35542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35542__$1,(2),inst_35537);
} else {
if((state_val_35543 === (2))){
var inst_35539 = (state_35542[(2)]);
var inst_35540 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35542__$1 = (function (){var statearr_35544 = state_35542;
(statearr_35544[(7)] = inst_35539);

return statearr_35544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35542__$1,inst_35540);
} else {
return null;
}
}
});})(c__24577__auto__))
;
return ((function (switch__24410__auto__,c__24577__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24411__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24411__auto____0 = (function (){
var statearr_35545 = [null,null,null,null,null,null,null,null];
(statearr_35545[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24411__auto__);

(statearr_35545[(1)] = (1));

return statearr_35545;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24411__auto____1 = (function (state_35542){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_35542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e35546){if((e35546 instanceof Object)){
var ex__24414__auto__ = e35546;
var statearr_35547_35549 = state_35542;
(statearr_35547_35549[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35550 = state_35542;
state_35542 = G__35550;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24411__auto__ = function(state_35542){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24411__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24411__auto____1.call(this,state_35542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24411__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24411__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_35548 = f__24578__auto__.call(null);
(statearr_35548[(6)] = c__24577__auto__);

return statearr_35548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
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
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__,figwheel_version,temp__5735__auto__){
return (function (state_35557){
var state_val_35558 = (state_35557[(1)]);
if((state_val_35558 === (1))){
var inst_35551 = cljs.core.async.timeout.call(null,(2000));
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(2),inst_35551);
} else {
if((state_val_35558 === (2))){
var inst_35553 = (state_35557[(2)]);
var inst_35554 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35555 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35554);
var state_35557__$1 = (function (){var statearr_35559 = state_35557;
(statearr_35559[(7)] = inst_35553);

return statearr_35559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35557__$1,inst_35555);
} else {
return null;
}
}
});})(c__24577__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__24410__auto__,c__24577__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto____0 = (function (){
var statearr_35560 = [null,null,null,null,null,null,null,null];
(statearr_35560[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto__);

(statearr_35560[(1)] = (1));

return statearr_35560;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto____1 = (function (state_35557){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_35557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e35561){if((e35561 instanceof Object)){
var ex__24414__auto__ = e35561;
var statearr_35562_35564 = state_35557;
(statearr_35562_35564[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35565 = state_35557;
state_35557 = G__35565;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto__ = function(state_35557){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto____1.call(this,state_35557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__,figwheel_version,temp__5735__auto__))
})();
var state__24579__auto__ = (function (){var statearr_35563 = f__24578__auto__.call(null);
(statearr_35563[(6)] = c__24577__auto__);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,figwheel_version,temp__5735__auto__))
);

return c__24577__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35566){
var map__35567 = p__35566;
var map__35567__$1 = (((((!((map__35567 == null))))?(((((map__35567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35567):map__35567);
var file = cljs.core.get.call(null,map__35567__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35567__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35567__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35569 = "";
var G__35569__$1 = (cljs.core.truth_(file)?[G__35569,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35569);
var G__35569__$2 = (cljs.core.truth_(line)?[G__35569__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35569__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__35569__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35569__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35570){
var map__35571 = p__35570;
var map__35571__$1 = (((((!((map__35571 == null))))?(((((map__35571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35571):map__35571);
var ed = map__35571__$1;
var exception_data = cljs.core.get.call(null,map__35571__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35571__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35574 = (function (){var G__35573 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35573)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__35573;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35574);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35575){
var map__35576 = p__35575;
var map__35576__$1 = (((((!((map__35576 == null))))?(((((map__35576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35576):map__35576);
var w = map__35576__$1;
var message = cljs.core.get.call(null,map__35576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\development\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\development\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__35578 = cljs.core.seq.call(null,plugins);
var chunk__35579 = null;
var count__35580 = (0);
var i__35581 = (0);
while(true){
if((i__35581 < count__35580)){
var vec__35588 = cljs.core._nth.call(null,chunk__35579,i__35581);
var k = cljs.core.nth.call(null,vec__35588,(0),null);
var plugin = cljs.core.nth.call(null,vec__35588,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35594 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35578,chunk__35579,count__35580,i__35581,pl_35594,vec__35588,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35594.call(null,msg_hist);
});})(seq__35578,chunk__35579,count__35580,i__35581,pl_35594,vec__35588,k,plugin))
);
} else {
}


var G__35595 = seq__35578;
var G__35596 = chunk__35579;
var G__35597 = count__35580;
var G__35598 = (i__35581 + (1));
seq__35578 = G__35595;
chunk__35579 = G__35596;
count__35580 = G__35597;
i__35581 = G__35598;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35578);
if(temp__5735__auto__){
var seq__35578__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35578__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35578__$1);
var G__35599 = cljs.core.chunk_rest.call(null,seq__35578__$1);
var G__35600 = c__4550__auto__;
var G__35601 = cljs.core.count.call(null,c__4550__auto__);
var G__35602 = (0);
seq__35578 = G__35599;
chunk__35579 = G__35600;
count__35580 = G__35601;
i__35581 = G__35602;
continue;
} else {
var vec__35591 = cljs.core.first.call(null,seq__35578__$1);
var k = cljs.core.nth.call(null,vec__35591,(0),null);
var plugin = cljs.core.nth.call(null,vec__35591,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35603 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35578,chunk__35579,count__35580,i__35581,pl_35603,vec__35591,k,plugin,seq__35578__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35603.call(null,msg_hist);
});})(seq__35578,chunk__35579,count__35580,i__35581,pl_35603,vec__35591,k,plugin,seq__35578__$1,temp__5735__auto__))
);
} else {
}


var G__35604 = cljs.core.next.call(null,seq__35578__$1);
var G__35605 = null;
var G__35606 = (0);
var G__35607 = (0);
seq__35578 = G__35604;
chunk__35579 = G__35605;
count__35580 = G__35606;
i__35581 = G__35607;
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
var G__35609 = arguments.length;
switch (G__35609) {
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

var seq__35610_35615 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35611_35616 = null;
var count__35612_35617 = (0);
var i__35613_35618 = (0);
while(true){
if((i__35613_35618 < count__35612_35617)){
var msg_35619 = cljs.core._nth.call(null,chunk__35611_35616,i__35613_35618);
figwheel.client.socket.handle_incoming_message.call(null,msg_35619);


var G__35620 = seq__35610_35615;
var G__35621 = chunk__35611_35616;
var G__35622 = count__35612_35617;
var G__35623 = (i__35613_35618 + (1));
seq__35610_35615 = G__35620;
chunk__35611_35616 = G__35621;
count__35612_35617 = G__35622;
i__35613_35618 = G__35623;
continue;
} else {
var temp__5735__auto___35624 = cljs.core.seq.call(null,seq__35610_35615);
if(temp__5735__auto___35624){
var seq__35610_35625__$1 = temp__5735__auto___35624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35610_35625__$1)){
var c__4550__auto___35626 = cljs.core.chunk_first.call(null,seq__35610_35625__$1);
var G__35627 = cljs.core.chunk_rest.call(null,seq__35610_35625__$1);
var G__35628 = c__4550__auto___35626;
var G__35629 = cljs.core.count.call(null,c__4550__auto___35626);
var G__35630 = (0);
seq__35610_35615 = G__35627;
chunk__35611_35616 = G__35628;
count__35612_35617 = G__35629;
i__35613_35618 = G__35630;
continue;
} else {
var msg_35631 = cljs.core.first.call(null,seq__35610_35625__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35631);


var G__35632 = cljs.core.next.call(null,seq__35610_35625__$1);
var G__35633 = null;
var G__35634 = (0);
var G__35635 = (0);
seq__35610_35615 = G__35632;
chunk__35611_35616 = G__35633;
count__35612_35617 = G__35634;
i__35613_35618 = G__35635;
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
var len__4730__auto___35640 = arguments.length;
var i__4731__auto___35641 = (0);
while(true){
if((i__4731__auto___35641 < len__4730__auto___35640)){
args__4736__auto__.push((arguments[i__4731__auto___35641]));

var G__35642 = (i__4731__auto___35641 + (1));
i__4731__auto___35641 = G__35642;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35637){
var map__35638 = p__35637;
var map__35638__$1 = (((((!((map__35638 == null))))?(((((map__35638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35638):map__35638);
var opts = map__35638__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35636){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35636));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35643){if((e35643 instanceof Error)){
var e = e35643;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35643;

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
return (function (p__35644){
var map__35645 = p__35644;
var map__35645__$1 = (((((!((map__35645 == null))))?(((((map__35645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35645):map__35645);
var msg_name = cljs.core.get.call(null,map__35645__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1632532628575
