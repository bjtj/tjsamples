// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28616){
var map__28617 = p__28616;
var map__28617__$1 = (((((!((map__28617 == null))))?(((((map__28617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28617):map__28617);
var m = map__28617__$1;
var n = cljs.core.get.call(null,map__28617__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28619_28651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28620_28652 = null;
var count__28621_28653 = (0);
var i__28622_28654 = (0);
while(true){
if((i__28622_28654 < count__28621_28653)){
var f_28655 = cljs.core._nth.call(null,chunk__28620_28652,i__28622_28654);
cljs.core.println.call(null,"  ",f_28655);


var G__28656 = seq__28619_28651;
var G__28657 = chunk__28620_28652;
var G__28658 = count__28621_28653;
var G__28659 = (i__28622_28654 + (1));
seq__28619_28651 = G__28656;
chunk__28620_28652 = G__28657;
count__28621_28653 = G__28658;
i__28622_28654 = G__28659;
continue;
} else {
var temp__5735__auto___28660 = cljs.core.seq.call(null,seq__28619_28651);
if(temp__5735__auto___28660){
var seq__28619_28661__$1 = temp__5735__auto___28660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28619_28661__$1)){
var c__4550__auto___28662 = cljs.core.chunk_first.call(null,seq__28619_28661__$1);
var G__28663 = cljs.core.chunk_rest.call(null,seq__28619_28661__$1);
var G__28664 = c__4550__auto___28662;
var G__28665 = cljs.core.count.call(null,c__4550__auto___28662);
var G__28666 = (0);
seq__28619_28651 = G__28663;
chunk__28620_28652 = G__28664;
count__28621_28653 = G__28665;
i__28622_28654 = G__28666;
continue;
} else {
var f_28667 = cljs.core.first.call(null,seq__28619_28661__$1);
cljs.core.println.call(null,"  ",f_28667);


var G__28668 = cljs.core.next.call(null,seq__28619_28661__$1);
var G__28669 = null;
var G__28670 = (0);
var G__28671 = (0);
seq__28619_28651 = G__28668;
chunk__28620_28652 = G__28669;
count__28621_28653 = G__28670;
i__28622_28654 = G__28671;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28672 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28672);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28672)))?cljs.core.second.call(null,arglists_28672):arglists_28672));
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
var seq__28623_28673 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28624_28674 = null;
var count__28625_28675 = (0);
var i__28626_28676 = (0);
while(true){
if((i__28626_28676 < count__28625_28675)){
var vec__28637_28677 = cljs.core._nth.call(null,chunk__28624_28674,i__28626_28676);
var name_28678 = cljs.core.nth.call(null,vec__28637_28677,(0),null);
var map__28640_28679 = cljs.core.nth.call(null,vec__28637_28677,(1),null);
var map__28640_28680__$1 = (((((!((map__28640_28679 == null))))?(((((map__28640_28679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28640_28679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28640_28679):map__28640_28679);
var doc_28681 = cljs.core.get.call(null,map__28640_28680__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28682 = cljs.core.get.call(null,map__28640_28680__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28678);

cljs.core.println.call(null," ",arglists_28682);

if(cljs.core.truth_(doc_28681)){
cljs.core.println.call(null," ",doc_28681);
} else {
}


var G__28683 = seq__28623_28673;
var G__28684 = chunk__28624_28674;
var G__28685 = count__28625_28675;
var G__28686 = (i__28626_28676 + (1));
seq__28623_28673 = G__28683;
chunk__28624_28674 = G__28684;
count__28625_28675 = G__28685;
i__28626_28676 = G__28686;
continue;
} else {
var temp__5735__auto___28687 = cljs.core.seq.call(null,seq__28623_28673);
if(temp__5735__auto___28687){
var seq__28623_28688__$1 = temp__5735__auto___28687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28623_28688__$1)){
var c__4550__auto___28689 = cljs.core.chunk_first.call(null,seq__28623_28688__$1);
var G__28690 = cljs.core.chunk_rest.call(null,seq__28623_28688__$1);
var G__28691 = c__4550__auto___28689;
var G__28692 = cljs.core.count.call(null,c__4550__auto___28689);
var G__28693 = (0);
seq__28623_28673 = G__28690;
chunk__28624_28674 = G__28691;
count__28625_28675 = G__28692;
i__28626_28676 = G__28693;
continue;
} else {
var vec__28642_28694 = cljs.core.first.call(null,seq__28623_28688__$1);
var name_28695 = cljs.core.nth.call(null,vec__28642_28694,(0),null);
var map__28645_28696 = cljs.core.nth.call(null,vec__28642_28694,(1),null);
var map__28645_28697__$1 = (((((!((map__28645_28696 == null))))?(((((map__28645_28696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28645_28696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28645_28696):map__28645_28696);
var doc_28698 = cljs.core.get.call(null,map__28645_28697__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28699 = cljs.core.get.call(null,map__28645_28697__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28695);

cljs.core.println.call(null," ",arglists_28699);

if(cljs.core.truth_(doc_28698)){
cljs.core.println.call(null," ",doc_28698);
} else {
}


var G__28700 = cljs.core.next.call(null,seq__28623_28688__$1);
var G__28701 = null;
var G__28702 = (0);
var G__28703 = (0);
seq__28623_28673 = G__28700;
chunk__28624_28674 = G__28701;
count__28625_28675 = G__28702;
i__28626_28676 = G__28703;
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

var seq__28647 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28648 = null;
var count__28649 = (0);
var i__28650 = (0);
while(true){
if((i__28650 < count__28649)){
var role = cljs.core._nth.call(null,chunk__28648,i__28650);
var temp__5735__auto___28704__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28704__$1)){
var spec_28705 = temp__5735__auto___28704__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28705));
} else {
}


var G__28706 = seq__28647;
var G__28707 = chunk__28648;
var G__28708 = count__28649;
var G__28709 = (i__28650 + (1));
seq__28647 = G__28706;
chunk__28648 = G__28707;
count__28649 = G__28708;
i__28650 = G__28709;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28647);
if(temp__5735__auto____$1){
var seq__28647__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28647__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28647__$1);
var G__28710 = cljs.core.chunk_rest.call(null,seq__28647__$1);
var G__28711 = c__4550__auto__;
var G__28712 = cljs.core.count.call(null,c__4550__auto__);
var G__28713 = (0);
seq__28647 = G__28710;
chunk__28648 = G__28711;
count__28649 = G__28712;
i__28650 = G__28713;
continue;
} else {
var role = cljs.core.first.call(null,seq__28647__$1);
var temp__5735__auto___28714__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28714__$2)){
var spec_28715 = temp__5735__auto___28714__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28715));
} else {
}


var G__28716 = cljs.core.next.call(null,seq__28647__$1);
var G__28717 = null;
var G__28718 = (0);
var G__28719 = (0);
seq__28647 = G__28716;
chunk__28648 = G__28717;
count__28649 = G__28718;
i__28650 = G__28719;
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
var G__28720 = cljs.core.conj.call(null,via,t);
var G__28721 = cljs.core.ex_cause.call(null,t);
via = G__28720;
t = G__28721;
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
var map__28724 = datafied_throwable;
var map__28724__$1 = (((((!((map__28724 == null))))?(((((map__28724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28724):map__28724);
var via = cljs.core.get.call(null,map__28724__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28724__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28724__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28725 = cljs.core.last.call(null,via);
var map__28725__$1 = (((((!((map__28725 == null))))?(((((map__28725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28725):map__28725);
var type = cljs.core.get.call(null,map__28725__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28725__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28725__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28726 = data;
var map__28726__$1 = (((((!((map__28726 == null))))?(((((map__28726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28726):map__28726);
var problems = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28727 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28727__$1 = (((((!((map__28727 == null))))?(((((map__28727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28727):map__28727);
var top_data = map__28727__$1;
var source = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28732 = phase;
var G__28732__$1 = (((G__28732 instanceof cljs.core.Keyword))?G__28732.fqn:null);
switch (G__28732__$1) {
case "read-source":
var map__28733 = data;
var map__28733__$1 = (((((!((map__28733 == null))))?(((((map__28733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28733):map__28733);
var line = cljs.core.get.call(null,map__28733__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28733__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28735 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28735__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28735,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28735);
var G__28735__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28735__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28735__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28735__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28735__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28736 = top_data;
var G__28736__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28736,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28736);
var G__28736__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28736__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28736__$1);
var G__28736__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28736__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28736__$2);
var G__28736__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28736__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28736__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28736__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28736__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28737 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28737,(0),null);
var method = cljs.core.nth.call(null,vec__28737,(1),null);
var file = cljs.core.nth.call(null,vec__28737,(2),null);
var line = cljs.core.nth.call(null,vec__28737,(3),null);
var G__28740 = top_data;
var G__28740__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28740,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28740);
var G__28740__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28740__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28740__$1);
var G__28740__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28740__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28740__$2);
var G__28740__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28740__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28740__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28740__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28740__$4;
}

break;
case "execution":
var vec__28741 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28741,(0),null);
var method = cljs.core.nth.call(null,vec__28741,(1),null);
var file = cljs.core.nth.call(null,vec__28741,(2),null);
var line = cljs.core.nth.call(null,vec__28741,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28741,source__$1,method,file,line,G__28732,G__28732__$1,map__28724,map__28724__$1,via,trace,phase,map__28725,map__28725__$1,type,message,data,map__28726,map__28726__$1,problems,fn,caller,map__28727,map__28727__$1,top_data,source){
return (function (p1__28723_SHARP_){
var or__4131__auto__ = (p1__28723_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28723_SHARP_);
}
});})(vec__28741,source__$1,method,file,line,G__28732,G__28732__$1,map__28724,map__28724__$1,via,trace,phase,map__28725,map__28725__$1,type,message,data,map__28726,map__28726__$1,problems,fn,caller,map__28727,map__28727__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28744 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28744__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28744,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28744);
var G__28744__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28744__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28744__$1);
var G__28744__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__28744__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28744__$2);
var G__28744__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28744__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28744__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28744__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28744__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28732__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28748){
var map__28749 = p__28748;
var map__28749__$1 = (((((!((map__28749 == null))))?(((((map__28749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28749):map__28749);
var triage_data = map__28749__$1;
var phase = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__28751 = phase;
var G__28751__$1 = (((G__28751 instanceof cljs.core.Keyword))?G__28751.fqn:null);
switch (G__28751__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28752_28761 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28753_28762 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28754_28763 = true;
var _STAR_print_fn_STAR__temp_val__28755_28764 = ((function (_STAR_print_newline_STAR__orig_val__28752_28761,_STAR_print_fn_STAR__orig_val__28753_28762,_STAR_print_newline_STAR__temp_val__28754_28763,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28752_28761,_STAR_print_fn_STAR__orig_val__28753_28762,_STAR_print_newline_STAR__temp_val__28754_28763,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28754_28763;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28755_28764;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28752_28761,_STAR_print_fn_STAR__orig_val__28753_28762,_STAR_print_newline_STAR__temp_val__28754_28763,_STAR_print_fn_STAR__temp_val__28755_28764,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28752_28761,_STAR_print_fn_STAR__orig_val__28753_28762,_STAR_print_newline_STAR__temp_val__28754_28763,_STAR_print_fn_STAR__temp_val__28755_28764,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28746_SHARP_){
return cljs.core.dissoc.call(null,p1__28746_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28752_28761,_STAR_print_fn_STAR__orig_val__28753_28762,_STAR_print_newline_STAR__temp_val__28754_28763,_STAR_print_fn_STAR__temp_val__28755_28764,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28752_28761,_STAR_print_fn_STAR__orig_val__28753_28762,_STAR_print_newline_STAR__temp_val__28754_28763,_STAR_print_fn_STAR__temp_val__28755_28764,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28753_28762;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28752_28761;
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
var _STAR_print_newline_STAR__orig_val__28756_28765 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28757_28766 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28758_28767 = true;
var _STAR_print_fn_STAR__temp_val__28759_28768 = ((function (_STAR_print_newline_STAR__orig_val__28756_28765,_STAR_print_fn_STAR__orig_val__28757_28766,_STAR_print_newline_STAR__temp_val__28758_28767,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28756_28765,_STAR_print_fn_STAR__orig_val__28757_28766,_STAR_print_newline_STAR__temp_val__28758_28767,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28758_28767;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28759_28768;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28756_28765,_STAR_print_fn_STAR__orig_val__28757_28766,_STAR_print_newline_STAR__temp_val__28758_28767,_STAR_print_fn_STAR__temp_val__28759_28768,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28756_28765,_STAR_print_fn_STAR__orig_val__28757_28766,_STAR_print_newline_STAR__temp_val__28758_28767,_STAR_print_fn_STAR__temp_val__28759_28768,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28747_SHARP_){
return cljs.core.dissoc.call(null,p1__28747_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28756_28765,_STAR_print_fn_STAR__orig_val__28757_28766,_STAR_print_newline_STAR__temp_val__28758_28767,_STAR_print_fn_STAR__temp_val__28759_28768,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28756_28765,_STAR_print_fn_STAR__orig_val__28757_28766,_STAR_print_newline_STAR__temp_val__28758_28767,_STAR_print_fn_STAR__temp_val__28759_28768,sb__4661__auto__,G__28751,G__28751__$1,loc,class_name,simple_class,cause_type,format,map__28749,map__28749__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28757_28766;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28756_28765;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28751__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1573202560481
