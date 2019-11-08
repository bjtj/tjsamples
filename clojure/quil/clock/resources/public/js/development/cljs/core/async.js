// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23803 = arguments.length;
switch (G__23803) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23804 = (function (f,blockable,meta23805){
this.f = f;
this.blockable = blockable;
this.meta23805 = meta23805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23806,meta23805__$1){
var self__ = this;
var _23806__$1 = this;
return (new cljs.core.async.t_cljs$core$async23804(self__.f,self__.blockable,meta23805__$1));
});

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23806){
var self__ = this;
var _23806__$1 = this;
return self__.meta23805;
});

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23805","meta23805",110307151,null)], null);
});

cljs.core.async.t_cljs$core$async23804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23804";

cljs.core.async.t_cljs$core$async23804.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23804");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23804.
 */
cljs.core.async.__GT_t_cljs$core$async23804 = (function cljs$core$async$__GT_t_cljs$core$async23804(f__$1,blockable__$1,meta23805){
return (new cljs.core.async.t_cljs$core$async23804(f__$1,blockable__$1,meta23805));
});

}

return (new cljs.core.async.t_cljs$core$async23804(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23810 = arguments.length;
switch (G__23810) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23813 = arguments.length;
switch (G__23813) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23816 = arguments.length;
switch (G__23816) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23818 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23818);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23818,ret){
return (function (){
return fn1.call(null,val_23818);
});})(val_23818,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23820 = arguments.length;
switch (G__23820) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23822 = n;
var x_23823 = (0);
while(true){
if((x_23823 < n__4607__auto___23822)){
(a[x_23823] = (0));

var G__23824 = (x_23823 + (1));
x_23823 = G__23824;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23825 = (i + (1));
i = G__23825;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23826 = (function (flag,meta23827){
this.flag = flag;
this.meta23827 = meta23827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23828,meta23827__$1){
var self__ = this;
var _23828__$1 = this;
return (new cljs.core.async.t_cljs$core$async23826(self__.flag,meta23827__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23828){
var self__ = this;
var _23828__$1 = this;
return self__.meta23827;
});})(flag))
;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23826.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23827","meta23827",-1351384879,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23826";

cljs.core.async.t_cljs$core$async23826.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23826");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23826.
 */
cljs.core.async.__GT_t_cljs$core$async23826 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23826(flag__$1,meta23827){
return (new cljs.core.async.t_cljs$core$async23826(flag__$1,meta23827));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23826(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23829 = (function (flag,cb,meta23830){
this.flag = flag;
this.cb = cb;
this.meta23830 = meta23830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23831,meta23830__$1){
var self__ = this;
var _23831__$1 = this;
return (new cljs.core.async.t_cljs$core$async23829(self__.flag,self__.cb,meta23830__$1));
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23831){
var self__ = this;
var _23831__$1 = this;
return self__.meta23830;
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23830","meta23830",-225402136,null)], null);
});

cljs.core.async.t_cljs$core$async23829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23829";

cljs.core.async.t_cljs$core$async23829.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23829");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23829.
 */
cljs.core.async.__GT_t_cljs$core$async23829 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23829(flag__$1,cb__$1,meta23830){
return (new cljs.core.async.t_cljs$core$async23829(flag__$1,cb__$1,meta23830));
});

}

return (new cljs.core.async.t_cljs$core$async23829(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23832_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23832_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23833_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23833_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23834 = (i + (1));
i = G__23834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23840 = arguments.length;
var i__4731__auto___23841 = (0);
while(true){
if((i__4731__auto___23841 < len__4730__auto___23840)){
args__4736__auto__.push((arguments[i__4731__auto___23841]));

var G__23842 = (i__4731__auto___23841 + (1));
i__4731__auto___23841 = G__23842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23837){
var map__23838 = p__23837;
var map__23838__$1 = (((((!((map__23838 == null))))?(((((map__23838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23838):map__23838);
var opts = map__23838__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23835){
var G__23836 = cljs.core.first.call(null,seq23835);
var seq23835__$1 = cljs.core.next.call(null,seq23835);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23836,seq23835__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23844 = arguments.length;
switch (G__23844) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23743__auto___23890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___23890){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___23890){
return (function (state_23868){
var state_val_23869 = (state_23868[(1)]);
if((state_val_23869 === (7))){
var inst_23864 = (state_23868[(2)]);
var state_23868__$1 = state_23868;
var statearr_23870_23891 = state_23868__$1;
(statearr_23870_23891[(2)] = inst_23864);

(statearr_23870_23891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (1))){
var state_23868__$1 = state_23868;
var statearr_23871_23892 = state_23868__$1;
(statearr_23871_23892[(2)] = null);

(statearr_23871_23892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (4))){
var inst_23847 = (state_23868[(7)]);
var inst_23847__$1 = (state_23868[(2)]);
var inst_23848 = (inst_23847__$1 == null);
var state_23868__$1 = (function (){var statearr_23872 = state_23868;
(statearr_23872[(7)] = inst_23847__$1);

return statearr_23872;
})();
if(cljs.core.truth_(inst_23848)){
var statearr_23873_23893 = state_23868__$1;
(statearr_23873_23893[(1)] = (5));

} else {
var statearr_23874_23894 = state_23868__$1;
(statearr_23874_23894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (13))){
var state_23868__$1 = state_23868;
var statearr_23875_23895 = state_23868__$1;
(statearr_23875_23895[(2)] = null);

(statearr_23875_23895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (6))){
var inst_23847 = (state_23868[(7)]);
var state_23868__$1 = state_23868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23868__$1,(11),to,inst_23847);
} else {
if((state_val_23869 === (3))){
var inst_23866 = (state_23868[(2)]);
var state_23868__$1 = state_23868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23868__$1,inst_23866);
} else {
if((state_val_23869 === (12))){
var state_23868__$1 = state_23868;
var statearr_23876_23896 = state_23868__$1;
(statearr_23876_23896[(2)] = null);

(statearr_23876_23896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (2))){
var state_23868__$1 = state_23868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23868__$1,(4),from);
} else {
if((state_val_23869 === (11))){
var inst_23857 = (state_23868[(2)]);
var state_23868__$1 = state_23868;
if(cljs.core.truth_(inst_23857)){
var statearr_23877_23897 = state_23868__$1;
(statearr_23877_23897[(1)] = (12));

} else {
var statearr_23878_23898 = state_23868__$1;
(statearr_23878_23898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (9))){
var state_23868__$1 = state_23868;
var statearr_23879_23899 = state_23868__$1;
(statearr_23879_23899[(2)] = null);

(statearr_23879_23899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (5))){
var state_23868__$1 = state_23868;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23880_23900 = state_23868__$1;
(statearr_23880_23900[(1)] = (8));

} else {
var statearr_23881_23901 = state_23868__$1;
(statearr_23881_23901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (14))){
var inst_23862 = (state_23868[(2)]);
var state_23868__$1 = state_23868;
var statearr_23882_23902 = state_23868__$1;
(statearr_23882_23902[(2)] = inst_23862);

(statearr_23882_23902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (10))){
var inst_23854 = (state_23868[(2)]);
var state_23868__$1 = state_23868;
var statearr_23883_23903 = state_23868__$1;
(statearr_23883_23903[(2)] = inst_23854);

(statearr_23883_23903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (8))){
var inst_23851 = cljs.core.async.close_BANG_.call(null,to);
var state_23868__$1 = state_23868;
var statearr_23884_23904 = state_23868__$1;
(statearr_23884_23904[(2)] = inst_23851);

(statearr_23884_23904[(1)] = (10));


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
});})(c__23743__auto___23890))
;
return ((function (switch__23648__auto__,c__23743__auto___23890){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_23885 = [null,null,null,null,null,null,null,null];
(statearr_23885[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_23885[(1)] = (1));

return statearr_23885;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_23868){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_23868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e23886){if((e23886 instanceof Object)){
var ex__23652__auto__ = e23886;
var statearr_23887_23905 = state_23868;
(statearr_23887_23905[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23906 = state_23868;
state_23868 = G__23906;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_23868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_23868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___23890))
})();
var state__23745__auto__ = (function (){var statearr_23888 = f__23744__auto__.call(null);
(statearr_23888[(6)] = c__23743__auto___23890);

return statearr_23888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___23890))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23907){
var vec__23908 = p__23907;
var v = cljs.core.nth.call(null,vec__23908,(0),null);
var p = cljs.core.nth.call(null,vec__23908,(1),null);
var job = vec__23908;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23743__auto___24079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___24079,res,vec__23908,v,p,job,jobs,results){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___24079,res,vec__23908,v,p,job,jobs,results){
return (function (state_23915){
var state_val_23916 = (state_23915[(1)]);
if((state_val_23916 === (1))){
var state_23915__$1 = state_23915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23915__$1,(2),res,v);
} else {
if((state_val_23916 === (2))){
var inst_23912 = (state_23915[(2)]);
var inst_23913 = cljs.core.async.close_BANG_.call(null,res);
var state_23915__$1 = (function (){var statearr_23917 = state_23915;
(statearr_23917[(7)] = inst_23912);

return statearr_23917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23915__$1,inst_23913);
} else {
return null;
}
}
});})(c__23743__auto___24079,res,vec__23908,v,p,job,jobs,results))
;
return ((function (switch__23648__auto__,c__23743__auto___24079,res,vec__23908,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0 = (function (){
var statearr_23918 = [null,null,null,null,null,null,null,null];
(statearr_23918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__);

(statearr_23918[(1)] = (1));

return statearr_23918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1 = (function (state_23915){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_23915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e23919){if((e23919 instanceof Object)){
var ex__23652__auto__ = e23919;
var statearr_23920_24080 = state_23915;
(statearr_23920_24080[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24081 = state_23915;
state_23915 = G__24081;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = function(state_23915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1.call(this,state_23915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___24079,res,vec__23908,v,p,job,jobs,results))
})();
var state__23745__auto__ = (function (){var statearr_23921 = f__23744__auto__.call(null);
(statearr_23921[(6)] = c__23743__auto___24079);

return statearr_23921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___24079,res,vec__23908,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23922){
var vec__23923 = p__23922;
var v = cljs.core.nth.call(null,vec__23923,(0),null);
var p = cljs.core.nth.call(null,vec__23923,(1),null);
var job = vec__23923;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24082 = n;
var __24083 = (0);
while(true){
if((__24083 < n__4607__auto___24082)){
var G__23926_24084 = type;
var G__23926_24085__$1 = (((G__23926_24084 instanceof cljs.core.Keyword))?G__23926_24084.fqn:null);
switch (G__23926_24085__$1) {
case "compute":
var c__23743__auto___24087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24083,c__23743__auto___24087,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (__24083,c__23743__auto___24087,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async){
return (function (state_23939){
var state_val_23940 = (state_23939[(1)]);
if((state_val_23940 === (1))){
var state_23939__$1 = state_23939;
var statearr_23941_24088 = state_23939__$1;
(statearr_23941_24088[(2)] = null);

(statearr_23941_24088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (2))){
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23939__$1,(4),jobs);
} else {
if((state_val_23940 === (3))){
var inst_23937 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23939__$1,inst_23937);
} else {
if((state_val_23940 === (4))){
var inst_23929 = (state_23939[(2)]);
var inst_23930 = process.call(null,inst_23929);
var state_23939__$1 = state_23939;
if(cljs.core.truth_(inst_23930)){
var statearr_23942_24089 = state_23939__$1;
(statearr_23942_24089[(1)] = (5));

} else {
var statearr_23943_24090 = state_23939__$1;
(statearr_23943_24090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (5))){
var state_23939__$1 = state_23939;
var statearr_23944_24091 = state_23939__$1;
(statearr_23944_24091[(2)] = null);

(statearr_23944_24091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (6))){
var state_23939__$1 = state_23939;
var statearr_23945_24092 = state_23939__$1;
(statearr_23945_24092[(2)] = null);

(statearr_23945_24092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (7))){
var inst_23935 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
var statearr_23946_24093 = state_23939__$1;
(statearr_23946_24093[(2)] = inst_23935);

(statearr_23946_24093[(1)] = (3));


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
});})(__24083,c__23743__auto___24087,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async))
;
return ((function (__24083,switch__23648__auto__,c__23743__auto___24087,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0 = (function (){
var statearr_23947 = [null,null,null,null,null,null,null];
(statearr_23947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__);

(statearr_23947[(1)] = (1));

return statearr_23947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1 = (function (state_23939){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_23939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e23948){if((e23948 instanceof Object)){
var ex__23652__auto__ = e23948;
var statearr_23949_24094 = state_23939;
(statearr_23949_24094[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24095 = state_23939;
state_23939 = G__24095;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = function(state_23939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1.call(this,state_23939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__;
})()
;})(__24083,switch__23648__auto__,c__23743__auto___24087,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async))
})();
var state__23745__auto__ = (function (){var statearr_23950 = f__23744__auto__.call(null);
(statearr_23950[(6)] = c__23743__auto___24087);

return statearr_23950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(__24083,c__23743__auto___24087,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async))
);


break;
case "async":
var c__23743__auto___24096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24083,c__23743__auto___24096,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (__24083,c__23743__auto___24096,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async){
return (function (state_23963){
var state_val_23964 = (state_23963[(1)]);
if((state_val_23964 === (1))){
var state_23963__$1 = state_23963;
var statearr_23965_24097 = state_23963__$1;
(statearr_23965_24097[(2)] = null);

(statearr_23965_24097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23964 === (2))){
var state_23963__$1 = state_23963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23963__$1,(4),jobs);
} else {
if((state_val_23964 === (3))){
var inst_23961 = (state_23963[(2)]);
var state_23963__$1 = state_23963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23963__$1,inst_23961);
} else {
if((state_val_23964 === (4))){
var inst_23953 = (state_23963[(2)]);
var inst_23954 = async.call(null,inst_23953);
var state_23963__$1 = state_23963;
if(cljs.core.truth_(inst_23954)){
var statearr_23966_24098 = state_23963__$1;
(statearr_23966_24098[(1)] = (5));

} else {
var statearr_23967_24099 = state_23963__$1;
(statearr_23967_24099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23964 === (5))){
var state_23963__$1 = state_23963;
var statearr_23968_24100 = state_23963__$1;
(statearr_23968_24100[(2)] = null);

(statearr_23968_24100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23964 === (6))){
var state_23963__$1 = state_23963;
var statearr_23969_24101 = state_23963__$1;
(statearr_23969_24101[(2)] = null);

(statearr_23969_24101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23964 === (7))){
var inst_23959 = (state_23963[(2)]);
var state_23963__$1 = state_23963;
var statearr_23970_24102 = state_23963__$1;
(statearr_23970_24102[(2)] = inst_23959);

(statearr_23970_24102[(1)] = (3));


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
});})(__24083,c__23743__auto___24096,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async))
;
return ((function (__24083,switch__23648__auto__,c__23743__auto___24096,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0 = (function (){
var statearr_23971 = [null,null,null,null,null,null,null];
(statearr_23971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__);

(statearr_23971[(1)] = (1));

return statearr_23971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1 = (function (state_23963){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_23963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e23972){if((e23972 instanceof Object)){
var ex__23652__auto__ = e23972;
var statearr_23973_24103 = state_23963;
(statearr_23973_24103[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24104 = state_23963;
state_23963 = G__24104;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = function(state_23963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1.call(this,state_23963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__;
})()
;})(__24083,switch__23648__auto__,c__23743__auto___24096,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async))
})();
var state__23745__auto__ = (function (){var statearr_23974 = f__23744__auto__.call(null);
(statearr_23974[(6)] = c__23743__auto___24096);

return statearr_23974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(__24083,c__23743__auto___24096,G__23926_24084,G__23926_24085__$1,n__4607__auto___24082,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23926_24085__$1)].join('')));

}

var G__24105 = (__24083 + (1));
__24083 = G__24105;
continue;
} else {
}
break;
}

var c__23743__auto___24106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___24106,jobs,results,process,async){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___24106,jobs,results,process,async){
return (function (state_23996){
var state_val_23997 = (state_23996[(1)]);
if((state_val_23997 === (7))){
var inst_23992 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
var statearr_23998_24107 = state_23996__$1;
(statearr_23998_24107[(2)] = inst_23992);

(statearr_23998_24107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (1))){
var state_23996__$1 = state_23996;
var statearr_23999_24108 = state_23996__$1;
(statearr_23999_24108[(2)] = null);

(statearr_23999_24108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (4))){
var inst_23977 = (state_23996[(7)]);
var inst_23977__$1 = (state_23996[(2)]);
var inst_23978 = (inst_23977__$1 == null);
var state_23996__$1 = (function (){var statearr_24000 = state_23996;
(statearr_24000[(7)] = inst_23977__$1);

return statearr_24000;
})();
if(cljs.core.truth_(inst_23978)){
var statearr_24001_24109 = state_23996__$1;
(statearr_24001_24109[(1)] = (5));

} else {
var statearr_24002_24110 = state_23996__$1;
(statearr_24002_24110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (6))){
var inst_23982 = (state_23996[(8)]);
var inst_23977 = (state_23996[(7)]);
var inst_23982__$1 = cljs.core.async.chan.call(null,(1));
var inst_23983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23984 = [inst_23977,inst_23982__$1];
var inst_23985 = (new cljs.core.PersistentVector(null,2,(5),inst_23983,inst_23984,null));
var state_23996__$1 = (function (){var statearr_24003 = state_23996;
(statearr_24003[(8)] = inst_23982__$1);

return statearr_24003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23996__$1,(8),jobs,inst_23985);
} else {
if((state_val_23997 === (3))){
var inst_23994 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23996__$1,inst_23994);
} else {
if((state_val_23997 === (2))){
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23996__$1,(4),from);
} else {
if((state_val_23997 === (9))){
var inst_23989 = (state_23996[(2)]);
var state_23996__$1 = (function (){var statearr_24004 = state_23996;
(statearr_24004[(9)] = inst_23989);

return statearr_24004;
})();
var statearr_24005_24111 = state_23996__$1;
(statearr_24005_24111[(2)] = null);

(statearr_24005_24111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (5))){
var inst_23980 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23996__$1 = state_23996;
var statearr_24006_24112 = state_23996__$1;
(statearr_24006_24112[(2)] = inst_23980);

(statearr_24006_24112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (8))){
var inst_23982 = (state_23996[(8)]);
var inst_23987 = (state_23996[(2)]);
var state_23996__$1 = (function (){var statearr_24007 = state_23996;
(statearr_24007[(10)] = inst_23987);

return statearr_24007;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23996__$1,(9),results,inst_23982);
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
});})(c__23743__auto___24106,jobs,results,process,async))
;
return ((function (switch__23648__auto__,c__23743__auto___24106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0 = (function (){
var statearr_24008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__);

(statearr_24008[(1)] = (1));

return statearr_24008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1 = (function (state_23996){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_23996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24009){if((e24009 instanceof Object)){
var ex__23652__auto__ = e24009;
var statearr_24010_24113 = state_23996;
(statearr_24010_24113[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24114 = state_23996;
state_23996 = G__24114;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = function(state_23996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1.call(this,state_23996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___24106,jobs,results,process,async))
})();
var state__23745__auto__ = (function (){var statearr_24011 = f__23744__auto__.call(null);
(statearr_24011[(6)] = c__23743__auto___24106);

return statearr_24011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___24106,jobs,results,process,async))
);


var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__,jobs,results,process,async){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__,jobs,results,process,async){
return (function (state_24049){
var state_val_24050 = (state_24049[(1)]);
if((state_val_24050 === (7))){
var inst_24045 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24051_24115 = state_24049__$1;
(statearr_24051_24115[(2)] = inst_24045);

(statearr_24051_24115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (20))){
var state_24049__$1 = state_24049;
var statearr_24052_24116 = state_24049__$1;
(statearr_24052_24116[(2)] = null);

(statearr_24052_24116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (1))){
var state_24049__$1 = state_24049;
var statearr_24053_24117 = state_24049__$1;
(statearr_24053_24117[(2)] = null);

(statearr_24053_24117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (4))){
var inst_24014 = (state_24049[(7)]);
var inst_24014__$1 = (state_24049[(2)]);
var inst_24015 = (inst_24014__$1 == null);
var state_24049__$1 = (function (){var statearr_24054 = state_24049;
(statearr_24054[(7)] = inst_24014__$1);

return statearr_24054;
})();
if(cljs.core.truth_(inst_24015)){
var statearr_24055_24118 = state_24049__$1;
(statearr_24055_24118[(1)] = (5));

} else {
var statearr_24056_24119 = state_24049__$1;
(statearr_24056_24119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (15))){
var inst_24027 = (state_24049[(8)]);
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24049__$1,(18),to,inst_24027);
} else {
if((state_val_24050 === (21))){
var inst_24040 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24057_24120 = state_24049__$1;
(statearr_24057_24120[(2)] = inst_24040);

(statearr_24057_24120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (13))){
var inst_24042 = (state_24049[(2)]);
var state_24049__$1 = (function (){var statearr_24058 = state_24049;
(statearr_24058[(9)] = inst_24042);

return statearr_24058;
})();
var statearr_24059_24121 = state_24049__$1;
(statearr_24059_24121[(2)] = null);

(statearr_24059_24121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (6))){
var inst_24014 = (state_24049[(7)]);
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24049__$1,(11),inst_24014);
} else {
if((state_val_24050 === (17))){
var inst_24035 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
if(cljs.core.truth_(inst_24035)){
var statearr_24060_24122 = state_24049__$1;
(statearr_24060_24122[(1)] = (19));

} else {
var statearr_24061_24123 = state_24049__$1;
(statearr_24061_24123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (3))){
var inst_24047 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24049__$1,inst_24047);
} else {
if((state_val_24050 === (12))){
var inst_24024 = (state_24049[(10)]);
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24049__$1,(14),inst_24024);
} else {
if((state_val_24050 === (2))){
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24049__$1,(4),results);
} else {
if((state_val_24050 === (19))){
var state_24049__$1 = state_24049;
var statearr_24062_24124 = state_24049__$1;
(statearr_24062_24124[(2)] = null);

(statearr_24062_24124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (11))){
var inst_24024 = (state_24049[(2)]);
var state_24049__$1 = (function (){var statearr_24063 = state_24049;
(statearr_24063[(10)] = inst_24024);

return statearr_24063;
})();
var statearr_24064_24125 = state_24049__$1;
(statearr_24064_24125[(2)] = null);

(statearr_24064_24125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (9))){
var state_24049__$1 = state_24049;
var statearr_24065_24126 = state_24049__$1;
(statearr_24065_24126[(2)] = null);

(statearr_24065_24126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (5))){
var state_24049__$1 = state_24049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24066_24127 = state_24049__$1;
(statearr_24066_24127[(1)] = (8));

} else {
var statearr_24067_24128 = state_24049__$1;
(statearr_24067_24128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (14))){
var inst_24027 = (state_24049[(8)]);
var inst_24029 = (state_24049[(11)]);
var inst_24027__$1 = (state_24049[(2)]);
var inst_24028 = (inst_24027__$1 == null);
var inst_24029__$1 = cljs.core.not.call(null,inst_24028);
var state_24049__$1 = (function (){var statearr_24068 = state_24049;
(statearr_24068[(8)] = inst_24027__$1);

(statearr_24068[(11)] = inst_24029__$1);

return statearr_24068;
})();
if(inst_24029__$1){
var statearr_24069_24129 = state_24049__$1;
(statearr_24069_24129[(1)] = (15));

} else {
var statearr_24070_24130 = state_24049__$1;
(statearr_24070_24130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (16))){
var inst_24029 = (state_24049[(11)]);
var state_24049__$1 = state_24049;
var statearr_24071_24131 = state_24049__$1;
(statearr_24071_24131[(2)] = inst_24029);

(statearr_24071_24131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (10))){
var inst_24021 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24072_24132 = state_24049__$1;
(statearr_24072_24132[(2)] = inst_24021);

(statearr_24072_24132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (18))){
var inst_24032 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24073_24133 = state_24049__$1;
(statearr_24073_24133[(2)] = inst_24032);

(statearr_24073_24133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (8))){
var inst_24018 = cljs.core.async.close_BANG_.call(null,to);
var state_24049__$1 = state_24049;
var statearr_24074_24134 = state_24049__$1;
(statearr_24074_24134[(2)] = inst_24018);

(statearr_24074_24134[(1)] = (10));


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
});})(c__23743__auto__,jobs,results,process,async))
;
return ((function (switch__23648__auto__,c__23743__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0 = (function (){
var statearr_24075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__);

(statearr_24075[(1)] = (1));

return statearr_24075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1 = (function (state_24049){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_24049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24076){if((e24076 instanceof Object)){
var ex__23652__auto__ = e24076;
var statearr_24077_24135 = state_24049;
(statearr_24077_24135[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24136 = state_24049;
state_24049 = G__24136;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__ = function(state_24049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1.call(this,state_24049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__,jobs,results,process,async))
})();
var state__23745__auto__ = (function (){var statearr_24078 = f__23744__auto__.call(null);
(statearr_24078[(6)] = c__23743__auto__);

return statearr_24078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__,jobs,results,process,async))
);

return c__23743__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24138 = arguments.length;
switch (G__24138) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24141 = arguments.length;
switch (G__24141) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24144 = arguments.length;
switch (G__24144) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23743__auto___24193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___24193,tc,fc){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___24193,tc,fc){
return (function (state_24170){
var state_val_24171 = (state_24170[(1)]);
if((state_val_24171 === (7))){
var inst_24166 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
var statearr_24172_24194 = state_24170__$1;
(statearr_24172_24194[(2)] = inst_24166);

(statearr_24172_24194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (1))){
var state_24170__$1 = state_24170;
var statearr_24173_24195 = state_24170__$1;
(statearr_24173_24195[(2)] = null);

(statearr_24173_24195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (4))){
var inst_24147 = (state_24170[(7)]);
var inst_24147__$1 = (state_24170[(2)]);
var inst_24148 = (inst_24147__$1 == null);
var state_24170__$1 = (function (){var statearr_24174 = state_24170;
(statearr_24174[(7)] = inst_24147__$1);

return statearr_24174;
})();
if(cljs.core.truth_(inst_24148)){
var statearr_24175_24196 = state_24170__$1;
(statearr_24175_24196[(1)] = (5));

} else {
var statearr_24176_24197 = state_24170__$1;
(statearr_24176_24197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (13))){
var state_24170__$1 = state_24170;
var statearr_24177_24198 = state_24170__$1;
(statearr_24177_24198[(2)] = null);

(statearr_24177_24198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (6))){
var inst_24147 = (state_24170[(7)]);
var inst_24153 = p.call(null,inst_24147);
var state_24170__$1 = state_24170;
if(cljs.core.truth_(inst_24153)){
var statearr_24178_24199 = state_24170__$1;
(statearr_24178_24199[(1)] = (9));

} else {
var statearr_24179_24200 = state_24170__$1;
(statearr_24179_24200[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (3))){
var inst_24168 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24170__$1,inst_24168);
} else {
if((state_val_24171 === (12))){
var state_24170__$1 = state_24170;
var statearr_24180_24201 = state_24170__$1;
(statearr_24180_24201[(2)] = null);

(statearr_24180_24201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (2))){
var state_24170__$1 = state_24170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24170__$1,(4),ch);
} else {
if((state_val_24171 === (11))){
var inst_24147 = (state_24170[(7)]);
var inst_24157 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24170__$1,(8),inst_24157,inst_24147);
} else {
if((state_val_24171 === (9))){
var state_24170__$1 = state_24170;
var statearr_24181_24202 = state_24170__$1;
(statearr_24181_24202[(2)] = tc);

(statearr_24181_24202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (5))){
var inst_24150 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24151 = cljs.core.async.close_BANG_.call(null,fc);
var state_24170__$1 = (function (){var statearr_24182 = state_24170;
(statearr_24182[(8)] = inst_24150);

return statearr_24182;
})();
var statearr_24183_24203 = state_24170__$1;
(statearr_24183_24203[(2)] = inst_24151);

(statearr_24183_24203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (14))){
var inst_24164 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
var statearr_24184_24204 = state_24170__$1;
(statearr_24184_24204[(2)] = inst_24164);

(statearr_24184_24204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (10))){
var state_24170__$1 = state_24170;
var statearr_24185_24205 = state_24170__$1;
(statearr_24185_24205[(2)] = fc);

(statearr_24185_24205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (8))){
var inst_24159 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
if(cljs.core.truth_(inst_24159)){
var statearr_24186_24206 = state_24170__$1;
(statearr_24186_24206[(1)] = (12));

} else {
var statearr_24187_24207 = state_24170__$1;
(statearr_24187_24207[(1)] = (13));

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
});})(c__23743__auto___24193,tc,fc))
;
return ((function (switch__23648__auto__,c__23743__auto___24193,tc,fc){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_24188 = [null,null,null,null,null,null,null,null,null];
(statearr_24188[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_24188[(1)] = (1));

return statearr_24188;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_24170){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_24170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24189){if((e24189 instanceof Object)){
var ex__23652__auto__ = e24189;
var statearr_24190_24208 = state_24170;
(statearr_24190_24208[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24209 = state_24170;
state_24170 = G__24209;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_24170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_24170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___24193,tc,fc))
})();
var state__23745__auto__ = (function (){var statearr_24191 = f__23744__auto__.call(null);
(statearr_24191[(6)] = c__23743__auto___24193);

return statearr_24191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___24193,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__){
return (function (state_24230){
var state_val_24231 = (state_24230[(1)]);
if((state_val_24231 === (7))){
var inst_24226 = (state_24230[(2)]);
var state_24230__$1 = state_24230;
var statearr_24232_24250 = state_24230__$1;
(statearr_24232_24250[(2)] = inst_24226);

(statearr_24232_24250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24231 === (1))){
var inst_24210 = init;
var state_24230__$1 = (function (){var statearr_24233 = state_24230;
(statearr_24233[(7)] = inst_24210);

return statearr_24233;
})();
var statearr_24234_24251 = state_24230__$1;
(statearr_24234_24251[(2)] = null);

(statearr_24234_24251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24231 === (4))){
var inst_24213 = (state_24230[(8)]);
var inst_24213__$1 = (state_24230[(2)]);
var inst_24214 = (inst_24213__$1 == null);
var state_24230__$1 = (function (){var statearr_24235 = state_24230;
(statearr_24235[(8)] = inst_24213__$1);

return statearr_24235;
})();
if(cljs.core.truth_(inst_24214)){
var statearr_24236_24252 = state_24230__$1;
(statearr_24236_24252[(1)] = (5));

} else {
var statearr_24237_24253 = state_24230__$1;
(statearr_24237_24253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24231 === (6))){
var inst_24217 = (state_24230[(9)]);
var inst_24210 = (state_24230[(7)]);
var inst_24213 = (state_24230[(8)]);
var inst_24217__$1 = f.call(null,inst_24210,inst_24213);
var inst_24218 = cljs.core.reduced_QMARK_.call(null,inst_24217__$1);
var state_24230__$1 = (function (){var statearr_24238 = state_24230;
(statearr_24238[(9)] = inst_24217__$1);

return statearr_24238;
})();
if(inst_24218){
var statearr_24239_24254 = state_24230__$1;
(statearr_24239_24254[(1)] = (8));

} else {
var statearr_24240_24255 = state_24230__$1;
(statearr_24240_24255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24231 === (3))){
var inst_24228 = (state_24230[(2)]);
var state_24230__$1 = state_24230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24230__$1,inst_24228);
} else {
if((state_val_24231 === (2))){
var state_24230__$1 = state_24230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24230__$1,(4),ch);
} else {
if((state_val_24231 === (9))){
var inst_24217 = (state_24230[(9)]);
var inst_24210 = inst_24217;
var state_24230__$1 = (function (){var statearr_24241 = state_24230;
(statearr_24241[(7)] = inst_24210);

return statearr_24241;
})();
var statearr_24242_24256 = state_24230__$1;
(statearr_24242_24256[(2)] = null);

(statearr_24242_24256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24231 === (5))){
var inst_24210 = (state_24230[(7)]);
var state_24230__$1 = state_24230;
var statearr_24243_24257 = state_24230__$1;
(statearr_24243_24257[(2)] = inst_24210);

(statearr_24243_24257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24231 === (10))){
var inst_24224 = (state_24230[(2)]);
var state_24230__$1 = state_24230;
var statearr_24244_24258 = state_24230__$1;
(statearr_24244_24258[(2)] = inst_24224);

(statearr_24244_24258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24231 === (8))){
var inst_24217 = (state_24230[(9)]);
var inst_24220 = cljs.core.deref.call(null,inst_24217);
var state_24230__$1 = state_24230;
var statearr_24245_24259 = state_24230__$1;
(statearr_24245_24259[(2)] = inst_24220);

(statearr_24245_24259[(1)] = (10));


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
});})(c__23743__auto__))
;
return ((function (switch__23648__auto__,c__23743__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23649__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23649__auto____0 = (function (){
var statearr_24246 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24246[(0)] = cljs$core$async$reduce_$_state_machine__23649__auto__);

(statearr_24246[(1)] = (1));

return statearr_24246;
});
var cljs$core$async$reduce_$_state_machine__23649__auto____1 = (function (state_24230){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_24230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24247){if((e24247 instanceof Object)){
var ex__23652__auto__ = e24247;
var statearr_24248_24260 = state_24230;
(statearr_24248_24260[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24261 = state_24230;
state_24230 = G__24261;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23649__auto__ = function(state_24230){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23649__auto____1.call(this,state_24230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23649__auto____0;
cljs$core$async$reduce_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23649__auto____1;
return cljs$core$async$reduce_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__))
})();
var state__23745__auto__ = (function (){var statearr_24249 = f__23744__auto__.call(null);
(statearr_24249[(6)] = c__23743__auto__);

return statearr_24249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__))
);

return c__23743__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__,f__$1){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__,f__$1){
return (function (state_24267){
var state_val_24268 = (state_24267[(1)]);
if((state_val_24268 === (1))){
var inst_24262 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24267__$1 = state_24267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24267__$1,(2),inst_24262);
} else {
if((state_val_24268 === (2))){
var inst_24264 = (state_24267[(2)]);
var inst_24265 = f__$1.call(null,inst_24264);
var state_24267__$1 = state_24267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24267__$1,inst_24265);
} else {
return null;
}
}
});})(c__23743__auto__,f__$1))
;
return ((function (switch__23648__auto__,c__23743__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23649__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23649__auto____0 = (function (){
var statearr_24269 = [null,null,null,null,null,null,null];
(statearr_24269[(0)] = cljs$core$async$transduce_$_state_machine__23649__auto__);

(statearr_24269[(1)] = (1));

return statearr_24269;
});
var cljs$core$async$transduce_$_state_machine__23649__auto____1 = (function (state_24267){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_24267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24270){if((e24270 instanceof Object)){
var ex__23652__auto__ = e24270;
var statearr_24271_24273 = state_24267;
(statearr_24271_24273[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24274 = state_24267;
state_24267 = G__24274;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23649__auto__ = function(state_24267){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23649__auto____1.call(this,state_24267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23649__auto____0;
cljs$core$async$transduce_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23649__auto____1;
return cljs$core$async$transduce_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__,f__$1))
})();
var state__23745__auto__ = (function (){var statearr_24272 = f__23744__auto__.call(null);
(statearr_24272[(6)] = c__23743__auto__);

return statearr_24272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__,f__$1))
);

return c__23743__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24276 = arguments.length;
switch (G__24276) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__){
return (function (state_24301){
var state_val_24302 = (state_24301[(1)]);
if((state_val_24302 === (7))){
var inst_24283 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24303_24324 = state_24301__$1;
(statearr_24303_24324[(2)] = inst_24283);

(statearr_24303_24324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (1))){
var inst_24277 = cljs.core.seq.call(null,coll);
var inst_24278 = inst_24277;
var state_24301__$1 = (function (){var statearr_24304 = state_24301;
(statearr_24304[(7)] = inst_24278);

return statearr_24304;
})();
var statearr_24305_24325 = state_24301__$1;
(statearr_24305_24325[(2)] = null);

(statearr_24305_24325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (4))){
var inst_24278 = (state_24301[(7)]);
var inst_24281 = cljs.core.first.call(null,inst_24278);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24301__$1,(7),ch,inst_24281);
} else {
if((state_val_24302 === (13))){
var inst_24295 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24306_24326 = state_24301__$1;
(statearr_24306_24326[(2)] = inst_24295);

(statearr_24306_24326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (6))){
var inst_24286 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24286)){
var statearr_24307_24327 = state_24301__$1;
(statearr_24307_24327[(1)] = (8));

} else {
var statearr_24308_24328 = state_24301__$1;
(statearr_24308_24328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (3))){
var inst_24299 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24301__$1,inst_24299);
} else {
if((state_val_24302 === (12))){
var state_24301__$1 = state_24301;
var statearr_24309_24329 = state_24301__$1;
(statearr_24309_24329[(2)] = null);

(statearr_24309_24329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (2))){
var inst_24278 = (state_24301[(7)]);
var state_24301__$1 = state_24301;
if(cljs.core.truth_(inst_24278)){
var statearr_24310_24330 = state_24301__$1;
(statearr_24310_24330[(1)] = (4));

} else {
var statearr_24311_24331 = state_24301__$1;
(statearr_24311_24331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (11))){
var inst_24292 = cljs.core.async.close_BANG_.call(null,ch);
var state_24301__$1 = state_24301;
var statearr_24312_24332 = state_24301__$1;
(statearr_24312_24332[(2)] = inst_24292);

(statearr_24312_24332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (9))){
var state_24301__$1 = state_24301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24313_24333 = state_24301__$1;
(statearr_24313_24333[(1)] = (11));

} else {
var statearr_24314_24334 = state_24301__$1;
(statearr_24314_24334[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (5))){
var inst_24278 = (state_24301[(7)]);
var state_24301__$1 = state_24301;
var statearr_24315_24335 = state_24301__$1;
(statearr_24315_24335[(2)] = inst_24278);

(statearr_24315_24335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (10))){
var inst_24297 = (state_24301[(2)]);
var state_24301__$1 = state_24301;
var statearr_24316_24336 = state_24301__$1;
(statearr_24316_24336[(2)] = inst_24297);

(statearr_24316_24336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24302 === (8))){
var inst_24278 = (state_24301[(7)]);
var inst_24288 = cljs.core.next.call(null,inst_24278);
var inst_24278__$1 = inst_24288;
var state_24301__$1 = (function (){var statearr_24317 = state_24301;
(statearr_24317[(7)] = inst_24278__$1);

return statearr_24317;
})();
var statearr_24318_24337 = state_24301__$1;
(statearr_24318_24337[(2)] = null);

(statearr_24318_24337[(1)] = (2));


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
});})(c__23743__auto__))
;
return ((function (switch__23648__auto__,c__23743__auto__){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_24319 = [null,null,null,null,null,null,null,null];
(statearr_24319[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_24319[(1)] = (1));

return statearr_24319;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_24301){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_24301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24320){if((e24320 instanceof Object)){
var ex__23652__auto__ = e24320;
var statearr_24321_24338 = state_24301;
(statearr_24321_24338[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24339 = state_24301;
state_24301 = G__24339;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_24301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_24301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__))
})();
var state__23745__auto__ = (function (){var statearr_24322 = f__23744__auto__.call(null);
(statearr_24322[(6)] = c__23743__auto__);

return statearr_24322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__))
);

return c__23743__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24340 = (function (ch,cs,meta24341){
this.ch = ch;
this.cs = cs;
this.meta24341 = meta24341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24342,meta24341__$1){
var self__ = this;
var _24342__$1 = this;
return (new cljs.core.async.t_cljs$core$async24340(self__.ch,self__.cs,meta24341__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24342){
var self__ = this;
var _24342__$1 = this;
return self__.meta24341;
});})(cs))
;

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24340.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24341","meta24341",-1052095405,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24340";

cljs.core.async.t_cljs$core$async24340.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24340");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24340.
 */
cljs.core.async.__GT_t_cljs$core$async24340 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24340(ch__$1,cs__$1,meta24341){
return (new cljs.core.async.t_cljs$core$async24340(ch__$1,cs__$1,meta24341));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24340(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23743__auto___24562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___24562,cs,m,dchan,dctr,done){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___24562,cs,m,dchan,dctr,done){
return (function (state_24477){
var state_val_24478 = (state_24477[(1)]);
if((state_val_24478 === (7))){
var inst_24473 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24479_24563 = state_24477__$1;
(statearr_24479_24563[(2)] = inst_24473);

(statearr_24479_24563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (20))){
var inst_24376 = (state_24477[(7)]);
var inst_24388 = cljs.core.first.call(null,inst_24376);
var inst_24389 = cljs.core.nth.call(null,inst_24388,(0),null);
var inst_24390 = cljs.core.nth.call(null,inst_24388,(1),null);
var state_24477__$1 = (function (){var statearr_24480 = state_24477;
(statearr_24480[(8)] = inst_24389);

return statearr_24480;
})();
if(cljs.core.truth_(inst_24390)){
var statearr_24481_24564 = state_24477__$1;
(statearr_24481_24564[(1)] = (22));

} else {
var statearr_24482_24565 = state_24477__$1;
(statearr_24482_24565[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (27))){
var inst_24425 = (state_24477[(9)]);
var inst_24418 = (state_24477[(10)]);
var inst_24420 = (state_24477[(11)]);
var inst_24345 = (state_24477[(12)]);
var inst_24425__$1 = cljs.core._nth.call(null,inst_24418,inst_24420);
var inst_24426 = cljs.core.async.put_BANG_.call(null,inst_24425__$1,inst_24345,done);
var state_24477__$1 = (function (){var statearr_24483 = state_24477;
(statearr_24483[(9)] = inst_24425__$1);

return statearr_24483;
})();
if(cljs.core.truth_(inst_24426)){
var statearr_24484_24566 = state_24477__$1;
(statearr_24484_24566[(1)] = (30));

} else {
var statearr_24485_24567 = state_24477__$1;
(statearr_24485_24567[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (1))){
var state_24477__$1 = state_24477;
var statearr_24486_24568 = state_24477__$1;
(statearr_24486_24568[(2)] = null);

(statearr_24486_24568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (24))){
var inst_24376 = (state_24477[(7)]);
var inst_24395 = (state_24477[(2)]);
var inst_24396 = cljs.core.next.call(null,inst_24376);
var inst_24354 = inst_24396;
var inst_24355 = null;
var inst_24356 = (0);
var inst_24357 = (0);
var state_24477__$1 = (function (){var statearr_24487 = state_24477;
(statearr_24487[(13)] = inst_24356);

(statearr_24487[(14)] = inst_24357);

(statearr_24487[(15)] = inst_24355);

(statearr_24487[(16)] = inst_24354);

(statearr_24487[(17)] = inst_24395);

return statearr_24487;
})();
var statearr_24488_24569 = state_24477__$1;
(statearr_24488_24569[(2)] = null);

(statearr_24488_24569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (39))){
var state_24477__$1 = state_24477;
var statearr_24492_24570 = state_24477__$1;
(statearr_24492_24570[(2)] = null);

(statearr_24492_24570[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (4))){
var inst_24345 = (state_24477[(12)]);
var inst_24345__$1 = (state_24477[(2)]);
var inst_24346 = (inst_24345__$1 == null);
var state_24477__$1 = (function (){var statearr_24493 = state_24477;
(statearr_24493[(12)] = inst_24345__$1);

return statearr_24493;
})();
if(cljs.core.truth_(inst_24346)){
var statearr_24494_24571 = state_24477__$1;
(statearr_24494_24571[(1)] = (5));

} else {
var statearr_24495_24572 = state_24477__$1;
(statearr_24495_24572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (15))){
var inst_24356 = (state_24477[(13)]);
var inst_24357 = (state_24477[(14)]);
var inst_24355 = (state_24477[(15)]);
var inst_24354 = (state_24477[(16)]);
var inst_24372 = (state_24477[(2)]);
var inst_24373 = (inst_24357 + (1));
var tmp24489 = inst_24356;
var tmp24490 = inst_24355;
var tmp24491 = inst_24354;
var inst_24354__$1 = tmp24491;
var inst_24355__$1 = tmp24490;
var inst_24356__$1 = tmp24489;
var inst_24357__$1 = inst_24373;
var state_24477__$1 = (function (){var statearr_24496 = state_24477;
(statearr_24496[(18)] = inst_24372);

(statearr_24496[(13)] = inst_24356__$1);

(statearr_24496[(14)] = inst_24357__$1);

(statearr_24496[(15)] = inst_24355__$1);

(statearr_24496[(16)] = inst_24354__$1);

return statearr_24496;
})();
var statearr_24497_24573 = state_24477__$1;
(statearr_24497_24573[(2)] = null);

(statearr_24497_24573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (21))){
var inst_24399 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24501_24574 = state_24477__$1;
(statearr_24501_24574[(2)] = inst_24399);

(statearr_24501_24574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (31))){
var inst_24425 = (state_24477[(9)]);
var inst_24429 = done.call(null,null);
var inst_24430 = cljs.core.async.untap_STAR_.call(null,m,inst_24425);
var state_24477__$1 = (function (){var statearr_24502 = state_24477;
(statearr_24502[(19)] = inst_24429);

return statearr_24502;
})();
var statearr_24503_24575 = state_24477__$1;
(statearr_24503_24575[(2)] = inst_24430);

(statearr_24503_24575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (32))){
var inst_24417 = (state_24477[(20)]);
var inst_24418 = (state_24477[(10)]);
var inst_24420 = (state_24477[(11)]);
var inst_24419 = (state_24477[(21)]);
var inst_24432 = (state_24477[(2)]);
var inst_24433 = (inst_24420 + (1));
var tmp24498 = inst_24417;
var tmp24499 = inst_24418;
var tmp24500 = inst_24419;
var inst_24417__$1 = tmp24498;
var inst_24418__$1 = tmp24499;
var inst_24419__$1 = tmp24500;
var inst_24420__$1 = inst_24433;
var state_24477__$1 = (function (){var statearr_24504 = state_24477;
(statearr_24504[(20)] = inst_24417__$1);

(statearr_24504[(10)] = inst_24418__$1);

(statearr_24504[(22)] = inst_24432);

(statearr_24504[(11)] = inst_24420__$1);

(statearr_24504[(21)] = inst_24419__$1);

return statearr_24504;
})();
var statearr_24505_24576 = state_24477__$1;
(statearr_24505_24576[(2)] = null);

(statearr_24505_24576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (40))){
var inst_24445 = (state_24477[(23)]);
var inst_24449 = done.call(null,null);
var inst_24450 = cljs.core.async.untap_STAR_.call(null,m,inst_24445);
var state_24477__$1 = (function (){var statearr_24506 = state_24477;
(statearr_24506[(24)] = inst_24449);

return statearr_24506;
})();
var statearr_24507_24577 = state_24477__$1;
(statearr_24507_24577[(2)] = inst_24450);

(statearr_24507_24577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (33))){
var inst_24436 = (state_24477[(25)]);
var inst_24438 = cljs.core.chunked_seq_QMARK_.call(null,inst_24436);
var state_24477__$1 = state_24477;
if(inst_24438){
var statearr_24508_24578 = state_24477__$1;
(statearr_24508_24578[(1)] = (36));

} else {
var statearr_24509_24579 = state_24477__$1;
(statearr_24509_24579[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (13))){
var inst_24366 = (state_24477[(26)]);
var inst_24369 = cljs.core.async.close_BANG_.call(null,inst_24366);
var state_24477__$1 = state_24477;
var statearr_24510_24580 = state_24477__$1;
(statearr_24510_24580[(2)] = inst_24369);

(statearr_24510_24580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (22))){
var inst_24389 = (state_24477[(8)]);
var inst_24392 = cljs.core.async.close_BANG_.call(null,inst_24389);
var state_24477__$1 = state_24477;
var statearr_24511_24581 = state_24477__$1;
(statearr_24511_24581[(2)] = inst_24392);

(statearr_24511_24581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (36))){
var inst_24436 = (state_24477[(25)]);
var inst_24440 = cljs.core.chunk_first.call(null,inst_24436);
var inst_24441 = cljs.core.chunk_rest.call(null,inst_24436);
var inst_24442 = cljs.core.count.call(null,inst_24440);
var inst_24417 = inst_24441;
var inst_24418 = inst_24440;
var inst_24419 = inst_24442;
var inst_24420 = (0);
var state_24477__$1 = (function (){var statearr_24512 = state_24477;
(statearr_24512[(20)] = inst_24417);

(statearr_24512[(10)] = inst_24418);

(statearr_24512[(11)] = inst_24420);

(statearr_24512[(21)] = inst_24419);

return statearr_24512;
})();
var statearr_24513_24582 = state_24477__$1;
(statearr_24513_24582[(2)] = null);

(statearr_24513_24582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (41))){
var inst_24436 = (state_24477[(25)]);
var inst_24452 = (state_24477[(2)]);
var inst_24453 = cljs.core.next.call(null,inst_24436);
var inst_24417 = inst_24453;
var inst_24418 = null;
var inst_24419 = (0);
var inst_24420 = (0);
var state_24477__$1 = (function (){var statearr_24514 = state_24477;
(statearr_24514[(20)] = inst_24417);

(statearr_24514[(10)] = inst_24418);

(statearr_24514[(11)] = inst_24420);

(statearr_24514[(27)] = inst_24452);

(statearr_24514[(21)] = inst_24419);

return statearr_24514;
})();
var statearr_24515_24583 = state_24477__$1;
(statearr_24515_24583[(2)] = null);

(statearr_24515_24583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (43))){
var state_24477__$1 = state_24477;
var statearr_24516_24584 = state_24477__$1;
(statearr_24516_24584[(2)] = null);

(statearr_24516_24584[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (29))){
var inst_24461 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24517_24585 = state_24477__$1;
(statearr_24517_24585[(2)] = inst_24461);

(statearr_24517_24585[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (44))){
var inst_24470 = (state_24477[(2)]);
var state_24477__$1 = (function (){var statearr_24518 = state_24477;
(statearr_24518[(28)] = inst_24470);

return statearr_24518;
})();
var statearr_24519_24586 = state_24477__$1;
(statearr_24519_24586[(2)] = null);

(statearr_24519_24586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (6))){
var inst_24409 = (state_24477[(29)]);
var inst_24408 = cljs.core.deref.call(null,cs);
var inst_24409__$1 = cljs.core.keys.call(null,inst_24408);
var inst_24410 = cljs.core.count.call(null,inst_24409__$1);
var inst_24411 = cljs.core.reset_BANG_.call(null,dctr,inst_24410);
var inst_24416 = cljs.core.seq.call(null,inst_24409__$1);
var inst_24417 = inst_24416;
var inst_24418 = null;
var inst_24419 = (0);
var inst_24420 = (0);
var state_24477__$1 = (function (){var statearr_24520 = state_24477;
(statearr_24520[(30)] = inst_24411);

(statearr_24520[(29)] = inst_24409__$1);

(statearr_24520[(20)] = inst_24417);

(statearr_24520[(10)] = inst_24418);

(statearr_24520[(11)] = inst_24420);

(statearr_24520[(21)] = inst_24419);

return statearr_24520;
})();
var statearr_24521_24587 = state_24477__$1;
(statearr_24521_24587[(2)] = null);

(statearr_24521_24587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (28))){
var inst_24417 = (state_24477[(20)]);
var inst_24436 = (state_24477[(25)]);
var inst_24436__$1 = cljs.core.seq.call(null,inst_24417);
var state_24477__$1 = (function (){var statearr_24522 = state_24477;
(statearr_24522[(25)] = inst_24436__$1);

return statearr_24522;
})();
if(inst_24436__$1){
var statearr_24523_24588 = state_24477__$1;
(statearr_24523_24588[(1)] = (33));

} else {
var statearr_24524_24589 = state_24477__$1;
(statearr_24524_24589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (25))){
var inst_24420 = (state_24477[(11)]);
var inst_24419 = (state_24477[(21)]);
var inst_24422 = (inst_24420 < inst_24419);
var inst_24423 = inst_24422;
var state_24477__$1 = state_24477;
if(cljs.core.truth_(inst_24423)){
var statearr_24525_24590 = state_24477__$1;
(statearr_24525_24590[(1)] = (27));

} else {
var statearr_24526_24591 = state_24477__$1;
(statearr_24526_24591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (34))){
var state_24477__$1 = state_24477;
var statearr_24527_24592 = state_24477__$1;
(statearr_24527_24592[(2)] = null);

(statearr_24527_24592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (17))){
var state_24477__$1 = state_24477;
var statearr_24528_24593 = state_24477__$1;
(statearr_24528_24593[(2)] = null);

(statearr_24528_24593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (3))){
var inst_24475 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24477__$1,inst_24475);
} else {
if((state_val_24478 === (12))){
var inst_24404 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24529_24594 = state_24477__$1;
(statearr_24529_24594[(2)] = inst_24404);

(statearr_24529_24594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (2))){
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24477__$1,(4),ch);
} else {
if((state_val_24478 === (23))){
var state_24477__$1 = state_24477;
var statearr_24530_24595 = state_24477__$1;
(statearr_24530_24595[(2)] = null);

(statearr_24530_24595[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (35))){
var inst_24459 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24531_24596 = state_24477__$1;
(statearr_24531_24596[(2)] = inst_24459);

(statearr_24531_24596[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (19))){
var inst_24376 = (state_24477[(7)]);
var inst_24380 = cljs.core.chunk_first.call(null,inst_24376);
var inst_24381 = cljs.core.chunk_rest.call(null,inst_24376);
var inst_24382 = cljs.core.count.call(null,inst_24380);
var inst_24354 = inst_24381;
var inst_24355 = inst_24380;
var inst_24356 = inst_24382;
var inst_24357 = (0);
var state_24477__$1 = (function (){var statearr_24532 = state_24477;
(statearr_24532[(13)] = inst_24356);

(statearr_24532[(14)] = inst_24357);

(statearr_24532[(15)] = inst_24355);

(statearr_24532[(16)] = inst_24354);

return statearr_24532;
})();
var statearr_24533_24597 = state_24477__$1;
(statearr_24533_24597[(2)] = null);

(statearr_24533_24597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (11))){
var inst_24376 = (state_24477[(7)]);
var inst_24354 = (state_24477[(16)]);
var inst_24376__$1 = cljs.core.seq.call(null,inst_24354);
var state_24477__$1 = (function (){var statearr_24534 = state_24477;
(statearr_24534[(7)] = inst_24376__$1);

return statearr_24534;
})();
if(inst_24376__$1){
var statearr_24535_24598 = state_24477__$1;
(statearr_24535_24598[(1)] = (16));

} else {
var statearr_24536_24599 = state_24477__$1;
(statearr_24536_24599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (9))){
var inst_24406 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24537_24600 = state_24477__$1;
(statearr_24537_24600[(2)] = inst_24406);

(statearr_24537_24600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (5))){
var inst_24352 = cljs.core.deref.call(null,cs);
var inst_24353 = cljs.core.seq.call(null,inst_24352);
var inst_24354 = inst_24353;
var inst_24355 = null;
var inst_24356 = (0);
var inst_24357 = (0);
var state_24477__$1 = (function (){var statearr_24538 = state_24477;
(statearr_24538[(13)] = inst_24356);

(statearr_24538[(14)] = inst_24357);

(statearr_24538[(15)] = inst_24355);

(statearr_24538[(16)] = inst_24354);

return statearr_24538;
})();
var statearr_24539_24601 = state_24477__$1;
(statearr_24539_24601[(2)] = null);

(statearr_24539_24601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (14))){
var state_24477__$1 = state_24477;
var statearr_24540_24602 = state_24477__$1;
(statearr_24540_24602[(2)] = null);

(statearr_24540_24602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (45))){
var inst_24467 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24541_24603 = state_24477__$1;
(statearr_24541_24603[(2)] = inst_24467);

(statearr_24541_24603[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (26))){
var inst_24409 = (state_24477[(29)]);
var inst_24463 = (state_24477[(2)]);
var inst_24464 = cljs.core.seq.call(null,inst_24409);
var state_24477__$1 = (function (){var statearr_24542 = state_24477;
(statearr_24542[(31)] = inst_24463);

return statearr_24542;
})();
if(inst_24464){
var statearr_24543_24604 = state_24477__$1;
(statearr_24543_24604[(1)] = (42));

} else {
var statearr_24544_24605 = state_24477__$1;
(statearr_24544_24605[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (16))){
var inst_24376 = (state_24477[(7)]);
var inst_24378 = cljs.core.chunked_seq_QMARK_.call(null,inst_24376);
var state_24477__$1 = state_24477;
if(inst_24378){
var statearr_24545_24606 = state_24477__$1;
(statearr_24545_24606[(1)] = (19));

} else {
var statearr_24546_24607 = state_24477__$1;
(statearr_24546_24607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (38))){
var inst_24456 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24547_24608 = state_24477__$1;
(statearr_24547_24608[(2)] = inst_24456);

(statearr_24547_24608[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (30))){
var state_24477__$1 = state_24477;
var statearr_24548_24609 = state_24477__$1;
(statearr_24548_24609[(2)] = null);

(statearr_24548_24609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (10))){
var inst_24357 = (state_24477[(14)]);
var inst_24355 = (state_24477[(15)]);
var inst_24365 = cljs.core._nth.call(null,inst_24355,inst_24357);
var inst_24366 = cljs.core.nth.call(null,inst_24365,(0),null);
var inst_24367 = cljs.core.nth.call(null,inst_24365,(1),null);
var state_24477__$1 = (function (){var statearr_24549 = state_24477;
(statearr_24549[(26)] = inst_24366);

return statearr_24549;
})();
if(cljs.core.truth_(inst_24367)){
var statearr_24550_24610 = state_24477__$1;
(statearr_24550_24610[(1)] = (13));

} else {
var statearr_24551_24611 = state_24477__$1;
(statearr_24551_24611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (18))){
var inst_24402 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24552_24612 = state_24477__$1;
(statearr_24552_24612[(2)] = inst_24402);

(statearr_24552_24612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (42))){
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24477__$1,(45),dchan);
} else {
if((state_val_24478 === (37))){
var inst_24445 = (state_24477[(23)]);
var inst_24436 = (state_24477[(25)]);
var inst_24345 = (state_24477[(12)]);
var inst_24445__$1 = cljs.core.first.call(null,inst_24436);
var inst_24446 = cljs.core.async.put_BANG_.call(null,inst_24445__$1,inst_24345,done);
var state_24477__$1 = (function (){var statearr_24553 = state_24477;
(statearr_24553[(23)] = inst_24445__$1);

return statearr_24553;
})();
if(cljs.core.truth_(inst_24446)){
var statearr_24554_24613 = state_24477__$1;
(statearr_24554_24613[(1)] = (39));

} else {
var statearr_24555_24614 = state_24477__$1;
(statearr_24555_24614[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (8))){
var inst_24356 = (state_24477[(13)]);
var inst_24357 = (state_24477[(14)]);
var inst_24359 = (inst_24357 < inst_24356);
var inst_24360 = inst_24359;
var state_24477__$1 = state_24477;
if(cljs.core.truth_(inst_24360)){
var statearr_24556_24615 = state_24477__$1;
(statearr_24556_24615[(1)] = (10));

} else {
var statearr_24557_24616 = state_24477__$1;
(statearr_24557_24616[(1)] = (11));

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
});})(c__23743__auto___24562,cs,m,dchan,dctr,done))
;
return ((function (switch__23648__auto__,c__23743__auto___24562,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23649__auto__ = null;
var cljs$core$async$mult_$_state_machine__23649__auto____0 = (function (){
var statearr_24558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24558[(0)] = cljs$core$async$mult_$_state_machine__23649__auto__);

(statearr_24558[(1)] = (1));

return statearr_24558;
});
var cljs$core$async$mult_$_state_machine__23649__auto____1 = (function (state_24477){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_24477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24559){if((e24559 instanceof Object)){
var ex__23652__auto__ = e24559;
var statearr_24560_24617 = state_24477;
(statearr_24560_24617[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24618 = state_24477;
state_24477 = G__24618;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23649__auto__ = function(state_24477){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23649__auto____1.call(this,state_24477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23649__auto____0;
cljs$core$async$mult_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23649__auto____1;
return cljs$core$async$mult_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___24562,cs,m,dchan,dctr,done))
})();
var state__23745__auto__ = (function (){var statearr_24561 = f__23744__auto__.call(null);
(statearr_24561[(6)] = c__23743__auto___24562);

return statearr_24561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___24562,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24620 = arguments.length;
switch (G__24620) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24632 = arguments.length;
var i__4731__auto___24633 = (0);
while(true){
if((i__4731__auto___24633 < len__4730__auto___24632)){
args__4736__auto__.push((arguments[i__4731__auto___24633]));

var G__24634 = (i__4731__auto___24633 + (1));
i__4731__auto___24633 = G__24634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24626){
var map__24627 = p__24626;
var map__24627__$1 = (((((!((map__24627 == null))))?(((((map__24627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24627):map__24627);
var opts = map__24627__$1;
var statearr_24629_24635 = state;
(statearr_24629_24635[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24627,map__24627__$1,opts){
return (function (val){
var statearr_24630_24636 = state;
(statearr_24630_24636[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24627,map__24627__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24631_24637 = state;
(statearr_24631_24637[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24622){
var G__24623 = cljs.core.first.call(null,seq24622);
var seq24622__$1 = cljs.core.next.call(null,seq24622);
var G__24624 = cljs.core.first.call(null,seq24622__$1);
var seq24622__$2 = cljs.core.next.call(null,seq24622__$1);
var G__24625 = cljs.core.first.call(null,seq24622__$2);
var seq24622__$3 = cljs.core.next.call(null,seq24622__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24623,G__24624,G__24625,seq24622__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24638 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24639){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24639 = meta24639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24640,meta24639__$1){
var self__ = this;
var _24640__$1 = this;
return (new cljs.core.async.t_cljs$core$async24638(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24639__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24640){
var self__ = this;
var _24640__$1 = this;
return self__.meta24639;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24639","meta24639",-1845139209,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24638";

cljs.core.async.t_cljs$core$async24638.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24638");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24638.
 */
cljs.core.async.__GT_t_cljs$core$async24638 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24638(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24639){
return (new cljs.core.async.t_cljs$core$async24638(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24639));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24638(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23743__auto___24802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___24802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___24802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24742){
var state_val_24743 = (state_24742[(1)]);
if((state_val_24743 === (7))){
var inst_24657 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
var statearr_24744_24803 = state_24742__$1;
(statearr_24744_24803[(2)] = inst_24657);

(statearr_24744_24803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (20))){
var inst_24669 = (state_24742[(7)]);
var state_24742__$1 = state_24742;
var statearr_24745_24804 = state_24742__$1;
(statearr_24745_24804[(2)] = inst_24669);

(statearr_24745_24804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (27))){
var state_24742__$1 = state_24742;
var statearr_24746_24805 = state_24742__$1;
(statearr_24746_24805[(2)] = null);

(statearr_24746_24805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (1))){
var inst_24644 = (state_24742[(8)]);
var inst_24644__$1 = calc_state.call(null);
var inst_24646 = (inst_24644__$1 == null);
var inst_24647 = cljs.core.not.call(null,inst_24646);
var state_24742__$1 = (function (){var statearr_24747 = state_24742;
(statearr_24747[(8)] = inst_24644__$1);

return statearr_24747;
})();
if(inst_24647){
var statearr_24748_24806 = state_24742__$1;
(statearr_24748_24806[(1)] = (2));

} else {
var statearr_24749_24807 = state_24742__$1;
(statearr_24749_24807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (24))){
var inst_24716 = (state_24742[(9)]);
var inst_24693 = (state_24742[(10)]);
var inst_24702 = (state_24742[(11)]);
var inst_24716__$1 = inst_24693.call(null,inst_24702);
var state_24742__$1 = (function (){var statearr_24750 = state_24742;
(statearr_24750[(9)] = inst_24716__$1);

return statearr_24750;
})();
if(cljs.core.truth_(inst_24716__$1)){
var statearr_24751_24808 = state_24742__$1;
(statearr_24751_24808[(1)] = (29));

} else {
var statearr_24752_24809 = state_24742__$1;
(statearr_24752_24809[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (4))){
var inst_24660 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
if(cljs.core.truth_(inst_24660)){
var statearr_24753_24810 = state_24742__$1;
(statearr_24753_24810[(1)] = (8));

} else {
var statearr_24754_24811 = state_24742__$1;
(statearr_24754_24811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (15))){
var inst_24687 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
if(cljs.core.truth_(inst_24687)){
var statearr_24755_24812 = state_24742__$1;
(statearr_24755_24812[(1)] = (19));

} else {
var statearr_24756_24813 = state_24742__$1;
(statearr_24756_24813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (21))){
var inst_24692 = (state_24742[(12)]);
var inst_24692__$1 = (state_24742[(2)]);
var inst_24693 = cljs.core.get.call(null,inst_24692__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24694 = cljs.core.get.call(null,inst_24692__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24695 = cljs.core.get.call(null,inst_24692__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24742__$1 = (function (){var statearr_24757 = state_24742;
(statearr_24757[(10)] = inst_24693);

(statearr_24757[(13)] = inst_24694);

(statearr_24757[(12)] = inst_24692__$1);

return statearr_24757;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24742__$1,(22),inst_24695);
} else {
if((state_val_24743 === (31))){
var inst_24724 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
if(cljs.core.truth_(inst_24724)){
var statearr_24758_24814 = state_24742__$1;
(statearr_24758_24814[(1)] = (32));

} else {
var statearr_24759_24815 = state_24742__$1;
(statearr_24759_24815[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (32))){
var inst_24701 = (state_24742[(14)]);
var state_24742__$1 = state_24742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24742__$1,(35),out,inst_24701);
} else {
if((state_val_24743 === (33))){
var inst_24692 = (state_24742[(12)]);
var inst_24669 = inst_24692;
var state_24742__$1 = (function (){var statearr_24760 = state_24742;
(statearr_24760[(7)] = inst_24669);

return statearr_24760;
})();
var statearr_24761_24816 = state_24742__$1;
(statearr_24761_24816[(2)] = null);

(statearr_24761_24816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (13))){
var inst_24669 = (state_24742[(7)]);
var inst_24676 = inst_24669.cljs$lang$protocol_mask$partition0$;
var inst_24677 = (inst_24676 & (64));
var inst_24678 = inst_24669.cljs$core$ISeq$;
var inst_24679 = (cljs.core.PROTOCOL_SENTINEL === inst_24678);
var inst_24680 = ((inst_24677) || (inst_24679));
var state_24742__$1 = state_24742;
if(cljs.core.truth_(inst_24680)){
var statearr_24762_24817 = state_24742__$1;
(statearr_24762_24817[(1)] = (16));

} else {
var statearr_24763_24818 = state_24742__$1;
(statearr_24763_24818[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (22))){
var inst_24701 = (state_24742[(14)]);
var inst_24702 = (state_24742[(11)]);
var inst_24700 = (state_24742[(2)]);
var inst_24701__$1 = cljs.core.nth.call(null,inst_24700,(0),null);
var inst_24702__$1 = cljs.core.nth.call(null,inst_24700,(1),null);
var inst_24703 = (inst_24701__$1 == null);
var inst_24704 = cljs.core._EQ_.call(null,inst_24702__$1,change);
var inst_24705 = ((inst_24703) || (inst_24704));
var state_24742__$1 = (function (){var statearr_24764 = state_24742;
(statearr_24764[(14)] = inst_24701__$1);

(statearr_24764[(11)] = inst_24702__$1);

return statearr_24764;
})();
if(cljs.core.truth_(inst_24705)){
var statearr_24765_24819 = state_24742__$1;
(statearr_24765_24819[(1)] = (23));

} else {
var statearr_24766_24820 = state_24742__$1;
(statearr_24766_24820[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (36))){
var inst_24692 = (state_24742[(12)]);
var inst_24669 = inst_24692;
var state_24742__$1 = (function (){var statearr_24767 = state_24742;
(statearr_24767[(7)] = inst_24669);

return statearr_24767;
})();
var statearr_24768_24821 = state_24742__$1;
(statearr_24768_24821[(2)] = null);

(statearr_24768_24821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (29))){
var inst_24716 = (state_24742[(9)]);
var state_24742__$1 = state_24742;
var statearr_24769_24822 = state_24742__$1;
(statearr_24769_24822[(2)] = inst_24716);

(statearr_24769_24822[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (6))){
var state_24742__$1 = state_24742;
var statearr_24770_24823 = state_24742__$1;
(statearr_24770_24823[(2)] = false);

(statearr_24770_24823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (28))){
var inst_24712 = (state_24742[(2)]);
var inst_24713 = calc_state.call(null);
var inst_24669 = inst_24713;
var state_24742__$1 = (function (){var statearr_24771 = state_24742;
(statearr_24771[(15)] = inst_24712);

(statearr_24771[(7)] = inst_24669);

return statearr_24771;
})();
var statearr_24772_24824 = state_24742__$1;
(statearr_24772_24824[(2)] = null);

(statearr_24772_24824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (25))){
var inst_24738 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
var statearr_24773_24825 = state_24742__$1;
(statearr_24773_24825[(2)] = inst_24738);

(statearr_24773_24825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (34))){
var inst_24736 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
var statearr_24774_24826 = state_24742__$1;
(statearr_24774_24826[(2)] = inst_24736);

(statearr_24774_24826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (17))){
var state_24742__$1 = state_24742;
var statearr_24775_24827 = state_24742__$1;
(statearr_24775_24827[(2)] = false);

(statearr_24775_24827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (3))){
var state_24742__$1 = state_24742;
var statearr_24776_24828 = state_24742__$1;
(statearr_24776_24828[(2)] = false);

(statearr_24776_24828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (12))){
var inst_24740 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24742__$1,inst_24740);
} else {
if((state_val_24743 === (2))){
var inst_24644 = (state_24742[(8)]);
var inst_24649 = inst_24644.cljs$lang$protocol_mask$partition0$;
var inst_24650 = (inst_24649 & (64));
var inst_24651 = inst_24644.cljs$core$ISeq$;
var inst_24652 = (cljs.core.PROTOCOL_SENTINEL === inst_24651);
var inst_24653 = ((inst_24650) || (inst_24652));
var state_24742__$1 = state_24742;
if(cljs.core.truth_(inst_24653)){
var statearr_24777_24829 = state_24742__$1;
(statearr_24777_24829[(1)] = (5));

} else {
var statearr_24778_24830 = state_24742__$1;
(statearr_24778_24830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (23))){
var inst_24701 = (state_24742[(14)]);
var inst_24707 = (inst_24701 == null);
var state_24742__$1 = state_24742;
if(cljs.core.truth_(inst_24707)){
var statearr_24779_24831 = state_24742__$1;
(statearr_24779_24831[(1)] = (26));

} else {
var statearr_24780_24832 = state_24742__$1;
(statearr_24780_24832[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (35))){
var inst_24727 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
if(cljs.core.truth_(inst_24727)){
var statearr_24781_24833 = state_24742__$1;
(statearr_24781_24833[(1)] = (36));

} else {
var statearr_24782_24834 = state_24742__$1;
(statearr_24782_24834[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (19))){
var inst_24669 = (state_24742[(7)]);
var inst_24689 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24669);
var state_24742__$1 = state_24742;
var statearr_24783_24835 = state_24742__$1;
(statearr_24783_24835[(2)] = inst_24689);

(statearr_24783_24835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (11))){
var inst_24669 = (state_24742[(7)]);
var inst_24673 = (inst_24669 == null);
var inst_24674 = cljs.core.not.call(null,inst_24673);
var state_24742__$1 = state_24742;
if(inst_24674){
var statearr_24784_24836 = state_24742__$1;
(statearr_24784_24836[(1)] = (13));

} else {
var statearr_24785_24837 = state_24742__$1;
(statearr_24785_24837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (9))){
var inst_24644 = (state_24742[(8)]);
var state_24742__$1 = state_24742;
var statearr_24786_24838 = state_24742__$1;
(statearr_24786_24838[(2)] = inst_24644);

(statearr_24786_24838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (5))){
var state_24742__$1 = state_24742;
var statearr_24787_24839 = state_24742__$1;
(statearr_24787_24839[(2)] = true);

(statearr_24787_24839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (14))){
var state_24742__$1 = state_24742;
var statearr_24788_24840 = state_24742__$1;
(statearr_24788_24840[(2)] = false);

(statearr_24788_24840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (26))){
var inst_24702 = (state_24742[(11)]);
var inst_24709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24702);
var state_24742__$1 = state_24742;
var statearr_24789_24841 = state_24742__$1;
(statearr_24789_24841[(2)] = inst_24709);

(statearr_24789_24841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (16))){
var state_24742__$1 = state_24742;
var statearr_24790_24842 = state_24742__$1;
(statearr_24790_24842[(2)] = true);

(statearr_24790_24842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (38))){
var inst_24732 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
var statearr_24791_24843 = state_24742__$1;
(statearr_24791_24843[(2)] = inst_24732);

(statearr_24791_24843[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (30))){
var inst_24693 = (state_24742[(10)]);
var inst_24702 = (state_24742[(11)]);
var inst_24694 = (state_24742[(13)]);
var inst_24719 = cljs.core.empty_QMARK_.call(null,inst_24693);
var inst_24720 = inst_24694.call(null,inst_24702);
var inst_24721 = cljs.core.not.call(null,inst_24720);
var inst_24722 = ((inst_24719) && (inst_24721));
var state_24742__$1 = state_24742;
var statearr_24792_24844 = state_24742__$1;
(statearr_24792_24844[(2)] = inst_24722);

(statearr_24792_24844[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (10))){
var inst_24644 = (state_24742[(8)]);
var inst_24665 = (state_24742[(2)]);
var inst_24666 = cljs.core.get.call(null,inst_24665,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24667 = cljs.core.get.call(null,inst_24665,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24668 = cljs.core.get.call(null,inst_24665,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24669 = inst_24644;
var state_24742__$1 = (function (){var statearr_24793 = state_24742;
(statearr_24793[(16)] = inst_24667);

(statearr_24793[(17)] = inst_24668);

(statearr_24793[(7)] = inst_24669);

(statearr_24793[(18)] = inst_24666);

return statearr_24793;
})();
var statearr_24794_24845 = state_24742__$1;
(statearr_24794_24845[(2)] = null);

(statearr_24794_24845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (18))){
var inst_24684 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
var statearr_24795_24846 = state_24742__$1;
(statearr_24795_24846[(2)] = inst_24684);

(statearr_24795_24846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (37))){
var state_24742__$1 = state_24742;
var statearr_24796_24847 = state_24742__$1;
(statearr_24796_24847[(2)] = null);

(statearr_24796_24847[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (8))){
var inst_24644 = (state_24742[(8)]);
var inst_24662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24644);
var state_24742__$1 = state_24742;
var statearr_24797_24848 = state_24742__$1;
(statearr_24797_24848[(2)] = inst_24662);

(statearr_24797_24848[(1)] = (10));


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
});})(c__23743__auto___24802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23648__auto__,c__23743__auto___24802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23649__auto__ = null;
var cljs$core$async$mix_$_state_machine__23649__auto____0 = (function (){
var statearr_24798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24798[(0)] = cljs$core$async$mix_$_state_machine__23649__auto__);

(statearr_24798[(1)] = (1));

return statearr_24798;
});
var cljs$core$async$mix_$_state_machine__23649__auto____1 = (function (state_24742){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_24742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24799){if((e24799 instanceof Object)){
var ex__23652__auto__ = e24799;
var statearr_24800_24849 = state_24742;
(statearr_24800_24849[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24850 = state_24742;
state_24742 = G__24850;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23649__auto__ = function(state_24742){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23649__auto____1.call(this,state_24742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23649__auto____0;
cljs$core$async$mix_$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23649__auto____1;
return cljs$core$async$mix_$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___24802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23745__auto__ = (function (){var statearr_24801 = f__23744__auto__.call(null);
(statearr_24801[(6)] = c__23743__auto___24802);

return statearr_24801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___24802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24852 = arguments.length;
switch (G__24852) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24856 = arguments.length;
switch (G__24856) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24854_SHARP_){
if(cljs.core.truth_(p1__24854_SHARP_.call(null,topic))){
return p1__24854_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24854_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24857 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24858){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24858 = meta24858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24859,meta24858__$1){
var self__ = this;
var _24859__$1 = this;
return (new cljs.core.async.t_cljs$core$async24857(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24858__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24859){
var self__ = this;
var _24859__$1 = this;
return self__.meta24858;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24857.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24858","meta24858",-1186882562,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24857";

cljs.core.async.t_cljs$core$async24857.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24857");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24857.
 */
cljs.core.async.__GT_t_cljs$core$async24857 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24857(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24858){
return (new cljs.core.async.t_cljs$core$async24857(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24858));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24857(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23743__auto___24977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___24977,mults,ensure_mult,p){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___24977,mults,ensure_mult,p){
return (function (state_24931){
var state_val_24932 = (state_24931[(1)]);
if((state_val_24932 === (7))){
var inst_24927 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24933_24978 = state_24931__$1;
(statearr_24933_24978[(2)] = inst_24927);

(statearr_24933_24978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (20))){
var state_24931__$1 = state_24931;
var statearr_24934_24979 = state_24931__$1;
(statearr_24934_24979[(2)] = null);

(statearr_24934_24979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (1))){
var state_24931__$1 = state_24931;
var statearr_24935_24980 = state_24931__$1;
(statearr_24935_24980[(2)] = null);

(statearr_24935_24980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (24))){
var inst_24910 = (state_24931[(7)]);
var inst_24919 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24910);
var state_24931__$1 = state_24931;
var statearr_24936_24981 = state_24931__$1;
(statearr_24936_24981[(2)] = inst_24919);

(statearr_24936_24981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (4))){
var inst_24862 = (state_24931[(8)]);
var inst_24862__$1 = (state_24931[(2)]);
var inst_24863 = (inst_24862__$1 == null);
var state_24931__$1 = (function (){var statearr_24937 = state_24931;
(statearr_24937[(8)] = inst_24862__$1);

return statearr_24937;
})();
if(cljs.core.truth_(inst_24863)){
var statearr_24938_24982 = state_24931__$1;
(statearr_24938_24982[(1)] = (5));

} else {
var statearr_24939_24983 = state_24931__$1;
(statearr_24939_24983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (15))){
var inst_24904 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24940_24984 = state_24931__$1;
(statearr_24940_24984[(2)] = inst_24904);

(statearr_24940_24984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (21))){
var inst_24924 = (state_24931[(2)]);
var state_24931__$1 = (function (){var statearr_24941 = state_24931;
(statearr_24941[(9)] = inst_24924);

return statearr_24941;
})();
var statearr_24942_24985 = state_24931__$1;
(statearr_24942_24985[(2)] = null);

(statearr_24942_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (13))){
var inst_24886 = (state_24931[(10)]);
var inst_24888 = cljs.core.chunked_seq_QMARK_.call(null,inst_24886);
var state_24931__$1 = state_24931;
if(inst_24888){
var statearr_24943_24986 = state_24931__$1;
(statearr_24943_24986[(1)] = (16));

} else {
var statearr_24944_24987 = state_24931__$1;
(statearr_24944_24987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (22))){
var inst_24916 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
if(cljs.core.truth_(inst_24916)){
var statearr_24945_24988 = state_24931__$1;
(statearr_24945_24988[(1)] = (23));

} else {
var statearr_24946_24989 = state_24931__$1;
(statearr_24946_24989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (6))){
var inst_24912 = (state_24931[(11)]);
var inst_24910 = (state_24931[(7)]);
var inst_24862 = (state_24931[(8)]);
var inst_24910__$1 = topic_fn.call(null,inst_24862);
var inst_24911 = cljs.core.deref.call(null,mults);
var inst_24912__$1 = cljs.core.get.call(null,inst_24911,inst_24910__$1);
var state_24931__$1 = (function (){var statearr_24947 = state_24931;
(statearr_24947[(11)] = inst_24912__$1);

(statearr_24947[(7)] = inst_24910__$1);

return statearr_24947;
})();
if(cljs.core.truth_(inst_24912__$1)){
var statearr_24948_24990 = state_24931__$1;
(statearr_24948_24990[(1)] = (19));

} else {
var statearr_24949_24991 = state_24931__$1;
(statearr_24949_24991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (25))){
var inst_24921 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24950_24992 = state_24931__$1;
(statearr_24950_24992[(2)] = inst_24921);

(statearr_24950_24992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (17))){
var inst_24886 = (state_24931[(10)]);
var inst_24895 = cljs.core.first.call(null,inst_24886);
var inst_24896 = cljs.core.async.muxch_STAR_.call(null,inst_24895);
var inst_24897 = cljs.core.async.close_BANG_.call(null,inst_24896);
var inst_24898 = cljs.core.next.call(null,inst_24886);
var inst_24872 = inst_24898;
var inst_24873 = null;
var inst_24874 = (0);
var inst_24875 = (0);
var state_24931__$1 = (function (){var statearr_24951 = state_24931;
(statearr_24951[(12)] = inst_24872);

(statearr_24951[(13)] = inst_24873);

(statearr_24951[(14)] = inst_24874);

(statearr_24951[(15)] = inst_24875);

(statearr_24951[(16)] = inst_24897);

return statearr_24951;
})();
var statearr_24952_24993 = state_24931__$1;
(statearr_24952_24993[(2)] = null);

(statearr_24952_24993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (3))){
var inst_24929 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24931__$1,inst_24929);
} else {
if((state_val_24932 === (12))){
var inst_24906 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24953_24994 = state_24931__$1;
(statearr_24953_24994[(2)] = inst_24906);

(statearr_24953_24994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (2))){
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24931__$1,(4),ch);
} else {
if((state_val_24932 === (23))){
var state_24931__$1 = state_24931;
var statearr_24954_24995 = state_24931__$1;
(statearr_24954_24995[(2)] = null);

(statearr_24954_24995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (19))){
var inst_24912 = (state_24931[(11)]);
var inst_24862 = (state_24931[(8)]);
var inst_24914 = cljs.core.async.muxch_STAR_.call(null,inst_24912);
var state_24931__$1 = state_24931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24931__$1,(22),inst_24914,inst_24862);
} else {
if((state_val_24932 === (11))){
var inst_24872 = (state_24931[(12)]);
var inst_24886 = (state_24931[(10)]);
var inst_24886__$1 = cljs.core.seq.call(null,inst_24872);
var state_24931__$1 = (function (){var statearr_24955 = state_24931;
(statearr_24955[(10)] = inst_24886__$1);

return statearr_24955;
})();
if(inst_24886__$1){
var statearr_24956_24996 = state_24931__$1;
(statearr_24956_24996[(1)] = (13));

} else {
var statearr_24957_24997 = state_24931__$1;
(statearr_24957_24997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (9))){
var inst_24908 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24958_24998 = state_24931__$1;
(statearr_24958_24998[(2)] = inst_24908);

(statearr_24958_24998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (5))){
var inst_24869 = cljs.core.deref.call(null,mults);
var inst_24870 = cljs.core.vals.call(null,inst_24869);
var inst_24871 = cljs.core.seq.call(null,inst_24870);
var inst_24872 = inst_24871;
var inst_24873 = null;
var inst_24874 = (0);
var inst_24875 = (0);
var state_24931__$1 = (function (){var statearr_24959 = state_24931;
(statearr_24959[(12)] = inst_24872);

(statearr_24959[(13)] = inst_24873);

(statearr_24959[(14)] = inst_24874);

(statearr_24959[(15)] = inst_24875);

return statearr_24959;
})();
var statearr_24960_24999 = state_24931__$1;
(statearr_24960_24999[(2)] = null);

(statearr_24960_24999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (14))){
var state_24931__$1 = state_24931;
var statearr_24964_25000 = state_24931__$1;
(statearr_24964_25000[(2)] = null);

(statearr_24964_25000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (16))){
var inst_24886 = (state_24931[(10)]);
var inst_24890 = cljs.core.chunk_first.call(null,inst_24886);
var inst_24891 = cljs.core.chunk_rest.call(null,inst_24886);
var inst_24892 = cljs.core.count.call(null,inst_24890);
var inst_24872 = inst_24891;
var inst_24873 = inst_24890;
var inst_24874 = inst_24892;
var inst_24875 = (0);
var state_24931__$1 = (function (){var statearr_24965 = state_24931;
(statearr_24965[(12)] = inst_24872);

(statearr_24965[(13)] = inst_24873);

(statearr_24965[(14)] = inst_24874);

(statearr_24965[(15)] = inst_24875);

return statearr_24965;
})();
var statearr_24966_25001 = state_24931__$1;
(statearr_24966_25001[(2)] = null);

(statearr_24966_25001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (10))){
var inst_24872 = (state_24931[(12)]);
var inst_24873 = (state_24931[(13)]);
var inst_24874 = (state_24931[(14)]);
var inst_24875 = (state_24931[(15)]);
var inst_24880 = cljs.core._nth.call(null,inst_24873,inst_24875);
var inst_24881 = cljs.core.async.muxch_STAR_.call(null,inst_24880);
var inst_24882 = cljs.core.async.close_BANG_.call(null,inst_24881);
var inst_24883 = (inst_24875 + (1));
var tmp24961 = inst_24872;
var tmp24962 = inst_24873;
var tmp24963 = inst_24874;
var inst_24872__$1 = tmp24961;
var inst_24873__$1 = tmp24962;
var inst_24874__$1 = tmp24963;
var inst_24875__$1 = inst_24883;
var state_24931__$1 = (function (){var statearr_24967 = state_24931;
(statearr_24967[(17)] = inst_24882);

(statearr_24967[(12)] = inst_24872__$1);

(statearr_24967[(13)] = inst_24873__$1);

(statearr_24967[(14)] = inst_24874__$1);

(statearr_24967[(15)] = inst_24875__$1);

return statearr_24967;
})();
var statearr_24968_25002 = state_24931__$1;
(statearr_24968_25002[(2)] = null);

(statearr_24968_25002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (18))){
var inst_24901 = (state_24931[(2)]);
var state_24931__$1 = state_24931;
var statearr_24969_25003 = state_24931__$1;
(statearr_24969_25003[(2)] = inst_24901);

(statearr_24969_25003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24932 === (8))){
var inst_24874 = (state_24931[(14)]);
var inst_24875 = (state_24931[(15)]);
var inst_24877 = (inst_24875 < inst_24874);
var inst_24878 = inst_24877;
var state_24931__$1 = state_24931;
if(cljs.core.truth_(inst_24878)){
var statearr_24970_25004 = state_24931__$1;
(statearr_24970_25004[(1)] = (10));

} else {
var statearr_24971_25005 = state_24931__$1;
(statearr_24971_25005[(1)] = (11));

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
});})(c__23743__auto___24977,mults,ensure_mult,p))
;
return ((function (switch__23648__auto__,c__23743__auto___24977,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_24972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24972[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_24972[(1)] = (1));

return statearr_24972;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_24931){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_24931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e24973){if((e24973 instanceof Object)){
var ex__23652__auto__ = e24973;
var statearr_24974_25006 = state_24931;
(statearr_24974_25006[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25007 = state_24931;
state_24931 = G__25007;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_24931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_24931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___24977,mults,ensure_mult,p))
})();
var state__23745__auto__ = (function (){var statearr_24975 = f__23744__auto__.call(null);
(statearr_24975[(6)] = c__23743__auto___24977);

return statearr_24975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___24977,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25009 = arguments.length;
switch (G__25009) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25012 = arguments.length;
switch (G__25012) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25015 = arguments.length;
switch (G__25015) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23743__auto___25082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___25082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___25082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25054){
var state_val_25055 = (state_25054[(1)]);
if((state_val_25055 === (7))){
var state_25054__$1 = state_25054;
var statearr_25056_25083 = state_25054__$1;
(statearr_25056_25083[(2)] = null);

(statearr_25056_25083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (1))){
var state_25054__$1 = state_25054;
var statearr_25057_25084 = state_25054__$1;
(statearr_25057_25084[(2)] = null);

(statearr_25057_25084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (4))){
var inst_25018 = (state_25054[(7)]);
var inst_25020 = (inst_25018 < cnt);
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_25020)){
var statearr_25058_25085 = state_25054__$1;
(statearr_25058_25085[(1)] = (6));

} else {
var statearr_25059_25086 = state_25054__$1;
(statearr_25059_25086[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (15))){
var inst_25050 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25060_25087 = state_25054__$1;
(statearr_25060_25087[(2)] = inst_25050);

(statearr_25060_25087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (13))){
var inst_25043 = cljs.core.async.close_BANG_.call(null,out);
var state_25054__$1 = state_25054;
var statearr_25061_25088 = state_25054__$1;
(statearr_25061_25088[(2)] = inst_25043);

(statearr_25061_25088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (6))){
var state_25054__$1 = state_25054;
var statearr_25062_25089 = state_25054__$1;
(statearr_25062_25089[(2)] = null);

(statearr_25062_25089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (3))){
var inst_25052 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25054__$1,inst_25052);
} else {
if((state_val_25055 === (12))){
var inst_25040 = (state_25054[(8)]);
var inst_25040__$1 = (state_25054[(2)]);
var inst_25041 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25040__$1);
var state_25054__$1 = (function (){var statearr_25063 = state_25054;
(statearr_25063[(8)] = inst_25040__$1);

return statearr_25063;
})();
if(cljs.core.truth_(inst_25041)){
var statearr_25064_25090 = state_25054__$1;
(statearr_25064_25090[(1)] = (13));

} else {
var statearr_25065_25091 = state_25054__$1;
(statearr_25065_25091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (2))){
var inst_25017 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25018 = (0);
var state_25054__$1 = (function (){var statearr_25066 = state_25054;
(statearr_25066[(7)] = inst_25018);

(statearr_25066[(9)] = inst_25017);

return statearr_25066;
})();
var statearr_25067_25092 = state_25054__$1;
(statearr_25067_25092[(2)] = null);

(statearr_25067_25092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (11))){
var inst_25018 = (state_25054[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25054,(10),Object,null,(9));
var inst_25027 = chs__$1.call(null,inst_25018);
var inst_25028 = done.call(null,inst_25018);
var inst_25029 = cljs.core.async.take_BANG_.call(null,inst_25027,inst_25028);
var state_25054__$1 = state_25054;
var statearr_25068_25093 = state_25054__$1;
(statearr_25068_25093[(2)] = inst_25029);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (9))){
var inst_25018 = (state_25054[(7)]);
var inst_25031 = (state_25054[(2)]);
var inst_25032 = (inst_25018 + (1));
var inst_25018__$1 = inst_25032;
var state_25054__$1 = (function (){var statearr_25069 = state_25054;
(statearr_25069[(7)] = inst_25018__$1);

(statearr_25069[(10)] = inst_25031);

return statearr_25069;
})();
var statearr_25070_25094 = state_25054__$1;
(statearr_25070_25094[(2)] = null);

(statearr_25070_25094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (5))){
var inst_25038 = (state_25054[(2)]);
var state_25054__$1 = (function (){var statearr_25071 = state_25054;
(statearr_25071[(11)] = inst_25038);

return statearr_25071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25054__$1,(12),dchan);
} else {
if((state_val_25055 === (14))){
var inst_25040 = (state_25054[(8)]);
var inst_25045 = cljs.core.apply.call(null,f,inst_25040);
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25054__$1,(16),out,inst_25045);
} else {
if((state_val_25055 === (16))){
var inst_25047 = (state_25054[(2)]);
var state_25054__$1 = (function (){var statearr_25072 = state_25054;
(statearr_25072[(12)] = inst_25047);

return statearr_25072;
})();
var statearr_25073_25095 = state_25054__$1;
(statearr_25073_25095[(2)] = null);

(statearr_25073_25095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (10))){
var inst_25022 = (state_25054[(2)]);
var inst_25023 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25054__$1 = (function (){var statearr_25074 = state_25054;
(statearr_25074[(13)] = inst_25022);

return statearr_25074;
})();
var statearr_25075_25096 = state_25054__$1;
(statearr_25075_25096[(2)] = inst_25023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (8))){
var inst_25036 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25076_25097 = state_25054__$1;
(statearr_25076_25097[(2)] = inst_25036);

(statearr_25076_25097[(1)] = (5));


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
});})(c__23743__auto___25082,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23648__auto__,c__23743__auto___25082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_25077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25077[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_25077[(1)] = (1));

return statearr_25077;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_25054){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_25054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e25078){if((e25078 instanceof Object)){
var ex__23652__auto__ = e25078;
var statearr_25079_25098 = state_25054;
(statearr_25079_25098[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25099 = state_25054;
state_25054 = G__25099;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_25054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_25054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___25082,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23745__auto__ = (function (){var statearr_25080 = f__23744__auto__.call(null);
(statearr_25080[(6)] = c__23743__auto___25082);

return statearr_25080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___25082,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25102 = arguments.length;
switch (G__25102) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23743__auto___25156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___25156,out){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___25156,out){
return (function (state_25134){
var state_val_25135 = (state_25134[(1)]);
if((state_val_25135 === (7))){
var inst_25114 = (state_25134[(7)]);
var inst_25113 = (state_25134[(8)]);
var inst_25113__$1 = (state_25134[(2)]);
var inst_25114__$1 = cljs.core.nth.call(null,inst_25113__$1,(0),null);
var inst_25115 = cljs.core.nth.call(null,inst_25113__$1,(1),null);
var inst_25116 = (inst_25114__$1 == null);
var state_25134__$1 = (function (){var statearr_25136 = state_25134;
(statearr_25136[(7)] = inst_25114__$1);

(statearr_25136[(8)] = inst_25113__$1);

(statearr_25136[(9)] = inst_25115);

return statearr_25136;
})();
if(cljs.core.truth_(inst_25116)){
var statearr_25137_25157 = state_25134__$1;
(statearr_25137_25157[(1)] = (8));

} else {
var statearr_25138_25158 = state_25134__$1;
(statearr_25138_25158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (1))){
var inst_25103 = cljs.core.vec.call(null,chs);
var inst_25104 = inst_25103;
var state_25134__$1 = (function (){var statearr_25139 = state_25134;
(statearr_25139[(10)] = inst_25104);

return statearr_25139;
})();
var statearr_25140_25159 = state_25134__$1;
(statearr_25140_25159[(2)] = null);

(statearr_25140_25159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (4))){
var inst_25104 = (state_25134[(10)]);
var state_25134__$1 = state_25134;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25134__$1,(7),inst_25104);
} else {
if((state_val_25135 === (6))){
var inst_25130 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
var statearr_25141_25160 = state_25134__$1;
(statearr_25141_25160[(2)] = inst_25130);

(statearr_25141_25160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (3))){
var inst_25132 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25134__$1,inst_25132);
} else {
if((state_val_25135 === (2))){
var inst_25104 = (state_25134[(10)]);
var inst_25106 = cljs.core.count.call(null,inst_25104);
var inst_25107 = (inst_25106 > (0));
var state_25134__$1 = state_25134;
if(cljs.core.truth_(inst_25107)){
var statearr_25143_25161 = state_25134__$1;
(statearr_25143_25161[(1)] = (4));

} else {
var statearr_25144_25162 = state_25134__$1;
(statearr_25144_25162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (11))){
var inst_25104 = (state_25134[(10)]);
var inst_25123 = (state_25134[(2)]);
var tmp25142 = inst_25104;
var inst_25104__$1 = tmp25142;
var state_25134__$1 = (function (){var statearr_25145 = state_25134;
(statearr_25145[(10)] = inst_25104__$1);

(statearr_25145[(11)] = inst_25123);

return statearr_25145;
})();
var statearr_25146_25163 = state_25134__$1;
(statearr_25146_25163[(2)] = null);

(statearr_25146_25163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (9))){
var inst_25114 = (state_25134[(7)]);
var state_25134__$1 = state_25134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25134__$1,(11),out,inst_25114);
} else {
if((state_val_25135 === (5))){
var inst_25128 = cljs.core.async.close_BANG_.call(null,out);
var state_25134__$1 = state_25134;
var statearr_25147_25164 = state_25134__$1;
(statearr_25147_25164[(2)] = inst_25128);

(statearr_25147_25164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (10))){
var inst_25126 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
var statearr_25148_25165 = state_25134__$1;
(statearr_25148_25165[(2)] = inst_25126);

(statearr_25148_25165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (8))){
var inst_25114 = (state_25134[(7)]);
var inst_25104 = (state_25134[(10)]);
var inst_25113 = (state_25134[(8)]);
var inst_25115 = (state_25134[(9)]);
var inst_25118 = (function (){var cs = inst_25104;
var vec__25109 = inst_25113;
var v = inst_25114;
var c = inst_25115;
return ((function (cs,vec__25109,v,c,inst_25114,inst_25104,inst_25113,inst_25115,state_val_25135,c__23743__auto___25156,out){
return (function (p1__25100_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25100_SHARP_);
});
;})(cs,vec__25109,v,c,inst_25114,inst_25104,inst_25113,inst_25115,state_val_25135,c__23743__auto___25156,out))
})();
var inst_25119 = cljs.core.filterv.call(null,inst_25118,inst_25104);
var inst_25104__$1 = inst_25119;
var state_25134__$1 = (function (){var statearr_25149 = state_25134;
(statearr_25149[(10)] = inst_25104__$1);

return statearr_25149;
})();
var statearr_25150_25166 = state_25134__$1;
(statearr_25150_25166[(2)] = null);

(statearr_25150_25166[(1)] = (2));


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
});})(c__23743__auto___25156,out))
;
return ((function (switch__23648__auto__,c__23743__auto___25156,out){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_25151 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25151[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_25151[(1)] = (1));

return statearr_25151;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_25134){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_25134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e25152){if((e25152 instanceof Object)){
var ex__23652__auto__ = e25152;
var statearr_25153_25167 = state_25134;
(statearr_25153_25167[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25168 = state_25134;
state_25134 = G__25168;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_25134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_25134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___25156,out))
})();
var state__23745__auto__ = (function (){var statearr_25154 = f__23744__auto__.call(null);
(statearr_25154[(6)] = c__23743__auto___25156);

return statearr_25154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___25156,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25170 = arguments.length;
switch (G__25170) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23743__auto___25215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___25215,out){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___25215,out){
return (function (state_25194){
var state_val_25195 = (state_25194[(1)]);
if((state_val_25195 === (7))){
var inst_25176 = (state_25194[(7)]);
var inst_25176__$1 = (state_25194[(2)]);
var inst_25177 = (inst_25176__$1 == null);
var inst_25178 = cljs.core.not.call(null,inst_25177);
var state_25194__$1 = (function (){var statearr_25196 = state_25194;
(statearr_25196[(7)] = inst_25176__$1);

return statearr_25196;
})();
if(inst_25178){
var statearr_25197_25216 = state_25194__$1;
(statearr_25197_25216[(1)] = (8));

} else {
var statearr_25198_25217 = state_25194__$1;
(statearr_25198_25217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (1))){
var inst_25171 = (0);
var state_25194__$1 = (function (){var statearr_25199 = state_25194;
(statearr_25199[(8)] = inst_25171);

return statearr_25199;
})();
var statearr_25200_25218 = state_25194__$1;
(statearr_25200_25218[(2)] = null);

(statearr_25200_25218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (4))){
var state_25194__$1 = state_25194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25194__$1,(7),ch);
} else {
if((state_val_25195 === (6))){
var inst_25189 = (state_25194[(2)]);
var state_25194__$1 = state_25194;
var statearr_25201_25219 = state_25194__$1;
(statearr_25201_25219[(2)] = inst_25189);

(statearr_25201_25219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (3))){
var inst_25191 = (state_25194[(2)]);
var inst_25192 = cljs.core.async.close_BANG_.call(null,out);
var state_25194__$1 = (function (){var statearr_25202 = state_25194;
(statearr_25202[(9)] = inst_25191);

return statearr_25202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25194__$1,inst_25192);
} else {
if((state_val_25195 === (2))){
var inst_25171 = (state_25194[(8)]);
var inst_25173 = (inst_25171 < n);
var state_25194__$1 = state_25194;
if(cljs.core.truth_(inst_25173)){
var statearr_25203_25220 = state_25194__$1;
(statearr_25203_25220[(1)] = (4));

} else {
var statearr_25204_25221 = state_25194__$1;
(statearr_25204_25221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (11))){
var inst_25171 = (state_25194[(8)]);
var inst_25181 = (state_25194[(2)]);
var inst_25182 = (inst_25171 + (1));
var inst_25171__$1 = inst_25182;
var state_25194__$1 = (function (){var statearr_25205 = state_25194;
(statearr_25205[(8)] = inst_25171__$1);

(statearr_25205[(10)] = inst_25181);

return statearr_25205;
})();
var statearr_25206_25222 = state_25194__$1;
(statearr_25206_25222[(2)] = null);

(statearr_25206_25222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (9))){
var state_25194__$1 = state_25194;
var statearr_25207_25223 = state_25194__$1;
(statearr_25207_25223[(2)] = null);

(statearr_25207_25223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (5))){
var state_25194__$1 = state_25194;
var statearr_25208_25224 = state_25194__$1;
(statearr_25208_25224[(2)] = null);

(statearr_25208_25224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (10))){
var inst_25186 = (state_25194[(2)]);
var state_25194__$1 = state_25194;
var statearr_25209_25225 = state_25194__$1;
(statearr_25209_25225[(2)] = inst_25186);

(statearr_25209_25225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (8))){
var inst_25176 = (state_25194[(7)]);
var state_25194__$1 = state_25194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25194__$1,(11),out,inst_25176);
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
});})(c__23743__auto___25215,out))
;
return ((function (switch__23648__auto__,c__23743__auto___25215,out){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_25210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25210[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_25210[(1)] = (1));

return statearr_25210;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_25194){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_25194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e25211){if((e25211 instanceof Object)){
var ex__23652__auto__ = e25211;
var statearr_25212_25226 = state_25194;
(statearr_25212_25226[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25227 = state_25194;
state_25194 = G__25227;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_25194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_25194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___25215,out))
})();
var state__23745__auto__ = (function (){var statearr_25213 = f__23744__auto__.call(null);
(statearr_25213[(6)] = c__23743__auto___25215);

return statearr_25213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___25215,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25229 = (function (f,ch,meta25230){
this.f = f;
this.ch = ch;
this.meta25230 = meta25230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25231,meta25230__$1){
var self__ = this;
var _25231__$1 = this;
return (new cljs.core.async.t_cljs$core$async25229(self__.f,self__.ch,meta25230__$1));
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25231){
var self__ = this;
var _25231__$1 = this;
return self__.meta25230;
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25232 = (function (f,ch,meta25230,_,fn1,meta25233){
this.f = f;
this.ch = ch;
this.meta25230 = meta25230;
this._ = _;
this.fn1 = fn1;
this.meta25233 = meta25233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25234,meta25233__$1){
var self__ = this;
var _25234__$1 = this;
return (new cljs.core.async.t_cljs$core$async25232(self__.f,self__.ch,self__.meta25230,self__._,self__.fn1,meta25233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25234){
var self__ = this;
var _25234__$1 = this;
return self__.meta25233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25228_SHARP_){
return f1.call(null,(((p1__25228_SHARP_ == null))?null:self__.f.call(null,p1__25228_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25230","meta25230",-156021009,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25229","cljs.core.async/t_cljs$core$async25229",-1418989971,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25233","meta25233",-975809832,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25232";

cljs.core.async.t_cljs$core$async25232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25232");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25232.
 */
cljs.core.async.__GT_t_cljs$core$async25232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25232(f__$1,ch__$1,meta25230__$1,___$2,fn1__$1,meta25233){
return (new cljs.core.async.t_cljs$core$async25232(f__$1,ch__$1,meta25230__$1,___$2,fn1__$1,meta25233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25232(self__.f,self__.ch,self__.meta25230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25230","meta25230",-156021009,null)], null);
});

cljs.core.async.t_cljs$core$async25229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25229";

cljs.core.async.t_cljs$core$async25229.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25229");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25229.
 */
cljs.core.async.__GT_t_cljs$core$async25229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25229(f__$1,ch__$1,meta25230){
return (new cljs.core.async.t_cljs$core$async25229(f__$1,ch__$1,meta25230));
});

}

return (new cljs.core.async.t_cljs$core$async25229(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25235 = (function (f,ch,meta25236){
this.f = f;
this.ch = ch;
this.meta25236 = meta25236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25237,meta25236__$1){
var self__ = this;
var _25237__$1 = this;
return (new cljs.core.async.t_cljs$core$async25235(self__.f,self__.ch,meta25236__$1));
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25237){
var self__ = this;
var _25237__$1 = this;
return self__.meta25236;
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25236","meta25236",712548229,null)], null);
});

cljs.core.async.t_cljs$core$async25235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25235";

cljs.core.async.t_cljs$core$async25235.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25235");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25235.
 */
cljs.core.async.__GT_t_cljs$core$async25235 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25235(f__$1,ch__$1,meta25236){
return (new cljs.core.async.t_cljs$core$async25235(f__$1,ch__$1,meta25236));
});

}

return (new cljs.core.async.t_cljs$core$async25235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25238 = (function (p,ch,meta25239){
this.p = p;
this.ch = ch;
this.meta25239 = meta25239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25240,meta25239__$1){
var self__ = this;
var _25240__$1 = this;
return (new cljs.core.async.t_cljs$core$async25238(self__.p,self__.ch,meta25239__$1));
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25240){
var self__ = this;
var _25240__$1 = this;
return self__.meta25239;
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25239","meta25239",1161652001,null)], null);
});

cljs.core.async.t_cljs$core$async25238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25238";

cljs.core.async.t_cljs$core$async25238.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25238");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25238.
 */
cljs.core.async.__GT_t_cljs$core$async25238 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25238(p__$1,ch__$1,meta25239){
return (new cljs.core.async.t_cljs$core$async25238(p__$1,ch__$1,meta25239));
});

}

return (new cljs.core.async.t_cljs$core$async25238(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25242 = arguments.length;
switch (G__25242) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23743__auto___25282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___25282,out){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___25282,out){
return (function (state_25263){
var state_val_25264 = (state_25263[(1)]);
if((state_val_25264 === (7))){
var inst_25259 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25265_25283 = state_25263__$1;
(statearr_25265_25283[(2)] = inst_25259);

(statearr_25265_25283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (1))){
var state_25263__$1 = state_25263;
var statearr_25266_25284 = state_25263__$1;
(statearr_25266_25284[(2)] = null);

(statearr_25266_25284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (4))){
var inst_25245 = (state_25263[(7)]);
var inst_25245__$1 = (state_25263[(2)]);
var inst_25246 = (inst_25245__$1 == null);
var state_25263__$1 = (function (){var statearr_25267 = state_25263;
(statearr_25267[(7)] = inst_25245__$1);

return statearr_25267;
})();
if(cljs.core.truth_(inst_25246)){
var statearr_25268_25285 = state_25263__$1;
(statearr_25268_25285[(1)] = (5));

} else {
var statearr_25269_25286 = state_25263__$1;
(statearr_25269_25286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (6))){
var inst_25245 = (state_25263[(7)]);
var inst_25250 = p.call(null,inst_25245);
var state_25263__$1 = state_25263;
if(cljs.core.truth_(inst_25250)){
var statearr_25270_25287 = state_25263__$1;
(statearr_25270_25287[(1)] = (8));

} else {
var statearr_25271_25288 = state_25263__$1;
(statearr_25271_25288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (3))){
var inst_25261 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25263__$1,inst_25261);
} else {
if((state_val_25264 === (2))){
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25263__$1,(4),ch);
} else {
if((state_val_25264 === (11))){
var inst_25253 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25272_25289 = state_25263__$1;
(statearr_25272_25289[(2)] = inst_25253);

(statearr_25272_25289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (9))){
var state_25263__$1 = state_25263;
var statearr_25273_25290 = state_25263__$1;
(statearr_25273_25290[(2)] = null);

(statearr_25273_25290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (5))){
var inst_25248 = cljs.core.async.close_BANG_.call(null,out);
var state_25263__$1 = state_25263;
var statearr_25274_25291 = state_25263__$1;
(statearr_25274_25291[(2)] = inst_25248);

(statearr_25274_25291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (10))){
var inst_25256 = (state_25263[(2)]);
var state_25263__$1 = (function (){var statearr_25275 = state_25263;
(statearr_25275[(8)] = inst_25256);

return statearr_25275;
})();
var statearr_25276_25292 = state_25263__$1;
(statearr_25276_25292[(2)] = null);

(statearr_25276_25292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (8))){
var inst_25245 = (state_25263[(7)]);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25263__$1,(11),out,inst_25245);
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
});})(c__23743__auto___25282,out))
;
return ((function (switch__23648__auto__,c__23743__auto___25282,out){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_25277 = [null,null,null,null,null,null,null,null,null];
(statearr_25277[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_25277[(1)] = (1));

return statearr_25277;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_25263){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_25263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e25278){if((e25278 instanceof Object)){
var ex__23652__auto__ = e25278;
var statearr_25279_25293 = state_25263;
(statearr_25279_25293[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25294 = state_25263;
state_25263 = G__25294;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_25263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_25263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___25282,out))
})();
var state__23745__auto__ = (function (){var statearr_25280 = f__23744__auto__.call(null);
(statearr_25280[(6)] = c__23743__auto___25282);

return statearr_25280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___25282,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25296 = arguments.length;
switch (G__25296) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto__){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto__){
return (function (state_25359){
var state_val_25360 = (state_25359[(1)]);
if((state_val_25360 === (7))){
var inst_25355 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25361_25399 = state_25359__$1;
(statearr_25361_25399[(2)] = inst_25355);

(statearr_25361_25399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (20))){
var inst_25325 = (state_25359[(7)]);
var inst_25336 = (state_25359[(2)]);
var inst_25337 = cljs.core.next.call(null,inst_25325);
var inst_25311 = inst_25337;
var inst_25312 = null;
var inst_25313 = (0);
var inst_25314 = (0);
var state_25359__$1 = (function (){var statearr_25362 = state_25359;
(statearr_25362[(8)] = inst_25336);

(statearr_25362[(9)] = inst_25314);

(statearr_25362[(10)] = inst_25311);

(statearr_25362[(11)] = inst_25312);

(statearr_25362[(12)] = inst_25313);

return statearr_25362;
})();
var statearr_25363_25400 = state_25359__$1;
(statearr_25363_25400[(2)] = null);

(statearr_25363_25400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (1))){
var state_25359__$1 = state_25359;
var statearr_25364_25401 = state_25359__$1;
(statearr_25364_25401[(2)] = null);

(statearr_25364_25401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (4))){
var inst_25300 = (state_25359[(13)]);
var inst_25300__$1 = (state_25359[(2)]);
var inst_25301 = (inst_25300__$1 == null);
var state_25359__$1 = (function (){var statearr_25365 = state_25359;
(statearr_25365[(13)] = inst_25300__$1);

return statearr_25365;
})();
if(cljs.core.truth_(inst_25301)){
var statearr_25366_25402 = state_25359__$1;
(statearr_25366_25402[(1)] = (5));

} else {
var statearr_25367_25403 = state_25359__$1;
(statearr_25367_25403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (15))){
var state_25359__$1 = state_25359;
var statearr_25371_25404 = state_25359__$1;
(statearr_25371_25404[(2)] = null);

(statearr_25371_25404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (21))){
var state_25359__$1 = state_25359;
var statearr_25372_25405 = state_25359__$1;
(statearr_25372_25405[(2)] = null);

(statearr_25372_25405[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (13))){
var inst_25314 = (state_25359[(9)]);
var inst_25311 = (state_25359[(10)]);
var inst_25312 = (state_25359[(11)]);
var inst_25313 = (state_25359[(12)]);
var inst_25321 = (state_25359[(2)]);
var inst_25322 = (inst_25314 + (1));
var tmp25368 = inst_25311;
var tmp25369 = inst_25312;
var tmp25370 = inst_25313;
var inst_25311__$1 = tmp25368;
var inst_25312__$1 = tmp25369;
var inst_25313__$1 = tmp25370;
var inst_25314__$1 = inst_25322;
var state_25359__$1 = (function (){var statearr_25373 = state_25359;
(statearr_25373[(9)] = inst_25314__$1);

(statearr_25373[(10)] = inst_25311__$1);

(statearr_25373[(11)] = inst_25312__$1);

(statearr_25373[(12)] = inst_25313__$1);

(statearr_25373[(14)] = inst_25321);

return statearr_25373;
})();
var statearr_25374_25406 = state_25359__$1;
(statearr_25374_25406[(2)] = null);

(statearr_25374_25406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (22))){
var state_25359__$1 = state_25359;
var statearr_25375_25407 = state_25359__$1;
(statearr_25375_25407[(2)] = null);

(statearr_25375_25407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (6))){
var inst_25300 = (state_25359[(13)]);
var inst_25309 = f.call(null,inst_25300);
var inst_25310 = cljs.core.seq.call(null,inst_25309);
var inst_25311 = inst_25310;
var inst_25312 = null;
var inst_25313 = (0);
var inst_25314 = (0);
var state_25359__$1 = (function (){var statearr_25376 = state_25359;
(statearr_25376[(9)] = inst_25314);

(statearr_25376[(10)] = inst_25311);

(statearr_25376[(11)] = inst_25312);

(statearr_25376[(12)] = inst_25313);

return statearr_25376;
})();
var statearr_25377_25408 = state_25359__$1;
(statearr_25377_25408[(2)] = null);

(statearr_25377_25408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (17))){
var inst_25325 = (state_25359[(7)]);
var inst_25329 = cljs.core.chunk_first.call(null,inst_25325);
var inst_25330 = cljs.core.chunk_rest.call(null,inst_25325);
var inst_25331 = cljs.core.count.call(null,inst_25329);
var inst_25311 = inst_25330;
var inst_25312 = inst_25329;
var inst_25313 = inst_25331;
var inst_25314 = (0);
var state_25359__$1 = (function (){var statearr_25378 = state_25359;
(statearr_25378[(9)] = inst_25314);

(statearr_25378[(10)] = inst_25311);

(statearr_25378[(11)] = inst_25312);

(statearr_25378[(12)] = inst_25313);

return statearr_25378;
})();
var statearr_25379_25409 = state_25359__$1;
(statearr_25379_25409[(2)] = null);

(statearr_25379_25409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (3))){
var inst_25357 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25359__$1,inst_25357);
} else {
if((state_val_25360 === (12))){
var inst_25345 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25380_25410 = state_25359__$1;
(statearr_25380_25410[(2)] = inst_25345);

(statearr_25380_25410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (2))){
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25359__$1,(4),in$);
} else {
if((state_val_25360 === (23))){
var inst_25353 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25381_25411 = state_25359__$1;
(statearr_25381_25411[(2)] = inst_25353);

(statearr_25381_25411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (19))){
var inst_25340 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25382_25412 = state_25359__$1;
(statearr_25382_25412[(2)] = inst_25340);

(statearr_25382_25412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (11))){
var inst_25325 = (state_25359[(7)]);
var inst_25311 = (state_25359[(10)]);
var inst_25325__$1 = cljs.core.seq.call(null,inst_25311);
var state_25359__$1 = (function (){var statearr_25383 = state_25359;
(statearr_25383[(7)] = inst_25325__$1);

return statearr_25383;
})();
if(inst_25325__$1){
var statearr_25384_25413 = state_25359__$1;
(statearr_25384_25413[(1)] = (14));

} else {
var statearr_25385_25414 = state_25359__$1;
(statearr_25385_25414[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (9))){
var inst_25347 = (state_25359[(2)]);
var inst_25348 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25359__$1 = (function (){var statearr_25386 = state_25359;
(statearr_25386[(15)] = inst_25347);

return statearr_25386;
})();
if(cljs.core.truth_(inst_25348)){
var statearr_25387_25415 = state_25359__$1;
(statearr_25387_25415[(1)] = (21));

} else {
var statearr_25388_25416 = state_25359__$1;
(statearr_25388_25416[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (5))){
var inst_25303 = cljs.core.async.close_BANG_.call(null,out);
var state_25359__$1 = state_25359;
var statearr_25389_25417 = state_25359__$1;
(statearr_25389_25417[(2)] = inst_25303);

(statearr_25389_25417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (14))){
var inst_25325 = (state_25359[(7)]);
var inst_25327 = cljs.core.chunked_seq_QMARK_.call(null,inst_25325);
var state_25359__$1 = state_25359;
if(inst_25327){
var statearr_25390_25418 = state_25359__$1;
(statearr_25390_25418[(1)] = (17));

} else {
var statearr_25391_25419 = state_25359__$1;
(statearr_25391_25419[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (16))){
var inst_25343 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25392_25420 = state_25359__$1;
(statearr_25392_25420[(2)] = inst_25343);

(statearr_25392_25420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (10))){
var inst_25314 = (state_25359[(9)]);
var inst_25312 = (state_25359[(11)]);
var inst_25319 = cljs.core._nth.call(null,inst_25312,inst_25314);
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25359__$1,(13),out,inst_25319);
} else {
if((state_val_25360 === (18))){
var inst_25325 = (state_25359[(7)]);
var inst_25334 = cljs.core.first.call(null,inst_25325);
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25359__$1,(20),out,inst_25334);
} else {
if((state_val_25360 === (8))){
var inst_25314 = (state_25359[(9)]);
var inst_25313 = (state_25359[(12)]);
var inst_25316 = (inst_25314 < inst_25313);
var inst_25317 = inst_25316;
var state_25359__$1 = state_25359;
if(cljs.core.truth_(inst_25317)){
var statearr_25393_25421 = state_25359__$1;
(statearr_25393_25421[(1)] = (10));

} else {
var statearr_25394_25422 = state_25359__$1;
(statearr_25394_25422[(1)] = (11));

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
});})(c__23743__auto__))
;
return ((function (switch__23648__auto__,c__23743__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23649__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23649__auto____0 = (function (){
var statearr_25395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25395[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23649__auto__);

(statearr_25395[(1)] = (1));

return statearr_25395;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23649__auto____1 = (function (state_25359){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_25359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e25396){if((e25396 instanceof Object)){
var ex__23652__auto__ = e25396;
var statearr_25397_25423 = state_25359;
(statearr_25397_25423[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25424 = state_25359;
state_25359 = G__25424;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23649__auto__ = function(state_25359){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23649__auto____1.call(this,state_25359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23649__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23649__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto__))
})();
var state__23745__auto__ = (function (){var statearr_25398 = f__23744__auto__.call(null);
(statearr_25398[(6)] = c__23743__auto__);

return statearr_25398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto__))
);

return c__23743__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25426 = arguments.length;
switch (G__25426) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25429 = arguments.length;
switch (G__25429) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25432 = arguments.length;
switch (G__25432) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23743__auto___25479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___25479,out){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___25479,out){
return (function (state_25456){
var state_val_25457 = (state_25456[(1)]);
if((state_val_25457 === (7))){
var inst_25451 = (state_25456[(2)]);
var state_25456__$1 = state_25456;
var statearr_25458_25480 = state_25456__$1;
(statearr_25458_25480[(2)] = inst_25451);

(statearr_25458_25480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25457 === (1))){
var inst_25433 = null;
var state_25456__$1 = (function (){var statearr_25459 = state_25456;
(statearr_25459[(7)] = inst_25433);

return statearr_25459;
})();
var statearr_25460_25481 = state_25456__$1;
(statearr_25460_25481[(2)] = null);

(statearr_25460_25481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25457 === (4))){
var inst_25436 = (state_25456[(8)]);
var inst_25436__$1 = (state_25456[(2)]);
var inst_25437 = (inst_25436__$1 == null);
var inst_25438 = cljs.core.not.call(null,inst_25437);
var state_25456__$1 = (function (){var statearr_25461 = state_25456;
(statearr_25461[(8)] = inst_25436__$1);

return statearr_25461;
})();
if(inst_25438){
var statearr_25462_25482 = state_25456__$1;
(statearr_25462_25482[(1)] = (5));

} else {
var statearr_25463_25483 = state_25456__$1;
(statearr_25463_25483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25457 === (6))){
var state_25456__$1 = state_25456;
var statearr_25464_25484 = state_25456__$1;
(statearr_25464_25484[(2)] = null);

(statearr_25464_25484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25457 === (3))){
var inst_25453 = (state_25456[(2)]);
var inst_25454 = cljs.core.async.close_BANG_.call(null,out);
var state_25456__$1 = (function (){var statearr_25465 = state_25456;
(statearr_25465[(9)] = inst_25453);

return statearr_25465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25456__$1,inst_25454);
} else {
if((state_val_25457 === (2))){
var state_25456__$1 = state_25456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25456__$1,(4),ch);
} else {
if((state_val_25457 === (11))){
var inst_25436 = (state_25456[(8)]);
var inst_25445 = (state_25456[(2)]);
var inst_25433 = inst_25436;
var state_25456__$1 = (function (){var statearr_25466 = state_25456;
(statearr_25466[(7)] = inst_25433);

(statearr_25466[(10)] = inst_25445);

return statearr_25466;
})();
var statearr_25467_25485 = state_25456__$1;
(statearr_25467_25485[(2)] = null);

(statearr_25467_25485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25457 === (9))){
var inst_25436 = (state_25456[(8)]);
var state_25456__$1 = state_25456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25456__$1,(11),out,inst_25436);
} else {
if((state_val_25457 === (5))){
var inst_25433 = (state_25456[(7)]);
var inst_25436 = (state_25456[(8)]);
var inst_25440 = cljs.core._EQ_.call(null,inst_25436,inst_25433);
var state_25456__$1 = state_25456;
if(inst_25440){
var statearr_25469_25486 = state_25456__$1;
(statearr_25469_25486[(1)] = (8));

} else {
var statearr_25470_25487 = state_25456__$1;
(statearr_25470_25487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25457 === (10))){
var inst_25448 = (state_25456[(2)]);
var state_25456__$1 = state_25456;
var statearr_25471_25488 = state_25456__$1;
(statearr_25471_25488[(2)] = inst_25448);

(statearr_25471_25488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25457 === (8))){
var inst_25433 = (state_25456[(7)]);
var tmp25468 = inst_25433;
var inst_25433__$1 = tmp25468;
var state_25456__$1 = (function (){var statearr_25472 = state_25456;
(statearr_25472[(7)] = inst_25433__$1);

return statearr_25472;
})();
var statearr_25473_25489 = state_25456__$1;
(statearr_25473_25489[(2)] = null);

(statearr_25473_25489[(1)] = (2));


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
});})(c__23743__auto___25479,out))
;
return ((function (switch__23648__auto__,c__23743__auto___25479,out){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_25474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25474[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_25474[(1)] = (1));

return statearr_25474;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_25456){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_25456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e25475){if((e25475 instanceof Object)){
var ex__23652__auto__ = e25475;
var statearr_25476_25490 = state_25456;
(statearr_25476_25490[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25491 = state_25456;
state_25456 = G__25491;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_25456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_25456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___25479,out))
})();
var state__23745__auto__ = (function (){var statearr_25477 = f__23744__auto__.call(null);
(statearr_25477[(6)] = c__23743__auto___25479);

return statearr_25477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___25479,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25493 = arguments.length;
switch (G__25493) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23743__auto___25559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___25559,out){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___25559,out){
return (function (state_25531){
var state_val_25532 = (state_25531[(1)]);
if((state_val_25532 === (7))){
var inst_25527 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25533_25560 = state_25531__$1;
(statearr_25533_25560[(2)] = inst_25527);

(statearr_25533_25560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (1))){
var inst_25494 = (new Array(n));
var inst_25495 = inst_25494;
var inst_25496 = (0);
var state_25531__$1 = (function (){var statearr_25534 = state_25531;
(statearr_25534[(7)] = inst_25495);

(statearr_25534[(8)] = inst_25496);

return statearr_25534;
})();
var statearr_25535_25561 = state_25531__$1;
(statearr_25535_25561[(2)] = null);

(statearr_25535_25561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (4))){
var inst_25499 = (state_25531[(9)]);
var inst_25499__$1 = (state_25531[(2)]);
var inst_25500 = (inst_25499__$1 == null);
var inst_25501 = cljs.core.not.call(null,inst_25500);
var state_25531__$1 = (function (){var statearr_25536 = state_25531;
(statearr_25536[(9)] = inst_25499__$1);

return statearr_25536;
})();
if(inst_25501){
var statearr_25537_25562 = state_25531__$1;
(statearr_25537_25562[(1)] = (5));

} else {
var statearr_25538_25563 = state_25531__$1;
(statearr_25538_25563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (15))){
var inst_25521 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25539_25564 = state_25531__$1;
(statearr_25539_25564[(2)] = inst_25521);

(statearr_25539_25564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (13))){
var state_25531__$1 = state_25531;
var statearr_25540_25565 = state_25531__$1;
(statearr_25540_25565[(2)] = null);

(statearr_25540_25565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (6))){
var inst_25496 = (state_25531[(8)]);
var inst_25517 = (inst_25496 > (0));
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25517)){
var statearr_25541_25566 = state_25531__$1;
(statearr_25541_25566[(1)] = (12));

} else {
var statearr_25542_25567 = state_25531__$1;
(statearr_25542_25567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (3))){
var inst_25529 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25531__$1,inst_25529);
} else {
if((state_val_25532 === (12))){
var inst_25495 = (state_25531[(7)]);
var inst_25519 = cljs.core.vec.call(null,inst_25495);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25531__$1,(15),out,inst_25519);
} else {
if((state_val_25532 === (2))){
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25531__$1,(4),ch);
} else {
if((state_val_25532 === (11))){
var inst_25511 = (state_25531[(2)]);
var inst_25512 = (new Array(n));
var inst_25495 = inst_25512;
var inst_25496 = (0);
var state_25531__$1 = (function (){var statearr_25543 = state_25531;
(statearr_25543[(7)] = inst_25495);

(statearr_25543[(10)] = inst_25511);

(statearr_25543[(8)] = inst_25496);

return statearr_25543;
})();
var statearr_25544_25568 = state_25531__$1;
(statearr_25544_25568[(2)] = null);

(statearr_25544_25568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (9))){
var inst_25495 = (state_25531[(7)]);
var inst_25509 = cljs.core.vec.call(null,inst_25495);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25531__$1,(11),out,inst_25509);
} else {
if((state_val_25532 === (5))){
var inst_25499 = (state_25531[(9)]);
var inst_25495 = (state_25531[(7)]);
var inst_25496 = (state_25531[(8)]);
var inst_25504 = (state_25531[(11)]);
var inst_25503 = (inst_25495[inst_25496] = inst_25499);
var inst_25504__$1 = (inst_25496 + (1));
var inst_25505 = (inst_25504__$1 < n);
var state_25531__$1 = (function (){var statearr_25545 = state_25531;
(statearr_25545[(12)] = inst_25503);

(statearr_25545[(11)] = inst_25504__$1);

return statearr_25545;
})();
if(cljs.core.truth_(inst_25505)){
var statearr_25546_25569 = state_25531__$1;
(statearr_25546_25569[(1)] = (8));

} else {
var statearr_25547_25570 = state_25531__$1;
(statearr_25547_25570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (14))){
var inst_25524 = (state_25531[(2)]);
var inst_25525 = cljs.core.async.close_BANG_.call(null,out);
var state_25531__$1 = (function (){var statearr_25549 = state_25531;
(statearr_25549[(13)] = inst_25524);

return statearr_25549;
})();
var statearr_25550_25571 = state_25531__$1;
(statearr_25550_25571[(2)] = inst_25525);

(statearr_25550_25571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (10))){
var inst_25515 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25551_25572 = state_25531__$1;
(statearr_25551_25572[(2)] = inst_25515);

(statearr_25551_25572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (8))){
var inst_25495 = (state_25531[(7)]);
var inst_25504 = (state_25531[(11)]);
var tmp25548 = inst_25495;
var inst_25495__$1 = tmp25548;
var inst_25496 = inst_25504;
var state_25531__$1 = (function (){var statearr_25552 = state_25531;
(statearr_25552[(7)] = inst_25495__$1);

(statearr_25552[(8)] = inst_25496);

return statearr_25552;
})();
var statearr_25553_25573 = state_25531__$1;
(statearr_25553_25573[(2)] = null);

(statearr_25553_25573[(1)] = (2));


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
});})(c__23743__auto___25559,out))
;
return ((function (switch__23648__auto__,c__23743__auto___25559,out){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_25554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25554[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_25554[(1)] = (1));

return statearr_25554;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_25531){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_25531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object)){
var ex__23652__auto__ = e25555;
var statearr_25556_25574 = state_25531;
(statearr_25556_25574[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25575 = state_25531;
state_25531 = G__25575;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_25531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_25531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___25559,out))
})();
var state__23745__auto__ = (function (){var statearr_25557 = f__23744__auto__.call(null);
(statearr_25557[(6)] = c__23743__auto___25559);

return statearr_25557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___25559,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25577 = arguments.length;
switch (G__25577) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23743__auto___25647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23743__auto___25647,out){
return (function (){
var f__23744__auto__ = (function (){var switch__23648__auto__ = ((function (c__23743__auto___25647,out){
return (function (state_25619){
var state_val_25620 = (state_25619[(1)]);
if((state_val_25620 === (7))){
var inst_25615 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
var statearr_25621_25648 = state_25619__$1;
(statearr_25621_25648[(2)] = inst_25615);

(statearr_25621_25648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (1))){
var inst_25578 = [];
var inst_25579 = inst_25578;
var inst_25580 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25619__$1 = (function (){var statearr_25622 = state_25619;
(statearr_25622[(7)] = inst_25580);

(statearr_25622[(8)] = inst_25579);

return statearr_25622;
})();
var statearr_25623_25649 = state_25619__$1;
(statearr_25623_25649[(2)] = null);

(statearr_25623_25649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (4))){
var inst_25583 = (state_25619[(9)]);
var inst_25583__$1 = (state_25619[(2)]);
var inst_25584 = (inst_25583__$1 == null);
var inst_25585 = cljs.core.not.call(null,inst_25584);
var state_25619__$1 = (function (){var statearr_25624 = state_25619;
(statearr_25624[(9)] = inst_25583__$1);

return statearr_25624;
})();
if(inst_25585){
var statearr_25625_25650 = state_25619__$1;
(statearr_25625_25650[(1)] = (5));

} else {
var statearr_25626_25651 = state_25619__$1;
(statearr_25626_25651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (15))){
var inst_25609 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
var statearr_25627_25652 = state_25619__$1;
(statearr_25627_25652[(2)] = inst_25609);

(statearr_25627_25652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (13))){
var state_25619__$1 = state_25619;
var statearr_25628_25653 = state_25619__$1;
(statearr_25628_25653[(2)] = null);

(statearr_25628_25653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (6))){
var inst_25579 = (state_25619[(8)]);
var inst_25604 = inst_25579.length;
var inst_25605 = (inst_25604 > (0));
var state_25619__$1 = state_25619;
if(cljs.core.truth_(inst_25605)){
var statearr_25629_25654 = state_25619__$1;
(statearr_25629_25654[(1)] = (12));

} else {
var statearr_25630_25655 = state_25619__$1;
(statearr_25630_25655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (3))){
var inst_25617 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25619__$1,inst_25617);
} else {
if((state_val_25620 === (12))){
var inst_25579 = (state_25619[(8)]);
var inst_25607 = cljs.core.vec.call(null,inst_25579);
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25619__$1,(15),out,inst_25607);
} else {
if((state_val_25620 === (2))){
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25619__$1,(4),ch);
} else {
if((state_val_25620 === (11))){
var inst_25587 = (state_25619[(10)]);
var inst_25583 = (state_25619[(9)]);
var inst_25597 = (state_25619[(2)]);
var inst_25598 = [];
var inst_25599 = inst_25598.push(inst_25583);
var inst_25579 = inst_25598;
var inst_25580 = inst_25587;
var state_25619__$1 = (function (){var statearr_25631 = state_25619;
(statearr_25631[(11)] = inst_25597);

(statearr_25631[(7)] = inst_25580);

(statearr_25631[(8)] = inst_25579);

(statearr_25631[(12)] = inst_25599);

return statearr_25631;
})();
var statearr_25632_25656 = state_25619__$1;
(statearr_25632_25656[(2)] = null);

(statearr_25632_25656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (9))){
var inst_25579 = (state_25619[(8)]);
var inst_25595 = cljs.core.vec.call(null,inst_25579);
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25619__$1,(11),out,inst_25595);
} else {
if((state_val_25620 === (5))){
var inst_25587 = (state_25619[(10)]);
var inst_25580 = (state_25619[(7)]);
var inst_25583 = (state_25619[(9)]);
var inst_25587__$1 = f.call(null,inst_25583);
var inst_25588 = cljs.core._EQ_.call(null,inst_25587__$1,inst_25580);
var inst_25589 = cljs.core.keyword_identical_QMARK_.call(null,inst_25580,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25590 = ((inst_25588) || (inst_25589));
var state_25619__$1 = (function (){var statearr_25633 = state_25619;
(statearr_25633[(10)] = inst_25587__$1);

return statearr_25633;
})();
if(cljs.core.truth_(inst_25590)){
var statearr_25634_25657 = state_25619__$1;
(statearr_25634_25657[(1)] = (8));

} else {
var statearr_25635_25658 = state_25619__$1;
(statearr_25635_25658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (14))){
var inst_25612 = (state_25619[(2)]);
var inst_25613 = cljs.core.async.close_BANG_.call(null,out);
var state_25619__$1 = (function (){var statearr_25637 = state_25619;
(statearr_25637[(13)] = inst_25612);

return statearr_25637;
})();
var statearr_25638_25659 = state_25619__$1;
(statearr_25638_25659[(2)] = inst_25613);

(statearr_25638_25659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (10))){
var inst_25602 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
var statearr_25639_25660 = state_25619__$1;
(statearr_25639_25660[(2)] = inst_25602);

(statearr_25639_25660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (8))){
var inst_25587 = (state_25619[(10)]);
var inst_25579 = (state_25619[(8)]);
var inst_25583 = (state_25619[(9)]);
var inst_25592 = inst_25579.push(inst_25583);
var tmp25636 = inst_25579;
var inst_25579__$1 = tmp25636;
var inst_25580 = inst_25587;
var state_25619__$1 = (function (){var statearr_25640 = state_25619;
(statearr_25640[(7)] = inst_25580);

(statearr_25640[(14)] = inst_25592);

(statearr_25640[(8)] = inst_25579__$1);

return statearr_25640;
})();
var statearr_25641_25661 = state_25619__$1;
(statearr_25641_25661[(2)] = null);

(statearr_25641_25661[(1)] = (2));


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
});})(c__23743__auto___25647,out))
;
return ((function (switch__23648__auto__,c__23743__auto___25647,out){
return (function() {
var cljs$core$async$state_machine__23649__auto__ = null;
var cljs$core$async$state_machine__23649__auto____0 = (function (){
var statearr_25642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25642[(0)] = cljs$core$async$state_machine__23649__auto__);

(statearr_25642[(1)] = (1));

return statearr_25642;
});
var cljs$core$async$state_machine__23649__auto____1 = (function (state_25619){
while(true){
var ret_value__23650__auto__ = (function (){try{while(true){
var result__23651__auto__ = switch__23648__auto__.call(null,state_25619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23651__auto__;
}
break;
}
}catch (e25643){if((e25643 instanceof Object)){
var ex__23652__auto__ = e25643;
var statearr_25644_25662 = state_25619;
(statearr_25644_25662[(5)] = ex__23652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25663 = state_25619;
state_25619 = G__25663;
continue;
} else {
return ret_value__23650__auto__;
}
break;
}
});
cljs$core$async$state_machine__23649__auto__ = function(state_25619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23649__auto____1.call(this,state_25619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23649__auto____0;
cljs$core$async$state_machine__23649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23649__auto____1;
return cljs$core$async$state_machine__23649__auto__;
})()
;})(switch__23648__auto__,c__23743__auto___25647,out))
})();
var state__23745__auto__ = (function (){var statearr_25645 = f__23744__auto__.call(null);
(statearr_25645[(6)] = c__23743__auto___25647);

return statearr_25645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23745__auto__);
});})(c__23743__auto___25647,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1573202558271
