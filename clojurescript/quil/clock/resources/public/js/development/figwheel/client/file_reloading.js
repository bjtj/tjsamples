// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27076_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27076_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27077 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27078 = null;
var count__27079 = (0);
var i__27080 = (0);
while(true){
if((i__27080 < count__27079)){
var n = cljs.core._nth.call(null,chunk__27078,i__27080);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27081 = seq__27077;
var G__27082 = chunk__27078;
var G__27083 = count__27079;
var G__27084 = (i__27080 + (1));
seq__27077 = G__27081;
chunk__27078 = G__27082;
count__27079 = G__27083;
i__27080 = G__27084;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27077);
if(temp__5735__auto__){
var seq__27077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27077__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27077__$1);
var G__27085 = cljs.core.chunk_rest.call(null,seq__27077__$1);
var G__27086 = c__4550__auto__;
var G__27087 = cljs.core.count.call(null,c__4550__auto__);
var G__27088 = (0);
seq__27077 = G__27085;
chunk__27078 = G__27086;
count__27079 = G__27087;
i__27080 = G__27088;
continue;
} else {
var n = cljs.core.first.call(null,seq__27077__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27089 = cljs.core.next.call(null,seq__27077__$1);
var G__27090 = null;
var G__27091 = (0);
var G__27092 = (0);
seq__27077 = G__27089;
chunk__27078 = G__27090;
count__27079 = G__27091;
i__27080 = G__27092;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27093){
var vec__27094 = p__27093;
var _ = cljs.core.nth.call(null,vec__27094,(0),null);
var v = cljs.core.nth.call(null,vec__27094,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27097){
var vec__27098 = p__27097;
var k = cljs.core.nth.call(null,vec__27098,(0),null);
var v = cljs.core.nth.call(null,vec__27098,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27110_27118 = cljs.core.seq.call(null,deps);
var chunk__27111_27119 = null;
var count__27112_27120 = (0);
var i__27113_27121 = (0);
while(true){
if((i__27113_27121 < count__27112_27120)){
var dep_27122 = cljs.core._nth.call(null,chunk__27111_27119,i__27113_27121);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27122;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27122));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27122,(depth + (1)),state);
} else {
}


var G__27123 = seq__27110_27118;
var G__27124 = chunk__27111_27119;
var G__27125 = count__27112_27120;
var G__27126 = (i__27113_27121 + (1));
seq__27110_27118 = G__27123;
chunk__27111_27119 = G__27124;
count__27112_27120 = G__27125;
i__27113_27121 = G__27126;
continue;
} else {
var temp__5735__auto___27127 = cljs.core.seq.call(null,seq__27110_27118);
if(temp__5735__auto___27127){
var seq__27110_27128__$1 = temp__5735__auto___27127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27110_27128__$1)){
var c__4550__auto___27129 = cljs.core.chunk_first.call(null,seq__27110_27128__$1);
var G__27130 = cljs.core.chunk_rest.call(null,seq__27110_27128__$1);
var G__27131 = c__4550__auto___27129;
var G__27132 = cljs.core.count.call(null,c__4550__auto___27129);
var G__27133 = (0);
seq__27110_27118 = G__27130;
chunk__27111_27119 = G__27131;
count__27112_27120 = G__27132;
i__27113_27121 = G__27133;
continue;
} else {
var dep_27134 = cljs.core.first.call(null,seq__27110_27128__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27134;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27134));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27134,(depth + (1)),state);
} else {
}


var G__27135 = cljs.core.next.call(null,seq__27110_27128__$1);
var G__27136 = null;
var G__27137 = (0);
var G__27138 = (0);
seq__27110_27118 = G__27135;
chunk__27111_27119 = G__27136;
count__27112_27120 = G__27137;
i__27113_27121 = G__27138;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27114){
var vec__27115 = p__27114;
var seq__27116 = cljs.core.seq.call(null,vec__27115);
var first__27117 = cljs.core.first.call(null,seq__27116);
var seq__27116__$1 = cljs.core.next.call(null,seq__27116);
var x = first__27117;
var xs = seq__27116__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27115,seq__27116,first__27117,seq__27116__$1,x,xs,get_deps__$1){
return (function (p1__27101_SHARP_){
return clojure.set.difference.call(null,p1__27101_SHARP_,x);
});})(vec__27115,seq__27116,first__27117,seq__27116__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27139 = cljs.core.seq.call(null,provides);
var chunk__27140 = null;
var count__27141 = (0);
var i__27142 = (0);
while(true){
if((i__27142 < count__27141)){
var prov = cljs.core._nth.call(null,chunk__27140,i__27142);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27151_27159 = cljs.core.seq.call(null,requires);
var chunk__27152_27160 = null;
var count__27153_27161 = (0);
var i__27154_27162 = (0);
while(true){
if((i__27154_27162 < count__27153_27161)){
var req_27163 = cljs.core._nth.call(null,chunk__27152_27160,i__27154_27162);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27163,prov);


var G__27164 = seq__27151_27159;
var G__27165 = chunk__27152_27160;
var G__27166 = count__27153_27161;
var G__27167 = (i__27154_27162 + (1));
seq__27151_27159 = G__27164;
chunk__27152_27160 = G__27165;
count__27153_27161 = G__27166;
i__27154_27162 = G__27167;
continue;
} else {
var temp__5735__auto___27168 = cljs.core.seq.call(null,seq__27151_27159);
if(temp__5735__auto___27168){
var seq__27151_27169__$1 = temp__5735__auto___27168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27151_27169__$1)){
var c__4550__auto___27170 = cljs.core.chunk_first.call(null,seq__27151_27169__$1);
var G__27171 = cljs.core.chunk_rest.call(null,seq__27151_27169__$1);
var G__27172 = c__4550__auto___27170;
var G__27173 = cljs.core.count.call(null,c__4550__auto___27170);
var G__27174 = (0);
seq__27151_27159 = G__27171;
chunk__27152_27160 = G__27172;
count__27153_27161 = G__27173;
i__27154_27162 = G__27174;
continue;
} else {
var req_27175 = cljs.core.first.call(null,seq__27151_27169__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27175,prov);


var G__27176 = cljs.core.next.call(null,seq__27151_27169__$1);
var G__27177 = null;
var G__27178 = (0);
var G__27179 = (0);
seq__27151_27159 = G__27176;
chunk__27152_27160 = G__27177;
count__27153_27161 = G__27178;
i__27154_27162 = G__27179;
continue;
}
} else {
}
}
break;
}


var G__27180 = seq__27139;
var G__27181 = chunk__27140;
var G__27182 = count__27141;
var G__27183 = (i__27142 + (1));
seq__27139 = G__27180;
chunk__27140 = G__27181;
count__27141 = G__27182;
i__27142 = G__27183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27139);
if(temp__5735__auto__){
var seq__27139__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27139__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27139__$1);
var G__27184 = cljs.core.chunk_rest.call(null,seq__27139__$1);
var G__27185 = c__4550__auto__;
var G__27186 = cljs.core.count.call(null,c__4550__auto__);
var G__27187 = (0);
seq__27139 = G__27184;
chunk__27140 = G__27185;
count__27141 = G__27186;
i__27142 = G__27187;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27139__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27155_27188 = cljs.core.seq.call(null,requires);
var chunk__27156_27189 = null;
var count__27157_27190 = (0);
var i__27158_27191 = (0);
while(true){
if((i__27158_27191 < count__27157_27190)){
var req_27192 = cljs.core._nth.call(null,chunk__27156_27189,i__27158_27191);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27192,prov);


var G__27193 = seq__27155_27188;
var G__27194 = chunk__27156_27189;
var G__27195 = count__27157_27190;
var G__27196 = (i__27158_27191 + (1));
seq__27155_27188 = G__27193;
chunk__27156_27189 = G__27194;
count__27157_27190 = G__27195;
i__27158_27191 = G__27196;
continue;
} else {
var temp__5735__auto___27197__$1 = cljs.core.seq.call(null,seq__27155_27188);
if(temp__5735__auto___27197__$1){
var seq__27155_27198__$1 = temp__5735__auto___27197__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27155_27198__$1)){
var c__4550__auto___27199 = cljs.core.chunk_first.call(null,seq__27155_27198__$1);
var G__27200 = cljs.core.chunk_rest.call(null,seq__27155_27198__$1);
var G__27201 = c__4550__auto___27199;
var G__27202 = cljs.core.count.call(null,c__4550__auto___27199);
var G__27203 = (0);
seq__27155_27188 = G__27200;
chunk__27156_27189 = G__27201;
count__27157_27190 = G__27202;
i__27158_27191 = G__27203;
continue;
} else {
var req_27204 = cljs.core.first.call(null,seq__27155_27198__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27204,prov);


var G__27205 = cljs.core.next.call(null,seq__27155_27198__$1);
var G__27206 = null;
var G__27207 = (0);
var G__27208 = (0);
seq__27155_27188 = G__27205;
chunk__27156_27189 = G__27206;
count__27157_27190 = G__27207;
i__27158_27191 = G__27208;
continue;
}
} else {
}
}
break;
}


var G__27209 = cljs.core.next.call(null,seq__27139__$1);
var G__27210 = null;
var G__27211 = (0);
var G__27212 = (0);
seq__27139 = G__27209;
chunk__27140 = G__27210;
count__27141 = G__27211;
i__27142 = G__27212;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27213_27217 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27214_27218 = null;
var count__27215_27219 = (0);
var i__27216_27220 = (0);
while(true){
if((i__27216_27220 < count__27215_27219)){
var ns_27221 = cljs.core._nth.call(null,chunk__27214_27218,i__27216_27220);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27221);


var G__27222 = seq__27213_27217;
var G__27223 = chunk__27214_27218;
var G__27224 = count__27215_27219;
var G__27225 = (i__27216_27220 + (1));
seq__27213_27217 = G__27222;
chunk__27214_27218 = G__27223;
count__27215_27219 = G__27224;
i__27216_27220 = G__27225;
continue;
} else {
var temp__5735__auto___27226 = cljs.core.seq.call(null,seq__27213_27217);
if(temp__5735__auto___27226){
var seq__27213_27227__$1 = temp__5735__auto___27226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27213_27227__$1)){
var c__4550__auto___27228 = cljs.core.chunk_first.call(null,seq__27213_27227__$1);
var G__27229 = cljs.core.chunk_rest.call(null,seq__27213_27227__$1);
var G__27230 = c__4550__auto___27228;
var G__27231 = cljs.core.count.call(null,c__4550__auto___27228);
var G__27232 = (0);
seq__27213_27217 = G__27229;
chunk__27214_27218 = G__27230;
count__27215_27219 = G__27231;
i__27216_27220 = G__27232;
continue;
} else {
var ns_27233 = cljs.core.first.call(null,seq__27213_27227__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27233);


var G__27234 = cljs.core.next.call(null,seq__27213_27227__$1);
var G__27235 = null;
var G__27236 = (0);
var G__27237 = (0);
seq__27213_27217 = G__27234;
chunk__27214_27218 = G__27235;
count__27215_27219 = G__27236;
i__27216_27220 = G__27237;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27238__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27239__i = 0, G__27239__a = new Array(arguments.length -  0);
while (G__27239__i < G__27239__a.length) {G__27239__a[G__27239__i] = arguments[G__27239__i + 0]; ++G__27239__i;}
  args = new cljs.core.IndexedSeq(G__27239__a,0,null);
} 
return G__27238__delegate.call(this,args);};
G__27238.cljs$lang$maxFixedArity = 0;
G__27238.cljs$lang$applyTo = (function (arglist__27240){
var args = cljs.core.seq(arglist__27240);
return G__27238__delegate(args);
});
G__27238.cljs$core$IFn$_invoke$arity$variadic = G__27238__delegate;
return G__27238;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27241_SHARP_,p2__27242_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27241_SHARP_)),p2__27242_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27243_SHARP_,p2__27244_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27243_SHARP_),p2__27244_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27245 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27245.addCallback(((function (G__27245){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27245))
);

G__27245.addErrback(((function (G__27245){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27245))
);

return G__27245;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27246){if((e27246 instanceof Error)){
var e = e27246;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27246;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27247){if((e27247 instanceof Error)){
var e = e27247;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27247;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27248 = cljs.core._EQ_;
var expr__27249 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27248.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27249))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27248.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27249))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27248.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27249))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27248,expr__27249){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27248,expr__27249))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27251,callback){
var map__27252 = p__27251;
var map__27252__$1 = (((((!((map__27252 == null))))?(((((map__27252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27252):map__27252);
var file_msg = map__27252__$1;
var request_url = cljs.core.get.call(null,map__27252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27252,map__27252__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27252,map__27252__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__){
return (function (state_27290){
var state_val_27291 = (state_27290[(1)]);
if((state_val_27291 === (7))){
var inst_27286 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27292_27318 = state_27290__$1;
(statearr_27292_27318[(2)] = inst_27286);

(statearr_27292_27318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (1))){
var state_27290__$1 = state_27290;
var statearr_27293_27319 = state_27290__$1;
(statearr_27293_27319[(2)] = null);

(statearr_27293_27319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (4))){
var inst_27256 = (state_27290[(7)]);
var inst_27256__$1 = (state_27290[(2)]);
var state_27290__$1 = (function (){var statearr_27294 = state_27290;
(statearr_27294[(7)] = inst_27256__$1);

return statearr_27294;
})();
if(cljs.core.truth_(inst_27256__$1)){
var statearr_27295_27320 = state_27290__$1;
(statearr_27295_27320[(1)] = (5));

} else {
var statearr_27296_27321 = state_27290__$1;
(statearr_27296_27321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (15))){
var inst_27269 = (state_27290[(8)]);
var inst_27271 = (state_27290[(9)]);
var inst_27273 = inst_27271.call(null,inst_27269);
var state_27290__$1 = state_27290;
var statearr_27297_27322 = state_27290__$1;
(statearr_27297_27322[(2)] = inst_27273);

(statearr_27297_27322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (13))){
var inst_27280 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27298_27323 = state_27290__$1;
(statearr_27298_27323[(2)] = inst_27280);

(statearr_27298_27323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (6))){
var state_27290__$1 = state_27290;
var statearr_27299_27324 = state_27290__$1;
(statearr_27299_27324[(2)] = null);

(statearr_27299_27324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (17))){
var inst_27277 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27300_27325 = state_27290__$1;
(statearr_27300_27325[(2)] = inst_27277);

(statearr_27300_27325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (3))){
var inst_27288 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27290__$1,inst_27288);
} else {
if((state_val_27291 === (12))){
var state_27290__$1 = state_27290;
var statearr_27301_27326 = state_27290__$1;
(statearr_27301_27326[(2)] = null);

(statearr_27301_27326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (2))){
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27290__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27291 === (11))){
var inst_27261 = (state_27290[(10)]);
var inst_27267 = figwheel.client.file_reloading.blocking_load.call(null,inst_27261);
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27290__$1,(14),inst_27267);
} else {
if((state_val_27291 === (9))){
var inst_27261 = (state_27290[(10)]);
var state_27290__$1 = state_27290;
if(cljs.core.truth_(inst_27261)){
var statearr_27302_27327 = state_27290__$1;
(statearr_27302_27327[(1)] = (11));

} else {
var statearr_27303_27328 = state_27290__$1;
(statearr_27303_27328[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (5))){
var inst_27256 = (state_27290[(7)]);
var inst_27262 = (state_27290[(11)]);
var inst_27261 = cljs.core.nth.call(null,inst_27256,(0),null);
var inst_27262__$1 = cljs.core.nth.call(null,inst_27256,(1),null);
var state_27290__$1 = (function (){var statearr_27304 = state_27290;
(statearr_27304[(10)] = inst_27261);

(statearr_27304[(11)] = inst_27262__$1);

return statearr_27304;
})();
if(cljs.core.truth_(inst_27262__$1)){
var statearr_27305_27329 = state_27290__$1;
(statearr_27305_27329[(1)] = (8));

} else {
var statearr_27306_27330 = state_27290__$1;
(statearr_27306_27330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (14))){
var inst_27261 = (state_27290[(10)]);
var inst_27271 = (state_27290[(9)]);
var inst_27269 = (state_27290[(2)]);
var inst_27270 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27271__$1 = cljs.core.get.call(null,inst_27270,inst_27261);
var state_27290__$1 = (function (){var statearr_27307 = state_27290;
(statearr_27307[(8)] = inst_27269);

(statearr_27307[(9)] = inst_27271__$1);

return statearr_27307;
})();
if(cljs.core.truth_(inst_27271__$1)){
var statearr_27308_27331 = state_27290__$1;
(statearr_27308_27331[(1)] = (15));

} else {
var statearr_27309_27332 = state_27290__$1;
(statearr_27309_27332[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (16))){
var inst_27269 = (state_27290[(8)]);
var inst_27275 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27269);
var state_27290__$1 = state_27290;
var statearr_27310_27333 = state_27290__$1;
(statearr_27310_27333[(2)] = inst_27275);

(statearr_27310_27333[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (10))){
var inst_27282 = (state_27290[(2)]);
var state_27290__$1 = (function (){var statearr_27311 = state_27290;
(statearr_27311[(12)] = inst_27282);

return statearr_27311;
})();
var statearr_27312_27334 = state_27290__$1;
(statearr_27312_27334[(2)] = null);

(statearr_27312_27334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (8))){
var inst_27262 = (state_27290[(11)]);
var inst_27264 = eval(inst_27262);
var state_27290__$1 = state_27290;
var statearr_27313_27335 = state_27290__$1;
(statearr_27313_27335[(2)] = inst_27264);

(statearr_27313_27335[(1)] = (10));


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
});})(c__23743__auto__))
;
return ((function (switch__23648__auto__,c__23743__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23649__auto__ = null;
var figwheel$client$file_reloading$state_machine__23649__auto____0 = (function (){
var statearr_27314 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27314[(0)] = figwheel$client$file_reloading$state_machine__23649__auto__);

(statearr_27314[(1)] = (1));

return statearr_27314;
});
var figwheel$client$file_reloading$state_machine__23649__auto____1 = (function (state_27290){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_27290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e27315){if((e27315 instanceof Object)){
var ex__23652__auto__ = e27315;
var statearr_27316_27336 = state_27290;
(statearr_27316_27336[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27337 = state_27290;
state_27290 = G__27337;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23649__auto__ = function(state_27290){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23649__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23649__auto____1.call(this,state_27290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23649__auto____0;
figwheel$client$file_reloading$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23649__auto____1;
return figwheel$client$file_reloading$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__))
})();
var state__23745__auto__ = (function (){var statearr_27317 = f__23744__auto__.call(null);
(statearr_27317[(6)] = c__23743__auto__);

return statearr_27317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__))
);

return c__23743__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27339 = arguments.length;
switch (G__27339) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27341,callback){
var map__27342 = p__27341;
var map__27342__$1 = (((((!((map__27342 == null))))?(((((map__27342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27342):map__27342);
var file_msg = map__27342__$1;
var namespace = cljs.core.get.call(null,map__27342__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27342,map__27342__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27342,map__27342__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27344){
var map__27345 = p__27344;
var map__27345__$1 = (((((!((map__27345 == null))))?(((((map__27345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27345):map__27345);
var file_msg = map__27345__$1;
var namespace = cljs.core.get.call(null,map__27345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27347){
var map__27348 = p__27347;
var map__27348__$1 = (((((!((map__27348 == null))))?(((((map__27348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27348):map__27348);
var file_msg = map__27348__$1;
var namespace = cljs.core.get.call(null,map__27348__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27350,callback){
var map__27351 = p__27350;
var map__27351__$1 = (((((!((map__27351 == null))))?(((((map__27351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27351):map__27351);
var file_msg = map__27351__$1;
var request_url = cljs.core.get.call(null,map__27351__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23743__auto___27401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___27401,out){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___27401,out){
return (function (state_27386){
var state_val_27387 = (state_27386[(1)]);
if((state_val_27387 === (1))){
var inst_27360 = cljs.core.seq.call(null,files);
var inst_27361 = cljs.core.first.call(null,inst_27360);
var inst_27362 = cljs.core.next.call(null,inst_27360);
var inst_27363 = files;
var state_27386__$1 = (function (){var statearr_27388 = state_27386;
(statearr_27388[(7)] = inst_27363);

(statearr_27388[(8)] = inst_27362);

(statearr_27388[(9)] = inst_27361);

return statearr_27388;
})();
var statearr_27389_27402 = state_27386__$1;
(statearr_27389_27402[(2)] = null);

(statearr_27389_27402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (2))){
var inst_27363 = (state_27386[(7)]);
var inst_27369 = (state_27386[(10)]);
var inst_27368 = cljs.core.seq.call(null,inst_27363);
var inst_27369__$1 = cljs.core.first.call(null,inst_27368);
var inst_27370 = cljs.core.next.call(null,inst_27368);
var inst_27371 = (inst_27369__$1 == null);
var inst_27372 = cljs.core.not.call(null,inst_27371);
var state_27386__$1 = (function (){var statearr_27390 = state_27386;
(statearr_27390[(11)] = inst_27370);

(statearr_27390[(10)] = inst_27369__$1);

return statearr_27390;
})();
if(inst_27372){
var statearr_27391_27403 = state_27386__$1;
(statearr_27391_27403[(1)] = (4));

} else {
var statearr_27392_27404 = state_27386__$1;
(statearr_27392_27404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (3))){
var inst_27384 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27386__$1,inst_27384);
} else {
if((state_val_27387 === (4))){
var inst_27369 = (state_27386[(10)]);
var inst_27374 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27369);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(7),inst_27374);
} else {
if((state_val_27387 === (5))){
var inst_27380 = cljs.core.async.close_BANG_.call(null,out);
var state_27386__$1 = state_27386;
var statearr_27393_27405 = state_27386__$1;
(statearr_27393_27405[(2)] = inst_27380);

(statearr_27393_27405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (6))){
var inst_27382 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27394_27406 = state_27386__$1;
(statearr_27394_27406[(2)] = inst_27382);

(statearr_27394_27406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (7))){
var inst_27370 = (state_27386[(11)]);
var inst_27376 = (state_27386[(2)]);
var inst_27377 = cljs.core.async.put_BANG_.call(null,out,inst_27376);
var inst_27363 = inst_27370;
var state_27386__$1 = (function (){var statearr_27395 = state_27386;
(statearr_27395[(7)] = inst_27363);

(statearr_27395[(12)] = inst_27377);

return statearr_27395;
})();
var statearr_27396_27407 = state_27386__$1;
(statearr_27396_27407[(2)] = null);

(statearr_27396_27407[(1)] = (2));


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
});})(c__23743__auto___27401,out))
;
return ((function (switch__23648__auto__,c__23743__auto___27401,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto____0 = (function (){
var statearr_27397 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27397[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto__);

(statearr_27397[(1)] = (1));

return statearr_27397;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto____1 = (function (state_27386){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_27386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e27398){if((e27398 instanceof Object)){
var ex__23652__auto__ = e27398;
var statearr_27399_27408 = state_27386;
(statearr_27399_27408[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27409 = state_27386;
state_27386 = G__27409;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto__ = function(state_27386){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto____1.call(this,state_27386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___27401,out))
})();
var state__23745__auto__ = (function (){var statearr_27400 = f__23744__auto__.call(null);
(statearr_27400[(6)] = c__23743__auto___27401);

return statearr_27400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___27401,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27410,opts){
var map__27411 = p__27410;
var map__27411__$1 = (((((!((map__27411 == null))))?(((((map__27411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27411):map__27411);
var eval_body = cljs.core.get.call(null,map__27411__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27413){var e = e27413;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27414_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27414_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27415){
var vec__27416 = p__27415;
var k = cljs.core.nth.call(null,vec__27416,(0),null);
var v = cljs.core.nth.call(null,vec__27416,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27419){
var vec__27420 = p__27419;
var k = cljs.core.nth.call(null,vec__27420,(0),null);
var v = cljs.core.nth.call(null,vec__27420,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27426,p__27427){
var map__27428 = p__27426;
var map__27428__$1 = (((((!((map__27428 == null))))?(((((map__27428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27428):map__27428);
var opts = map__27428__$1;
var before_jsload = cljs.core.get.call(null,map__27428__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27428__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27428__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27429 = p__27427;
var map__27429__$1 = (((((!((map__27429 == null))))?(((((map__27429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27429):map__27429);
var msg = map__27429__$1;
var files = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27583){
var state_val_27584 = (state_27583[(1)]);
if((state_val_27584 === (7))){
var inst_27443 = (state_27583[(7)]);
var inst_27446 = (state_27583[(8)]);
var inst_27445 = (state_27583[(9)]);
var inst_27444 = (state_27583[(10)]);
var inst_27451 = cljs.core._nth.call(null,inst_27444,inst_27446);
var inst_27452 = figwheel.client.file_reloading.eval_body.call(null,inst_27451,opts);
var inst_27453 = (inst_27446 + (1));
var tmp27585 = inst_27443;
var tmp27586 = inst_27445;
var tmp27587 = inst_27444;
var inst_27443__$1 = tmp27585;
var inst_27444__$1 = tmp27587;
var inst_27445__$1 = tmp27586;
var inst_27446__$1 = inst_27453;
var state_27583__$1 = (function (){var statearr_27588 = state_27583;
(statearr_27588[(7)] = inst_27443__$1);

(statearr_27588[(8)] = inst_27446__$1);

(statearr_27588[(9)] = inst_27445__$1);

(statearr_27588[(11)] = inst_27452);

(statearr_27588[(10)] = inst_27444__$1);

return statearr_27588;
})();
var statearr_27589_27672 = state_27583__$1;
(statearr_27589_27672[(2)] = null);

(statearr_27589_27672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (20))){
var inst_27486 = (state_27583[(12)]);
var inst_27494 = figwheel.client.file_reloading.sort_files.call(null,inst_27486);
var state_27583__$1 = state_27583;
var statearr_27590_27673 = state_27583__$1;
(statearr_27590_27673[(2)] = inst_27494);

(statearr_27590_27673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (27))){
var state_27583__$1 = state_27583;
var statearr_27591_27674 = state_27583__$1;
(statearr_27591_27674[(2)] = null);

(statearr_27591_27674[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (1))){
var inst_27435 = (state_27583[(13)]);
var inst_27432 = before_jsload.call(null,files);
var inst_27433 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27434 = (function (){return ((function (inst_27435,inst_27432,inst_27433,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27423_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27423_SHARP_);
});
;})(inst_27435,inst_27432,inst_27433,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27435__$1 = cljs.core.filter.call(null,inst_27434,files);
var inst_27436 = cljs.core.not_empty.call(null,inst_27435__$1);
var state_27583__$1 = (function (){var statearr_27592 = state_27583;
(statearr_27592[(14)] = inst_27433);

(statearr_27592[(15)] = inst_27432);

(statearr_27592[(13)] = inst_27435__$1);

return statearr_27592;
})();
if(cljs.core.truth_(inst_27436)){
var statearr_27593_27675 = state_27583__$1;
(statearr_27593_27675[(1)] = (2));

} else {
var statearr_27594_27676 = state_27583__$1;
(statearr_27594_27676[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (24))){
var state_27583__$1 = state_27583;
var statearr_27595_27677 = state_27583__$1;
(statearr_27595_27677[(2)] = null);

(statearr_27595_27677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (39))){
var inst_27536 = (state_27583[(16)]);
var state_27583__$1 = state_27583;
var statearr_27596_27678 = state_27583__$1;
(statearr_27596_27678[(2)] = inst_27536);

(statearr_27596_27678[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (46))){
var inst_27578 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
var statearr_27597_27679 = state_27583__$1;
(statearr_27597_27679[(2)] = inst_27578);

(statearr_27597_27679[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (4))){
var inst_27480 = (state_27583[(2)]);
var inst_27481 = cljs.core.List.EMPTY;
var inst_27482 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27481);
var inst_27483 = (function (){return ((function (inst_27480,inst_27481,inst_27482,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27424_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27424_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27424_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27424_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27480,inst_27481,inst_27482,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27484 = cljs.core.filter.call(null,inst_27483,files);
var inst_27485 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27486 = cljs.core.concat.call(null,inst_27484,inst_27485);
var state_27583__$1 = (function (){var statearr_27598 = state_27583;
(statearr_27598[(17)] = inst_27482);

(statearr_27598[(18)] = inst_27480);

(statearr_27598[(12)] = inst_27486);

return statearr_27598;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27599_27680 = state_27583__$1;
(statearr_27599_27680[(1)] = (16));

} else {
var statearr_27600_27681 = state_27583__$1;
(statearr_27600_27681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (15))){
var inst_27470 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
var statearr_27601_27682 = state_27583__$1;
(statearr_27601_27682[(2)] = inst_27470);

(statearr_27601_27682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (21))){
var inst_27496 = (state_27583[(19)]);
var inst_27496__$1 = (state_27583[(2)]);
var inst_27497 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27496__$1);
var state_27583__$1 = (function (){var statearr_27602 = state_27583;
(statearr_27602[(19)] = inst_27496__$1);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27583__$1,(22),inst_27497);
} else {
if((state_val_27584 === (31))){
var inst_27581 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27583__$1,inst_27581);
} else {
if((state_val_27584 === (32))){
var inst_27536 = (state_27583[(16)]);
var inst_27541 = inst_27536.cljs$lang$protocol_mask$partition0$;
var inst_27542 = (inst_27541 & (64));
var inst_27543 = inst_27536.cljs$core$ISeq$;
var inst_27544 = (cljs.core.PROTOCOL_SENTINEL === inst_27543);
var inst_27545 = ((inst_27542) || (inst_27544));
var state_27583__$1 = state_27583;
if(cljs.core.truth_(inst_27545)){
var statearr_27603_27683 = state_27583__$1;
(statearr_27603_27683[(1)] = (35));

} else {
var statearr_27604_27684 = state_27583__$1;
(statearr_27604_27684[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (40))){
var inst_27558 = (state_27583[(20)]);
var inst_27557 = (state_27583[(2)]);
var inst_27558__$1 = cljs.core.get.call(null,inst_27557,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27559 = cljs.core.get.call(null,inst_27557,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27560 = cljs.core.not_empty.call(null,inst_27558__$1);
var state_27583__$1 = (function (){var statearr_27605 = state_27583;
(statearr_27605[(20)] = inst_27558__$1);

(statearr_27605[(21)] = inst_27559);

return statearr_27605;
})();
if(cljs.core.truth_(inst_27560)){
var statearr_27606_27685 = state_27583__$1;
(statearr_27606_27685[(1)] = (41));

} else {
var statearr_27607_27686 = state_27583__$1;
(statearr_27607_27686[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (33))){
var state_27583__$1 = state_27583;
var statearr_27608_27687 = state_27583__$1;
(statearr_27608_27687[(2)] = false);

(statearr_27608_27687[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (13))){
var inst_27456 = (state_27583[(22)]);
var inst_27460 = cljs.core.chunk_first.call(null,inst_27456);
var inst_27461 = cljs.core.chunk_rest.call(null,inst_27456);
var inst_27462 = cljs.core.count.call(null,inst_27460);
var inst_27443 = inst_27461;
var inst_27444 = inst_27460;
var inst_27445 = inst_27462;
var inst_27446 = (0);
var state_27583__$1 = (function (){var statearr_27609 = state_27583;
(statearr_27609[(7)] = inst_27443);

(statearr_27609[(8)] = inst_27446);

(statearr_27609[(9)] = inst_27445);

(statearr_27609[(10)] = inst_27444);

return statearr_27609;
})();
var statearr_27610_27688 = state_27583__$1;
(statearr_27610_27688[(2)] = null);

(statearr_27610_27688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (22))){
var inst_27499 = (state_27583[(23)]);
var inst_27496 = (state_27583[(19)]);
var inst_27504 = (state_27583[(24)]);
var inst_27500 = (state_27583[(25)]);
var inst_27499__$1 = (state_27583[(2)]);
var inst_27500__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27499__$1);
var inst_27501 = (function (){var all_files = inst_27496;
var res_SINGLEQUOTE_ = inst_27499__$1;
var res = inst_27500__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27499,inst_27496,inst_27504,inst_27500,inst_27499__$1,inst_27500__$1,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27425_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27425_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27499,inst_27496,inst_27504,inst_27500,inst_27499__$1,inst_27500__$1,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27502 = cljs.core.filter.call(null,inst_27501,inst_27499__$1);
var inst_27503 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27504__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27503);
var inst_27505 = cljs.core.not_empty.call(null,inst_27504__$1);
var state_27583__$1 = (function (){var statearr_27611 = state_27583;
(statearr_27611[(23)] = inst_27499__$1);

(statearr_27611[(24)] = inst_27504__$1);

(statearr_27611[(25)] = inst_27500__$1);

(statearr_27611[(26)] = inst_27502);

return statearr_27611;
})();
if(cljs.core.truth_(inst_27505)){
var statearr_27612_27689 = state_27583__$1;
(statearr_27612_27689[(1)] = (23));

} else {
var statearr_27613_27690 = state_27583__$1;
(statearr_27613_27690[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (36))){
var state_27583__$1 = state_27583;
var statearr_27614_27691 = state_27583__$1;
(statearr_27614_27691[(2)] = false);

(statearr_27614_27691[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (41))){
var inst_27558 = (state_27583[(20)]);
var inst_27562 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27563 = cljs.core.map.call(null,inst_27562,inst_27558);
var inst_27564 = cljs.core.pr_str.call(null,inst_27563);
var inst_27565 = ["figwheel-no-load meta-data: ",inst_27564].join('');
var inst_27566 = figwheel.client.utils.log.call(null,inst_27565);
var state_27583__$1 = state_27583;
var statearr_27615_27692 = state_27583__$1;
(statearr_27615_27692[(2)] = inst_27566);

(statearr_27615_27692[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (43))){
var inst_27559 = (state_27583[(21)]);
var inst_27569 = (state_27583[(2)]);
var inst_27570 = cljs.core.not_empty.call(null,inst_27559);
var state_27583__$1 = (function (){var statearr_27616 = state_27583;
(statearr_27616[(27)] = inst_27569);

return statearr_27616;
})();
if(cljs.core.truth_(inst_27570)){
var statearr_27617_27693 = state_27583__$1;
(statearr_27617_27693[(1)] = (44));

} else {
var statearr_27618_27694 = state_27583__$1;
(statearr_27618_27694[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (29))){
var inst_27499 = (state_27583[(23)]);
var inst_27496 = (state_27583[(19)]);
var inst_27504 = (state_27583[(24)]);
var inst_27500 = (state_27583[(25)]);
var inst_27502 = (state_27583[(26)]);
var inst_27536 = (state_27583[(16)]);
var inst_27532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27535 = (function (){var all_files = inst_27496;
var res_SINGLEQUOTE_ = inst_27499;
var res = inst_27500;
var files_not_loaded = inst_27502;
var dependencies_that_loaded = inst_27504;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27499,inst_27496,inst_27504,inst_27500,inst_27502,inst_27536,inst_27532,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27534){
var map__27619 = p__27534;
var map__27619__$1 = (((((!((map__27619 == null))))?(((((map__27619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27619):map__27619);
var namespace = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27499,inst_27496,inst_27504,inst_27500,inst_27502,inst_27536,inst_27532,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27536__$1 = cljs.core.group_by.call(null,inst_27535,inst_27502);
var inst_27538 = (inst_27536__$1 == null);
var inst_27539 = cljs.core.not.call(null,inst_27538);
var state_27583__$1 = (function (){var statearr_27621 = state_27583;
(statearr_27621[(28)] = inst_27532);

(statearr_27621[(16)] = inst_27536__$1);

return statearr_27621;
})();
if(inst_27539){
var statearr_27622_27695 = state_27583__$1;
(statearr_27622_27695[(1)] = (32));

} else {
var statearr_27623_27696 = state_27583__$1;
(statearr_27623_27696[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (44))){
var inst_27559 = (state_27583[(21)]);
var inst_27572 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27559);
var inst_27573 = cljs.core.pr_str.call(null,inst_27572);
var inst_27574 = ["not required: ",inst_27573].join('');
var inst_27575 = figwheel.client.utils.log.call(null,inst_27574);
var state_27583__$1 = state_27583;
var statearr_27624_27697 = state_27583__$1;
(statearr_27624_27697[(2)] = inst_27575);

(statearr_27624_27697[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (6))){
var inst_27477 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
var statearr_27625_27698 = state_27583__$1;
(statearr_27625_27698[(2)] = inst_27477);

(statearr_27625_27698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (28))){
var inst_27502 = (state_27583[(26)]);
var inst_27529 = (state_27583[(2)]);
var inst_27530 = cljs.core.not_empty.call(null,inst_27502);
var state_27583__$1 = (function (){var statearr_27626 = state_27583;
(statearr_27626[(29)] = inst_27529);

return statearr_27626;
})();
if(cljs.core.truth_(inst_27530)){
var statearr_27627_27699 = state_27583__$1;
(statearr_27627_27699[(1)] = (29));

} else {
var statearr_27628_27700 = state_27583__$1;
(statearr_27628_27700[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (25))){
var inst_27500 = (state_27583[(25)]);
var inst_27516 = (state_27583[(2)]);
var inst_27517 = cljs.core.not_empty.call(null,inst_27500);
var state_27583__$1 = (function (){var statearr_27629 = state_27583;
(statearr_27629[(30)] = inst_27516);

return statearr_27629;
})();
if(cljs.core.truth_(inst_27517)){
var statearr_27630_27701 = state_27583__$1;
(statearr_27630_27701[(1)] = (26));

} else {
var statearr_27631_27702 = state_27583__$1;
(statearr_27631_27702[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (34))){
var inst_27552 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
if(cljs.core.truth_(inst_27552)){
var statearr_27632_27703 = state_27583__$1;
(statearr_27632_27703[(1)] = (38));

} else {
var statearr_27633_27704 = state_27583__$1;
(statearr_27633_27704[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (17))){
var state_27583__$1 = state_27583;
var statearr_27634_27705 = state_27583__$1;
(statearr_27634_27705[(2)] = recompile_dependents);

(statearr_27634_27705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (3))){
var state_27583__$1 = state_27583;
var statearr_27635_27706 = state_27583__$1;
(statearr_27635_27706[(2)] = null);

(statearr_27635_27706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (12))){
var inst_27473 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
var statearr_27636_27707 = state_27583__$1;
(statearr_27636_27707[(2)] = inst_27473);

(statearr_27636_27707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (2))){
var inst_27435 = (state_27583[(13)]);
var inst_27442 = cljs.core.seq.call(null,inst_27435);
var inst_27443 = inst_27442;
var inst_27444 = null;
var inst_27445 = (0);
var inst_27446 = (0);
var state_27583__$1 = (function (){var statearr_27637 = state_27583;
(statearr_27637[(7)] = inst_27443);

(statearr_27637[(8)] = inst_27446);

(statearr_27637[(9)] = inst_27445);

(statearr_27637[(10)] = inst_27444);

return statearr_27637;
})();
var statearr_27638_27708 = state_27583__$1;
(statearr_27638_27708[(2)] = null);

(statearr_27638_27708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (23))){
var inst_27499 = (state_27583[(23)]);
var inst_27496 = (state_27583[(19)]);
var inst_27504 = (state_27583[(24)]);
var inst_27500 = (state_27583[(25)]);
var inst_27502 = (state_27583[(26)]);
var inst_27507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27509 = (function (){var all_files = inst_27496;
var res_SINGLEQUOTE_ = inst_27499;
var res = inst_27500;
var files_not_loaded = inst_27502;
var dependencies_that_loaded = inst_27504;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27499,inst_27496,inst_27504,inst_27500,inst_27502,inst_27507,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27508){
var map__27639 = p__27508;
var map__27639__$1 = (((((!((map__27639 == null))))?(((((map__27639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27639):map__27639);
var request_url = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27499,inst_27496,inst_27504,inst_27500,inst_27502,inst_27507,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27510 = cljs.core.reverse.call(null,inst_27504);
var inst_27511 = cljs.core.map.call(null,inst_27509,inst_27510);
var inst_27512 = cljs.core.pr_str.call(null,inst_27511);
var inst_27513 = figwheel.client.utils.log.call(null,inst_27512);
var state_27583__$1 = (function (){var statearr_27641 = state_27583;
(statearr_27641[(31)] = inst_27507);

return statearr_27641;
})();
var statearr_27642_27709 = state_27583__$1;
(statearr_27642_27709[(2)] = inst_27513);

(statearr_27642_27709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (35))){
var state_27583__$1 = state_27583;
var statearr_27643_27710 = state_27583__$1;
(statearr_27643_27710[(2)] = true);

(statearr_27643_27710[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (19))){
var inst_27486 = (state_27583[(12)]);
var inst_27492 = figwheel.client.file_reloading.expand_files.call(null,inst_27486);
var state_27583__$1 = state_27583;
var statearr_27644_27711 = state_27583__$1;
(statearr_27644_27711[(2)] = inst_27492);

(statearr_27644_27711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (11))){
var state_27583__$1 = state_27583;
var statearr_27645_27712 = state_27583__$1;
(statearr_27645_27712[(2)] = null);

(statearr_27645_27712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (9))){
var inst_27475 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
var statearr_27646_27713 = state_27583__$1;
(statearr_27646_27713[(2)] = inst_27475);

(statearr_27646_27713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (5))){
var inst_27446 = (state_27583[(8)]);
var inst_27445 = (state_27583[(9)]);
var inst_27448 = (inst_27446 < inst_27445);
var inst_27449 = inst_27448;
var state_27583__$1 = state_27583;
if(cljs.core.truth_(inst_27449)){
var statearr_27647_27714 = state_27583__$1;
(statearr_27647_27714[(1)] = (7));

} else {
var statearr_27648_27715 = state_27583__$1;
(statearr_27648_27715[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (14))){
var inst_27456 = (state_27583[(22)]);
var inst_27465 = cljs.core.first.call(null,inst_27456);
var inst_27466 = figwheel.client.file_reloading.eval_body.call(null,inst_27465,opts);
var inst_27467 = cljs.core.next.call(null,inst_27456);
var inst_27443 = inst_27467;
var inst_27444 = null;
var inst_27445 = (0);
var inst_27446 = (0);
var state_27583__$1 = (function (){var statearr_27649 = state_27583;
(statearr_27649[(7)] = inst_27443);

(statearr_27649[(8)] = inst_27446);

(statearr_27649[(9)] = inst_27445);

(statearr_27649[(10)] = inst_27444);

(statearr_27649[(32)] = inst_27466);

return statearr_27649;
})();
var statearr_27650_27716 = state_27583__$1;
(statearr_27650_27716[(2)] = null);

(statearr_27650_27716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (45))){
var state_27583__$1 = state_27583;
var statearr_27651_27717 = state_27583__$1;
(statearr_27651_27717[(2)] = null);

(statearr_27651_27717[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (26))){
var inst_27499 = (state_27583[(23)]);
var inst_27496 = (state_27583[(19)]);
var inst_27504 = (state_27583[(24)]);
var inst_27500 = (state_27583[(25)]);
var inst_27502 = (state_27583[(26)]);
var inst_27519 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27521 = (function (){var all_files = inst_27496;
var res_SINGLEQUOTE_ = inst_27499;
var res = inst_27500;
var files_not_loaded = inst_27502;
var dependencies_that_loaded = inst_27504;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27499,inst_27496,inst_27504,inst_27500,inst_27502,inst_27519,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27520){
var map__27652 = p__27520;
var map__27652__$1 = (((((!((map__27652 == null))))?(((((map__27652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27652):map__27652);
var namespace = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27499,inst_27496,inst_27504,inst_27500,inst_27502,inst_27519,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27522 = cljs.core.map.call(null,inst_27521,inst_27500);
var inst_27523 = cljs.core.pr_str.call(null,inst_27522);
var inst_27524 = figwheel.client.utils.log.call(null,inst_27523);
var inst_27525 = (function (){var all_files = inst_27496;
var res_SINGLEQUOTE_ = inst_27499;
var res = inst_27500;
var files_not_loaded = inst_27502;
var dependencies_that_loaded = inst_27504;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27499,inst_27496,inst_27504,inst_27500,inst_27502,inst_27519,inst_27521,inst_27522,inst_27523,inst_27524,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27499,inst_27496,inst_27504,inst_27500,inst_27502,inst_27519,inst_27521,inst_27522,inst_27523,inst_27524,state_val_27584,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27526 = setTimeout(inst_27525,(10));
var state_27583__$1 = (function (){var statearr_27654 = state_27583;
(statearr_27654[(33)] = inst_27519);

(statearr_27654[(34)] = inst_27524);

return statearr_27654;
})();
var statearr_27655_27718 = state_27583__$1;
(statearr_27655_27718[(2)] = inst_27526);

(statearr_27655_27718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (16))){
var state_27583__$1 = state_27583;
var statearr_27656_27719 = state_27583__$1;
(statearr_27656_27719[(2)] = reload_dependents);

(statearr_27656_27719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (38))){
var inst_27536 = (state_27583[(16)]);
var inst_27554 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27536);
var state_27583__$1 = state_27583;
var statearr_27657_27720 = state_27583__$1;
(statearr_27657_27720[(2)] = inst_27554);

(statearr_27657_27720[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (30))){
var state_27583__$1 = state_27583;
var statearr_27658_27721 = state_27583__$1;
(statearr_27658_27721[(2)] = null);

(statearr_27658_27721[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (10))){
var inst_27456 = (state_27583[(22)]);
var inst_27458 = cljs.core.chunked_seq_QMARK_.call(null,inst_27456);
var state_27583__$1 = state_27583;
if(inst_27458){
var statearr_27659_27722 = state_27583__$1;
(statearr_27659_27722[(1)] = (13));

} else {
var statearr_27660_27723 = state_27583__$1;
(statearr_27660_27723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (18))){
var inst_27490 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
if(cljs.core.truth_(inst_27490)){
var statearr_27661_27724 = state_27583__$1;
(statearr_27661_27724[(1)] = (19));

} else {
var statearr_27662_27725 = state_27583__$1;
(statearr_27662_27725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (42))){
var state_27583__$1 = state_27583;
var statearr_27663_27726 = state_27583__$1;
(statearr_27663_27726[(2)] = null);

(statearr_27663_27726[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (37))){
var inst_27549 = (state_27583[(2)]);
var state_27583__$1 = state_27583;
var statearr_27664_27727 = state_27583__$1;
(statearr_27664_27727[(2)] = inst_27549);

(statearr_27664_27727[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27584 === (8))){
var inst_27443 = (state_27583[(7)]);
var inst_27456 = (state_27583[(22)]);
var inst_27456__$1 = cljs.core.seq.call(null,inst_27443);
var state_27583__$1 = (function (){var statearr_27665 = state_27583;
(statearr_27665[(22)] = inst_27456__$1);

return statearr_27665;
})();
if(inst_27456__$1){
var statearr_27666_27728 = state_27583__$1;
(statearr_27666_27728[(1)] = (10));

} else {
var statearr_27667_27729 = state_27583__$1;
(statearr_27667_27729[(1)] = (11));

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
});})(c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23648__auto__,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto____0 = (function (){
var statearr_27668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27668[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto__);

(statearr_27668[(1)] = (1));

return statearr_27668;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto____1 = (function (state_27583){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_27583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e27669){if((e27669 instanceof Object)){
var ex__23652__auto__ = e27669;
var statearr_27670_27730 = state_27583;
(statearr_27670_27730[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27731 = state_27583;
state_27583 = G__27731;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto__ = function(state_27583){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto____1.call(this,state_27583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23745__auto__ = (function (){var statearr_27671 = f__23744__auto__.call(null);
(statearr_27671[(6)] = c__23743__auto__);

return statearr_27671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__,map__27428,map__27428__$1,opts,before_jsload,on_jsload,reload_dependents,map__27429,map__27429__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23743__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27734,link){
var map__27735 = p__27734;
var map__27735__$1 = (((((!((map__27735 == null))))?(((((map__27735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27735):map__27735);
var file = cljs.core.get.call(null,map__27735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27735,map__27735__$1,file){
return (function (p1__27732_SHARP_,p2__27733_SHARP_){
if(cljs.core._EQ_.call(null,p1__27732_SHARP_,p2__27733_SHARP_)){
return p1__27732_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27735,map__27735__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27738){
var map__27739 = p__27738;
var map__27739__$1 = (((((!((map__27739 == null))))?(((((map__27739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27739):map__27739);
var match_length = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27737_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27737_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27741_SHARP_,p2__27742_SHARP_){
return cljs.core.assoc.call(null,p1__27741_SHARP_,cljs.core.get.call(null,p2__27742_SHARP_,key),p2__27742_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27743 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27743);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27743);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27744,p__27745){
var map__27746 = p__27744;
var map__27746__$1 = (((((!((map__27746 == null))))?(((((map__27746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27746):map__27746);
var on_cssload = cljs.core.get.call(null,map__27746__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27747 = p__27745;
var map__27747__$1 = (((((!((map__27747 == null))))?(((((map__27747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27747):map__27747);
var files_msg = map__27747__$1;
var files = cljs.core.get.call(null,map__27747__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1573202559648
