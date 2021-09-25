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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31846_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31846_SHARP_));
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
var seq__31847 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31848 = null;
var count__31849 = (0);
var i__31850 = (0);
while(true){
if((i__31850 < count__31849)){
var n = cljs.core._nth.call(null,chunk__31848,i__31850);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31851 = seq__31847;
var G__31852 = chunk__31848;
var G__31853 = count__31849;
var G__31854 = (i__31850 + (1));
seq__31847 = G__31851;
chunk__31848 = G__31852;
count__31849 = G__31853;
i__31850 = G__31854;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31847);
if(temp__5735__auto__){
var seq__31847__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31847__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31847__$1);
var G__31855 = cljs.core.chunk_rest.call(null,seq__31847__$1);
var G__31856 = c__4550__auto__;
var G__31857 = cljs.core.count.call(null,c__4550__auto__);
var G__31858 = (0);
seq__31847 = G__31855;
chunk__31848 = G__31856;
count__31849 = G__31857;
i__31850 = G__31858;
continue;
} else {
var n = cljs.core.first.call(null,seq__31847__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31859 = cljs.core.next.call(null,seq__31847__$1);
var G__31860 = null;
var G__31861 = (0);
var G__31862 = (0);
seq__31847 = G__31859;
chunk__31848 = G__31860;
count__31849 = G__31861;
i__31850 = G__31862;
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
return cljs.core.some.call(null,(function (p__31863){
var vec__31864 = p__31863;
var _ = cljs.core.nth.call(null,vec__31864,(0),null);
var v = cljs.core.nth.call(null,vec__31864,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__31867){
var vec__31868 = p__31867;
var k = cljs.core.nth.call(null,vec__31868,(0),null);
var v = cljs.core.nth.call(null,vec__31868,(1),null);
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

var seq__31880_31888 = cljs.core.seq.call(null,deps);
var chunk__31881_31889 = null;
var count__31882_31890 = (0);
var i__31883_31891 = (0);
while(true){
if((i__31883_31891 < count__31882_31890)){
var dep_31892 = cljs.core._nth.call(null,chunk__31881_31889,i__31883_31891);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31892;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31892));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31892,(depth + (1)),state);
} else {
}


var G__31893 = seq__31880_31888;
var G__31894 = chunk__31881_31889;
var G__31895 = count__31882_31890;
var G__31896 = (i__31883_31891 + (1));
seq__31880_31888 = G__31893;
chunk__31881_31889 = G__31894;
count__31882_31890 = G__31895;
i__31883_31891 = G__31896;
continue;
} else {
var temp__5735__auto___31897 = cljs.core.seq.call(null,seq__31880_31888);
if(temp__5735__auto___31897){
var seq__31880_31898__$1 = temp__5735__auto___31897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31880_31898__$1)){
var c__4550__auto___31899 = cljs.core.chunk_first.call(null,seq__31880_31898__$1);
var G__31900 = cljs.core.chunk_rest.call(null,seq__31880_31898__$1);
var G__31901 = c__4550__auto___31899;
var G__31902 = cljs.core.count.call(null,c__4550__auto___31899);
var G__31903 = (0);
seq__31880_31888 = G__31900;
chunk__31881_31889 = G__31901;
count__31882_31890 = G__31902;
i__31883_31891 = G__31903;
continue;
} else {
var dep_31904 = cljs.core.first.call(null,seq__31880_31898__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31904;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31904));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31904,(depth + (1)),state);
} else {
}


var G__31905 = cljs.core.next.call(null,seq__31880_31898__$1);
var G__31906 = null;
var G__31907 = (0);
var G__31908 = (0);
seq__31880_31888 = G__31905;
chunk__31881_31889 = G__31906;
count__31882_31890 = G__31907;
i__31883_31891 = G__31908;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31884){
var vec__31885 = p__31884;
var seq__31886 = cljs.core.seq.call(null,vec__31885);
var first__31887 = cljs.core.first.call(null,seq__31886);
var seq__31886__$1 = cljs.core.next.call(null,seq__31886);
var x = first__31887;
var xs = seq__31886__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31885,seq__31886,first__31887,seq__31886__$1,x,xs,get_deps__$1){
return (function (p1__31871_SHARP_){
return clojure.set.difference.call(null,p1__31871_SHARP_,x);
});})(vec__31885,seq__31886,first__31887,seq__31886__$1,x,xs,get_deps__$1))
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
var seq__31909 = cljs.core.seq.call(null,provides);
var chunk__31910 = null;
var count__31911 = (0);
var i__31912 = (0);
while(true){
if((i__31912 < count__31911)){
var prov = cljs.core._nth.call(null,chunk__31910,i__31912);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31921_31929 = cljs.core.seq.call(null,requires);
var chunk__31922_31930 = null;
var count__31923_31931 = (0);
var i__31924_31932 = (0);
while(true){
if((i__31924_31932 < count__31923_31931)){
var req_31933 = cljs.core._nth.call(null,chunk__31922_31930,i__31924_31932);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31933,prov);


var G__31934 = seq__31921_31929;
var G__31935 = chunk__31922_31930;
var G__31936 = count__31923_31931;
var G__31937 = (i__31924_31932 + (1));
seq__31921_31929 = G__31934;
chunk__31922_31930 = G__31935;
count__31923_31931 = G__31936;
i__31924_31932 = G__31937;
continue;
} else {
var temp__5735__auto___31938 = cljs.core.seq.call(null,seq__31921_31929);
if(temp__5735__auto___31938){
var seq__31921_31939__$1 = temp__5735__auto___31938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31921_31939__$1)){
var c__4550__auto___31940 = cljs.core.chunk_first.call(null,seq__31921_31939__$1);
var G__31941 = cljs.core.chunk_rest.call(null,seq__31921_31939__$1);
var G__31942 = c__4550__auto___31940;
var G__31943 = cljs.core.count.call(null,c__4550__auto___31940);
var G__31944 = (0);
seq__31921_31929 = G__31941;
chunk__31922_31930 = G__31942;
count__31923_31931 = G__31943;
i__31924_31932 = G__31944;
continue;
} else {
var req_31945 = cljs.core.first.call(null,seq__31921_31939__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31945,prov);


var G__31946 = cljs.core.next.call(null,seq__31921_31939__$1);
var G__31947 = null;
var G__31948 = (0);
var G__31949 = (0);
seq__31921_31929 = G__31946;
chunk__31922_31930 = G__31947;
count__31923_31931 = G__31948;
i__31924_31932 = G__31949;
continue;
}
} else {
}
}
break;
}


var G__31950 = seq__31909;
var G__31951 = chunk__31910;
var G__31952 = count__31911;
var G__31953 = (i__31912 + (1));
seq__31909 = G__31950;
chunk__31910 = G__31951;
count__31911 = G__31952;
i__31912 = G__31953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31909);
if(temp__5735__auto__){
var seq__31909__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31909__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31909__$1);
var G__31954 = cljs.core.chunk_rest.call(null,seq__31909__$1);
var G__31955 = c__4550__auto__;
var G__31956 = cljs.core.count.call(null,c__4550__auto__);
var G__31957 = (0);
seq__31909 = G__31954;
chunk__31910 = G__31955;
count__31911 = G__31956;
i__31912 = G__31957;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31909__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31925_31958 = cljs.core.seq.call(null,requires);
var chunk__31926_31959 = null;
var count__31927_31960 = (0);
var i__31928_31961 = (0);
while(true){
if((i__31928_31961 < count__31927_31960)){
var req_31962 = cljs.core._nth.call(null,chunk__31926_31959,i__31928_31961);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31962,prov);


var G__31963 = seq__31925_31958;
var G__31964 = chunk__31926_31959;
var G__31965 = count__31927_31960;
var G__31966 = (i__31928_31961 + (1));
seq__31925_31958 = G__31963;
chunk__31926_31959 = G__31964;
count__31927_31960 = G__31965;
i__31928_31961 = G__31966;
continue;
} else {
var temp__5735__auto___31967__$1 = cljs.core.seq.call(null,seq__31925_31958);
if(temp__5735__auto___31967__$1){
var seq__31925_31968__$1 = temp__5735__auto___31967__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31925_31968__$1)){
var c__4550__auto___31969 = cljs.core.chunk_first.call(null,seq__31925_31968__$1);
var G__31970 = cljs.core.chunk_rest.call(null,seq__31925_31968__$1);
var G__31971 = c__4550__auto___31969;
var G__31972 = cljs.core.count.call(null,c__4550__auto___31969);
var G__31973 = (0);
seq__31925_31958 = G__31970;
chunk__31926_31959 = G__31971;
count__31927_31960 = G__31972;
i__31928_31961 = G__31973;
continue;
} else {
var req_31974 = cljs.core.first.call(null,seq__31925_31968__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31974,prov);


var G__31975 = cljs.core.next.call(null,seq__31925_31968__$1);
var G__31976 = null;
var G__31977 = (0);
var G__31978 = (0);
seq__31925_31958 = G__31975;
chunk__31926_31959 = G__31976;
count__31927_31960 = G__31977;
i__31928_31961 = G__31978;
continue;
}
} else {
}
}
break;
}


var G__31979 = cljs.core.next.call(null,seq__31909__$1);
var G__31980 = null;
var G__31981 = (0);
var G__31982 = (0);
seq__31909 = G__31979;
chunk__31910 = G__31980;
count__31911 = G__31981;
i__31912 = G__31982;
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
var seq__31983_31987 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31984_31988 = null;
var count__31985_31989 = (0);
var i__31986_31990 = (0);
while(true){
if((i__31986_31990 < count__31985_31989)){
var ns_31991 = cljs.core._nth.call(null,chunk__31984_31988,i__31986_31990);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31991);


var G__31992 = seq__31983_31987;
var G__31993 = chunk__31984_31988;
var G__31994 = count__31985_31989;
var G__31995 = (i__31986_31990 + (1));
seq__31983_31987 = G__31992;
chunk__31984_31988 = G__31993;
count__31985_31989 = G__31994;
i__31986_31990 = G__31995;
continue;
} else {
var temp__5735__auto___31996 = cljs.core.seq.call(null,seq__31983_31987);
if(temp__5735__auto___31996){
var seq__31983_31997__$1 = temp__5735__auto___31996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31983_31997__$1)){
var c__4550__auto___31998 = cljs.core.chunk_first.call(null,seq__31983_31997__$1);
var G__31999 = cljs.core.chunk_rest.call(null,seq__31983_31997__$1);
var G__32000 = c__4550__auto___31998;
var G__32001 = cljs.core.count.call(null,c__4550__auto___31998);
var G__32002 = (0);
seq__31983_31987 = G__31999;
chunk__31984_31988 = G__32000;
count__31985_31989 = G__32001;
i__31986_31990 = G__32002;
continue;
} else {
var ns_32003 = cljs.core.first.call(null,seq__31983_31997__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32003);


var G__32004 = cljs.core.next.call(null,seq__31983_31997__$1);
var G__32005 = null;
var G__32006 = (0);
var G__32007 = (0);
seq__31983_31987 = G__32004;
chunk__31984_31988 = G__32005;
count__31985_31989 = G__32006;
i__31986_31990 = G__32007;
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
var G__32008__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32009__i = 0, G__32009__a = new Array(arguments.length -  0);
while (G__32009__i < G__32009__a.length) {G__32009__a[G__32009__i] = arguments[G__32009__i + 0]; ++G__32009__i;}
  args = new cljs.core.IndexedSeq(G__32009__a,0,null);
} 
return G__32008__delegate.call(this,args);};
G__32008.cljs$lang$maxFixedArity = 0;
G__32008.cljs$lang$applyTo = (function (arglist__32010){
var args = cljs.core.seq(arglist__32010);
return G__32008__delegate(args);
});
G__32008.cljs$core$IFn$_invoke$arity$variadic = G__32008__delegate;
return G__32008;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32011_SHARP_,p2__32012_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32011_SHARP_)),p2__32012_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32013_SHARP_,p2__32014_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32013_SHARP_),p2__32014_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32015 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32015.addCallback(((function (G__32015){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32015))
);

G__32015.addErrback(((function (G__32015){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32015))
);

return G__32015;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32016){if((e32016 instanceof Error)){
var e = e32016;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32016;

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
}catch (e32017){if((e32017 instanceof Error)){
var e = e32017;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32017;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32018 = cljs.core._EQ_;
var expr__32019 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32018.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32019))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32018.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32019))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32018.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32019))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32018,expr__32019){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32018,expr__32019))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32021,callback){
var map__32022 = p__32021;
var map__32022__$1 = (((((!((map__32022 == null))))?(((((map__32022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32022):map__32022);
var file_msg = map__32022__$1;
var request_url = cljs.core.get.call(null,map__32022__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32022,map__32022__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32022,map__32022__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__){
return (function (state_32060){
var state_val_32061 = (state_32060[(1)]);
if((state_val_32061 === (7))){
var inst_32056 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32062_32088 = state_32060__$1;
(statearr_32062_32088[(2)] = inst_32056);

(statearr_32062_32088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (1))){
var state_32060__$1 = state_32060;
var statearr_32063_32089 = state_32060__$1;
(statearr_32063_32089[(2)] = null);

(statearr_32063_32089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (4))){
var inst_32026 = (state_32060[(7)]);
var inst_32026__$1 = (state_32060[(2)]);
var state_32060__$1 = (function (){var statearr_32064 = state_32060;
(statearr_32064[(7)] = inst_32026__$1);

return statearr_32064;
})();
if(cljs.core.truth_(inst_32026__$1)){
var statearr_32065_32090 = state_32060__$1;
(statearr_32065_32090[(1)] = (5));

} else {
var statearr_32066_32091 = state_32060__$1;
(statearr_32066_32091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (15))){
var inst_32039 = (state_32060[(8)]);
var inst_32041 = (state_32060[(9)]);
var inst_32043 = inst_32041.call(null,inst_32039);
var state_32060__$1 = state_32060;
var statearr_32067_32092 = state_32060__$1;
(statearr_32067_32092[(2)] = inst_32043);

(statearr_32067_32092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (13))){
var inst_32050 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32068_32093 = state_32060__$1;
(statearr_32068_32093[(2)] = inst_32050);

(statearr_32068_32093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (6))){
var state_32060__$1 = state_32060;
var statearr_32069_32094 = state_32060__$1;
(statearr_32069_32094[(2)] = null);

(statearr_32069_32094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (17))){
var inst_32047 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32070_32095 = state_32060__$1;
(statearr_32070_32095[(2)] = inst_32047);

(statearr_32070_32095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (3))){
var inst_32058 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32060__$1,inst_32058);
} else {
if((state_val_32061 === (12))){
var state_32060__$1 = state_32060;
var statearr_32071_32096 = state_32060__$1;
(statearr_32071_32096[(2)] = null);

(statearr_32071_32096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (2))){
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32060__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32061 === (11))){
var inst_32031 = (state_32060[(10)]);
var inst_32037 = figwheel.client.file_reloading.blocking_load.call(null,inst_32031);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32060__$1,(14),inst_32037);
} else {
if((state_val_32061 === (9))){
var inst_32031 = (state_32060[(10)]);
var state_32060__$1 = state_32060;
if(cljs.core.truth_(inst_32031)){
var statearr_32072_32097 = state_32060__$1;
(statearr_32072_32097[(1)] = (11));

} else {
var statearr_32073_32098 = state_32060__$1;
(statearr_32073_32098[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (5))){
var inst_32032 = (state_32060[(11)]);
var inst_32026 = (state_32060[(7)]);
var inst_32031 = cljs.core.nth.call(null,inst_32026,(0),null);
var inst_32032__$1 = cljs.core.nth.call(null,inst_32026,(1),null);
var state_32060__$1 = (function (){var statearr_32074 = state_32060;
(statearr_32074[(11)] = inst_32032__$1);

(statearr_32074[(10)] = inst_32031);

return statearr_32074;
})();
if(cljs.core.truth_(inst_32032__$1)){
var statearr_32075_32099 = state_32060__$1;
(statearr_32075_32099[(1)] = (8));

} else {
var statearr_32076_32100 = state_32060__$1;
(statearr_32076_32100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (14))){
var inst_32041 = (state_32060[(9)]);
var inst_32031 = (state_32060[(10)]);
var inst_32039 = (state_32060[(2)]);
var inst_32040 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32041__$1 = cljs.core.get.call(null,inst_32040,inst_32031);
var state_32060__$1 = (function (){var statearr_32077 = state_32060;
(statearr_32077[(8)] = inst_32039);

(statearr_32077[(9)] = inst_32041__$1);

return statearr_32077;
})();
if(cljs.core.truth_(inst_32041__$1)){
var statearr_32078_32101 = state_32060__$1;
(statearr_32078_32101[(1)] = (15));

} else {
var statearr_32079_32102 = state_32060__$1;
(statearr_32079_32102[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (16))){
var inst_32039 = (state_32060[(8)]);
var inst_32045 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32039);
var state_32060__$1 = state_32060;
var statearr_32080_32103 = state_32060__$1;
(statearr_32080_32103[(2)] = inst_32045);

(statearr_32080_32103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (10))){
var inst_32052 = (state_32060[(2)]);
var state_32060__$1 = (function (){var statearr_32081 = state_32060;
(statearr_32081[(12)] = inst_32052);

return statearr_32081;
})();
var statearr_32082_32104 = state_32060__$1;
(statearr_32082_32104[(2)] = null);

(statearr_32082_32104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (8))){
var inst_32032 = (state_32060[(11)]);
var inst_32034 = eval(inst_32032);
var state_32060__$1 = state_32060;
var statearr_32083_32105 = state_32060__$1;
(statearr_32083_32105[(2)] = inst_32034);

(statearr_32083_32105[(1)] = (10));


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
});})(c__24577__auto__))
;
return ((function (switch__24410__auto__,c__24577__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24411__auto__ = null;
var figwheel$client$file_reloading$state_machine__24411__auto____0 = (function (){
var statearr_32084 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32084[(0)] = figwheel$client$file_reloading$state_machine__24411__auto__);

(statearr_32084[(1)] = (1));

return statearr_32084;
});
var figwheel$client$file_reloading$state_machine__24411__auto____1 = (function (state_32060){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_32060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e32085){if((e32085 instanceof Object)){
var ex__24414__auto__ = e32085;
var statearr_32086_32106 = state_32060;
(statearr_32086_32106[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32107 = state_32060;
state_32060 = G__32107;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24411__auto__ = function(state_32060){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24411__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24411__auto____1.call(this,state_32060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24411__auto____0;
figwheel$client$file_reloading$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24411__auto____1;
return figwheel$client$file_reloading$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_32087 = f__24578__auto__.call(null);
(statearr_32087[(6)] = c__24577__auto__);

return statearr_32087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32109 = arguments.length;
switch (G__32109) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32111,callback){
var map__32112 = p__32111;
var map__32112__$1 = (((((!((map__32112 == null))))?(((((map__32112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32112):map__32112);
var file_msg = map__32112__$1;
var namespace = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32112,map__32112__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32112,map__32112__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32114){
var map__32115 = p__32114;
var map__32115__$1 = (((((!((map__32115 == null))))?(((((map__32115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32115):map__32115);
var file_msg = map__32115__$1;
var namespace = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32117){
var map__32118 = p__32117;
var map__32118__$1 = (((((!((map__32118 == null))))?(((((map__32118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32118):map__32118);
var file_msg = map__32118__$1;
var namespace = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32120,callback){
var map__32121 = p__32120;
var map__32121__$1 = (((((!((map__32121 == null))))?(((((map__32121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32121):map__32121);
var file_msg = map__32121__$1;
var request_url = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24577__auto___32171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___32171,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___32171,out){
return (function (state_32156){
var state_val_32157 = (state_32156[(1)]);
if((state_val_32157 === (1))){
var inst_32130 = cljs.core.seq.call(null,files);
var inst_32131 = cljs.core.first.call(null,inst_32130);
var inst_32132 = cljs.core.next.call(null,inst_32130);
var inst_32133 = files;
var state_32156__$1 = (function (){var statearr_32158 = state_32156;
(statearr_32158[(7)] = inst_32131);

(statearr_32158[(8)] = inst_32132);

(statearr_32158[(9)] = inst_32133);

return statearr_32158;
})();
var statearr_32159_32172 = state_32156__$1;
(statearr_32159_32172[(2)] = null);

(statearr_32159_32172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (2))){
var inst_32139 = (state_32156[(10)]);
var inst_32133 = (state_32156[(9)]);
var inst_32138 = cljs.core.seq.call(null,inst_32133);
var inst_32139__$1 = cljs.core.first.call(null,inst_32138);
var inst_32140 = cljs.core.next.call(null,inst_32138);
var inst_32141 = (inst_32139__$1 == null);
var inst_32142 = cljs.core.not.call(null,inst_32141);
var state_32156__$1 = (function (){var statearr_32160 = state_32156;
(statearr_32160[(11)] = inst_32140);

(statearr_32160[(10)] = inst_32139__$1);

return statearr_32160;
})();
if(inst_32142){
var statearr_32161_32173 = state_32156__$1;
(statearr_32161_32173[(1)] = (4));

} else {
var statearr_32162_32174 = state_32156__$1;
(statearr_32162_32174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (3))){
var inst_32154 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32156__$1,inst_32154);
} else {
if((state_val_32157 === (4))){
var inst_32139 = (state_32156[(10)]);
var inst_32144 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32139);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32156__$1,(7),inst_32144);
} else {
if((state_val_32157 === (5))){
var inst_32150 = cljs.core.async.close_BANG_.call(null,out);
var state_32156__$1 = state_32156;
var statearr_32163_32175 = state_32156__$1;
(statearr_32163_32175[(2)] = inst_32150);

(statearr_32163_32175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (6))){
var inst_32152 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32164_32176 = state_32156__$1;
(statearr_32164_32176[(2)] = inst_32152);

(statearr_32164_32176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (7))){
var inst_32140 = (state_32156[(11)]);
var inst_32146 = (state_32156[(2)]);
var inst_32147 = cljs.core.async.put_BANG_.call(null,out,inst_32146);
var inst_32133 = inst_32140;
var state_32156__$1 = (function (){var statearr_32165 = state_32156;
(statearr_32165[(12)] = inst_32147);

(statearr_32165[(9)] = inst_32133);

return statearr_32165;
})();
var statearr_32166_32177 = state_32156__$1;
(statearr_32166_32177[(2)] = null);

(statearr_32166_32177[(1)] = (2));


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
});})(c__24577__auto___32171,out))
;
return ((function (switch__24410__auto__,c__24577__auto___32171,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto____0 = (function (){
var statearr_32167 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32167[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto__);

(statearr_32167[(1)] = (1));

return statearr_32167;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto____1 = (function (state_32156){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_32156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e32168){if((e32168 instanceof Object)){
var ex__24414__auto__ = e32168;
var statearr_32169_32178 = state_32156;
(statearr_32169_32178[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32179 = state_32156;
state_32156 = G__32179;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto__ = function(state_32156){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto____1.call(this,state_32156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___32171,out))
})();
var state__24579__auto__ = (function (){var statearr_32170 = f__24578__auto__.call(null);
(statearr_32170[(6)] = c__24577__auto___32171);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___32171,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32180,opts){
var map__32181 = p__32180;
var map__32181__$1 = (((((!((map__32181 == null))))?(((((map__32181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32181):map__32181);
var eval_body = cljs.core.get.call(null,map__32181__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32183){var e = e32183;
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
return (function (p1__32184_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32184_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32185){
var vec__32186 = p__32185;
var k = cljs.core.nth.call(null,vec__32186,(0),null);
var v = cljs.core.nth.call(null,vec__32186,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32189){
var vec__32190 = p__32189;
var k = cljs.core.nth.call(null,vec__32190,(0),null);
var v = cljs.core.nth.call(null,vec__32190,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32196,p__32197){
var map__32198 = p__32196;
var map__32198__$1 = (((((!((map__32198 == null))))?(((((map__32198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32198):map__32198);
var opts = map__32198__$1;
var before_jsload = cljs.core.get.call(null,map__32198__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32198__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32198__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32199 = p__32197;
var map__32199__$1 = (((((!((map__32199 == null))))?(((((map__32199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32199):map__32199);
var msg = map__32199__$1;
var files = cljs.core.get.call(null,map__32199__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32199__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32199__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32353){
var state_val_32354 = (state_32353[(1)]);
if((state_val_32354 === (7))){
var inst_32214 = (state_32353[(7)]);
var inst_32216 = (state_32353[(8)]);
var inst_32215 = (state_32353[(9)]);
var inst_32213 = (state_32353[(10)]);
var inst_32221 = cljs.core._nth.call(null,inst_32214,inst_32216);
var inst_32222 = figwheel.client.file_reloading.eval_body.call(null,inst_32221,opts);
var inst_32223 = (inst_32216 + (1));
var tmp32355 = inst_32214;
var tmp32356 = inst_32215;
var tmp32357 = inst_32213;
var inst_32213__$1 = tmp32357;
var inst_32214__$1 = tmp32355;
var inst_32215__$1 = tmp32356;
var inst_32216__$1 = inst_32223;
var state_32353__$1 = (function (){var statearr_32358 = state_32353;
(statearr_32358[(7)] = inst_32214__$1);

(statearr_32358[(8)] = inst_32216__$1);

(statearr_32358[(9)] = inst_32215__$1);

(statearr_32358[(10)] = inst_32213__$1);

(statearr_32358[(11)] = inst_32222);

return statearr_32358;
})();
var statearr_32359_32442 = state_32353__$1;
(statearr_32359_32442[(2)] = null);

(statearr_32359_32442[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (20))){
var inst_32256 = (state_32353[(12)]);
var inst_32264 = figwheel.client.file_reloading.sort_files.call(null,inst_32256);
var state_32353__$1 = state_32353;
var statearr_32360_32443 = state_32353__$1;
(statearr_32360_32443[(2)] = inst_32264);

(statearr_32360_32443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (27))){
var state_32353__$1 = state_32353;
var statearr_32361_32444 = state_32353__$1;
(statearr_32361_32444[(2)] = null);

(statearr_32361_32444[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (1))){
var inst_32205 = (state_32353[(13)]);
var inst_32202 = before_jsload.call(null,files);
var inst_32203 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32204 = (function (){return ((function (inst_32205,inst_32202,inst_32203,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32193_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32193_SHARP_);
});
;})(inst_32205,inst_32202,inst_32203,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32205__$1 = cljs.core.filter.call(null,inst_32204,files);
var inst_32206 = cljs.core.not_empty.call(null,inst_32205__$1);
var state_32353__$1 = (function (){var statearr_32362 = state_32353;
(statearr_32362[(14)] = inst_32202);

(statearr_32362[(13)] = inst_32205__$1);

(statearr_32362[(15)] = inst_32203);

return statearr_32362;
})();
if(cljs.core.truth_(inst_32206)){
var statearr_32363_32445 = state_32353__$1;
(statearr_32363_32445[(1)] = (2));

} else {
var statearr_32364_32446 = state_32353__$1;
(statearr_32364_32446[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (24))){
var state_32353__$1 = state_32353;
var statearr_32365_32447 = state_32353__$1;
(statearr_32365_32447[(2)] = null);

(statearr_32365_32447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (39))){
var inst_32306 = (state_32353[(16)]);
var state_32353__$1 = state_32353;
var statearr_32366_32448 = state_32353__$1;
(statearr_32366_32448[(2)] = inst_32306);

(statearr_32366_32448[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (46))){
var inst_32348 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32367_32449 = state_32353__$1;
(statearr_32367_32449[(2)] = inst_32348);

(statearr_32367_32449[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (4))){
var inst_32250 = (state_32353[(2)]);
var inst_32251 = cljs.core.List.EMPTY;
var inst_32252 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32251);
var inst_32253 = (function (){return ((function (inst_32250,inst_32251,inst_32252,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32194_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32194_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32194_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32194_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_32250,inst_32251,inst_32252,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32254 = cljs.core.filter.call(null,inst_32253,files);
var inst_32255 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32256 = cljs.core.concat.call(null,inst_32254,inst_32255);
var state_32353__$1 = (function (){var statearr_32368 = state_32353;
(statearr_32368[(17)] = inst_32252);

(statearr_32368[(12)] = inst_32256);

(statearr_32368[(18)] = inst_32250);

return statearr_32368;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32369_32450 = state_32353__$1;
(statearr_32369_32450[(1)] = (16));

} else {
var statearr_32370_32451 = state_32353__$1;
(statearr_32370_32451[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (15))){
var inst_32240 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32371_32452 = state_32353__$1;
(statearr_32371_32452[(2)] = inst_32240);

(statearr_32371_32452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (21))){
var inst_32266 = (state_32353[(19)]);
var inst_32266__$1 = (state_32353[(2)]);
var inst_32267 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32266__$1);
var state_32353__$1 = (function (){var statearr_32372 = state_32353;
(statearr_32372[(19)] = inst_32266__$1);

return statearr_32372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32353__$1,(22),inst_32267);
} else {
if((state_val_32354 === (31))){
var inst_32351 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32353__$1,inst_32351);
} else {
if((state_val_32354 === (32))){
var inst_32306 = (state_32353[(16)]);
var inst_32311 = inst_32306.cljs$lang$protocol_mask$partition0$;
var inst_32312 = (inst_32311 & (64));
var inst_32313 = inst_32306.cljs$core$ISeq$;
var inst_32314 = (cljs.core.PROTOCOL_SENTINEL === inst_32313);
var inst_32315 = ((inst_32312) || (inst_32314));
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32315)){
var statearr_32373_32453 = state_32353__$1;
(statearr_32373_32453[(1)] = (35));

} else {
var statearr_32374_32454 = state_32353__$1;
(statearr_32374_32454[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (40))){
var inst_32328 = (state_32353[(20)]);
var inst_32327 = (state_32353[(2)]);
var inst_32328__$1 = cljs.core.get.call(null,inst_32327,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32329 = cljs.core.get.call(null,inst_32327,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32330 = cljs.core.not_empty.call(null,inst_32328__$1);
var state_32353__$1 = (function (){var statearr_32375 = state_32353;
(statearr_32375[(20)] = inst_32328__$1);

(statearr_32375[(21)] = inst_32329);

return statearr_32375;
})();
if(cljs.core.truth_(inst_32330)){
var statearr_32376_32455 = state_32353__$1;
(statearr_32376_32455[(1)] = (41));

} else {
var statearr_32377_32456 = state_32353__$1;
(statearr_32377_32456[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (33))){
var state_32353__$1 = state_32353;
var statearr_32378_32457 = state_32353__$1;
(statearr_32378_32457[(2)] = false);

(statearr_32378_32457[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (13))){
var inst_32226 = (state_32353[(22)]);
var inst_32230 = cljs.core.chunk_first.call(null,inst_32226);
var inst_32231 = cljs.core.chunk_rest.call(null,inst_32226);
var inst_32232 = cljs.core.count.call(null,inst_32230);
var inst_32213 = inst_32231;
var inst_32214 = inst_32230;
var inst_32215 = inst_32232;
var inst_32216 = (0);
var state_32353__$1 = (function (){var statearr_32379 = state_32353;
(statearr_32379[(7)] = inst_32214);

(statearr_32379[(8)] = inst_32216);

(statearr_32379[(9)] = inst_32215);

(statearr_32379[(10)] = inst_32213);

return statearr_32379;
})();
var statearr_32380_32458 = state_32353__$1;
(statearr_32380_32458[(2)] = null);

(statearr_32380_32458[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (22))){
var inst_32269 = (state_32353[(23)]);
var inst_32274 = (state_32353[(24)]);
var inst_32266 = (state_32353[(19)]);
var inst_32270 = (state_32353[(25)]);
var inst_32269__$1 = (state_32353[(2)]);
var inst_32270__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32269__$1);
var inst_32271 = (function (){var all_files = inst_32266;
var res_SINGLEQUOTE_ = inst_32269__$1;
var res = inst_32270__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32269,inst_32274,inst_32266,inst_32270,inst_32269__$1,inst_32270__$1,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32195_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32195_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32269,inst_32274,inst_32266,inst_32270,inst_32269__$1,inst_32270__$1,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32272 = cljs.core.filter.call(null,inst_32271,inst_32269__$1);
var inst_32273 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32274__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32273);
var inst_32275 = cljs.core.not_empty.call(null,inst_32274__$1);
var state_32353__$1 = (function (){var statearr_32381 = state_32353;
(statearr_32381[(23)] = inst_32269__$1);

(statearr_32381[(24)] = inst_32274__$1);

(statearr_32381[(25)] = inst_32270__$1);

(statearr_32381[(26)] = inst_32272);

return statearr_32381;
})();
if(cljs.core.truth_(inst_32275)){
var statearr_32382_32459 = state_32353__$1;
(statearr_32382_32459[(1)] = (23));

} else {
var statearr_32383_32460 = state_32353__$1;
(statearr_32383_32460[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (36))){
var state_32353__$1 = state_32353;
var statearr_32384_32461 = state_32353__$1;
(statearr_32384_32461[(2)] = false);

(statearr_32384_32461[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (41))){
var inst_32328 = (state_32353[(20)]);
var inst_32332 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32333 = cljs.core.map.call(null,inst_32332,inst_32328);
var inst_32334 = cljs.core.pr_str.call(null,inst_32333);
var inst_32335 = ["figwheel-no-load meta-data: ",inst_32334].join('');
var inst_32336 = figwheel.client.utils.log.call(null,inst_32335);
var state_32353__$1 = state_32353;
var statearr_32385_32462 = state_32353__$1;
(statearr_32385_32462[(2)] = inst_32336);

(statearr_32385_32462[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (43))){
var inst_32329 = (state_32353[(21)]);
var inst_32339 = (state_32353[(2)]);
var inst_32340 = cljs.core.not_empty.call(null,inst_32329);
var state_32353__$1 = (function (){var statearr_32386 = state_32353;
(statearr_32386[(27)] = inst_32339);

return statearr_32386;
})();
if(cljs.core.truth_(inst_32340)){
var statearr_32387_32463 = state_32353__$1;
(statearr_32387_32463[(1)] = (44));

} else {
var statearr_32388_32464 = state_32353__$1;
(statearr_32388_32464[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (29))){
var inst_32269 = (state_32353[(23)]);
var inst_32274 = (state_32353[(24)]);
var inst_32266 = (state_32353[(19)]);
var inst_32270 = (state_32353[(25)]);
var inst_32306 = (state_32353[(16)]);
var inst_32272 = (state_32353[(26)]);
var inst_32302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32305 = (function (){var all_files = inst_32266;
var res_SINGLEQUOTE_ = inst_32269;
var res = inst_32270;
var files_not_loaded = inst_32272;
var dependencies_that_loaded = inst_32274;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32269,inst_32274,inst_32266,inst_32270,inst_32306,inst_32272,inst_32302,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32304){
var map__32389 = p__32304;
var map__32389__$1 = (((((!((map__32389 == null))))?(((((map__32389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32389):map__32389);
var namespace = cljs.core.get.call(null,map__32389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32269,inst_32274,inst_32266,inst_32270,inst_32306,inst_32272,inst_32302,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32306__$1 = cljs.core.group_by.call(null,inst_32305,inst_32272);
var inst_32308 = (inst_32306__$1 == null);
var inst_32309 = cljs.core.not.call(null,inst_32308);
var state_32353__$1 = (function (){var statearr_32391 = state_32353;
(statearr_32391[(16)] = inst_32306__$1);

(statearr_32391[(28)] = inst_32302);

return statearr_32391;
})();
if(inst_32309){
var statearr_32392_32465 = state_32353__$1;
(statearr_32392_32465[(1)] = (32));

} else {
var statearr_32393_32466 = state_32353__$1;
(statearr_32393_32466[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (44))){
var inst_32329 = (state_32353[(21)]);
var inst_32342 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32329);
var inst_32343 = cljs.core.pr_str.call(null,inst_32342);
var inst_32344 = ["not required: ",inst_32343].join('');
var inst_32345 = figwheel.client.utils.log.call(null,inst_32344);
var state_32353__$1 = state_32353;
var statearr_32394_32467 = state_32353__$1;
(statearr_32394_32467[(2)] = inst_32345);

(statearr_32394_32467[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (6))){
var inst_32247 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32395_32468 = state_32353__$1;
(statearr_32395_32468[(2)] = inst_32247);

(statearr_32395_32468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (28))){
var inst_32272 = (state_32353[(26)]);
var inst_32299 = (state_32353[(2)]);
var inst_32300 = cljs.core.not_empty.call(null,inst_32272);
var state_32353__$1 = (function (){var statearr_32396 = state_32353;
(statearr_32396[(29)] = inst_32299);

return statearr_32396;
})();
if(cljs.core.truth_(inst_32300)){
var statearr_32397_32469 = state_32353__$1;
(statearr_32397_32469[(1)] = (29));

} else {
var statearr_32398_32470 = state_32353__$1;
(statearr_32398_32470[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (25))){
var inst_32270 = (state_32353[(25)]);
var inst_32286 = (state_32353[(2)]);
var inst_32287 = cljs.core.not_empty.call(null,inst_32270);
var state_32353__$1 = (function (){var statearr_32399 = state_32353;
(statearr_32399[(30)] = inst_32286);

return statearr_32399;
})();
if(cljs.core.truth_(inst_32287)){
var statearr_32400_32471 = state_32353__$1;
(statearr_32400_32471[(1)] = (26));

} else {
var statearr_32401_32472 = state_32353__$1;
(statearr_32401_32472[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (34))){
var inst_32322 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32322)){
var statearr_32402_32473 = state_32353__$1;
(statearr_32402_32473[(1)] = (38));

} else {
var statearr_32403_32474 = state_32353__$1;
(statearr_32403_32474[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (17))){
var state_32353__$1 = state_32353;
var statearr_32404_32475 = state_32353__$1;
(statearr_32404_32475[(2)] = recompile_dependents);

(statearr_32404_32475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (3))){
var state_32353__$1 = state_32353;
var statearr_32405_32476 = state_32353__$1;
(statearr_32405_32476[(2)] = null);

(statearr_32405_32476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (12))){
var inst_32243 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32406_32477 = state_32353__$1;
(statearr_32406_32477[(2)] = inst_32243);

(statearr_32406_32477[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (2))){
var inst_32205 = (state_32353[(13)]);
var inst_32212 = cljs.core.seq.call(null,inst_32205);
var inst_32213 = inst_32212;
var inst_32214 = null;
var inst_32215 = (0);
var inst_32216 = (0);
var state_32353__$1 = (function (){var statearr_32407 = state_32353;
(statearr_32407[(7)] = inst_32214);

(statearr_32407[(8)] = inst_32216);

(statearr_32407[(9)] = inst_32215);

(statearr_32407[(10)] = inst_32213);

return statearr_32407;
})();
var statearr_32408_32478 = state_32353__$1;
(statearr_32408_32478[(2)] = null);

(statearr_32408_32478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (23))){
var inst_32269 = (state_32353[(23)]);
var inst_32274 = (state_32353[(24)]);
var inst_32266 = (state_32353[(19)]);
var inst_32270 = (state_32353[(25)]);
var inst_32272 = (state_32353[(26)]);
var inst_32277 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32279 = (function (){var all_files = inst_32266;
var res_SINGLEQUOTE_ = inst_32269;
var res = inst_32270;
var files_not_loaded = inst_32272;
var dependencies_that_loaded = inst_32274;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32269,inst_32274,inst_32266,inst_32270,inst_32272,inst_32277,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32278){
var map__32409 = p__32278;
var map__32409__$1 = (((((!((map__32409 == null))))?(((((map__32409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32409):map__32409);
var request_url = cljs.core.get.call(null,map__32409__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32269,inst_32274,inst_32266,inst_32270,inst_32272,inst_32277,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32280 = cljs.core.reverse.call(null,inst_32274);
var inst_32281 = cljs.core.map.call(null,inst_32279,inst_32280);
var inst_32282 = cljs.core.pr_str.call(null,inst_32281);
var inst_32283 = figwheel.client.utils.log.call(null,inst_32282);
var state_32353__$1 = (function (){var statearr_32411 = state_32353;
(statearr_32411[(31)] = inst_32277);

return statearr_32411;
})();
var statearr_32412_32479 = state_32353__$1;
(statearr_32412_32479[(2)] = inst_32283);

(statearr_32412_32479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (35))){
var state_32353__$1 = state_32353;
var statearr_32413_32480 = state_32353__$1;
(statearr_32413_32480[(2)] = true);

(statearr_32413_32480[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (19))){
var inst_32256 = (state_32353[(12)]);
var inst_32262 = figwheel.client.file_reloading.expand_files.call(null,inst_32256);
var state_32353__$1 = state_32353;
var statearr_32414_32481 = state_32353__$1;
(statearr_32414_32481[(2)] = inst_32262);

(statearr_32414_32481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (11))){
var state_32353__$1 = state_32353;
var statearr_32415_32482 = state_32353__$1;
(statearr_32415_32482[(2)] = null);

(statearr_32415_32482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (9))){
var inst_32245 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32416_32483 = state_32353__$1;
(statearr_32416_32483[(2)] = inst_32245);

(statearr_32416_32483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (5))){
var inst_32216 = (state_32353[(8)]);
var inst_32215 = (state_32353[(9)]);
var inst_32218 = (inst_32216 < inst_32215);
var inst_32219 = inst_32218;
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32219)){
var statearr_32417_32484 = state_32353__$1;
(statearr_32417_32484[(1)] = (7));

} else {
var statearr_32418_32485 = state_32353__$1;
(statearr_32418_32485[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (14))){
var inst_32226 = (state_32353[(22)]);
var inst_32235 = cljs.core.first.call(null,inst_32226);
var inst_32236 = figwheel.client.file_reloading.eval_body.call(null,inst_32235,opts);
var inst_32237 = cljs.core.next.call(null,inst_32226);
var inst_32213 = inst_32237;
var inst_32214 = null;
var inst_32215 = (0);
var inst_32216 = (0);
var state_32353__$1 = (function (){var statearr_32419 = state_32353;
(statearr_32419[(7)] = inst_32214);

(statearr_32419[(8)] = inst_32216);

(statearr_32419[(32)] = inst_32236);

(statearr_32419[(9)] = inst_32215);

(statearr_32419[(10)] = inst_32213);

return statearr_32419;
})();
var statearr_32420_32486 = state_32353__$1;
(statearr_32420_32486[(2)] = null);

(statearr_32420_32486[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (45))){
var state_32353__$1 = state_32353;
var statearr_32421_32487 = state_32353__$1;
(statearr_32421_32487[(2)] = null);

(statearr_32421_32487[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (26))){
var inst_32269 = (state_32353[(23)]);
var inst_32274 = (state_32353[(24)]);
var inst_32266 = (state_32353[(19)]);
var inst_32270 = (state_32353[(25)]);
var inst_32272 = (state_32353[(26)]);
var inst_32289 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32291 = (function (){var all_files = inst_32266;
var res_SINGLEQUOTE_ = inst_32269;
var res = inst_32270;
var files_not_loaded = inst_32272;
var dependencies_that_loaded = inst_32274;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32269,inst_32274,inst_32266,inst_32270,inst_32272,inst_32289,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32290){
var map__32422 = p__32290;
var map__32422__$1 = (((((!((map__32422 == null))))?(((((map__32422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32422):map__32422);
var namespace = cljs.core.get.call(null,map__32422__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32422__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32269,inst_32274,inst_32266,inst_32270,inst_32272,inst_32289,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32292 = cljs.core.map.call(null,inst_32291,inst_32270);
var inst_32293 = cljs.core.pr_str.call(null,inst_32292);
var inst_32294 = figwheel.client.utils.log.call(null,inst_32293);
var inst_32295 = (function (){var all_files = inst_32266;
var res_SINGLEQUOTE_ = inst_32269;
var res = inst_32270;
var files_not_loaded = inst_32272;
var dependencies_that_loaded = inst_32274;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32269,inst_32274,inst_32266,inst_32270,inst_32272,inst_32289,inst_32291,inst_32292,inst_32293,inst_32294,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32269,inst_32274,inst_32266,inst_32270,inst_32272,inst_32289,inst_32291,inst_32292,inst_32293,inst_32294,state_val_32354,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32296 = setTimeout(inst_32295,(10));
var state_32353__$1 = (function (){var statearr_32424 = state_32353;
(statearr_32424[(33)] = inst_32294);

(statearr_32424[(34)] = inst_32289);

return statearr_32424;
})();
var statearr_32425_32488 = state_32353__$1;
(statearr_32425_32488[(2)] = inst_32296);

(statearr_32425_32488[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (16))){
var state_32353__$1 = state_32353;
var statearr_32426_32489 = state_32353__$1;
(statearr_32426_32489[(2)] = reload_dependents);

(statearr_32426_32489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (38))){
var inst_32306 = (state_32353[(16)]);
var inst_32324 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32306);
var state_32353__$1 = state_32353;
var statearr_32427_32490 = state_32353__$1;
(statearr_32427_32490[(2)] = inst_32324);

(statearr_32427_32490[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (30))){
var state_32353__$1 = state_32353;
var statearr_32428_32491 = state_32353__$1;
(statearr_32428_32491[(2)] = null);

(statearr_32428_32491[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (10))){
var inst_32226 = (state_32353[(22)]);
var inst_32228 = cljs.core.chunked_seq_QMARK_.call(null,inst_32226);
var state_32353__$1 = state_32353;
if(inst_32228){
var statearr_32429_32492 = state_32353__$1;
(statearr_32429_32492[(1)] = (13));

} else {
var statearr_32430_32493 = state_32353__$1;
(statearr_32430_32493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (18))){
var inst_32260 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32260)){
var statearr_32431_32494 = state_32353__$1;
(statearr_32431_32494[(1)] = (19));

} else {
var statearr_32432_32495 = state_32353__$1;
(statearr_32432_32495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (42))){
var state_32353__$1 = state_32353;
var statearr_32433_32496 = state_32353__$1;
(statearr_32433_32496[(2)] = null);

(statearr_32433_32496[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (37))){
var inst_32319 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32434_32497 = state_32353__$1;
(statearr_32434_32497[(2)] = inst_32319);

(statearr_32434_32497[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (8))){
var inst_32226 = (state_32353[(22)]);
var inst_32213 = (state_32353[(10)]);
var inst_32226__$1 = cljs.core.seq.call(null,inst_32213);
var state_32353__$1 = (function (){var statearr_32435 = state_32353;
(statearr_32435[(22)] = inst_32226__$1);

return statearr_32435;
})();
if(inst_32226__$1){
var statearr_32436_32498 = state_32353__$1;
(statearr_32436_32498[(1)] = (10));

} else {
var statearr_32437_32499 = state_32353__$1;
(statearr_32437_32499[(1)] = (11));

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
});})(c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24410__auto__,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto____0 = (function (){
var statearr_32438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32438[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto__);

(statearr_32438[(1)] = (1));

return statearr_32438;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto____1 = (function (state_32353){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_32353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e32439){if((e32439 instanceof Object)){
var ex__24414__auto__ = e32439;
var statearr_32440_32500 = state_32353;
(statearr_32440_32500[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_32353;
state_32353 = G__32501;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto__ = function(state_32353){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto____1.call(this,state_32353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24579__auto__ = (function (){var statearr_32441 = f__24578__auto__.call(null);
(statearr_32441[(6)] = c__24577__auto__);

return statearr_32441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,map__32198,map__32198__$1,opts,before_jsload,on_jsload,reload_dependents,map__32199,map__32199__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24577__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32504,link){
var map__32505 = p__32504;
var map__32505__$1 = (((((!((map__32505 == null))))?(((((map__32505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32505):map__32505);
var file = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__32505,map__32505__$1,file){
return (function (p1__32502_SHARP_,p2__32503_SHARP_){
if(cljs.core._EQ_.call(null,p1__32502_SHARP_,p2__32503_SHARP_)){
return p1__32502_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__32505,map__32505__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32508){
var map__32509 = p__32508;
var map__32509__$1 = (((((!((map__32509 == null))))?(((((map__32509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);
var match_length = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32507_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32507_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32511_SHARP_,p2__32512_SHARP_){
return cljs.core.assoc.call(null,p1__32511_SHARP_,cljs.core.get.call(null,p2__32512_SHARP_,key),p2__32512_SHARP_);
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
var loaded_f_datas_32513 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32513);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32513);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32514,p__32515){
var map__32516 = p__32514;
var map__32516__$1 = (((((!((map__32516 == null))))?(((((map__32516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32516):map__32516);
var on_cssload = cljs.core.get.call(null,map__32516__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32517 = p__32515;
var map__32517__$1 = (((((!((map__32517 == null))))?(((((map__32517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32517):map__32517);
var files_msg = map__32517__$1;
var files = cljs.core.get.call(null,map__32517__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1632532625908
