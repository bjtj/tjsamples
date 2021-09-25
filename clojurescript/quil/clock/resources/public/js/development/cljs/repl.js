// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34168){
var map__34169 = p__34168;
var map__34169__$1 = (((((!((map__34169 == null))))?(((((map__34169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34169):map__34169);
var m = map__34169__$1;
var n = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34171_34203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34172_34204 = null;
var count__34173_34205 = (0);
var i__34174_34206 = (0);
while(true){
if((i__34174_34206 < count__34173_34205)){
var f_34207 = cljs.core._nth.call(null,chunk__34172_34204,i__34174_34206);
cljs.core.println.call(null,"  ",f_34207);


var G__34208 = seq__34171_34203;
var G__34209 = chunk__34172_34204;
var G__34210 = count__34173_34205;
var G__34211 = (i__34174_34206 + (1));
seq__34171_34203 = G__34208;
chunk__34172_34204 = G__34209;
count__34173_34205 = G__34210;
i__34174_34206 = G__34211;
continue;
} else {
var temp__5735__auto___34212 = cljs.core.seq.call(null,seq__34171_34203);
if(temp__5735__auto___34212){
var seq__34171_34213__$1 = temp__5735__auto___34212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34171_34213__$1)){
var c__4550__auto___34214 = cljs.core.chunk_first.call(null,seq__34171_34213__$1);
var G__34215 = cljs.core.chunk_rest.call(null,seq__34171_34213__$1);
var G__34216 = c__4550__auto___34214;
var G__34217 = cljs.core.count.call(null,c__4550__auto___34214);
var G__34218 = (0);
seq__34171_34203 = G__34215;
chunk__34172_34204 = G__34216;
count__34173_34205 = G__34217;
i__34174_34206 = G__34218;
continue;
} else {
var f_34219 = cljs.core.first.call(null,seq__34171_34213__$1);
cljs.core.println.call(null,"  ",f_34219);


var G__34220 = cljs.core.next.call(null,seq__34171_34213__$1);
var G__34221 = null;
var G__34222 = (0);
var G__34223 = (0);
seq__34171_34203 = G__34220;
chunk__34172_34204 = G__34221;
count__34173_34205 = G__34222;
i__34174_34206 = G__34223;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34224 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34224);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34224)))?cljs.core.second.call(null,arglists_34224):arglists_34224));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34175_34225 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34176_34226 = null;
var count__34177_34227 = (0);
var i__34178_34228 = (0);
while(true){
if((i__34178_34228 < count__34177_34227)){
var vec__34189_34229 = cljs.core._nth.call(null,chunk__34176_34226,i__34178_34228);
var name_34230 = cljs.core.nth.call(null,vec__34189_34229,(0),null);
var map__34192_34231 = cljs.core.nth.call(null,vec__34189_34229,(1),null);
var map__34192_34232__$1 = (((((!((map__34192_34231 == null))))?(((((map__34192_34231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34192_34231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34192_34231):map__34192_34231);
var doc_34233 = cljs.core.get.call(null,map__34192_34232__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34234 = cljs.core.get.call(null,map__34192_34232__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34230);

cljs.core.println.call(null," ",arglists_34234);

if(cljs.core.truth_(doc_34233)){
cljs.core.println.call(null," ",doc_34233);
} else {
}


var G__34235 = seq__34175_34225;
var G__34236 = chunk__34176_34226;
var G__34237 = count__34177_34227;
var G__34238 = (i__34178_34228 + (1));
seq__34175_34225 = G__34235;
chunk__34176_34226 = G__34236;
count__34177_34227 = G__34237;
i__34178_34228 = G__34238;
continue;
} else {
var temp__5735__auto___34239 = cljs.core.seq.call(null,seq__34175_34225);
if(temp__5735__auto___34239){
var seq__34175_34240__$1 = temp__5735__auto___34239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34175_34240__$1)){
var c__4550__auto___34241 = cljs.core.chunk_first.call(null,seq__34175_34240__$1);
var G__34242 = cljs.core.chunk_rest.call(null,seq__34175_34240__$1);
var G__34243 = c__4550__auto___34241;
var G__34244 = cljs.core.count.call(null,c__4550__auto___34241);
var G__34245 = (0);
seq__34175_34225 = G__34242;
chunk__34176_34226 = G__34243;
count__34177_34227 = G__34244;
i__34178_34228 = G__34245;
continue;
} else {
var vec__34194_34246 = cljs.core.first.call(null,seq__34175_34240__$1);
var name_34247 = cljs.core.nth.call(null,vec__34194_34246,(0),null);
var map__34197_34248 = cljs.core.nth.call(null,vec__34194_34246,(1),null);
var map__34197_34249__$1 = (((((!((map__34197_34248 == null))))?(((((map__34197_34248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34197_34248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34197_34248):map__34197_34248);
var doc_34250 = cljs.core.get.call(null,map__34197_34249__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34251 = cljs.core.get.call(null,map__34197_34249__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34247);

cljs.core.println.call(null," ",arglists_34251);

if(cljs.core.truth_(doc_34250)){
cljs.core.println.call(null," ",doc_34250);
} else {
}


var G__34252 = cljs.core.next.call(null,seq__34175_34240__$1);
var G__34253 = null;
var G__34254 = (0);
var G__34255 = (0);
seq__34175_34225 = G__34252;
chunk__34176_34226 = G__34253;
count__34177_34227 = G__34254;
i__34178_34228 = G__34255;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__34199 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34200 = null;
var count__34201 = (0);
var i__34202 = (0);
while(true){
if((i__34202 < count__34201)){
var role = cljs.core._nth.call(null,chunk__34200,i__34202);
var temp__5735__auto___34256__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34256__$1)){
var spec_34257 = temp__5735__auto___34256__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34257));
} else {
}


var G__34258 = seq__34199;
var G__34259 = chunk__34200;
var G__34260 = count__34201;
var G__34261 = (i__34202 + (1));
seq__34199 = G__34258;
chunk__34200 = G__34259;
count__34201 = G__34260;
i__34202 = G__34261;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__34199);
if(temp__5735__auto____$1){
var seq__34199__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34199__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34199__$1);
var G__34262 = cljs.core.chunk_rest.call(null,seq__34199__$1);
var G__34263 = c__4550__auto__;
var G__34264 = cljs.core.count.call(null,c__4550__auto__);
var G__34265 = (0);
seq__34199 = G__34262;
chunk__34200 = G__34263;
count__34201 = G__34264;
i__34202 = G__34265;
continue;
} else {
var role = cljs.core.first.call(null,seq__34199__$1);
var temp__5735__auto___34266__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34266__$2)){
var spec_34267 = temp__5735__auto___34266__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34267));
} else {
}


var G__34268 = cljs.core.next.call(null,seq__34199__$1);
var G__34269 = null;
var G__34270 = (0);
var G__34271 = (0);
seq__34199 = G__34268;
chunk__34200 = G__34269;
count__34201 = G__34270;
i__34202 = G__34271;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34272 = cljs.core.conj.call(null,via,t);
var G__34273 = cljs.core.ex_cause.call(null,t);
via = G__34272;
t = G__34273;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34276 = datafied_throwable;
var map__34276__$1 = (((((!((map__34276 == null))))?(((((map__34276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34276):map__34276);
var via = cljs.core.get.call(null,map__34276__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34276__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34276__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34277 = cljs.core.last.call(null,via);
var map__34277__$1 = (((((!((map__34277 == null))))?(((((map__34277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34277):map__34277);
var type = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34278 = data;
var map__34278__$1 = (((((!((map__34278 == null))))?(((((map__34278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34278):map__34278);
var problems = cljs.core.get.call(null,map__34278__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34278__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34278__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34279 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34279__$1 = (((((!((map__34279 == null))))?(((((map__34279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34279):map__34279);
var top_data = map__34279__$1;
var source = cljs.core.get.call(null,map__34279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34284 = phase;
var G__34284__$1 = (((G__34284 instanceof cljs.core.Keyword))?G__34284.fqn:null);
switch (G__34284__$1) {
case "read-source":
var map__34285 = data;
var map__34285__$1 = (((((!((map__34285 == null))))?(((((map__34285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34285):map__34285);
var line = cljs.core.get.call(null,map__34285__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34285__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34287 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34287__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34287,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34287);
var G__34287__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34287__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34287__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34287__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34287__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34288 = top_data;
var G__34288__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34288,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34288);
var G__34288__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34288__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34288__$1);
var G__34288__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34288__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34288__$2);
var G__34288__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34288__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34288__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34288__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34288__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34289 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34289,(0),null);
var method = cljs.core.nth.call(null,vec__34289,(1),null);
var file = cljs.core.nth.call(null,vec__34289,(2),null);
var line = cljs.core.nth.call(null,vec__34289,(3),null);
var G__34292 = top_data;
var G__34292__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34292);
var G__34292__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34292__$1);
var G__34292__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__34292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34292__$2);
var G__34292__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34292__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34292__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34292__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34292__$4;
}

break;
case "execution":
var vec__34293 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34293,(0),null);
var method = cljs.core.nth.call(null,vec__34293,(1),null);
var file = cljs.core.nth.call(null,vec__34293,(2),null);
var line = cljs.core.nth.call(null,vec__34293,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__34293,source__$1,method,file,line,G__34284,G__34284__$1,map__34276,map__34276__$1,via,trace,phase,map__34277,map__34277__$1,type,message,data,map__34278,map__34278__$1,problems,fn,caller,map__34279,map__34279__$1,top_data,source){
return (function (p1__34275_SHARP_){
var or__4131__auto__ = (p1__34275_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34275_SHARP_);
}
});})(vec__34293,source__$1,method,file,line,G__34284,G__34284__$1,map__34276,map__34276__$1,via,trace,phase,map__34277,map__34277__$1,type,message,data,map__34278,map__34278__$1,problems,fn,caller,map__34279,map__34279__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__34296 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34296__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34296,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34296);
var G__34296__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34296__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34296__$1);
var G__34296__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__34296__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34296__$2);
var G__34296__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34296__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34296__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34296__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34296__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34284__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34300){
var map__34301 = p__34300;
var map__34301__$1 = (((((!((map__34301 == null))))?(((((map__34301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34301):map__34301);
var triage_data = map__34301__$1;
var phase = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34303 = phase;
var G__34303__$1 = (((G__34303 instanceof cljs.core.Keyword))?G__34303.fqn:null);
switch (G__34303__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34304_34313 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34305_34314 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34306_34315 = true;
var _STAR_print_fn_STAR__temp_val__34307_34316 = ((function (_STAR_print_newline_STAR__orig_val__34304_34313,_STAR_print_fn_STAR__orig_val__34305_34314,_STAR_print_newline_STAR__temp_val__34306_34315,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34304_34313,_STAR_print_fn_STAR__orig_val__34305_34314,_STAR_print_newline_STAR__temp_val__34306_34315,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34306_34315;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34307_34316;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34304_34313,_STAR_print_fn_STAR__orig_val__34305_34314,_STAR_print_newline_STAR__temp_val__34306_34315,_STAR_print_fn_STAR__temp_val__34307_34316,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34304_34313,_STAR_print_fn_STAR__orig_val__34305_34314,_STAR_print_newline_STAR__temp_val__34306_34315,_STAR_print_fn_STAR__temp_val__34307_34316,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34298_SHARP_){
return cljs.core.dissoc.call(null,p1__34298_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34304_34313,_STAR_print_fn_STAR__orig_val__34305_34314,_STAR_print_newline_STAR__temp_val__34306_34315,_STAR_print_fn_STAR__temp_val__34307_34316,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34304_34313,_STAR_print_fn_STAR__orig_val__34305_34314,_STAR_print_newline_STAR__temp_val__34306_34315,_STAR_print_fn_STAR__temp_val__34307_34316,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34305_34314;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34304_34313;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34308_34317 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34309_34318 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34310_34319 = true;
var _STAR_print_fn_STAR__temp_val__34311_34320 = ((function (_STAR_print_newline_STAR__orig_val__34308_34317,_STAR_print_fn_STAR__orig_val__34309_34318,_STAR_print_newline_STAR__temp_val__34310_34319,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34308_34317,_STAR_print_fn_STAR__orig_val__34309_34318,_STAR_print_newline_STAR__temp_val__34310_34319,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34310_34319;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34311_34320;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34308_34317,_STAR_print_fn_STAR__orig_val__34309_34318,_STAR_print_newline_STAR__temp_val__34310_34319,_STAR_print_fn_STAR__temp_val__34311_34320,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34308_34317,_STAR_print_fn_STAR__orig_val__34309_34318,_STAR_print_newline_STAR__temp_val__34310_34319,_STAR_print_fn_STAR__temp_val__34311_34320,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34299_SHARP_){
return cljs.core.dissoc.call(null,p1__34299_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34308_34317,_STAR_print_fn_STAR__orig_val__34309_34318,_STAR_print_newline_STAR__temp_val__34310_34319,_STAR_print_fn_STAR__temp_val__34311_34320,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34308_34317,_STAR_print_fn_STAR__orig_val__34309_34318,_STAR_print_newline_STAR__temp_val__34310_34319,_STAR_print_fn_STAR__temp_val__34311_34320,sb__4661__auto__,G__34303,G__34303__$1,loc,class_name,simple_class,cause_type,format,map__34301,map__34301__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34309_34318;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34308_34317;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34303__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1632532627796
