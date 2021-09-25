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
var G__26501 = arguments.length;
switch (G__26501) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26502 = (function (f,blockable,meta26503){
this.f = f;
this.blockable = blockable;
this.meta26503 = meta26503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26504,meta26503__$1){
var self__ = this;
var _26504__$1 = this;
return (new cljs.core.async.t_cljs$core$async26502(self__.f,self__.blockable,meta26503__$1));
});

cljs.core.async.t_cljs$core$async26502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26504){
var self__ = this;
var _26504__$1 = this;
return self__.meta26503;
});

cljs.core.async.t_cljs$core$async26502.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26503","meta26503",717760144,null)], null);
});

cljs.core.async.t_cljs$core$async26502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26502";

cljs.core.async.t_cljs$core$async26502.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26502");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26502.
 */
cljs.core.async.__GT_t_cljs$core$async26502 = (function cljs$core$async$__GT_t_cljs$core$async26502(f__$1,blockable__$1,meta26503){
return (new cljs.core.async.t_cljs$core$async26502(f__$1,blockable__$1,meta26503));
});

}

return (new cljs.core.async.t_cljs$core$async26502(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26508 = arguments.length;
switch (G__26508) {
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
var G__26511 = arguments.length;
switch (G__26511) {
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
var G__26514 = arguments.length;
switch (G__26514) {
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
var val_26516 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26516);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26516,ret){
return (function (){
return fn1.call(null,val_26516);
});})(val_26516,ret))
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
var G__26518 = arguments.length;
switch (G__26518) {
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
var n__4607__auto___26520 = n;
var x_26521 = (0);
while(true){
if((x_26521 < n__4607__auto___26520)){
(a[x_26521] = (0));

var G__26522 = (x_26521 + (1));
x_26521 = G__26522;
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

var G__26523 = (i + (1));
i = G__26523;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26524 = (function (flag,meta26525){
this.flag = flag;
this.meta26525 = meta26525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26526,meta26525__$1){
var self__ = this;
var _26526__$1 = this;
return (new cljs.core.async.t_cljs$core$async26524(self__.flag,meta26525__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26526){
var self__ = this;
var _26526__$1 = this;
return self__.meta26525;
});})(flag))
;

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26524.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26525","meta26525",-1869065488,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26524";

cljs.core.async.t_cljs$core$async26524.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26524");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26524.
 */
cljs.core.async.__GT_t_cljs$core$async26524 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26524(flag__$1,meta26525){
return (new cljs.core.async.t_cljs$core$async26524(flag__$1,meta26525));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26524(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26527 = (function (flag,cb,meta26528){
this.flag = flag;
this.cb = cb;
this.meta26528 = meta26528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26529,meta26528__$1){
var self__ = this;
var _26529__$1 = this;
return (new cljs.core.async.t_cljs$core$async26527(self__.flag,self__.cb,meta26528__$1));
});

cljs.core.async.t_cljs$core$async26527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26529){
var self__ = this;
var _26529__$1 = this;
return self__.meta26528;
});

cljs.core.async.t_cljs$core$async26527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26528","meta26528",1907843897,null)], null);
});

cljs.core.async.t_cljs$core$async26527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26527";

cljs.core.async.t_cljs$core$async26527.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26527");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26527.
 */
cljs.core.async.__GT_t_cljs$core$async26527 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26527(flag__$1,cb__$1,meta26528){
return (new cljs.core.async.t_cljs$core$async26527(flag__$1,cb__$1,meta26528));
});

}

return (new cljs.core.async.t_cljs$core$async26527(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26530_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26530_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26531_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26531_SHARP_,port], null));
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
var G__26532 = (i + (1));
i = G__26532;
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
var len__4730__auto___26538 = arguments.length;
var i__4731__auto___26539 = (0);
while(true){
if((i__4731__auto___26539 < len__4730__auto___26538)){
args__4736__auto__.push((arguments[i__4731__auto___26539]));

var G__26540 = (i__4731__auto___26539 + (1));
i__4731__auto___26539 = G__26540;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26535){
var map__26536 = p__26535;
var map__26536__$1 = (((((!((map__26536 == null))))?(((((map__26536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26536):map__26536);
var opts = map__26536__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26533){
var G__26534 = cljs.core.first.call(null,seq26533);
var seq26533__$1 = cljs.core.next.call(null,seq26533);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26534,seq26533__$1);
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
var G__26542 = arguments.length;
switch (G__26542) {
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
var c__24577__auto___26588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26588){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___26588){
return (function (state_26566){
var state_val_26567 = (state_26566[(1)]);
if((state_val_26567 === (7))){
var inst_26562 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26568_26589 = state_26566__$1;
(statearr_26568_26589[(2)] = inst_26562);

(statearr_26568_26589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (1))){
var state_26566__$1 = state_26566;
var statearr_26569_26590 = state_26566__$1;
(statearr_26569_26590[(2)] = null);

(statearr_26569_26590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (4))){
var inst_26545 = (state_26566[(7)]);
var inst_26545__$1 = (state_26566[(2)]);
var inst_26546 = (inst_26545__$1 == null);
var state_26566__$1 = (function (){var statearr_26570 = state_26566;
(statearr_26570[(7)] = inst_26545__$1);

return statearr_26570;
})();
if(cljs.core.truth_(inst_26546)){
var statearr_26571_26591 = state_26566__$1;
(statearr_26571_26591[(1)] = (5));

} else {
var statearr_26572_26592 = state_26566__$1;
(statearr_26572_26592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (13))){
var state_26566__$1 = state_26566;
var statearr_26573_26593 = state_26566__$1;
(statearr_26573_26593[(2)] = null);

(statearr_26573_26593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (6))){
var inst_26545 = (state_26566[(7)]);
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26566__$1,(11),to,inst_26545);
} else {
if((state_val_26567 === (3))){
var inst_26564 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26566__$1,inst_26564);
} else {
if((state_val_26567 === (12))){
var state_26566__$1 = state_26566;
var statearr_26574_26594 = state_26566__$1;
(statearr_26574_26594[(2)] = null);

(statearr_26574_26594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (2))){
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26566__$1,(4),from);
} else {
if((state_val_26567 === (11))){
var inst_26555 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
if(cljs.core.truth_(inst_26555)){
var statearr_26575_26595 = state_26566__$1;
(statearr_26575_26595[(1)] = (12));

} else {
var statearr_26576_26596 = state_26566__$1;
(statearr_26576_26596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (9))){
var state_26566__$1 = state_26566;
var statearr_26577_26597 = state_26566__$1;
(statearr_26577_26597[(2)] = null);

(statearr_26577_26597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (5))){
var state_26566__$1 = state_26566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26578_26598 = state_26566__$1;
(statearr_26578_26598[(1)] = (8));

} else {
var statearr_26579_26599 = state_26566__$1;
(statearr_26579_26599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (14))){
var inst_26560 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26580_26600 = state_26566__$1;
(statearr_26580_26600[(2)] = inst_26560);

(statearr_26580_26600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (10))){
var inst_26552 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26581_26601 = state_26566__$1;
(statearr_26581_26601[(2)] = inst_26552);

(statearr_26581_26601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (8))){
var inst_26549 = cljs.core.async.close_BANG_.call(null,to);
var state_26566__$1 = state_26566;
var statearr_26582_26602 = state_26566__$1;
(statearr_26582_26602[(2)] = inst_26549);

(statearr_26582_26602[(1)] = (10));


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
});})(c__24577__auto___26588))
;
return ((function (switch__24410__auto__,c__24577__auto___26588){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_26583 = [null,null,null,null,null,null,null,null];
(statearr_26583[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_26583[(1)] = (1));

return statearr_26583;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_26566){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26584){if((e26584 instanceof Object)){
var ex__24414__auto__ = e26584;
var statearr_26585_26603 = state_26566;
(statearr_26585_26603[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26604 = state_26566;
state_26566 = G__26604;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_26566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_26566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___26588))
})();
var state__24579__auto__ = (function (){var statearr_26586 = f__24578__auto__.call(null);
(statearr_26586[(6)] = c__24577__auto___26588);

return statearr_26586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26588))
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
return (function (p__26605){
var vec__26606 = p__26605;
var v = cljs.core.nth.call(null,vec__26606,(0),null);
var p = cljs.core.nth.call(null,vec__26606,(1),null);
var job = vec__26606;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24577__auto___26777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26777,res,vec__26606,v,p,job,jobs,results){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___26777,res,vec__26606,v,p,job,jobs,results){
return (function (state_26613){
var state_val_26614 = (state_26613[(1)]);
if((state_val_26614 === (1))){
var state_26613__$1 = state_26613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26613__$1,(2),res,v);
} else {
if((state_val_26614 === (2))){
var inst_26610 = (state_26613[(2)]);
var inst_26611 = cljs.core.async.close_BANG_.call(null,res);
var state_26613__$1 = (function (){var statearr_26615 = state_26613;
(statearr_26615[(7)] = inst_26610);

return statearr_26615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26613__$1,inst_26611);
} else {
return null;
}
}
});})(c__24577__auto___26777,res,vec__26606,v,p,job,jobs,results))
;
return ((function (switch__24410__auto__,c__24577__auto___26777,res,vec__26606,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0 = (function (){
var statearr_26616 = [null,null,null,null,null,null,null,null];
(statearr_26616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__);

(statearr_26616[(1)] = (1));

return statearr_26616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1 = (function (state_26613){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26617){if((e26617 instanceof Object)){
var ex__24414__auto__ = e26617;
var statearr_26618_26778 = state_26613;
(statearr_26618_26778[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26779 = state_26613;
state_26613 = G__26779;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = function(state_26613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1.call(this,state_26613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___26777,res,vec__26606,v,p,job,jobs,results))
})();
var state__24579__auto__ = (function (){var statearr_26619 = f__24578__auto__.call(null);
(statearr_26619[(6)] = c__24577__auto___26777);

return statearr_26619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26777,res,vec__26606,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26620){
var vec__26621 = p__26620;
var v = cljs.core.nth.call(null,vec__26621,(0),null);
var p = cljs.core.nth.call(null,vec__26621,(1),null);
var job = vec__26621;
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
var n__4607__auto___26780 = n;
var __26781 = (0);
while(true){
if((__26781 < n__4607__auto___26780)){
var G__26624_26782 = type;
var G__26624_26783__$1 = (((G__26624_26782 instanceof cljs.core.Keyword))?G__26624_26782.fqn:null);
switch (G__26624_26783__$1) {
case "compute":
var c__24577__auto___26785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26781,c__24577__auto___26785,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (__26781,c__24577__auto___26785,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async){
return (function (state_26637){
var state_val_26638 = (state_26637[(1)]);
if((state_val_26638 === (1))){
var state_26637__$1 = state_26637;
var statearr_26639_26786 = state_26637__$1;
(statearr_26639_26786[(2)] = null);

(statearr_26639_26786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (2))){
var state_26637__$1 = state_26637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26637__$1,(4),jobs);
} else {
if((state_val_26638 === (3))){
var inst_26635 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26637__$1,inst_26635);
} else {
if((state_val_26638 === (4))){
var inst_26627 = (state_26637[(2)]);
var inst_26628 = process.call(null,inst_26627);
var state_26637__$1 = state_26637;
if(cljs.core.truth_(inst_26628)){
var statearr_26640_26787 = state_26637__$1;
(statearr_26640_26787[(1)] = (5));

} else {
var statearr_26641_26788 = state_26637__$1;
(statearr_26641_26788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (5))){
var state_26637__$1 = state_26637;
var statearr_26642_26789 = state_26637__$1;
(statearr_26642_26789[(2)] = null);

(statearr_26642_26789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (6))){
var state_26637__$1 = state_26637;
var statearr_26643_26790 = state_26637__$1;
(statearr_26643_26790[(2)] = null);

(statearr_26643_26790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (7))){
var inst_26633 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
var statearr_26644_26791 = state_26637__$1;
(statearr_26644_26791[(2)] = inst_26633);

(statearr_26644_26791[(1)] = (3));


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
});})(__26781,c__24577__auto___26785,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async))
;
return ((function (__26781,switch__24410__auto__,c__24577__auto___26785,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0 = (function (){
var statearr_26645 = [null,null,null,null,null,null,null];
(statearr_26645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__);

(statearr_26645[(1)] = (1));

return statearr_26645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1 = (function (state_26637){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26646){if((e26646 instanceof Object)){
var ex__24414__auto__ = e26646;
var statearr_26647_26792 = state_26637;
(statearr_26647_26792[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26793 = state_26637;
state_26637 = G__26793;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = function(state_26637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1.call(this,state_26637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__;
})()
;})(__26781,switch__24410__auto__,c__24577__auto___26785,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async))
})();
var state__24579__auto__ = (function (){var statearr_26648 = f__24578__auto__.call(null);
(statearr_26648[(6)] = c__24577__auto___26785);

return statearr_26648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(__26781,c__24577__auto___26785,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async))
);


break;
case "async":
var c__24577__auto___26794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26781,c__24577__auto___26794,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (__26781,c__24577__auto___26794,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async){
return (function (state_26661){
var state_val_26662 = (state_26661[(1)]);
if((state_val_26662 === (1))){
var state_26661__$1 = state_26661;
var statearr_26663_26795 = state_26661__$1;
(statearr_26663_26795[(2)] = null);

(statearr_26663_26795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26662 === (2))){
var state_26661__$1 = state_26661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26661__$1,(4),jobs);
} else {
if((state_val_26662 === (3))){
var inst_26659 = (state_26661[(2)]);
var state_26661__$1 = state_26661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26661__$1,inst_26659);
} else {
if((state_val_26662 === (4))){
var inst_26651 = (state_26661[(2)]);
var inst_26652 = async.call(null,inst_26651);
var state_26661__$1 = state_26661;
if(cljs.core.truth_(inst_26652)){
var statearr_26664_26796 = state_26661__$1;
(statearr_26664_26796[(1)] = (5));

} else {
var statearr_26665_26797 = state_26661__$1;
(statearr_26665_26797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26662 === (5))){
var state_26661__$1 = state_26661;
var statearr_26666_26798 = state_26661__$1;
(statearr_26666_26798[(2)] = null);

(statearr_26666_26798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26662 === (6))){
var state_26661__$1 = state_26661;
var statearr_26667_26799 = state_26661__$1;
(statearr_26667_26799[(2)] = null);

(statearr_26667_26799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26662 === (7))){
var inst_26657 = (state_26661[(2)]);
var state_26661__$1 = state_26661;
var statearr_26668_26800 = state_26661__$1;
(statearr_26668_26800[(2)] = inst_26657);

(statearr_26668_26800[(1)] = (3));


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
});})(__26781,c__24577__auto___26794,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async))
;
return ((function (__26781,switch__24410__auto__,c__24577__auto___26794,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0 = (function (){
var statearr_26669 = [null,null,null,null,null,null,null];
(statearr_26669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__);

(statearr_26669[(1)] = (1));

return statearr_26669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1 = (function (state_26661){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26670){if((e26670 instanceof Object)){
var ex__24414__auto__ = e26670;
var statearr_26671_26801 = state_26661;
(statearr_26671_26801[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26802 = state_26661;
state_26661 = G__26802;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = function(state_26661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1.call(this,state_26661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__;
})()
;})(__26781,switch__24410__auto__,c__24577__auto___26794,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async))
})();
var state__24579__auto__ = (function (){var statearr_26672 = f__24578__auto__.call(null);
(statearr_26672[(6)] = c__24577__auto___26794);

return statearr_26672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(__26781,c__24577__auto___26794,G__26624_26782,G__26624_26783__$1,n__4607__auto___26780,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26624_26783__$1)].join('')));

}

var G__26803 = (__26781 + (1));
__26781 = G__26803;
continue;
} else {
}
break;
}

var c__24577__auto___26804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26804,jobs,results,process,async){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___26804,jobs,results,process,async){
return (function (state_26694){
var state_val_26695 = (state_26694[(1)]);
if((state_val_26695 === (7))){
var inst_26690 = (state_26694[(2)]);
var state_26694__$1 = state_26694;
var statearr_26696_26805 = state_26694__$1;
(statearr_26696_26805[(2)] = inst_26690);

(statearr_26696_26805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (1))){
var state_26694__$1 = state_26694;
var statearr_26697_26806 = state_26694__$1;
(statearr_26697_26806[(2)] = null);

(statearr_26697_26806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (4))){
var inst_26675 = (state_26694[(7)]);
var inst_26675__$1 = (state_26694[(2)]);
var inst_26676 = (inst_26675__$1 == null);
var state_26694__$1 = (function (){var statearr_26698 = state_26694;
(statearr_26698[(7)] = inst_26675__$1);

return statearr_26698;
})();
if(cljs.core.truth_(inst_26676)){
var statearr_26699_26807 = state_26694__$1;
(statearr_26699_26807[(1)] = (5));

} else {
var statearr_26700_26808 = state_26694__$1;
(statearr_26700_26808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (6))){
var inst_26680 = (state_26694[(8)]);
var inst_26675 = (state_26694[(7)]);
var inst_26680__$1 = cljs.core.async.chan.call(null,(1));
var inst_26681 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26682 = [inst_26675,inst_26680__$1];
var inst_26683 = (new cljs.core.PersistentVector(null,2,(5),inst_26681,inst_26682,null));
var state_26694__$1 = (function (){var statearr_26701 = state_26694;
(statearr_26701[(8)] = inst_26680__$1);

return statearr_26701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26694__$1,(8),jobs,inst_26683);
} else {
if((state_val_26695 === (3))){
var inst_26692 = (state_26694[(2)]);
var state_26694__$1 = state_26694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26694__$1,inst_26692);
} else {
if((state_val_26695 === (2))){
var state_26694__$1 = state_26694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26694__$1,(4),from);
} else {
if((state_val_26695 === (9))){
var inst_26687 = (state_26694[(2)]);
var state_26694__$1 = (function (){var statearr_26702 = state_26694;
(statearr_26702[(9)] = inst_26687);

return statearr_26702;
})();
var statearr_26703_26809 = state_26694__$1;
(statearr_26703_26809[(2)] = null);

(statearr_26703_26809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (5))){
var inst_26678 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26694__$1 = state_26694;
var statearr_26704_26810 = state_26694__$1;
(statearr_26704_26810[(2)] = inst_26678);

(statearr_26704_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26695 === (8))){
var inst_26680 = (state_26694[(8)]);
var inst_26685 = (state_26694[(2)]);
var state_26694__$1 = (function (){var statearr_26705 = state_26694;
(statearr_26705[(10)] = inst_26685);

return statearr_26705;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26694__$1,(9),results,inst_26680);
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
});})(c__24577__auto___26804,jobs,results,process,async))
;
return ((function (switch__24410__auto__,c__24577__auto___26804,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0 = (function (){
var statearr_26706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__);

(statearr_26706[(1)] = (1));

return statearr_26706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1 = (function (state_26694){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26707){if((e26707 instanceof Object)){
var ex__24414__auto__ = e26707;
var statearr_26708_26811 = state_26694;
(statearr_26708_26811[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26812 = state_26694;
state_26694 = G__26812;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = function(state_26694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1.call(this,state_26694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___26804,jobs,results,process,async))
})();
var state__24579__auto__ = (function (){var statearr_26709 = f__24578__auto__.call(null);
(statearr_26709[(6)] = c__24577__auto___26804);

return statearr_26709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26804,jobs,results,process,async))
);


var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,jobs,results,process,async){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__,jobs,results,process,async){
return (function (state_26747){
var state_val_26748 = (state_26747[(1)]);
if((state_val_26748 === (7))){
var inst_26743 = (state_26747[(2)]);
var state_26747__$1 = state_26747;
var statearr_26749_26813 = state_26747__$1;
(statearr_26749_26813[(2)] = inst_26743);

(statearr_26749_26813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (20))){
var state_26747__$1 = state_26747;
var statearr_26750_26814 = state_26747__$1;
(statearr_26750_26814[(2)] = null);

(statearr_26750_26814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (1))){
var state_26747__$1 = state_26747;
var statearr_26751_26815 = state_26747__$1;
(statearr_26751_26815[(2)] = null);

(statearr_26751_26815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (4))){
var inst_26712 = (state_26747[(7)]);
var inst_26712__$1 = (state_26747[(2)]);
var inst_26713 = (inst_26712__$1 == null);
var state_26747__$1 = (function (){var statearr_26752 = state_26747;
(statearr_26752[(7)] = inst_26712__$1);

return statearr_26752;
})();
if(cljs.core.truth_(inst_26713)){
var statearr_26753_26816 = state_26747__$1;
(statearr_26753_26816[(1)] = (5));

} else {
var statearr_26754_26817 = state_26747__$1;
(statearr_26754_26817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (15))){
var inst_26725 = (state_26747[(8)]);
var state_26747__$1 = state_26747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26747__$1,(18),to,inst_26725);
} else {
if((state_val_26748 === (21))){
var inst_26738 = (state_26747[(2)]);
var state_26747__$1 = state_26747;
var statearr_26755_26818 = state_26747__$1;
(statearr_26755_26818[(2)] = inst_26738);

(statearr_26755_26818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (13))){
var inst_26740 = (state_26747[(2)]);
var state_26747__$1 = (function (){var statearr_26756 = state_26747;
(statearr_26756[(9)] = inst_26740);

return statearr_26756;
})();
var statearr_26757_26819 = state_26747__$1;
(statearr_26757_26819[(2)] = null);

(statearr_26757_26819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (6))){
var inst_26712 = (state_26747[(7)]);
var state_26747__$1 = state_26747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26747__$1,(11),inst_26712);
} else {
if((state_val_26748 === (17))){
var inst_26733 = (state_26747[(2)]);
var state_26747__$1 = state_26747;
if(cljs.core.truth_(inst_26733)){
var statearr_26758_26820 = state_26747__$1;
(statearr_26758_26820[(1)] = (19));

} else {
var statearr_26759_26821 = state_26747__$1;
(statearr_26759_26821[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (3))){
var inst_26745 = (state_26747[(2)]);
var state_26747__$1 = state_26747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26747__$1,inst_26745);
} else {
if((state_val_26748 === (12))){
var inst_26722 = (state_26747[(10)]);
var state_26747__$1 = state_26747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26747__$1,(14),inst_26722);
} else {
if((state_val_26748 === (2))){
var state_26747__$1 = state_26747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26747__$1,(4),results);
} else {
if((state_val_26748 === (19))){
var state_26747__$1 = state_26747;
var statearr_26760_26822 = state_26747__$1;
(statearr_26760_26822[(2)] = null);

(statearr_26760_26822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (11))){
var inst_26722 = (state_26747[(2)]);
var state_26747__$1 = (function (){var statearr_26761 = state_26747;
(statearr_26761[(10)] = inst_26722);

return statearr_26761;
})();
var statearr_26762_26823 = state_26747__$1;
(statearr_26762_26823[(2)] = null);

(statearr_26762_26823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (9))){
var state_26747__$1 = state_26747;
var statearr_26763_26824 = state_26747__$1;
(statearr_26763_26824[(2)] = null);

(statearr_26763_26824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (5))){
var state_26747__$1 = state_26747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26764_26825 = state_26747__$1;
(statearr_26764_26825[(1)] = (8));

} else {
var statearr_26765_26826 = state_26747__$1;
(statearr_26765_26826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (14))){
var inst_26725 = (state_26747[(8)]);
var inst_26727 = (state_26747[(11)]);
var inst_26725__$1 = (state_26747[(2)]);
var inst_26726 = (inst_26725__$1 == null);
var inst_26727__$1 = cljs.core.not.call(null,inst_26726);
var state_26747__$1 = (function (){var statearr_26766 = state_26747;
(statearr_26766[(8)] = inst_26725__$1);

(statearr_26766[(11)] = inst_26727__$1);

return statearr_26766;
})();
if(inst_26727__$1){
var statearr_26767_26827 = state_26747__$1;
(statearr_26767_26827[(1)] = (15));

} else {
var statearr_26768_26828 = state_26747__$1;
(statearr_26768_26828[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (16))){
var inst_26727 = (state_26747[(11)]);
var state_26747__$1 = state_26747;
var statearr_26769_26829 = state_26747__$1;
(statearr_26769_26829[(2)] = inst_26727);

(statearr_26769_26829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (10))){
var inst_26719 = (state_26747[(2)]);
var state_26747__$1 = state_26747;
var statearr_26770_26830 = state_26747__$1;
(statearr_26770_26830[(2)] = inst_26719);

(statearr_26770_26830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (18))){
var inst_26730 = (state_26747[(2)]);
var state_26747__$1 = state_26747;
var statearr_26771_26831 = state_26747__$1;
(statearr_26771_26831[(2)] = inst_26730);

(statearr_26771_26831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26748 === (8))){
var inst_26716 = cljs.core.async.close_BANG_.call(null,to);
var state_26747__$1 = state_26747;
var statearr_26772_26832 = state_26747__$1;
(statearr_26772_26832[(2)] = inst_26716);

(statearr_26772_26832[(1)] = (10));


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
});})(c__24577__auto__,jobs,results,process,async))
;
return ((function (switch__24410__auto__,c__24577__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0 = (function (){
var statearr_26773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__);

(statearr_26773[(1)] = (1));

return statearr_26773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1 = (function (state_26747){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26774){if((e26774 instanceof Object)){
var ex__24414__auto__ = e26774;
var statearr_26775_26833 = state_26747;
(statearr_26775_26833[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26834 = state_26747;
state_26747 = G__26834;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__ = function(state_26747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1.call(this,state_26747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__,jobs,results,process,async))
})();
var state__24579__auto__ = (function (){var statearr_26776 = f__24578__auto__.call(null);
(statearr_26776[(6)] = c__24577__auto__);

return statearr_26776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,jobs,results,process,async))
);

return c__24577__auto__;
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
var G__26836 = arguments.length;
switch (G__26836) {
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
var G__26839 = arguments.length;
switch (G__26839) {
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
var G__26842 = arguments.length;
switch (G__26842) {
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
var c__24577__auto___26891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26891,tc,fc){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___26891,tc,fc){
return (function (state_26868){
var state_val_26869 = (state_26868[(1)]);
if((state_val_26869 === (7))){
var inst_26864 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
var statearr_26870_26892 = state_26868__$1;
(statearr_26870_26892[(2)] = inst_26864);

(statearr_26870_26892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (1))){
var state_26868__$1 = state_26868;
var statearr_26871_26893 = state_26868__$1;
(statearr_26871_26893[(2)] = null);

(statearr_26871_26893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (4))){
var inst_26845 = (state_26868[(7)]);
var inst_26845__$1 = (state_26868[(2)]);
var inst_26846 = (inst_26845__$1 == null);
var state_26868__$1 = (function (){var statearr_26872 = state_26868;
(statearr_26872[(7)] = inst_26845__$1);

return statearr_26872;
})();
if(cljs.core.truth_(inst_26846)){
var statearr_26873_26894 = state_26868__$1;
(statearr_26873_26894[(1)] = (5));

} else {
var statearr_26874_26895 = state_26868__$1;
(statearr_26874_26895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (13))){
var state_26868__$1 = state_26868;
var statearr_26875_26896 = state_26868__$1;
(statearr_26875_26896[(2)] = null);

(statearr_26875_26896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (6))){
var inst_26845 = (state_26868[(7)]);
var inst_26851 = p.call(null,inst_26845);
var state_26868__$1 = state_26868;
if(cljs.core.truth_(inst_26851)){
var statearr_26876_26897 = state_26868__$1;
(statearr_26876_26897[(1)] = (9));

} else {
var statearr_26877_26898 = state_26868__$1;
(statearr_26877_26898[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (3))){
var inst_26866 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26868__$1,inst_26866);
} else {
if((state_val_26869 === (12))){
var state_26868__$1 = state_26868;
var statearr_26878_26899 = state_26868__$1;
(statearr_26878_26899[(2)] = null);

(statearr_26878_26899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (2))){
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26868__$1,(4),ch);
} else {
if((state_val_26869 === (11))){
var inst_26845 = (state_26868[(7)]);
var inst_26855 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26868__$1,(8),inst_26855,inst_26845);
} else {
if((state_val_26869 === (9))){
var state_26868__$1 = state_26868;
var statearr_26879_26900 = state_26868__$1;
(statearr_26879_26900[(2)] = tc);

(statearr_26879_26900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (5))){
var inst_26848 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26849 = cljs.core.async.close_BANG_.call(null,fc);
var state_26868__$1 = (function (){var statearr_26880 = state_26868;
(statearr_26880[(8)] = inst_26848);

return statearr_26880;
})();
var statearr_26881_26901 = state_26868__$1;
(statearr_26881_26901[(2)] = inst_26849);

(statearr_26881_26901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (14))){
var inst_26862 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
var statearr_26882_26902 = state_26868__$1;
(statearr_26882_26902[(2)] = inst_26862);

(statearr_26882_26902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (10))){
var state_26868__$1 = state_26868;
var statearr_26883_26903 = state_26868__$1;
(statearr_26883_26903[(2)] = fc);

(statearr_26883_26903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26869 === (8))){
var inst_26857 = (state_26868[(2)]);
var state_26868__$1 = state_26868;
if(cljs.core.truth_(inst_26857)){
var statearr_26884_26904 = state_26868__$1;
(statearr_26884_26904[(1)] = (12));

} else {
var statearr_26885_26905 = state_26868__$1;
(statearr_26885_26905[(1)] = (13));

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
});})(c__24577__auto___26891,tc,fc))
;
return ((function (switch__24410__auto__,c__24577__auto___26891,tc,fc){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_26886 = [null,null,null,null,null,null,null,null,null];
(statearr_26886[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_26886[(1)] = (1));

return statearr_26886;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_26868){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26887){if((e26887 instanceof Object)){
var ex__24414__auto__ = e26887;
var statearr_26888_26906 = state_26868;
(statearr_26888_26906[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26907 = state_26868;
state_26868 = G__26907;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_26868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_26868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___26891,tc,fc))
})();
var state__24579__auto__ = (function (){var statearr_26889 = f__24578__auto__.call(null);
(statearr_26889[(6)] = c__24577__auto___26891);

return statearr_26889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26891,tc,fc))
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
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__){
return (function (state_26928){
var state_val_26929 = (state_26928[(1)]);
if((state_val_26929 === (7))){
var inst_26924 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
var statearr_26930_26948 = state_26928__$1;
(statearr_26930_26948[(2)] = inst_26924);

(statearr_26930_26948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (1))){
var inst_26908 = init;
var state_26928__$1 = (function (){var statearr_26931 = state_26928;
(statearr_26931[(7)] = inst_26908);

return statearr_26931;
})();
var statearr_26932_26949 = state_26928__$1;
(statearr_26932_26949[(2)] = null);

(statearr_26932_26949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (4))){
var inst_26911 = (state_26928[(8)]);
var inst_26911__$1 = (state_26928[(2)]);
var inst_26912 = (inst_26911__$1 == null);
var state_26928__$1 = (function (){var statearr_26933 = state_26928;
(statearr_26933[(8)] = inst_26911__$1);

return statearr_26933;
})();
if(cljs.core.truth_(inst_26912)){
var statearr_26934_26950 = state_26928__$1;
(statearr_26934_26950[(1)] = (5));

} else {
var statearr_26935_26951 = state_26928__$1;
(statearr_26935_26951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (6))){
var inst_26908 = (state_26928[(7)]);
var inst_26911 = (state_26928[(8)]);
var inst_26915 = (state_26928[(9)]);
var inst_26915__$1 = f.call(null,inst_26908,inst_26911);
var inst_26916 = cljs.core.reduced_QMARK_.call(null,inst_26915__$1);
var state_26928__$1 = (function (){var statearr_26936 = state_26928;
(statearr_26936[(9)] = inst_26915__$1);

return statearr_26936;
})();
if(inst_26916){
var statearr_26937_26952 = state_26928__$1;
(statearr_26937_26952[(1)] = (8));

} else {
var statearr_26938_26953 = state_26928__$1;
(statearr_26938_26953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (3))){
var inst_26926 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26928__$1,inst_26926);
} else {
if((state_val_26929 === (2))){
var state_26928__$1 = state_26928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26928__$1,(4),ch);
} else {
if((state_val_26929 === (9))){
var inst_26915 = (state_26928[(9)]);
var inst_26908 = inst_26915;
var state_26928__$1 = (function (){var statearr_26939 = state_26928;
(statearr_26939[(7)] = inst_26908);

return statearr_26939;
})();
var statearr_26940_26954 = state_26928__$1;
(statearr_26940_26954[(2)] = null);

(statearr_26940_26954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (5))){
var inst_26908 = (state_26928[(7)]);
var state_26928__$1 = state_26928;
var statearr_26941_26955 = state_26928__$1;
(statearr_26941_26955[(2)] = inst_26908);

(statearr_26941_26955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (10))){
var inst_26922 = (state_26928[(2)]);
var state_26928__$1 = state_26928;
var statearr_26942_26956 = state_26928__$1;
(statearr_26942_26956[(2)] = inst_26922);

(statearr_26942_26956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26929 === (8))){
var inst_26915 = (state_26928[(9)]);
var inst_26918 = cljs.core.deref.call(null,inst_26915);
var state_26928__$1 = state_26928;
var statearr_26943_26957 = state_26928__$1;
(statearr_26943_26957[(2)] = inst_26918);

(statearr_26943_26957[(1)] = (10));


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
});})(c__24577__auto__))
;
return ((function (switch__24410__auto__,c__24577__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24411__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24411__auto____0 = (function (){
var statearr_26944 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26944[(0)] = cljs$core$async$reduce_$_state_machine__24411__auto__);

(statearr_26944[(1)] = (1));

return statearr_26944;
});
var cljs$core$async$reduce_$_state_machine__24411__auto____1 = (function (state_26928){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26945){if((e26945 instanceof Object)){
var ex__24414__auto__ = e26945;
var statearr_26946_26958 = state_26928;
(statearr_26946_26958[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26959 = state_26928;
state_26928 = G__26959;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24411__auto__ = function(state_26928){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24411__auto____1.call(this,state_26928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24411__auto____0;
cljs$core$async$reduce_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24411__auto____1;
return cljs$core$async$reduce_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_26947 = f__24578__auto__.call(null);
(statearr_26947[(6)] = c__24577__auto__);

return statearr_26947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,f__$1){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__,f__$1){
return (function (state_26965){
var state_val_26966 = (state_26965[(1)]);
if((state_val_26966 === (1))){
var inst_26960 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26965__$1,(2),inst_26960);
} else {
if((state_val_26966 === (2))){
var inst_26962 = (state_26965[(2)]);
var inst_26963 = f__$1.call(null,inst_26962);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26965__$1,inst_26963);
} else {
return null;
}
}
});})(c__24577__auto__,f__$1))
;
return ((function (switch__24410__auto__,c__24577__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24411__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24411__auto____0 = (function (){
var statearr_26967 = [null,null,null,null,null,null,null];
(statearr_26967[(0)] = cljs$core$async$transduce_$_state_machine__24411__auto__);

(statearr_26967[(1)] = (1));

return statearr_26967;
});
var cljs$core$async$transduce_$_state_machine__24411__auto____1 = (function (state_26965){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e26968){if((e26968 instanceof Object)){
var ex__24414__auto__ = e26968;
var statearr_26969_26971 = state_26965;
(statearr_26969_26971[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26972 = state_26965;
state_26965 = G__26972;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24411__auto__ = function(state_26965){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24411__auto____1.call(this,state_26965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24411__auto____0;
cljs$core$async$transduce_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24411__auto____1;
return cljs$core$async$transduce_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__,f__$1))
})();
var state__24579__auto__ = (function (){var statearr_26970 = f__24578__auto__.call(null);
(statearr_26970[(6)] = c__24577__auto__);

return statearr_26970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,f__$1))
);

return c__24577__auto__;
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
var G__26974 = arguments.length;
switch (G__26974) {
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
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__){
return (function (state_26999){
var state_val_27000 = (state_26999[(1)]);
if((state_val_27000 === (7))){
var inst_26981 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
var statearr_27001_27022 = state_26999__$1;
(statearr_27001_27022[(2)] = inst_26981);

(statearr_27001_27022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (1))){
var inst_26975 = cljs.core.seq.call(null,coll);
var inst_26976 = inst_26975;
var state_26999__$1 = (function (){var statearr_27002 = state_26999;
(statearr_27002[(7)] = inst_26976);

return statearr_27002;
})();
var statearr_27003_27023 = state_26999__$1;
(statearr_27003_27023[(2)] = null);

(statearr_27003_27023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (4))){
var inst_26976 = (state_26999[(7)]);
var inst_26979 = cljs.core.first.call(null,inst_26976);
var state_26999__$1 = state_26999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26999__$1,(7),ch,inst_26979);
} else {
if((state_val_27000 === (13))){
var inst_26993 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
var statearr_27004_27024 = state_26999__$1;
(statearr_27004_27024[(2)] = inst_26993);

(statearr_27004_27024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (6))){
var inst_26984 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
if(cljs.core.truth_(inst_26984)){
var statearr_27005_27025 = state_26999__$1;
(statearr_27005_27025[(1)] = (8));

} else {
var statearr_27006_27026 = state_26999__$1;
(statearr_27006_27026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (3))){
var inst_26997 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26999__$1,inst_26997);
} else {
if((state_val_27000 === (12))){
var state_26999__$1 = state_26999;
var statearr_27007_27027 = state_26999__$1;
(statearr_27007_27027[(2)] = null);

(statearr_27007_27027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (2))){
var inst_26976 = (state_26999[(7)]);
var state_26999__$1 = state_26999;
if(cljs.core.truth_(inst_26976)){
var statearr_27008_27028 = state_26999__$1;
(statearr_27008_27028[(1)] = (4));

} else {
var statearr_27009_27029 = state_26999__$1;
(statearr_27009_27029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (11))){
var inst_26990 = cljs.core.async.close_BANG_.call(null,ch);
var state_26999__$1 = state_26999;
var statearr_27010_27030 = state_26999__$1;
(statearr_27010_27030[(2)] = inst_26990);

(statearr_27010_27030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (9))){
var state_26999__$1 = state_26999;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27011_27031 = state_26999__$1;
(statearr_27011_27031[(1)] = (11));

} else {
var statearr_27012_27032 = state_26999__$1;
(statearr_27012_27032[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (5))){
var inst_26976 = (state_26999[(7)]);
var state_26999__$1 = state_26999;
var statearr_27013_27033 = state_26999__$1;
(statearr_27013_27033[(2)] = inst_26976);

(statearr_27013_27033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (10))){
var inst_26995 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
var statearr_27014_27034 = state_26999__$1;
(statearr_27014_27034[(2)] = inst_26995);

(statearr_27014_27034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (8))){
var inst_26976 = (state_26999[(7)]);
var inst_26986 = cljs.core.next.call(null,inst_26976);
var inst_26976__$1 = inst_26986;
var state_26999__$1 = (function (){var statearr_27015 = state_26999;
(statearr_27015[(7)] = inst_26976__$1);

return statearr_27015;
})();
var statearr_27016_27035 = state_26999__$1;
(statearr_27016_27035[(2)] = null);

(statearr_27016_27035[(1)] = (2));


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
});})(c__24577__auto__))
;
return ((function (switch__24410__auto__,c__24577__auto__){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_27017 = [null,null,null,null,null,null,null,null];
(statearr_27017[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_27017[(1)] = (1));

return statearr_27017;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_26999){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_26999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e27018){if((e27018 instanceof Object)){
var ex__24414__auto__ = e27018;
var statearr_27019_27036 = state_26999;
(statearr_27019_27036[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27037 = state_26999;
state_26999 = G__27037;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_26999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_26999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_27020 = f__24578__auto__.call(null);
(statearr_27020[(6)] = c__24577__auto__);

return statearr_27020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27038 = (function (ch,cs,meta27039){
this.ch = ch;
this.cs = cs;
this.meta27039 = meta27039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27040,meta27039__$1){
var self__ = this;
var _27040__$1 = this;
return (new cljs.core.async.t_cljs$core$async27038(self__.ch,self__.cs,meta27039__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27040){
var self__ = this;
var _27040__$1 = this;
return self__.meta27039;
});})(cs))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27038.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27039","meta27039",136735737,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27038";

cljs.core.async.t_cljs$core$async27038.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27038");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27038.
 */
cljs.core.async.__GT_t_cljs$core$async27038 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27038(ch__$1,cs__$1,meta27039){
return (new cljs.core.async.t_cljs$core$async27038(ch__$1,cs__$1,meta27039));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27038(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24577__auto___27260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27260,cs,m,dchan,dctr,done){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___27260,cs,m,dchan,dctr,done){
return (function (state_27175){
var state_val_27176 = (state_27175[(1)]);
if((state_val_27176 === (7))){
var inst_27171 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27177_27261 = state_27175__$1;
(statearr_27177_27261[(2)] = inst_27171);

(statearr_27177_27261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (20))){
var inst_27074 = (state_27175[(7)]);
var inst_27086 = cljs.core.first.call(null,inst_27074);
var inst_27087 = cljs.core.nth.call(null,inst_27086,(0),null);
var inst_27088 = cljs.core.nth.call(null,inst_27086,(1),null);
var state_27175__$1 = (function (){var statearr_27178 = state_27175;
(statearr_27178[(8)] = inst_27087);

return statearr_27178;
})();
if(cljs.core.truth_(inst_27088)){
var statearr_27179_27262 = state_27175__$1;
(statearr_27179_27262[(1)] = (22));

} else {
var statearr_27180_27263 = state_27175__$1;
(statearr_27180_27263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (27))){
var inst_27116 = (state_27175[(9)]);
var inst_27123 = (state_27175[(10)]);
var inst_27043 = (state_27175[(11)]);
var inst_27118 = (state_27175[(12)]);
var inst_27123__$1 = cljs.core._nth.call(null,inst_27116,inst_27118);
var inst_27124 = cljs.core.async.put_BANG_.call(null,inst_27123__$1,inst_27043,done);
var state_27175__$1 = (function (){var statearr_27181 = state_27175;
(statearr_27181[(10)] = inst_27123__$1);

return statearr_27181;
})();
if(cljs.core.truth_(inst_27124)){
var statearr_27182_27264 = state_27175__$1;
(statearr_27182_27264[(1)] = (30));

} else {
var statearr_27183_27265 = state_27175__$1;
(statearr_27183_27265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (1))){
var state_27175__$1 = state_27175;
var statearr_27184_27266 = state_27175__$1;
(statearr_27184_27266[(2)] = null);

(statearr_27184_27266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (24))){
var inst_27074 = (state_27175[(7)]);
var inst_27093 = (state_27175[(2)]);
var inst_27094 = cljs.core.next.call(null,inst_27074);
var inst_27052 = inst_27094;
var inst_27053 = null;
var inst_27054 = (0);
var inst_27055 = (0);
var state_27175__$1 = (function (){var statearr_27185 = state_27175;
(statearr_27185[(13)] = inst_27052);

(statearr_27185[(14)] = inst_27055);

(statearr_27185[(15)] = inst_27053);

(statearr_27185[(16)] = inst_27054);

(statearr_27185[(17)] = inst_27093);

return statearr_27185;
})();
var statearr_27186_27267 = state_27175__$1;
(statearr_27186_27267[(2)] = null);

(statearr_27186_27267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (39))){
var state_27175__$1 = state_27175;
var statearr_27190_27268 = state_27175__$1;
(statearr_27190_27268[(2)] = null);

(statearr_27190_27268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (4))){
var inst_27043 = (state_27175[(11)]);
var inst_27043__$1 = (state_27175[(2)]);
var inst_27044 = (inst_27043__$1 == null);
var state_27175__$1 = (function (){var statearr_27191 = state_27175;
(statearr_27191[(11)] = inst_27043__$1);

return statearr_27191;
})();
if(cljs.core.truth_(inst_27044)){
var statearr_27192_27269 = state_27175__$1;
(statearr_27192_27269[(1)] = (5));

} else {
var statearr_27193_27270 = state_27175__$1;
(statearr_27193_27270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (15))){
var inst_27052 = (state_27175[(13)]);
var inst_27055 = (state_27175[(14)]);
var inst_27053 = (state_27175[(15)]);
var inst_27054 = (state_27175[(16)]);
var inst_27070 = (state_27175[(2)]);
var inst_27071 = (inst_27055 + (1));
var tmp27187 = inst_27052;
var tmp27188 = inst_27053;
var tmp27189 = inst_27054;
var inst_27052__$1 = tmp27187;
var inst_27053__$1 = tmp27188;
var inst_27054__$1 = tmp27189;
var inst_27055__$1 = inst_27071;
var state_27175__$1 = (function (){var statearr_27194 = state_27175;
(statearr_27194[(13)] = inst_27052__$1);

(statearr_27194[(14)] = inst_27055__$1);

(statearr_27194[(18)] = inst_27070);

(statearr_27194[(15)] = inst_27053__$1);

(statearr_27194[(16)] = inst_27054__$1);

return statearr_27194;
})();
var statearr_27195_27271 = state_27175__$1;
(statearr_27195_27271[(2)] = null);

(statearr_27195_27271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (21))){
var inst_27097 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27199_27272 = state_27175__$1;
(statearr_27199_27272[(2)] = inst_27097);

(statearr_27199_27272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (31))){
var inst_27123 = (state_27175[(10)]);
var inst_27127 = done.call(null,null);
var inst_27128 = cljs.core.async.untap_STAR_.call(null,m,inst_27123);
var state_27175__$1 = (function (){var statearr_27200 = state_27175;
(statearr_27200[(19)] = inst_27127);

return statearr_27200;
})();
var statearr_27201_27273 = state_27175__$1;
(statearr_27201_27273[(2)] = inst_27128);

(statearr_27201_27273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (32))){
var inst_27116 = (state_27175[(9)]);
var inst_27115 = (state_27175[(20)]);
var inst_27118 = (state_27175[(12)]);
var inst_27117 = (state_27175[(21)]);
var inst_27130 = (state_27175[(2)]);
var inst_27131 = (inst_27118 + (1));
var tmp27196 = inst_27116;
var tmp27197 = inst_27115;
var tmp27198 = inst_27117;
var inst_27115__$1 = tmp27197;
var inst_27116__$1 = tmp27196;
var inst_27117__$1 = tmp27198;
var inst_27118__$1 = inst_27131;
var state_27175__$1 = (function (){var statearr_27202 = state_27175;
(statearr_27202[(22)] = inst_27130);

(statearr_27202[(9)] = inst_27116__$1);

(statearr_27202[(20)] = inst_27115__$1);

(statearr_27202[(12)] = inst_27118__$1);

(statearr_27202[(21)] = inst_27117__$1);

return statearr_27202;
})();
var statearr_27203_27274 = state_27175__$1;
(statearr_27203_27274[(2)] = null);

(statearr_27203_27274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (40))){
var inst_27143 = (state_27175[(23)]);
var inst_27147 = done.call(null,null);
var inst_27148 = cljs.core.async.untap_STAR_.call(null,m,inst_27143);
var state_27175__$1 = (function (){var statearr_27204 = state_27175;
(statearr_27204[(24)] = inst_27147);

return statearr_27204;
})();
var statearr_27205_27275 = state_27175__$1;
(statearr_27205_27275[(2)] = inst_27148);

(statearr_27205_27275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (33))){
var inst_27134 = (state_27175[(25)]);
var inst_27136 = cljs.core.chunked_seq_QMARK_.call(null,inst_27134);
var state_27175__$1 = state_27175;
if(inst_27136){
var statearr_27206_27276 = state_27175__$1;
(statearr_27206_27276[(1)] = (36));

} else {
var statearr_27207_27277 = state_27175__$1;
(statearr_27207_27277[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (13))){
var inst_27064 = (state_27175[(26)]);
var inst_27067 = cljs.core.async.close_BANG_.call(null,inst_27064);
var state_27175__$1 = state_27175;
var statearr_27208_27278 = state_27175__$1;
(statearr_27208_27278[(2)] = inst_27067);

(statearr_27208_27278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (22))){
var inst_27087 = (state_27175[(8)]);
var inst_27090 = cljs.core.async.close_BANG_.call(null,inst_27087);
var state_27175__$1 = state_27175;
var statearr_27209_27279 = state_27175__$1;
(statearr_27209_27279[(2)] = inst_27090);

(statearr_27209_27279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (36))){
var inst_27134 = (state_27175[(25)]);
var inst_27138 = cljs.core.chunk_first.call(null,inst_27134);
var inst_27139 = cljs.core.chunk_rest.call(null,inst_27134);
var inst_27140 = cljs.core.count.call(null,inst_27138);
var inst_27115 = inst_27139;
var inst_27116 = inst_27138;
var inst_27117 = inst_27140;
var inst_27118 = (0);
var state_27175__$1 = (function (){var statearr_27210 = state_27175;
(statearr_27210[(9)] = inst_27116);

(statearr_27210[(20)] = inst_27115);

(statearr_27210[(12)] = inst_27118);

(statearr_27210[(21)] = inst_27117);

return statearr_27210;
})();
var statearr_27211_27280 = state_27175__$1;
(statearr_27211_27280[(2)] = null);

(statearr_27211_27280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (41))){
var inst_27134 = (state_27175[(25)]);
var inst_27150 = (state_27175[(2)]);
var inst_27151 = cljs.core.next.call(null,inst_27134);
var inst_27115 = inst_27151;
var inst_27116 = null;
var inst_27117 = (0);
var inst_27118 = (0);
var state_27175__$1 = (function (){var statearr_27212 = state_27175;
(statearr_27212[(9)] = inst_27116);

(statearr_27212[(27)] = inst_27150);

(statearr_27212[(20)] = inst_27115);

(statearr_27212[(12)] = inst_27118);

(statearr_27212[(21)] = inst_27117);

return statearr_27212;
})();
var statearr_27213_27281 = state_27175__$1;
(statearr_27213_27281[(2)] = null);

(statearr_27213_27281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (43))){
var state_27175__$1 = state_27175;
var statearr_27214_27282 = state_27175__$1;
(statearr_27214_27282[(2)] = null);

(statearr_27214_27282[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (29))){
var inst_27159 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27215_27283 = state_27175__$1;
(statearr_27215_27283[(2)] = inst_27159);

(statearr_27215_27283[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (44))){
var inst_27168 = (state_27175[(2)]);
var state_27175__$1 = (function (){var statearr_27216 = state_27175;
(statearr_27216[(28)] = inst_27168);

return statearr_27216;
})();
var statearr_27217_27284 = state_27175__$1;
(statearr_27217_27284[(2)] = null);

(statearr_27217_27284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (6))){
var inst_27107 = (state_27175[(29)]);
var inst_27106 = cljs.core.deref.call(null,cs);
var inst_27107__$1 = cljs.core.keys.call(null,inst_27106);
var inst_27108 = cljs.core.count.call(null,inst_27107__$1);
var inst_27109 = cljs.core.reset_BANG_.call(null,dctr,inst_27108);
var inst_27114 = cljs.core.seq.call(null,inst_27107__$1);
var inst_27115 = inst_27114;
var inst_27116 = null;
var inst_27117 = (0);
var inst_27118 = (0);
var state_27175__$1 = (function (){var statearr_27218 = state_27175;
(statearr_27218[(9)] = inst_27116);

(statearr_27218[(30)] = inst_27109);

(statearr_27218[(29)] = inst_27107__$1);

(statearr_27218[(20)] = inst_27115);

(statearr_27218[(12)] = inst_27118);

(statearr_27218[(21)] = inst_27117);

return statearr_27218;
})();
var statearr_27219_27285 = state_27175__$1;
(statearr_27219_27285[(2)] = null);

(statearr_27219_27285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (28))){
var inst_27115 = (state_27175[(20)]);
var inst_27134 = (state_27175[(25)]);
var inst_27134__$1 = cljs.core.seq.call(null,inst_27115);
var state_27175__$1 = (function (){var statearr_27220 = state_27175;
(statearr_27220[(25)] = inst_27134__$1);

return statearr_27220;
})();
if(inst_27134__$1){
var statearr_27221_27286 = state_27175__$1;
(statearr_27221_27286[(1)] = (33));

} else {
var statearr_27222_27287 = state_27175__$1;
(statearr_27222_27287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (25))){
var inst_27118 = (state_27175[(12)]);
var inst_27117 = (state_27175[(21)]);
var inst_27120 = (inst_27118 < inst_27117);
var inst_27121 = inst_27120;
var state_27175__$1 = state_27175;
if(cljs.core.truth_(inst_27121)){
var statearr_27223_27288 = state_27175__$1;
(statearr_27223_27288[(1)] = (27));

} else {
var statearr_27224_27289 = state_27175__$1;
(statearr_27224_27289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (34))){
var state_27175__$1 = state_27175;
var statearr_27225_27290 = state_27175__$1;
(statearr_27225_27290[(2)] = null);

(statearr_27225_27290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (17))){
var state_27175__$1 = state_27175;
var statearr_27226_27291 = state_27175__$1;
(statearr_27226_27291[(2)] = null);

(statearr_27226_27291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (3))){
var inst_27173 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27175__$1,inst_27173);
} else {
if((state_val_27176 === (12))){
var inst_27102 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27227_27292 = state_27175__$1;
(statearr_27227_27292[(2)] = inst_27102);

(statearr_27227_27292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (2))){
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27175__$1,(4),ch);
} else {
if((state_val_27176 === (23))){
var state_27175__$1 = state_27175;
var statearr_27228_27293 = state_27175__$1;
(statearr_27228_27293[(2)] = null);

(statearr_27228_27293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (35))){
var inst_27157 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27229_27294 = state_27175__$1;
(statearr_27229_27294[(2)] = inst_27157);

(statearr_27229_27294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (19))){
var inst_27074 = (state_27175[(7)]);
var inst_27078 = cljs.core.chunk_first.call(null,inst_27074);
var inst_27079 = cljs.core.chunk_rest.call(null,inst_27074);
var inst_27080 = cljs.core.count.call(null,inst_27078);
var inst_27052 = inst_27079;
var inst_27053 = inst_27078;
var inst_27054 = inst_27080;
var inst_27055 = (0);
var state_27175__$1 = (function (){var statearr_27230 = state_27175;
(statearr_27230[(13)] = inst_27052);

(statearr_27230[(14)] = inst_27055);

(statearr_27230[(15)] = inst_27053);

(statearr_27230[(16)] = inst_27054);

return statearr_27230;
})();
var statearr_27231_27295 = state_27175__$1;
(statearr_27231_27295[(2)] = null);

(statearr_27231_27295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (11))){
var inst_27052 = (state_27175[(13)]);
var inst_27074 = (state_27175[(7)]);
var inst_27074__$1 = cljs.core.seq.call(null,inst_27052);
var state_27175__$1 = (function (){var statearr_27232 = state_27175;
(statearr_27232[(7)] = inst_27074__$1);

return statearr_27232;
})();
if(inst_27074__$1){
var statearr_27233_27296 = state_27175__$1;
(statearr_27233_27296[(1)] = (16));

} else {
var statearr_27234_27297 = state_27175__$1;
(statearr_27234_27297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (9))){
var inst_27104 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27235_27298 = state_27175__$1;
(statearr_27235_27298[(2)] = inst_27104);

(statearr_27235_27298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (5))){
var inst_27050 = cljs.core.deref.call(null,cs);
var inst_27051 = cljs.core.seq.call(null,inst_27050);
var inst_27052 = inst_27051;
var inst_27053 = null;
var inst_27054 = (0);
var inst_27055 = (0);
var state_27175__$1 = (function (){var statearr_27236 = state_27175;
(statearr_27236[(13)] = inst_27052);

(statearr_27236[(14)] = inst_27055);

(statearr_27236[(15)] = inst_27053);

(statearr_27236[(16)] = inst_27054);

return statearr_27236;
})();
var statearr_27237_27299 = state_27175__$1;
(statearr_27237_27299[(2)] = null);

(statearr_27237_27299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (14))){
var state_27175__$1 = state_27175;
var statearr_27238_27300 = state_27175__$1;
(statearr_27238_27300[(2)] = null);

(statearr_27238_27300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (45))){
var inst_27165 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27239_27301 = state_27175__$1;
(statearr_27239_27301[(2)] = inst_27165);

(statearr_27239_27301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (26))){
var inst_27107 = (state_27175[(29)]);
var inst_27161 = (state_27175[(2)]);
var inst_27162 = cljs.core.seq.call(null,inst_27107);
var state_27175__$1 = (function (){var statearr_27240 = state_27175;
(statearr_27240[(31)] = inst_27161);

return statearr_27240;
})();
if(inst_27162){
var statearr_27241_27302 = state_27175__$1;
(statearr_27241_27302[(1)] = (42));

} else {
var statearr_27242_27303 = state_27175__$1;
(statearr_27242_27303[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (16))){
var inst_27074 = (state_27175[(7)]);
var inst_27076 = cljs.core.chunked_seq_QMARK_.call(null,inst_27074);
var state_27175__$1 = state_27175;
if(inst_27076){
var statearr_27243_27304 = state_27175__$1;
(statearr_27243_27304[(1)] = (19));

} else {
var statearr_27244_27305 = state_27175__$1;
(statearr_27244_27305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (38))){
var inst_27154 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27245_27306 = state_27175__$1;
(statearr_27245_27306[(2)] = inst_27154);

(statearr_27245_27306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (30))){
var state_27175__$1 = state_27175;
var statearr_27246_27307 = state_27175__$1;
(statearr_27246_27307[(2)] = null);

(statearr_27246_27307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (10))){
var inst_27055 = (state_27175[(14)]);
var inst_27053 = (state_27175[(15)]);
var inst_27063 = cljs.core._nth.call(null,inst_27053,inst_27055);
var inst_27064 = cljs.core.nth.call(null,inst_27063,(0),null);
var inst_27065 = cljs.core.nth.call(null,inst_27063,(1),null);
var state_27175__$1 = (function (){var statearr_27247 = state_27175;
(statearr_27247[(26)] = inst_27064);

return statearr_27247;
})();
if(cljs.core.truth_(inst_27065)){
var statearr_27248_27308 = state_27175__$1;
(statearr_27248_27308[(1)] = (13));

} else {
var statearr_27249_27309 = state_27175__$1;
(statearr_27249_27309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (18))){
var inst_27100 = (state_27175[(2)]);
var state_27175__$1 = state_27175;
var statearr_27250_27310 = state_27175__$1;
(statearr_27250_27310[(2)] = inst_27100);

(statearr_27250_27310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (42))){
var state_27175__$1 = state_27175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27175__$1,(45),dchan);
} else {
if((state_val_27176 === (37))){
var inst_27143 = (state_27175[(23)]);
var inst_27043 = (state_27175[(11)]);
var inst_27134 = (state_27175[(25)]);
var inst_27143__$1 = cljs.core.first.call(null,inst_27134);
var inst_27144 = cljs.core.async.put_BANG_.call(null,inst_27143__$1,inst_27043,done);
var state_27175__$1 = (function (){var statearr_27251 = state_27175;
(statearr_27251[(23)] = inst_27143__$1);

return statearr_27251;
})();
if(cljs.core.truth_(inst_27144)){
var statearr_27252_27311 = state_27175__$1;
(statearr_27252_27311[(1)] = (39));

} else {
var statearr_27253_27312 = state_27175__$1;
(statearr_27253_27312[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27176 === (8))){
var inst_27055 = (state_27175[(14)]);
var inst_27054 = (state_27175[(16)]);
var inst_27057 = (inst_27055 < inst_27054);
var inst_27058 = inst_27057;
var state_27175__$1 = state_27175;
if(cljs.core.truth_(inst_27058)){
var statearr_27254_27313 = state_27175__$1;
(statearr_27254_27313[(1)] = (10));

} else {
var statearr_27255_27314 = state_27175__$1;
(statearr_27255_27314[(1)] = (11));

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
});})(c__24577__auto___27260,cs,m,dchan,dctr,done))
;
return ((function (switch__24410__auto__,c__24577__auto___27260,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24411__auto__ = null;
var cljs$core$async$mult_$_state_machine__24411__auto____0 = (function (){
var statearr_27256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27256[(0)] = cljs$core$async$mult_$_state_machine__24411__auto__);

(statearr_27256[(1)] = (1));

return statearr_27256;
});
var cljs$core$async$mult_$_state_machine__24411__auto____1 = (function (state_27175){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_27175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e27257){if((e27257 instanceof Object)){
var ex__24414__auto__ = e27257;
var statearr_27258_27315 = state_27175;
(statearr_27258_27315[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27316 = state_27175;
state_27175 = G__27316;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24411__auto__ = function(state_27175){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24411__auto____1.call(this,state_27175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24411__auto____0;
cljs$core$async$mult_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24411__auto____1;
return cljs$core$async$mult_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___27260,cs,m,dchan,dctr,done))
})();
var state__24579__auto__ = (function (){var statearr_27259 = f__24578__auto__.call(null);
(statearr_27259[(6)] = c__24577__auto___27260);

return statearr_27259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27260,cs,m,dchan,dctr,done))
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
var G__27318 = arguments.length;
switch (G__27318) {
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
var len__4730__auto___27330 = arguments.length;
var i__4731__auto___27331 = (0);
while(true){
if((i__4731__auto___27331 < len__4730__auto___27330)){
args__4736__auto__.push((arguments[i__4731__auto___27331]));

var G__27332 = (i__4731__auto___27331 + (1));
i__4731__auto___27331 = G__27332;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27324){
var map__27325 = p__27324;
var map__27325__$1 = (((((!((map__27325 == null))))?(((((map__27325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27325):map__27325);
var opts = map__27325__$1;
var statearr_27327_27333 = state;
(statearr_27327_27333[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__27325,map__27325__$1,opts){
return (function (val){
var statearr_27328_27334 = state;
(statearr_27328_27334[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27325,map__27325__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_27329_27335 = state;
(statearr_27329_27335[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27320){
var G__27321 = cljs.core.first.call(null,seq27320);
var seq27320__$1 = cljs.core.next.call(null,seq27320);
var G__27322 = cljs.core.first.call(null,seq27320__$1);
var seq27320__$2 = cljs.core.next.call(null,seq27320__$1);
var G__27323 = cljs.core.first.call(null,seq27320__$2);
var seq27320__$3 = cljs.core.next.call(null,seq27320__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27321,G__27322,G__27323,seq27320__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27336 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27337){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27337 = meta27337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27338,meta27337__$1){
var self__ = this;
var _27338__$1 = this;
return (new cljs.core.async.t_cljs$core$async27336(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27337__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27338){
var self__ = this;
var _27338__$1 = this;
return self__.meta27337;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27336.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27336.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27337","meta27337",2134975110,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27336";

cljs.core.async.t_cljs$core$async27336.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27336");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27336.
 */
cljs.core.async.__GT_t_cljs$core$async27336 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27336(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27337){
return (new cljs.core.async.t_cljs$core$async27336(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27337));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27336(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24577__auto___27500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___27500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27440){
var state_val_27441 = (state_27440[(1)]);
if((state_val_27441 === (7))){
var inst_27355 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27442_27501 = state_27440__$1;
(statearr_27442_27501[(2)] = inst_27355);

(statearr_27442_27501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (20))){
var inst_27367 = (state_27440[(7)]);
var state_27440__$1 = state_27440;
var statearr_27443_27502 = state_27440__$1;
(statearr_27443_27502[(2)] = inst_27367);

(statearr_27443_27502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (27))){
var state_27440__$1 = state_27440;
var statearr_27444_27503 = state_27440__$1;
(statearr_27444_27503[(2)] = null);

(statearr_27444_27503[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (1))){
var inst_27342 = (state_27440[(8)]);
var inst_27342__$1 = calc_state.call(null);
var inst_27344 = (inst_27342__$1 == null);
var inst_27345 = cljs.core.not.call(null,inst_27344);
var state_27440__$1 = (function (){var statearr_27445 = state_27440;
(statearr_27445[(8)] = inst_27342__$1);

return statearr_27445;
})();
if(inst_27345){
var statearr_27446_27504 = state_27440__$1;
(statearr_27446_27504[(1)] = (2));

} else {
var statearr_27447_27505 = state_27440__$1;
(statearr_27447_27505[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (24))){
var inst_27414 = (state_27440[(9)]);
var inst_27391 = (state_27440[(10)]);
var inst_27400 = (state_27440[(11)]);
var inst_27414__$1 = inst_27391.call(null,inst_27400);
var state_27440__$1 = (function (){var statearr_27448 = state_27440;
(statearr_27448[(9)] = inst_27414__$1);

return statearr_27448;
})();
if(cljs.core.truth_(inst_27414__$1)){
var statearr_27449_27506 = state_27440__$1;
(statearr_27449_27506[(1)] = (29));

} else {
var statearr_27450_27507 = state_27440__$1;
(statearr_27450_27507[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (4))){
var inst_27358 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27358)){
var statearr_27451_27508 = state_27440__$1;
(statearr_27451_27508[(1)] = (8));

} else {
var statearr_27452_27509 = state_27440__$1;
(statearr_27452_27509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (15))){
var inst_27385 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27385)){
var statearr_27453_27510 = state_27440__$1;
(statearr_27453_27510[(1)] = (19));

} else {
var statearr_27454_27511 = state_27440__$1;
(statearr_27454_27511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (21))){
var inst_27390 = (state_27440[(12)]);
var inst_27390__$1 = (state_27440[(2)]);
var inst_27391 = cljs.core.get.call(null,inst_27390__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27392 = cljs.core.get.call(null,inst_27390__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27393 = cljs.core.get.call(null,inst_27390__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27440__$1 = (function (){var statearr_27455 = state_27440;
(statearr_27455[(10)] = inst_27391);

(statearr_27455[(13)] = inst_27392);

(statearr_27455[(12)] = inst_27390__$1);

return statearr_27455;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27440__$1,(22),inst_27393);
} else {
if((state_val_27441 === (31))){
var inst_27422 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27422)){
var statearr_27456_27512 = state_27440__$1;
(statearr_27456_27512[(1)] = (32));

} else {
var statearr_27457_27513 = state_27440__$1;
(statearr_27457_27513[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (32))){
var inst_27399 = (state_27440[(14)]);
var state_27440__$1 = state_27440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27440__$1,(35),out,inst_27399);
} else {
if((state_val_27441 === (33))){
var inst_27390 = (state_27440[(12)]);
var inst_27367 = inst_27390;
var state_27440__$1 = (function (){var statearr_27458 = state_27440;
(statearr_27458[(7)] = inst_27367);

return statearr_27458;
})();
var statearr_27459_27514 = state_27440__$1;
(statearr_27459_27514[(2)] = null);

(statearr_27459_27514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (13))){
var inst_27367 = (state_27440[(7)]);
var inst_27374 = inst_27367.cljs$lang$protocol_mask$partition0$;
var inst_27375 = (inst_27374 & (64));
var inst_27376 = inst_27367.cljs$core$ISeq$;
var inst_27377 = (cljs.core.PROTOCOL_SENTINEL === inst_27376);
var inst_27378 = ((inst_27375) || (inst_27377));
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27378)){
var statearr_27460_27515 = state_27440__$1;
(statearr_27460_27515[(1)] = (16));

} else {
var statearr_27461_27516 = state_27440__$1;
(statearr_27461_27516[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (22))){
var inst_27399 = (state_27440[(14)]);
var inst_27400 = (state_27440[(11)]);
var inst_27398 = (state_27440[(2)]);
var inst_27399__$1 = cljs.core.nth.call(null,inst_27398,(0),null);
var inst_27400__$1 = cljs.core.nth.call(null,inst_27398,(1),null);
var inst_27401 = (inst_27399__$1 == null);
var inst_27402 = cljs.core._EQ_.call(null,inst_27400__$1,change);
var inst_27403 = ((inst_27401) || (inst_27402));
var state_27440__$1 = (function (){var statearr_27462 = state_27440;
(statearr_27462[(14)] = inst_27399__$1);

(statearr_27462[(11)] = inst_27400__$1);

return statearr_27462;
})();
if(cljs.core.truth_(inst_27403)){
var statearr_27463_27517 = state_27440__$1;
(statearr_27463_27517[(1)] = (23));

} else {
var statearr_27464_27518 = state_27440__$1;
(statearr_27464_27518[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (36))){
var inst_27390 = (state_27440[(12)]);
var inst_27367 = inst_27390;
var state_27440__$1 = (function (){var statearr_27465 = state_27440;
(statearr_27465[(7)] = inst_27367);

return statearr_27465;
})();
var statearr_27466_27519 = state_27440__$1;
(statearr_27466_27519[(2)] = null);

(statearr_27466_27519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (29))){
var inst_27414 = (state_27440[(9)]);
var state_27440__$1 = state_27440;
var statearr_27467_27520 = state_27440__$1;
(statearr_27467_27520[(2)] = inst_27414);

(statearr_27467_27520[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (6))){
var state_27440__$1 = state_27440;
var statearr_27468_27521 = state_27440__$1;
(statearr_27468_27521[(2)] = false);

(statearr_27468_27521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (28))){
var inst_27410 = (state_27440[(2)]);
var inst_27411 = calc_state.call(null);
var inst_27367 = inst_27411;
var state_27440__$1 = (function (){var statearr_27469 = state_27440;
(statearr_27469[(15)] = inst_27410);

(statearr_27469[(7)] = inst_27367);

return statearr_27469;
})();
var statearr_27470_27522 = state_27440__$1;
(statearr_27470_27522[(2)] = null);

(statearr_27470_27522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (25))){
var inst_27436 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27471_27523 = state_27440__$1;
(statearr_27471_27523[(2)] = inst_27436);

(statearr_27471_27523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (34))){
var inst_27434 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27472_27524 = state_27440__$1;
(statearr_27472_27524[(2)] = inst_27434);

(statearr_27472_27524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (17))){
var state_27440__$1 = state_27440;
var statearr_27473_27525 = state_27440__$1;
(statearr_27473_27525[(2)] = false);

(statearr_27473_27525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (3))){
var state_27440__$1 = state_27440;
var statearr_27474_27526 = state_27440__$1;
(statearr_27474_27526[(2)] = false);

(statearr_27474_27526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (12))){
var inst_27438 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27440__$1,inst_27438);
} else {
if((state_val_27441 === (2))){
var inst_27342 = (state_27440[(8)]);
var inst_27347 = inst_27342.cljs$lang$protocol_mask$partition0$;
var inst_27348 = (inst_27347 & (64));
var inst_27349 = inst_27342.cljs$core$ISeq$;
var inst_27350 = (cljs.core.PROTOCOL_SENTINEL === inst_27349);
var inst_27351 = ((inst_27348) || (inst_27350));
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27351)){
var statearr_27475_27527 = state_27440__$1;
(statearr_27475_27527[(1)] = (5));

} else {
var statearr_27476_27528 = state_27440__$1;
(statearr_27476_27528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (23))){
var inst_27399 = (state_27440[(14)]);
var inst_27405 = (inst_27399 == null);
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27405)){
var statearr_27477_27529 = state_27440__$1;
(statearr_27477_27529[(1)] = (26));

} else {
var statearr_27478_27530 = state_27440__$1;
(statearr_27478_27530[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (35))){
var inst_27425 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27425)){
var statearr_27479_27531 = state_27440__$1;
(statearr_27479_27531[(1)] = (36));

} else {
var statearr_27480_27532 = state_27440__$1;
(statearr_27480_27532[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (19))){
var inst_27367 = (state_27440[(7)]);
var inst_27387 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27367);
var state_27440__$1 = state_27440;
var statearr_27481_27533 = state_27440__$1;
(statearr_27481_27533[(2)] = inst_27387);

(statearr_27481_27533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (11))){
var inst_27367 = (state_27440[(7)]);
var inst_27371 = (inst_27367 == null);
var inst_27372 = cljs.core.not.call(null,inst_27371);
var state_27440__$1 = state_27440;
if(inst_27372){
var statearr_27482_27534 = state_27440__$1;
(statearr_27482_27534[(1)] = (13));

} else {
var statearr_27483_27535 = state_27440__$1;
(statearr_27483_27535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (9))){
var inst_27342 = (state_27440[(8)]);
var state_27440__$1 = state_27440;
var statearr_27484_27536 = state_27440__$1;
(statearr_27484_27536[(2)] = inst_27342);

(statearr_27484_27536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (5))){
var state_27440__$1 = state_27440;
var statearr_27485_27537 = state_27440__$1;
(statearr_27485_27537[(2)] = true);

(statearr_27485_27537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (14))){
var state_27440__$1 = state_27440;
var statearr_27486_27538 = state_27440__$1;
(statearr_27486_27538[(2)] = false);

(statearr_27486_27538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (26))){
var inst_27400 = (state_27440[(11)]);
var inst_27407 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27400);
var state_27440__$1 = state_27440;
var statearr_27487_27539 = state_27440__$1;
(statearr_27487_27539[(2)] = inst_27407);

(statearr_27487_27539[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (16))){
var state_27440__$1 = state_27440;
var statearr_27488_27540 = state_27440__$1;
(statearr_27488_27540[(2)] = true);

(statearr_27488_27540[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (38))){
var inst_27430 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27489_27541 = state_27440__$1;
(statearr_27489_27541[(2)] = inst_27430);

(statearr_27489_27541[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (30))){
var inst_27391 = (state_27440[(10)]);
var inst_27392 = (state_27440[(13)]);
var inst_27400 = (state_27440[(11)]);
var inst_27417 = cljs.core.empty_QMARK_.call(null,inst_27391);
var inst_27418 = inst_27392.call(null,inst_27400);
var inst_27419 = cljs.core.not.call(null,inst_27418);
var inst_27420 = ((inst_27417) && (inst_27419));
var state_27440__$1 = state_27440;
var statearr_27490_27542 = state_27440__$1;
(statearr_27490_27542[(2)] = inst_27420);

(statearr_27490_27542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (10))){
var inst_27342 = (state_27440[(8)]);
var inst_27363 = (state_27440[(2)]);
var inst_27364 = cljs.core.get.call(null,inst_27363,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27365 = cljs.core.get.call(null,inst_27363,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27366 = cljs.core.get.call(null,inst_27363,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27367 = inst_27342;
var state_27440__$1 = (function (){var statearr_27491 = state_27440;
(statearr_27491[(7)] = inst_27367);

(statearr_27491[(16)] = inst_27365);

(statearr_27491[(17)] = inst_27364);

(statearr_27491[(18)] = inst_27366);

return statearr_27491;
})();
var statearr_27492_27543 = state_27440__$1;
(statearr_27492_27543[(2)] = null);

(statearr_27492_27543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (18))){
var inst_27382 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27493_27544 = state_27440__$1;
(statearr_27493_27544[(2)] = inst_27382);

(statearr_27493_27544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (37))){
var state_27440__$1 = state_27440;
var statearr_27494_27545 = state_27440__$1;
(statearr_27494_27545[(2)] = null);

(statearr_27494_27545[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (8))){
var inst_27342 = (state_27440[(8)]);
var inst_27360 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27342);
var state_27440__$1 = state_27440;
var statearr_27495_27546 = state_27440__$1;
(statearr_27495_27546[(2)] = inst_27360);

(statearr_27495_27546[(1)] = (10));


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
});})(c__24577__auto___27500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24410__auto__,c__24577__auto___27500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24411__auto__ = null;
var cljs$core$async$mix_$_state_machine__24411__auto____0 = (function (){
var statearr_27496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27496[(0)] = cljs$core$async$mix_$_state_machine__24411__auto__);

(statearr_27496[(1)] = (1));

return statearr_27496;
});
var cljs$core$async$mix_$_state_machine__24411__auto____1 = (function (state_27440){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_27440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e27497){if((e27497 instanceof Object)){
var ex__24414__auto__ = e27497;
var statearr_27498_27547 = state_27440;
(statearr_27498_27547[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27548 = state_27440;
state_27440 = G__27548;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24411__auto__ = function(state_27440){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24411__auto____1.call(this,state_27440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24411__auto____0;
cljs$core$async$mix_$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24411__auto____1;
return cljs$core$async$mix_$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___27500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24579__auto__ = (function (){var statearr_27499 = f__24578__auto__.call(null);
(statearr_27499[(6)] = c__24577__auto___27500);

return statearr_27499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27500,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27550 = arguments.length;
switch (G__27550) {
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
var G__27554 = arguments.length;
switch (G__27554) {
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
return (function (p1__27552_SHARP_){
if(cljs.core.truth_(p1__27552_SHARP_.call(null,topic))){
return p1__27552_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27552_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27555 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27556){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27556 = meta27556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27557,meta27556__$1){
var self__ = this;
var _27557__$1 = this;
return (new cljs.core.async.t_cljs$core$async27555(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27556__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27557){
var self__ = this;
var _27557__$1 = this;
return self__.meta27556;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27555.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27556","meta27556",1294018618,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27555";

cljs.core.async.t_cljs$core$async27555.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27555");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27555.
 */
cljs.core.async.__GT_t_cljs$core$async27555 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27556){
return (new cljs.core.async.t_cljs$core$async27555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27556));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27555(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24577__auto___27675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27675,mults,ensure_mult,p){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___27675,mults,ensure_mult,p){
return (function (state_27629){
var state_val_27630 = (state_27629[(1)]);
if((state_val_27630 === (7))){
var inst_27625 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27631_27676 = state_27629__$1;
(statearr_27631_27676[(2)] = inst_27625);

(statearr_27631_27676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (20))){
var state_27629__$1 = state_27629;
var statearr_27632_27677 = state_27629__$1;
(statearr_27632_27677[(2)] = null);

(statearr_27632_27677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (1))){
var state_27629__$1 = state_27629;
var statearr_27633_27678 = state_27629__$1;
(statearr_27633_27678[(2)] = null);

(statearr_27633_27678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (24))){
var inst_27608 = (state_27629[(7)]);
var inst_27617 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27608);
var state_27629__$1 = state_27629;
var statearr_27634_27679 = state_27629__$1;
(statearr_27634_27679[(2)] = inst_27617);

(statearr_27634_27679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (4))){
var inst_27560 = (state_27629[(8)]);
var inst_27560__$1 = (state_27629[(2)]);
var inst_27561 = (inst_27560__$1 == null);
var state_27629__$1 = (function (){var statearr_27635 = state_27629;
(statearr_27635[(8)] = inst_27560__$1);

return statearr_27635;
})();
if(cljs.core.truth_(inst_27561)){
var statearr_27636_27680 = state_27629__$1;
(statearr_27636_27680[(1)] = (5));

} else {
var statearr_27637_27681 = state_27629__$1;
(statearr_27637_27681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (15))){
var inst_27602 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27638_27682 = state_27629__$1;
(statearr_27638_27682[(2)] = inst_27602);

(statearr_27638_27682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (21))){
var inst_27622 = (state_27629[(2)]);
var state_27629__$1 = (function (){var statearr_27639 = state_27629;
(statearr_27639[(9)] = inst_27622);

return statearr_27639;
})();
var statearr_27640_27683 = state_27629__$1;
(statearr_27640_27683[(2)] = null);

(statearr_27640_27683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (13))){
var inst_27584 = (state_27629[(10)]);
var inst_27586 = cljs.core.chunked_seq_QMARK_.call(null,inst_27584);
var state_27629__$1 = state_27629;
if(inst_27586){
var statearr_27641_27684 = state_27629__$1;
(statearr_27641_27684[(1)] = (16));

} else {
var statearr_27642_27685 = state_27629__$1;
(statearr_27642_27685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (22))){
var inst_27614 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
if(cljs.core.truth_(inst_27614)){
var statearr_27643_27686 = state_27629__$1;
(statearr_27643_27686[(1)] = (23));

} else {
var statearr_27644_27687 = state_27629__$1;
(statearr_27644_27687[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (6))){
var inst_27608 = (state_27629[(7)]);
var inst_27610 = (state_27629[(11)]);
var inst_27560 = (state_27629[(8)]);
var inst_27608__$1 = topic_fn.call(null,inst_27560);
var inst_27609 = cljs.core.deref.call(null,mults);
var inst_27610__$1 = cljs.core.get.call(null,inst_27609,inst_27608__$1);
var state_27629__$1 = (function (){var statearr_27645 = state_27629;
(statearr_27645[(7)] = inst_27608__$1);

(statearr_27645[(11)] = inst_27610__$1);

return statearr_27645;
})();
if(cljs.core.truth_(inst_27610__$1)){
var statearr_27646_27688 = state_27629__$1;
(statearr_27646_27688[(1)] = (19));

} else {
var statearr_27647_27689 = state_27629__$1;
(statearr_27647_27689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (25))){
var inst_27619 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27648_27690 = state_27629__$1;
(statearr_27648_27690[(2)] = inst_27619);

(statearr_27648_27690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (17))){
var inst_27584 = (state_27629[(10)]);
var inst_27593 = cljs.core.first.call(null,inst_27584);
var inst_27594 = cljs.core.async.muxch_STAR_.call(null,inst_27593);
var inst_27595 = cljs.core.async.close_BANG_.call(null,inst_27594);
var inst_27596 = cljs.core.next.call(null,inst_27584);
var inst_27570 = inst_27596;
var inst_27571 = null;
var inst_27572 = (0);
var inst_27573 = (0);
var state_27629__$1 = (function (){var statearr_27649 = state_27629;
(statearr_27649[(12)] = inst_27572);

(statearr_27649[(13)] = inst_27570);

(statearr_27649[(14)] = inst_27571);

(statearr_27649[(15)] = inst_27573);

(statearr_27649[(16)] = inst_27595);

return statearr_27649;
})();
var statearr_27650_27691 = state_27629__$1;
(statearr_27650_27691[(2)] = null);

(statearr_27650_27691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (3))){
var inst_27627 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27629__$1,inst_27627);
} else {
if((state_val_27630 === (12))){
var inst_27604 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27651_27692 = state_27629__$1;
(statearr_27651_27692[(2)] = inst_27604);

(statearr_27651_27692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (2))){
var state_27629__$1 = state_27629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27629__$1,(4),ch);
} else {
if((state_val_27630 === (23))){
var state_27629__$1 = state_27629;
var statearr_27652_27693 = state_27629__$1;
(statearr_27652_27693[(2)] = null);

(statearr_27652_27693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (19))){
var inst_27610 = (state_27629[(11)]);
var inst_27560 = (state_27629[(8)]);
var inst_27612 = cljs.core.async.muxch_STAR_.call(null,inst_27610);
var state_27629__$1 = state_27629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27629__$1,(22),inst_27612,inst_27560);
} else {
if((state_val_27630 === (11))){
var inst_27570 = (state_27629[(13)]);
var inst_27584 = (state_27629[(10)]);
var inst_27584__$1 = cljs.core.seq.call(null,inst_27570);
var state_27629__$1 = (function (){var statearr_27653 = state_27629;
(statearr_27653[(10)] = inst_27584__$1);

return statearr_27653;
})();
if(inst_27584__$1){
var statearr_27654_27694 = state_27629__$1;
(statearr_27654_27694[(1)] = (13));

} else {
var statearr_27655_27695 = state_27629__$1;
(statearr_27655_27695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (9))){
var inst_27606 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27656_27696 = state_27629__$1;
(statearr_27656_27696[(2)] = inst_27606);

(statearr_27656_27696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (5))){
var inst_27567 = cljs.core.deref.call(null,mults);
var inst_27568 = cljs.core.vals.call(null,inst_27567);
var inst_27569 = cljs.core.seq.call(null,inst_27568);
var inst_27570 = inst_27569;
var inst_27571 = null;
var inst_27572 = (0);
var inst_27573 = (0);
var state_27629__$1 = (function (){var statearr_27657 = state_27629;
(statearr_27657[(12)] = inst_27572);

(statearr_27657[(13)] = inst_27570);

(statearr_27657[(14)] = inst_27571);

(statearr_27657[(15)] = inst_27573);

return statearr_27657;
})();
var statearr_27658_27697 = state_27629__$1;
(statearr_27658_27697[(2)] = null);

(statearr_27658_27697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (14))){
var state_27629__$1 = state_27629;
var statearr_27662_27698 = state_27629__$1;
(statearr_27662_27698[(2)] = null);

(statearr_27662_27698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (16))){
var inst_27584 = (state_27629[(10)]);
var inst_27588 = cljs.core.chunk_first.call(null,inst_27584);
var inst_27589 = cljs.core.chunk_rest.call(null,inst_27584);
var inst_27590 = cljs.core.count.call(null,inst_27588);
var inst_27570 = inst_27589;
var inst_27571 = inst_27588;
var inst_27572 = inst_27590;
var inst_27573 = (0);
var state_27629__$1 = (function (){var statearr_27663 = state_27629;
(statearr_27663[(12)] = inst_27572);

(statearr_27663[(13)] = inst_27570);

(statearr_27663[(14)] = inst_27571);

(statearr_27663[(15)] = inst_27573);

return statearr_27663;
})();
var statearr_27664_27699 = state_27629__$1;
(statearr_27664_27699[(2)] = null);

(statearr_27664_27699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (10))){
var inst_27572 = (state_27629[(12)]);
var inst_27570 = (state_27629[(13)]);
var inst_27571 = (state_27629[(14)]);
var inst_27573 = (state_27629[(15)]);
var inst_27578 = cljs.core._nth.call(null,inst_27571,inst_27573);
var inst_27579 = cljs.core.async.muxch_STAR_.call(null,inst_27578);
var inst_27580 = cljs.core.async.close_BANG_.call(null,inst_27579);
var inst_27581 = (inst_27573 + (1));
var tmp27659 = inst_27572;
var tmp27660 = inst_27570;
var tmp27661 = inst_27571;
var inst_27570__$1 = tmp27660;
var inst_27571__$1 = tmp27661;
var inst_27572__$1 = tmp27659;
var inst_27573__$1 = inst_27581;
var state_27629__$1 = (function (){var statearr_27665 = state_27629;
(statearr_27665[(12)] = inst_27572__$1);

(statearr_27665[(13)] = inst_27570__$1);

(statearr_27665[(17)] = inst_27580);

(statearr_27665[(14)] = inst_27571__$1);

(statearr_27665[(15)] = inst_27573__$1);

return statearr_27665;
})();
var statearr_27666_27700 = state_27629__$1;
(statearr_27666_27700[(2)] = null);

(statearr_27666_27700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (18))){
var inst_27599 = (state_27629[(2)]);
var state_27629__$1 = state_27629;
var statearr_27667_27701 = state_27629__$1;
(statearr_27667_27701[(2)] = inst_27599);

(statearr_27667_27701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27630 === (8))){
var inst_27572 = (state_27629[(12)]);
var inst_27573 = (state_27629[(15)]);
var inst_27575 = (inst_27573 < inst_27572);
var inst_27576 = inst_27575;
var state_27629__$1 = state_27629;
if(cljs.core.truth_(inst_27576)){
var statearr_27668_27702 = state_27629__$1;
(statearr_27668_27702[(1)] = (10));

} else {
var statearr_27669_27703 = state_27629__$1;
(statearr_27669_27703[(1)] = (11));

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
});})(c__24577__auto___27675,mults,ensure_mult,p))
;
return ((function (switch__24410__auto__,c__24577__auto___27675,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_27670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27670[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_27670[(1)] = (1));

return statearr_27670;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_27629){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_27629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e27671){if((e27671 instanceof Object)){
var ex__24414__auto__ = e27671;
var statearr_27672_27704 = state_27629;
(statearr_27672_27704[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27705 = state_27629;
state_27629 = G__27705;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_27629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_27629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___27675,mults,ensure_mult,p))
})();
var state__24579__auto__ = (function (){var statearr_27673 = f__24578__auto__.call(null);
(statearr_27673[(6)] = c__24577__auto___27675);

return statearr_27673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27675,mults,ensure_mult,p))
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
var G__27707 = arguments.length;
switch (G__27707) {
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
var G__27710 = arguments.length;
switch (G__27710) {
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
var G__27713 = arguments.length;
switch (G__27713) {
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
var c__24577__auto___27780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___27780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27752){
var state_val_27753 = (state_27752[(1)]);
if((state_val_27753 === (7))){
var state_27752__$1 = state_27752;
var statearr_27754_27781 = state_27752__$1;
(statearr_27754_27781[(2)] = null);

(statearr_27754_27781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (1))){
var state_27752__$1 = state_27752;
var statearr_27755_27782 = state_27752__$1;
(statearr_27755_27782[(2)] = null);

(statearr_27755_27782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (4))){
var inst_27716 = (state_27752[(7)]);
var inst_27718 = (inst_27716 < cnt);
var state_27752__$1 = state_27752;
if(cljs.core.truth_(inst_27718)){
var statearr_27756_27783 = state_27752__$1;
(statearr_27756_27783[(1)] = (6));

} else {
var statearr_27757_27784 = state_27752__$1;
(statearr_27757_27784[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (15))){
var inst_27748 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27758_27785 = state_27752__$1;
(statearr_27758_27785[(2)] = inst_27748);

(statearr_27758_27785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (13))){
var inst_27741 = cljs.core.async.close_BANG_.call(null,out);
var state_27752__$1 = state_27752;
var statearr_27759_27786 = state_27752__$1;
(statearr_27759_27786[(2)] = inst_27741);

(statearr_27759_27786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (6))){
var state_27752__$1 = state_27752;
var statearr_27760_27787 = state_27752__$1;
(statearr_27760_27787[(2)] = null);

(statearr_27760_27787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (3))){
var inst_27750 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27752__$1,inst_27750);
} else {
if((state_val_27753 === (12))){
var inst_27738 = (state_27752[(8)]);
var inst_27738__$1 = (state_27752[(2)]);
var inst_27739 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27738__$1);
var state_27752__$1 = (function (){var statearr_27761 = state_27752;
(statearr_27761[(8)] = inst_27738__$1);

return statearr_27761;
})();
if(cljs.core.truth_(inst_27739)){
var statearr_27762_27788 = state_27752__$1;
(statearr_27762_27788[(1)] = (13));

} else {
var statearr_27763_27789 = state_27752__$1;
(statearr_27763_27789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (2))){
var inst_27715 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27716 = (0);
var state_27752__$1 = (function (){var statearr_27764 = state_27752;
(statearr_27764[(7)] = inst_27716);

(statearr_27764[(9)] = inst_27715);

return statearr_27764;
})();
var statearr_27765_27790 = state_27752__$1;
(statearr_27765_27790[(2)] = null);

(statearr_27765_27790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (11))){
var inst_27716 = (state_27752[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27752,(10),Object,null,(9));
var inst_27725 = chs__$1.call(null,inst_27716);
var inst_27726 = done.call(null,inst_27716);
var inst_27727 = cljs.core.async.take_BANG_.call(null,inst_27725,inst_27726);
var state_27752__$1 = state_27752;
var statearr_27766_27791 = state_27752__$1;
(statearr_27766_27791[(2)] = inst_27727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27752__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (9))){
var inst_27716 = (state_27752[(7)]);
var inst_27729 = (state_27752[(2)]);
var inst_27730 = (inst_27716 + (1));
var inst_27716__$1 = inst_27730;
var state_27752__$1 = (function (){var statearr_27767 = state_27752;
(statearr_27767[(7)] = inst_27716__$1);

(statearr_27767[(10)] = inst_27729);

return statearr_27767;
})();
var statearr_27768_27792 = state_27752__$1;
(statearr_27768_27792[(2)] = null);

(statearr_27768_27792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (5))){
var inst_27736 = (state_27752[(2)]);
var state_27752__$1 = (function (){var statearr_27769 = state_27752;
(statearr_27769[(11)] = inst_27736);

return statearr_27769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27752__$1,(12),dchan);
} else {
if((state_val_27753 === (14))){
var inst_27738 = (state_27752[(8)]);
var inst_27743 = cljs.core.apply.call(null,f,inst_27738);
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27752__$1,(16),out,inst_27743);
} else {
if((state_val_27753 === (16))){
var inst_27745 = (state_27752[(2)]);
var state_27752__$1 = (function (){var statearr_27770 = state_27752;
(statearr_27770[(12)] = inst_27745);

return statearr_27770;
})();
var statearr_27771_27793 = state_27752__$1;
(statearr_27771_27793[(2)] = null);

(statearr_27771_27793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (10))){
var inst_27720 = (state_27752[(2)]);
var inst_27721 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27752__$1 = (function (){var statearr_27772 = state_27752;
(statearr_27772[(13)] = inst_27720);

return statearr_27772;
})();
var statearr_27773_27794 = state_27752__$1;
(statearr_27773_27794[(2)] = inst_27721);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27752__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (8))){
var inst_27734 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27774_27795 = state_27752__$1;
(statearr_27774_27795[(2)] = inst_27734);

(statearr_27774_27795[(1)] = (5));


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
});})(c__24577__auto___27780,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24410__auto__,c__24577__auto___27780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_27775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27775[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_27775[(1)] = (1));

return statearr_27775;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_27752){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_27752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e27776){if((e27776 instanceof Object)){
var ex__24414__auto__ = e27776;
var statearr_27777_27796 = state_27752;
(statearr_27777_27796[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27797 = state_27752;
state_27752 = G__27797;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_27752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_27752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___27780,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24579__auto__ = (function (){var statearr_27778 = f__24578__auto__.call(null);
(statearr_27778[(6)] = c__24577__auto___27780);

return statearr_27778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27780,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27800 = arguments.length;
switch (G__27800) {
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
var c__24577__auto___27854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27854,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___27854,out){
return (function (state_27832){
var state_val_27833 = (state_27832[(1)]);
if((state_val_27833 === (7))){
var inst_27811 = (state_27832[(7)]);
var inst_27812 = (state_27832[(8)]);
var inst_27811__$1 = (state_27832[(2)]);
var inst_27812__$1 = cljs.core.nth.call(null,inst_27811__$1,(0),null);
var inst_27813 = cljs.core.nth.call(null,inst_27811__$1,(1),null);
var inst_27814 = (inst_27812__$1 == null);
var state_27832__$1 = (function (){var statearr_27834 = state_27832;
(statearr_27834[(7)] = inst_27811__$1);

(statearr_27834[(9)] = inst_27813);

(statearr_27834[(8)] = inst_27812__$1);

return statearr_27834;
})();
if(cljs.core.truth_(inst_27814)){
var statearr_27835_27855 = state_27832__$1;
(statearr_27835_27855[(1)] = (8));

} else {
var statearr_27836_27856 = state_27832__$1;
(statearr_27836_27856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (1))){
var inst_27801 = cljs.core.vec.call(null,chs);
var inst_27802 = inst_27801;
var state_27832__$1 = (function (){var statearr_27837 = state_27832;
(statearr_27837[(10)] = inst_27802);

return statearr_27837;
})();
var statearr_27838_27857 = state_27832__$1;
(statearr_27838_27857[(2)] = null);

(statearr_27838_27857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (4))){
var inst_27802 = (state_27832[(10)]);
var state_27832__$1 = state_27832;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27832__$1,(7),inst_27802);
} else {
if((state_val_27833 === (6))){
var inst_27828 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27839_27858 = state_27832__$1;
(statearr_27839_27858[(2)] = inst_27828);

(statearr_27839_27858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (3))){
var inst_27830 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27832__$1,inst_27830);
} else {
if((state_val_27833 === (2))){
var inst_27802 = (state_27832[(10)]);
var inst_27804 = cljs.core.count.call(null,inst_27802);
var inst_27805 = (inst_27804 > (0));
var state_27832__$1 = state_27832;
if(cljs.core.truth_(inst_27805)){
var statearr_27841_27859 = state_27832__$1;
(statearr_27841_27859[(1)] = (4));

} else {
var statearr_27842_27860 = state_27832__$1;
(statearr_27842_27860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (11))){
var inst_27802 = (state_27832[(10)]);
var inst_27821 = (state_27832[(2)]);
var tmp27840 = inst_27802;
var inst_27802__$1 = tmp27840;
var state_27832__$1 = (function (){var statearr_27843 = state_27832;
(statearr_27843[(10)] = inst_27802__$1);

(statearr_27843[(11)] = inst_27821);

return statearr_27843;
})();
var statearr_27844_27861 = state_27832__$1;
(statearr_27844_27861[(2)] = null);

(statearr_27844_27861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (9))){
var inst_27812 = (state_27832[(8)]);
var state_27832__$1 = state_27832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27832__$1,(11),out,inst_27812);
} else {
if((state_val_27833 === (5))){
var inst_27826 = cljs.core.async.close_BANG_.call(null,out);
var state_27832__$1 = state_27832;
var statearr_27845_27862 = state_27832__$1;
(statearr_27845_27862[(2)] = inst_27826);

(statearr_27845_27862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (10))){
var inst_27824 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27846_27863 = state_27832__$1;
(statearr_27846_27863[(2)] = inst_27824);

(statearr_27846_27863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (8))){
var inst_27811 = (state_27832[(7)]);
var inst_27802 = (state_27832[(10)]);
var inst_27813 = (state_27832[(9)]);
var inst_27812 = (state_27832[(8)]);
var inst_27816 = (function (){var cs = inst_27802;
var vec__27807 = inst_27811;
var v = inst_27812;
var c = inst_27813;
return ((function (cs,vec__27807,v,c,inst_27811,inst_27802,inst_27813,inst_27812,state_val_27833,c__24577__auto___27854,out){
return (function (p1__27798_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27798_SHARP_);
});
;})(cs,vec__27807,v,c,inst_27811,inst_27802,inst_27813,inst_27812,state_val_27833,c__24577__auto___27854,out))
})();
var inst_27817 = cljs.core.filterv.call(null,inst_27816,inst_27802);
var inst_27802__$1 = inst_27817;
var state_27832__$1 = (function (){var statearr_27847 = state_27832;
(statearr_27847[(10)] = inst_27802__$1);

return statearr_27847;
})();
var statearr_27848_27864 = state_27832__$1;
(statearr_27848_27864[(2)] = null);

(statearr_27848_27864[(1)] = (2));


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
});})(c__24577__auto___27854,out))
;
return ((function (switch__24410__auto__,c__24577__auto___27854,out){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_27849 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27849[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_27849[(1)] = (1));

return statearr_27849;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_27832){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_27832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e27850){if((e27850 instanceof Object)){
var ex__24414__auto__ = e27850;
var statearr_27851_27865 = state_27832;
(statearr_27851_27865[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27866 = state_27832;
state_27832 = G__27866;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_27832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_27832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___27854,out))
})();
var state__24579__auto__ = (function (){var statearr_27852 = f__24578__auto__.call(null);
(statearr_27852[(6)] = c__24577__auto___27854);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27854,out))
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
var G__27868 = arguments.length;
switch (G__27868) {
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
var c__24577__auto___27913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27913,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___27913,out){
return (function (state_27892){
var state_val_27893 = (state_27892[(1)]);
if((state_val_27893 === (7))){
var inst_27874 = (state_27892[(7)]);
var inst_27874__$1 = (state_27892[(2)]);
var inst_27875 = (inst_27874__$1 == null);
var inst_27876 = cljs.core.not.call(null,inst_27875);
var state_27892__$1 = (function (){var statearr_27894 = state_27892;
(statearr_27894[(7)] = inst_27874__$1);

return statearr_27894;
})();
if(inst_27876){
var statearr_27895_27914 = state_27892__$1;
(statearr_27895_27914[(1)] = (8));

} else {
var statearr_27896_27915 = state_27892__$1;
(statearr_27896_27915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (1))){
var inst_27869 = (0);
var state_27892__$1 = (function (){var statearr_27897 = state_27892;
(statearr_27897[(8)] = inst_27869);

return statearr_27897;
})();
var statearr_27898_27916 = state_27892__$1;
(statearr_27898_27916[(2)] = null);

(statearr_27898_27916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (4))){
var state_27892__$1 = state_27892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27892__$1,(7),ch);
} else {
if((state_val_27893 === (6))){
var inst_27887 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
var statearr_27899_27917 = state_27892__$1;
(statearr_27899_27917[(2)] = inst_27887);

(statearr_27899_27917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (3))){
var inst_27889 = (state_27892[(2)]);
var inst_27890 = cljs.core.async.close_BANG_.call(null,out);
var state_27892__$1 = (function (){var statearr_27900 = state_27892;
(statearr_27900[(9)] = inst_27889);

return statearr_27900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27892__$1,inst_27890);
} else {
if((state_val_27893 === (2))){
var inst_27869 = (state_27892[(8)]);
var inst_27871 = (inst_27869 < n);
var state_27892__$1 = state_27892;
if(cljs.core.truth_(inst_27871)){
var statearr_27901_27918 = state_27892__$1;
(statearr_27901_27918[(1)] = (4));

} else {
var statearr_27902_27919 = state_27892__$1;
(statearr_27902_27919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (11))){
var inst_27869 = (state_27892[(8)]);
var inst_27879 = (state_27892[(2)]);
var inst_27880 = (inst_27869 + (1));
var inst_27869__$1 = inst_27880;
var state_27892__$1 = (function (){var statearr_27903 = state_27892;
(statearr_27903[(10)] = inst_27879);

(statearr_27903[(8)] = inst_27869__$1);

return statearr_27903;
})();
var statearr_27904_27920 = state_27892__$1;
(statearr_27904_27920[(2)] = null);

(statearr_27904_27920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (9))){
var state_27892__$1 = state_27892;
var statearr_27905_27921 = state_27892__$1;
(statearr_27905_27921[(2)] = null);

(statearr_27905_27921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (5))){
var state_27892__$1 = state_27892;
var statearr_27906_27922 = state_27892__$1;
(statearr_27906_27922[(2)] = null);

(statearr_27906_27922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (10))){
var inst_27884 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
var statearr_27907_27923 = state_27892__$1;
(statearr_27907_27923[(2)] = inst_27884);

(statearr_27907_27923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (8))){
var inst_27874 = (state_27892[(7)]);
var state_27892__$1 = state_27892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27892__$1,(11),out,inst_27874);
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
});})(c__24577__auto___27913,out))
;
return ((function (switch__24410__auto__,c__24577__auto___27913,out){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_27908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27908[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_27908[(1)] = (1));

return statearr_27908;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_27892){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_27892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e27909){if((e27909 instanceof Object)){
var ex__24414__auto__ = e27909;
var statearr_27910_27924 = state_27892;
(statearr_27910_27924[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27925 = state_27892;
state_27892 = G__27925;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_27892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_27892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___27913,out))
})();
var state__24579__auto__ = (function (){var statearr_27911 = f__24578__auto__.call(null);
(statearr_27911[(6)] = c__24577__auto___27913);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27913,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27927 = (function (f,ch,meta27928){
this.f = f;
this.ch = ch;
this.meta27928 = meta27928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27929,meta27928__$1){
var self__ = this;
var _27929__$1 = this;
return (new cljs.core.async.t_cljs$core$async27927(self__.f,self__.ch,meta27928__$1));
});

cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27929){
var self__ = this;
var _27929__$1 = this;
return self__.meta27928;
});

cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27930 = (function (f,ch,meta27928,_,fn1,meta27931){
this.f = f;
this.ch = ch;
this.meta27928 = meta27928;
this._ = _;
this.fn1 = fn1;
this.meta27931 = meta27931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27932,meta27931__$1){
var self__ = this;
var _27932__$1 = this;
return (new cljs.core.async.t_cljs$core$async27930(self__.f,self__.ch,self__.meta27928,self__._,self__.fn1,meta27931__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27932){
var self__ = this;
var _27932__$1 = this;
return self__.meta27931;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27926_SHARP_){
return f1.call(null,(((p1__27926_SHARP_ == null))?null:self__.f.call(null,p1__27926_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27930.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27928","meta27928",-835250923,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27927","cljs.core.async/t_cljs$core$async27927",-1334469660,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27931","meta27931",-2043398666,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27930";

cljs.core.async.t_cljs$core$async27930.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27930");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27930.
 */
cljs.core.async.__GT_t_cljs$core$async27930 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27930(f__$1,ch__$1,meta27928__$1,___$2,fn1__$1,meta27931){
return (new cljs.core.async.t_cljs$core$async27930(f__$1,ch__$1,meta27928__$1,___$2,fn1__$1,meta27931));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27930(self__.f,self__.ch,self__.meta27928,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27928","meta27928",-835250923,null)], null);
});

cljs.core.async.t_cljs$core$async27927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27927";

cljs.core.async.t_cljs$core$async27927.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27927");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27927.
 */
cljs.core.async.__GT_t_cljs$core$async27927 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27927(f__$1,ch__$1,meta27928){
return (new cljs.core.async.t_cljs$core$async27927(f__$1,ch__$1,meta27928));
});

}

return (new cljs.core.async.t_cljs$core$async27927(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27933 = (function (f,ch,meta27934){
this.f = f;
this.ch = ch;
this.meta27934 = meta27934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27935,meta27934__$1){
var self__ = this;
var _27935__$1 = this;
return (new cljs.core.async.t_cljs$core$async27933(self__.f,self__.ch,meta27934__$1));
});

cljs.core.async.t_cljs$core$async27933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27935){
var self__ = this;
var _27935__$1 = this;
return self__.meta27934;
});

cljs.core.async.t_cljs$core$async27933.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27933.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27933.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27934","meta27934",-1286771919,null)], null);
});

cljs.core.async.t_cljs$core$async27933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27933";

cljs.core.async.t_cljs$core$async27933.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27933");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27933.
 */
cljs.core.async.__GT_t_cljs$core$async27933 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27933(f__$1,ch__$1,meta27934){
return (new cljs.core.async.t_cljs$core$async27933(f__$1,ch__$1,meta27934));
});

}

return (new cljs.core.async.t_cljs$core$async27933(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27936 = (function (p,ch,meta27937){
this.p = p;
this.ch = ch;
this.meta27937 = meta27937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27938,meta27937__$1){
var self__ = this;
var _27938__$1 = this;
return (new cljs.core.async.t_cljs$core$async27936(self__.p,self__.ch,meta27937__$1));
});

cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27938){
var self__ = this;
var _27938__$1 = this;
return self__.meta27937;
});

cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27936.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27937","meta27937",440662686,null)], null);
});

cljs.core.async.t_cljs$core$async27936.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27936";

cljs.core.async.t_cljs$core$async27936.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27936");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27936.
 */
cljs.core.async.__GT_t_cljs$core$async27936 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27936(p__$1,ch__$1,meta27937){
return (new cljs.core.async.t_cljs$core$async27936(p__$1,ch__$1,meta27937));
});

}

return (new cljs.core.async.t_cljs$core$async27936(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27940 = arguments.length;
switch (G__27940) {
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
var c__24577__auto___27980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27980,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___27980,out){
return (function (state_27961){
var state_val_27962 = (state_27961[(1)]);
if((state_val_27962 === (7))){
var inst_27957 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
var statearr_27963_27981 = state_27961__$1;
(statearr_27963_27981[(2)] = inst_27957);

(statearr_27963_27981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (1))){
var state_27961__$1 = state_27961;
var statearr_27964_27982 = state_27961__$1;
(statearr_27964_27982[(2)] = null);

(statearr_27964_27982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (4))){
var inst_27943 = (state_27961[(7)]);
var inst_27943__$1 = (state_27961[(2)]);
var inst_27944 = (inst_27943__$1 == null);
var state_27961__$1 = (function (){var statearr_27965 = state_27961;
(statearr_27965[(7)] = inst_27943__$1);

return statearr_27965;
})();
if(cljs.core.truth_(inst_27944)){
var statearr_27966_27983 = state_27961__$1;
(statearr_27966_27983[(1)] = (5));

} else {
var statearr_27967_27984 = state_27961__$1;
(statearr_27967_27984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (6))){
var inst_27943 = (state_27961[(7)]);
var inst_27948 = p.call(null,inst_27943);
var state_27961__$1 = state_27961;
if(cljs.core.truth_(inst_27948)){
var statearr_27968_27985 = state_27961__$1;
(statearr_27968_27985[(1)] = (8));

} else {
var statearr_27969_27986 = state_27961__$1;
(statearr_27969_27986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (3))){
var inst_27959 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27961__$1,inst_27959);
} else {
if((state_val_27962 === (2))){
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27961__$1,(4),ch);
} else {
if((state_val_27962 === (11))){
var inst_27951 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
var statearr_27970_27987 = state_27961__$1;
(statearr_27970_27987[(2)] = inst_27951);

(statearr_27970_27987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (9))){
var state_27961__$1 = state_27961;
var statearr_27971_27988 = state_27961__$1;
(statearr_27971_27988[(2)] = null);

(statearr_27971_27988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (5))){
var inst_27946 = cljs.core.async.close_BANG_.call(null,out);
var state_27961__$1 = state_27961;
var statearr_27972_27989 = state_27961__$1;
(statearr_27972_27989[(2)] = inst_27946);

(statearr_27972_27989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (10))){
var inst_27954 = (state_27961[(2)]);
var state_27961__$1 = (function (){var statearr_27973 = state_27961;
(statearr_27973[(8)] = inst_27954);

return statearr_27973;
})();
var statearr_27974_27990 = state_27961__$1;
(statearr_27974_27990[(2)] = null);

(statearr_27974_27990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (8))){
var inst_27943 = (state_27961[(7)]);
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27961__$1,(11),out,inst_27943);
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
});})(c__24577__auto___27980,out))
;
return ((function (switch__24410__auto__,c__24577__auto___27980,out){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_27975 = [null,null,null,null,null,null,null,null,null];
(statearr_27975[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_27975[(1)] = (1));

return statearr_27975;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_27961){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_27961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e27976){if((e27976 instanceof Object)){
var ex__24414__auto__ = e27976;
var statearr_27977_27991 = state_27961;
(statearr_27977_27991[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27992 = state_27961;
state_27961 = G__27992;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_27961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_27961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___27980,out))
})();
var state__24579__auto__ = (function (){var statearr_27978 = f__24578__auto__.call(null);
(statearr_27978[(6)] = c__24577__auto___27980);

return statearr_27978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27980,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27994 = arguments.length;
switch (G__27994) {
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
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto__){
return (function (state_28057){
var state_val_28058 = (state_28057[(1)]);
if((state_val_28058 === (7))){
var inst_28053 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28059_28097 = state_28057__$1;
(statearr_28059_28097[(2)] = inst_28053);

(statearr_28059_28097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (20))){
var inst_28023 = (state_28057[(7)]);
var inst_28034 = (state_28057[(2)]);
var inst_28035 = cljs.core.next.call(null,inst_28023);
var inst_28009 = inst_28035;
var inst_28010 = null;
var inst_28011 = (0);
var inst_28012 = (0);
var state_28057__$1 = (function (){var statearr_28060 = state_28057;
(statearr_28060[(8)] = inst_28011);

(statearr_28060[(9)] = inst_28010);

(statearr_28060[(10)] = inst_28009);

(statearr_28060[(11)] = inst_28012);

(statearr_28060[(12)] = inst_28034);

return statearr_28060;
})();
var statearr_28061_28098 = state_28057__$1;
(statearr_28061_28098[(2)] = null);

(statearr_28061_28098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (1))){
var state_28057__$1 = state_28057;
var statearr_28062_28099 = state_28057__$1;
(statearr_28062_28099[(2)] = null);

(statearr_28062_28099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (4))){
var inst_27998 = (state_28057[(13)]);
var inst_27998__$1 = (state_28057[(2)]);
var inst_27999 = (inst_27998__$1 == null);
var state_28057__$1 = (function (){var statearr_28063 = state_28057;
(statearr_28063[(13)] = inst_27998__$1);

return statearr_28063;
})();
if(cljs.core.truth_(inst_27999)){
var statearr_28064_28100 = state_28057__$1;
(statearr_28064_28100[(1)] = (5));

} else {
var statearr_28065_28101 = state_28057__$1;
(statearr_28065_28101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (15))){
var state_28057__$1 = state_28057;
var statearr_28069_28102 = state_28057__$1;
(statearr_28069_28102[(2)] = null);

(statearr_28069_28102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (21))){
var state_28057__$1 = state_28057;
var statearr_28070_28103 = state_28057__$1;
(statearr_28070_28103[(2)] = null);

(statearr_28070_28103[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (13))){
var inst_28011 = (state_28057[(8)]);
var inst_28010 = (state_28057[(9)]);
var inst_28009 = (state_28057[(10)]);
var inst_28012 = (state_28057[(11)]);
var inst_28019 = (state_28057[(2)]);
var inst_28020 = (inst_28012 + (1));
var tmp28066 = inst_28011;
var tmp28067 = inst_28010;
var tmp28068 = inst_28009;
var inst_28009__$1 = tmp28068;
var inst_28010__$1 = tmp28067;
var inst_28011__$1 = tmp28066;
var inst_28012__$1 = inst_28020;
var state_28057__$1 = (function (){var statearr_28071 = state_28057;
(statearr_28071[(14)] = inst_28019);

(statearr_28071[(8)] = inst_28011__$1);

(statearr_28071[(9)] = inst_28010__$1);

(statearr_28071[(10)] = inst_28009__$1);

(statearr_28071[(11)] = inst_28012__$1);

return statearr_28071;
})();
var statearr_28072_28104 = state_28057__$1;
(statearr_28072_28104[(2)] = null);

(statearr_28072_28104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (22))){
var state_28057__$1 = state_28057;
var statearr_28073_28105 = state_28057__$1;
(statearr_28073_28105[(2)] = null);

(statearr_28073_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (6))){
var inst_27998 = (state_28057[(13)]);
var inst_28007 = f.call(null,inst_27998);
var inst_28008 = cljs.core.seq.call(null,inst_28007);
var inst_28009 = inst_28008;
var inst_28010 = null;
var inst_28011 = (0);
var inst_28012 = (0);
var state_28057__$1 = (function (){var statearr_28074 = state_28057;
(statearr_28074[(8)] = inst_28011);

(statearr_28074[(9)] = inst_28010);

(statearr_28074[(10)] = inst_28009);

(statearr_28074[(11)] = inst_28012);

return statearr_28074;
})();
var statearr_28075_28106 = state_28057__$1;
(statearr_28075_28106[(2)] = null);

(statearr_28075_28106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (17))){
var inst_28023 = (state_28057[(7)]);
var inst_28027 = cljs.core.chunk_first.call(null,inst_28023);
var inst_28028 = cljs.core.chunk_rest.call(null,inst_28023);
var inst_28029 = cljs.core.count.call(null,inst_28027);
var inst_28009 = inst_28028;
var inst_28010 = inst_28027;
var inst_28011 = inst_28029;
var inst_28012 = (0);
var state_28057__$1 = (function (){var statearr_28076 = state_28057;
(statearr_28076[(8)] = inst_28011);

(statearr_28076[(9)] = inst_28010);

(statearr_28076[(10)] = inst_28009);

(statearr_28076[(11)] = inst_28012);

return statearr_28076;
})();
var statearr_28077_28107 = state_28057__$1;
(statearr_28077_28107[(2)] = null);

(statearr_28077_28107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (3))){
var inst_28055 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28057__$1,inst_28055);
} else {
if((state_val_28058 === (12))){
var inst_28043 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28078_28108 = state_28057__$1;
(statearr_28078_28108[(2)] = inst_28043);

(statearr_28078_28108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (2))){
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28057__$1,(4),in$);
} else {
if((state_val_28058 === (23))){
var inst_28051 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28079_28109 = state_28057__$1;
(statearr_28079_28109[(2)] = inst_28051);

(statearr_28079_28109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (19))){
var inst_28038 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28080_28110 = state_28057__$1;
(statearr_28080_28110[(2)] = inst_28038);

(statearr_28080_28110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (11))){
var inst_28023 = (state_28057[(7)]);
var inst_28009 = (state_28057[(10)]);
var inst_28023__$1 = cljs.core.seq.call(null,inst_28009);
var state_28057__$1 = (function (){var statearr_28081 = state_28057;
(statearr_28081[(7)] = inst_28023__$1);

return statearr_28081;
})();
if(inst_28023__$1){
var statearr_28082_28111 = state_28057__$1;
(statearr_28082_28111[(1)] = (14));

} else {
var statearr_28083_28112 = state_28057__$1;
(statearr_28083_28112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (9))){
var inst_28045 = (state_28057[(2)]);
var inst_28046 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28057__$1 = (function (){var statearr_28084 = state_28057;
(statearr_28084[(15)] = inst_28045);

return statearr_28084;
})();
if(cljs.core.truth_(inst_28046)){
var statearr_28085_28113 = state_28057__$1;
(statearr_28085_28113[(1)] = (21));

} else {
var statearr_28086_28114 = state_28057__$1;
(statearr_28086_28114[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (5))){
var inst_28001 = cljs.core.async.close_BANG_.call(null,out);
var state_28057__$1 = state_28057;
var statearr_28087_28115 = state_28057__$1;
(statearr_28087_28115[(2)] = inst_28001);

(statearr_28087_28115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (14))){
var inst_28023 = (state_28057[(7)]);
var inst_28025 = cljs.core.chunked_seq_QMARK_.call(null,inst_28023);
var state_28057__$1 = state_28057;
if(inst_28025){
var statearr_28088_28116 = state_28057__$1;
(statearr_28088_28116[(1)] = (17));

} else {
var statearr_28089_28117 = state_28057__$1;
(statearr_28089_28117[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (16))){
var inst_28041 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28090_28118 = state_28057__$1;
(statearr_28090_28118[(2)] = inst_28041);

(statearr_28090_28118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (10))){
var inst_28010 = (state_28057[(9)]);
var inst_28012 = (state_28057[(11)]);
var inst_28017 = cljs.core._nth.call(null,inst_28010,inst_28012);
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28057__$1,(13),out,inst_28017);
} else {
if((state_val_28058 === (18))){
var inst_28023 = (state_28057[(7)]);
var inst_28032 = cljs.core.first.call(null,inst_28023);
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28057__$1,(20),out,inst_28032);
} else {
if((state_val_28058 === (8))){
var inst_28011 = (state_28057[(8)]);
var inst_28012 = (state_28057[(11)]);
var inst_28014 = (inst_28012 < inst_28011);
var inst_28015 = inst_28014;
var state_28057__$1 = state_28057;
if(cljs.core.truth_(inst_28015)){
var statearr_28091_28119 = state_28057__$1;
(statearr_28091_28119[(1)] = (10));

} else {
var statearr_28092_28120 = state_28057__$1;
(statearr_28092_28120[(1)] = (11));

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
});})(c__24577__auto__))
;
return ((function (switch__24410__auto__,c__24577__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24411__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24411__auto____0 = (function (){
var statearr_28093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28093[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24411__auto__);

(statearr_28093[(1)] = (1));

return statearr_28093;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24411__auto____1 = (function (state_28057){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_28057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e28094){if((e28094 instanceof Object)){
var ex__24414__auto__ = e28094;
var statearr_28095_28121 = state_28057;
(statearr_28095_28121[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28122 = state_28057;
state_28057 = G__28122;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24411__auto__ = function(state_28057){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24411__auto____1.call(this,state_28057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24411__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24411__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_28096 = f__24578__auto__.call(null);
(statearr_28096[(6)] = c__24577__auto__);

return statearr_28096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28124 = arguments.length;
switch (G__28124) {
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
var G__28127 = arguments.length;
switch (G__28127) {
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
var G__28130 = arguments.length;
switch (G__28130) {
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
var c__24577__auto___28177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___28177,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___28177,out){
return (function (state_28154){
var state_val_28155 = (state_28154[(1)]);
if((state_val_28155 === (7))){
var inst_28149 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28156_28178 = state_28154__$1;
(statearr_28156_28178[(2)] = inst_28149);

(statearr_28156_28178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (1))){
var inst_28131 = null;
var state_28154__$1 = (function (){var statearr_28157 = state_28154;
(statearr_28157[(7)] = inst_28131);

return statearr_28157;
})();
var statearr_28158_28179 = state_28154__$1;
(statearr_28158_28179[(2)] = null);

(statearr_28158_28179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (4))){
var inst_28134 = (state_28154[(8)]);
var inst_28134__$1 = (state_28154[(2)]);
var inst_28135 = (inst_28134__$1 == null);
var inst_28136 = cljs.core.not.call(null,inst_28135);
var state_28154__$1 = (function (){var statearr_28159 = state_28154;
(statearr_28159[(8)] = inst_28134__$1);

return statearr_28159;
})();
if(inst_28136){
var statearr_28160_28180 = state_28154__$1;
(statearr_28160_28180[(1)] = (5));

} else {
var statearr_28161_28181 = state_28154__$1;
(statearr_28161_28181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (6))){
var state_28154__$1 = state_28154;
var statearr_28162_28182 = state_28154__$1;
(statearr_28162_28182[(2)] = null);

(statearr_28162_28182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (3))){
var inst_28151 = (state_28154[(2)]);
var inst_28152 = cljs.core.async.close_BANG_.call(null,out);
var state_28154__$1 = (function (){var statearr_28163 = state_28154;
(statearr_28163[(9)] = inst_28151);

return statearr_28163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28154__$1,inst_28152);
} else {
if((state_val_28155 === (2))){
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(4),ch);
} else {
if((state_val_28155 === (11))){
var inst_28134 = (state_28154[(8)]);
var inst_28143 = (state_28154[(2)]);
var inst_28131 = inst_28134;
var state_28154__$1 = (function (){var statearr_28164 = state_28154;
(statearr_28164[(10)] = inst_28143);

(statearr_28164[(7)] = inst_28131);

return statearr_28164;
})();
var statearr_28165_28183 = state_28154__$1;
(statearr_28165_28183[(2)] = null);

(statearr_28165_28183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (9))){
var inst_28134 = (state_28154[(8)]);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28154__$1,(11),out,inst_28134);
} else {
if((state_val_28155 === (5))){
var inst_28134 = (state_28154[(8)]);
var inst_28131 = (state_28154[(7)]);
var inst_28138 = cljs.core._EQ_.call(null,inst_28134,inst_28131);
var state_28154__$1 = state_28154;
if(inst_28138){
var statearr_28167_28184 = state_28154__$1;
(statearr_28167_28184[(1)] = (8));

} else {
var statearr_28168_28185 = state_28154__$1;
(statearr_28168_28185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (10))){
var inst_28146 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28169_28186 = state_28154__$1;
(statearr_28169_28186[(2)] = inst_28146);

(statearr_28169_28186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (8))){
var inst_28131 = (state_28154[(7)]);
var tmp28166 = inst_28131;
var inst_28131__$1 = tmp28166;
var state_28154__$1 = (function (){var statearr_28170 = state_28154;
(statearr_28170[(7)] = inst_28131__$1);

return statearr_28170;
})();
var statearr_28171_28187 = state_28154__$1;
(statearr_28171_28187[(2)] = null);

(statearr_28171_28187[(1)] = (2));


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
});})(c__24577__auto___28177,out))
;
return ((function (switch__24410__auto__,c__24577__auto___28177,out){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_28172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28172[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_28172[(1)] = (1));

return statearr_28172;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_28154){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_28154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e28173){if((e28173 instanceof Object)){
var ex__24414__auto__ = e28173;
var statearr_28174_28188 = state_28154;
(statearr_28174_28188[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28189 = state_28154;
state_28154 = G__28189;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_28154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_28154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___28177,out))
})();
var state__24579__auto__ = (function (){var statearr_28175 = f__24578__auto__.call(null);
(statearr_28175[(6)] = c__24577__auto___28177);

return statearr_28175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___28177,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28191 = arguments.length;
switch (G__28191) {
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
var c__24577__auto___28257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___28257,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___28257,out){
return (function (state_28229){
var state_val_28230 = (state_28229[(1)]);
if((state_val_28230 === (7))){
var inst_28225 = (state_28229[(2)]);
var state_28229__$1 = state_28229;
var statearr_28231_28258 = state_28229__$1;
(statearr_28231_28258[(2)] = inst_28225);

(statearr_28231_28258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (1))){
var inst_28192 = (new Array(n));
var inst_28193 = inst_28192;
var inst_28194 = (0);
var state_28229__$1 = (function (){var statearr_28232 = state_28229;
(statearr_28232[(7)] = inst_28193);

(statearr_28232[(8)] = inst_28194);

return statearr_28232;
})();
var statearr_28233_28259 = state_28229__$1;
(statearr_28233_28259[(2)] = null);

(statearr_28233_28259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (4))){
var inst_28197 = (state_28229[(9)]);
var inst_28197__$1 = (state_28229[(2)]);
var inst_28198 = (inst_28197__$1 == null);
var inst_28199 = cljs.core.not.call(null,inst_28198);
var state_28229__$1 = (function (){var statearr_28234 = state_28229;
(statearr_28234[(9)] = inst_28197__$1);

return statearr_28234;
})();
if(inst_28199){
var statearr_28235_28260 = state_28229__$1;
(statearr_28235_28260[(1)] = (5));

} else {
var statearr_28236_28261 = state_28229__$1;
(statearr_28236_28261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (15))){
var inst_28219 = (state_28229[(2)]);
var state_28229__$1 = state_28229;
var statearr_28237_28262 = state_28229__$1;
(statearr_28237_28262[(2)] = inst_28219);

(statearr_28237_28262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (13))){
var state_28229__$1 = state_28229;
var statearr_28238_28263 = state_28229__$1;
(statearr_28238_28263[(2)] = null);

(statearr_28238_28263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (6))){
var inst_28194 = (state_28229[(8)]);
var inst_28215 = (inst_28194 > (0));
var state_28229__$1 = state_28229;
if(cljs.core.truth_(inst_28215)){
var statearr_28239_28264 = state_28229__$1;
(statearr_28239_28264[(1)] = (12));

} else {
var statearr_28240_28265 = state_28229__$1;
(statearr_28240_28265[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (3))){
var inst_28227 = (state_28229[(2)]);
var state_28229__$1 = state_28229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28229__$1,inst_28227);
} else {
if((state_val_28230 === (12))){
var inst_28193 = (state_28229[(7)]);
var inst_28217 = cljs.core.vec.call(null,inst_28193);
var state_28229__$1 = state_28229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28229__$1,(15),out,inst_28217);
} else {
if((state_val_28230 === (2))){
var state_28229__$1 = state_28229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28229__$1,(4),ch);
} else {
if((state_val_28230 === (11))){
var inst_28209 = (state_28229[(2)]);
var inst_28210 = (new Array(n));
var inst_28193 = inst_28210;
var inst_28194 = (0);
var state_28229__$1 = (function (){var statearr_28241 = state_28229;
(statearr_28241[(7)] = inst_28193);

(statearr_28241[(10)] = inst_28209);

(statearr_28241[(8)] = inst_28194);

return statearr_28241;
})();
var statearr_28242_28266 = state_28229__$1;
(statearr_28242_28266[(2)] = null);

(statearr_28242_28266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (9))){
var inst_28193 = (state_28229[(7)]);
var inst_28207 = cljs.core.vec.call(null,inst_28193);
var state_28229__$1 = state_28229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28229__$1,(11),out,inst_28207);
} else {
if((state_val_28230 === (5))){
var inst_28193 = (state_28229[(7)]);
var inst_28202 = (state_28229[(11)]);
var inst_28197 = (state_28229[(9)]);
var inst_28194 = (state_28229[(8)]);
var inst_28201 = (inst_28193[inst_28194] = inst_28197);
var inst_28202__$1 = (inst_28194 + (1));
var inst_28203 = (inst_28202__$1 < n);
var state_28229__$1 = (function (){var statearr_28243 = state_28229;
(statearr_28243[(11)] = inst_28202__$1);

(statearr_28243[(12)] = inst_28201);

return statearr_28243;
})();
if(cljs.core.truth_(inst_28203)){
var statearr_28244_28267 = state_28229__$1;
(statearr_28244_28267[(1)] = (8));

} else {
var statearr_28245_28268 = state_28229__$1;
(statearr_28245_28268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (14))){
var inst_28222 = (state_28229[(2)]);
var inst_28223 = cljs.core.async.close_BANG_.call(null,out);
var state_28229__$1 = (function (){var statearr_28247 = state_28229;
(statearr_28247[(13)] = inst_28222);

return statearr_28247;
})();
var statearr_28248_28269 = state_28229__$1;
(statearr_28248_28269[(2)] = inst_28223);

(statearr_28248_28269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (10))){
var inst_28213 = (state_28229[(2)]);
var state_28229__$1 = state_28229;
var statearr_28249_28270 = state_28229__$1;
(statearr_28249_28270[(2)] = inst_28213);

(statearr_28249_28270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28230 === (8))){
var inst_28193 = (state_28229[(7)]);
var inst_28202 = (state_28229[(11)]);
var tmp28246 = inst_28193;
var inst_28193__$1 = tmp28246;
var inst_28194 = inst_28202;
var state_28229__$1 = (function (){var statearr_28250 = state_28229;
(statearr_28250[(7)] = inst_28193__$1);

(statearr_28250[(8)] = inst_28194);

return statearr_28250;
})();
var statearr_28251_28271 = state_28229__$1;
(statearr_28251_28271[(2)] = null);

(statearr_28251_28271[(1)] = (2));


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
});})(c__24577__auto___28257,out))
;
return ((function (switch__24410__auto__,c__24577__auto___28257,out){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_28252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28252[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_28252[(1)] = (1));

return statearr_28252;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_28229){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_28229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e28253){if((e28253 instanceof Object)){
var ex__24414__auto__ = e28253;
var statearr_28254_28272 = state_28229;
(statearr_28254_28272[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28273 = state_28229;
state_28229 = G__28273;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_28229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_28229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___28257,out))
})();
var state__24579__auto__ = (function (){var statearr_28255 = f__24578__auto__.call(null);
(statearr_28255[(6)] = c__24577__auto___28257);

return statearr_28255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___28257,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28275 = arguments.length;
switch (G__28275) {
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
var c__24577__auto___28345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___28345,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24410__auto__ = ((function (c__24577__auto___28345,out){
return (function (state_28317){
var state_val_28318 = (state_28317[(1)]);
if((state_val_28318 === (7))){
var inst_28313 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28319_28346 = state_28317__$1;
(statearr_28319_28346[(2)] = inst_28313);

(statearr_28319_28346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (1))){
var inst_28276 = [];
var inst_28277 = inst_28276;
var inst_28278 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28317__$1 = (function (){var statearr_28320 = state_28317;
(statearr_28320[(7)] = inst_28278);

(statearr_28320[(8)] = inst_28277);

return statearr_28320;
})();
var statearr_28321_28347 = state_28317__$1;
(statearr_28321_28347[(2)] = null);

(statearr_28321_28347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (4))){
var inst_28281 = (state_28317[(9)]);
var inst_28281__$1 = (state_28317[(2)]);
var inst_28282 = (inst_28281__$1 == null);
var inst_28283 = cljs.core.not.call(null,inst_28282);
var state_28317__$1 = (function (){var statearr_28322 = state_28317;
(statearr_28322[(9)] = inst_28281__$1);

return statearr_28322;
})();
if(inst_28283){
var statearr_28323_28348 = state_28317__$1;
(statearr_28323_28348[(1)] = (5));

} else {
var statearr_28324_28349 = state_28317__$1;
(statearr_28324_28349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (15))){
var inst_28307 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28325_28350 = state_28317__$1;
(statearr_28325_28350[(2)] = inst_28307);

(statearr_28325_28350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (13))){
var state_28317__$1 = state_28317;
var statearr_28326_28351 = state_28317__$1;
(statearr_28326_28351[(2)] = null);

(statearr_28326_28351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (6))){
var inst_28277 = (state_28317[(8)]);
var inst_28302 = inst_28277.length;
var inst_28303 = (inst_28302 > (0));
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28303)){
var statearr_28327_28352 = state_28317__$1;
(statearr_28327_28352[(1)] = (12));

} else {
var statearr_28328_28353 = state_28317__$1;
(statearr_28328_28353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (3))){
var inst_28315 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28317__$1,inst_28315);
} else {
if((state_val_28318 === (12))){
var inst_28277 = (state_28317[(8)]);
var inst_28305 = cljs.core.vec.call(null,inst_28277);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28317__$1,(15),out,inst_28305);
} else {
if((state_val_28318 === (2))){
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(4),ch);
} else {
if((state_val_28318 === (11))){
var inst_28285 = (state_28317[(10)]);
var inst_28281 = (state_28317[(9)]);
var inst_28295 = (state_28317[(2)]);
var inst_28296 = [];
var inst_28297 = inst_28296.push(inst_28281);
var inst_28277 = inst_28296;
var inst_28278 = inst_28285;
var state_28317__$1 = (function (){var statearr_28329 = state_28317;
(statearr_28329[(11)] = inst_28297);

(statearr_28329[(7)] = inst_28278);

(statearr_28329[(12)] = inst_28295);

(statearr_28329[(8)] = inst_28277);

return statearr_28329;
})();
var statearr_28330_28354 = state_28317__$1;
(statearr_28330_28354[(2)] = null);

(statearr_28330_28354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (9))){
var inst_28277 = (state_28317[(8)]);
var inst_28293 = cljs.core.vec.call(null,inst_28277);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28317__$1,(11),out,inst_28293);
} else {
if((state_val_28318 === (5))){
var inst_28285 = (state_28317[(10)]);
var inst_28278 = (state_28317[(7)]);
var inst_28281 = (state_28317[(9)]);
var inst_28285__$1 = f.call(null,inst_28281);
var inst_28286 = cljs.core._EQ_.call(null,inst_28285__$1,inst_28278);
var inst_28287 = cljs.core.keyword_identical_QMARK_.call(null,inst_28278,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28288 = ((inst_28286) || (inst_28287));
var state_28317__$1 = (function (){var statearr_28331 = state_28317;
(statearr_28331[(10)] = inst_28285__$1);

return statearr_28331;
})();
if(cljs.core.truth_(inst_28288)){
var statearr_28332_28355 = state_28317__$1;
(statearr_28332_28355[(1)] = (8));

} else {
var statearr_28333_28356 = state_28317__$1;
(statearr_28333_28356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (14))){
var inst_28310 = (state_28317[(2)]);
var inst_28311 = cljs.core.async.close_BANG_.call(null,out);
var state_28317__$1 = (function (){var statearr_28335 = state_28317;
(statearr_28335[(13)] = inst_28310);

return statearr_28335;
})();
var statearr_28336_28357 = state_28317__$1;
(statearr_28336_28357[(2)] = inst_28311);

(statearr_28336_28357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (10))){
var inst_28300 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28337_28358 = state_28317__$1;
(statearr_28337_28358[(2)] = inst_28300);

(statearr_28337_28358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (8))){
var inst_28285 = (state_28317[(10)]);
var inst_28281 = (state_28317[(9)]);
var inst_28277 = (state_28317[(8)]);
var inst_28290 = inst_28277.push(inst_28281);
var tmp28334 = inst_28277;
var inst_28277__$1 = tmp28334;
var inst_28278 = inst_28285;
var state_28317__$1 = (function (){var statearr_28338 = state_28317;
(statearr_28338[(7)] = inst_28278);

(statearr_28338[(8)] = inst_28277__$1);

(statearr_28338[(14)] = inst_28290);

return statearr_28338;
})();
var statearr_28339_28359 = state_28317__$1;
(statearr_28339_28359[(2)] = null);

(statearr_28339_28359[(1)] = (2));


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
});})(c__24577__auto___28345,out))
;
return ((function (switch__24410__auto__,c__24577__auto___28345,out){
return (function() {
var cljs$core$async$state_machine__24411__auto__ = null;
var cljs$core$async$state_machine__24411__auto____0 = (function (){
var statearr_28340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28340[(0)] = cljs$core$async$state_machine__24411__auto__);

(statearr_28340[(1)] = (1));

return statearr_28340;
});
var cljs$core$async$state_machine__24411__auto____1 = (function (state_28317){
while(true){
var ret_value__24412__auto__ = (function (){try{while(true){
var result__24413__auto__ = switch__24410__auto__.call(null,state_28317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24413__auto__;
}
break;
}
}catch (e28341){if((e28341 instanceof Object)){
var ex__24414__auto__ = e28341;
var statearr_28342_28360 = state_28317;
(statearr_28342_28360[(5)] = ex__24414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28361 = state_28317;
state_28317 = G__28361;
continue;
} else {
return ret_value__24412__auto__;
}
break;
}
});
cljs$core$async$state_machine__24411__auto__ = function(state_28317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24411__auto____1.call(this,state_28317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24411__auto____0;
cljs$core$async$state_machine__24411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24411__auto____1;
return cljs$core$async$state_machine__24411__auto__;
})()
;})(switch__24410__auto__,c__24577__auto___28345,out))
})();
var state__24579__auto__ = (function (){var statearr_28343 = f__24578__auto__.call(null);
(statearr_28343[(6)] = c__24577__auto___28345);

return statearr_28343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___28345,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1632532622624
