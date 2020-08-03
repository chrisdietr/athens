goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50491){
var map__50492 = p__50491;
var map__50492__$1 = (((((!((map__50492 == null))))?(((((map__50492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50492):map__50492);
var m = map__50492__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50492__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50495_50619 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50496_50620 = null;
var count__50497_50621 = (0);
var i__50498_50622 = (0);
while(true){
if((i__50498_50622 < count__50497_50621)){
var f_50623 = chunk__50496_50620.cljs$core$IIndexed$_nth$arity$2(null,i__50498_50622);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50623], 0));


var G__50625 = seq__50495_50619;
var G__50626 = chunk__50496_50620;
var G__50627 = count__50497_50621;
var G__50628 = (i__50498_50622 + (1));
seq__50495_50619 = G__50625;
chunk__50496_50620 = G__50626;
count__50497_50621 = G__50627;
i__50498_50622 = G__50628;
continue;
} else {
var temp__5735__auto___50629 = cljs.core.seq(seq__50495_50619);
if(temp__5735__auto___50629){
var seq__50495_50630__$1 = temp__5735__auto___50629;
if(cljs.core.chunked_seq_QMARK_(seq__50495_50630__$1)){
var c__4609__auto___50631 = cljs.core.chunk_first(seq__50495_50630__$1);
var G__50632 = cljs.core.chunk_rest(seq__50495_50630__$1);
var G__50633 = c__4609__auto___50631;
var G__50634 = cljs.core.count(c__4609__auto___50631);
var G__50635 = (0);
seq__50495_50619 = G__50632;
chunk__50496_50620 = G__50633;
count__50497_50621 = G__50634;
i__50498_50622 = G__50635;
continue;
} else {
var f_50636 = cljs.core.first(seq__50495_50630__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50636], 0));


var G__50637 = cljs.core.next(seq__50495_50630__$1);
var G__50638 = null;
var G__50639 = (0);
var G__50640 = (0);
seq__50495_50619 = G__50637;
chunk__50496_50620 = G__50638;
count__50497_50621 = G__50639;
i__50498_50622 = G__50640;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50641 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50641], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50641)))?cljs.core.second(arglists_50641):arglists_50641)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50500_50645 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50501_50646 = null;
var count__50502_50647 = (0);
var i__50503_50648 = (0);
while(true){
if((i__50503_50648 < count__50502_50647)){
var vec__50514_50650 = chunk__50501_50646.cljs$core$IIndexed$_nth$arity$2(null,i__50503_50648);
var name_50651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50514_50650,(0),null);
var map__50517_50652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50514_50650,(1),null);
var map__50517_50653__$1 = (((((!((map__50517_50652 == null))))?(((((map__50517_50652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50517_50652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50517_50652):map__50517_50652);
var doc_50654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50517_50653__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50517_50653__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50651], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50655], 0));

if(cljs.core.truth_(doc_50654)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50654], 0));
} else {
}


var G__50656 = seq__50500_50645;
var G__50657 = chunk__50501_50646;
var G__50658 = count__50502_50647;
var G__50659 = (i__50503_50648 + (1));
seq__50500_50645 = G__50656;
chunk__50501_50646 = G__50657;
count__50502_50647 = G__50658;
i__50503_50648 = G__50659;
continue;
} else {
var temp__5735__auto___50660 = cljs.core.seq(seq__50500_50645);
if(temp__5735__auto___50660){
var seq__50500_50661__$1 = temp__5735__auto___50660;
if(cljs.core.chunked_seq_QMARK_(seq__50500_50661__$1)){
var c__4609__auto___50662 = cljs.core.chunk_first(seq__50500_50661__$1);
var G__50663 = cljs.core.chunk_rest(seq__50500_50661__$1);
var G__50664 = c__4609__auto___50662;
var G__50665 = cljs.core.count(c__4609__auto___50662);
var G__50666 = (0);
seq__50500_50645 = G__50663;
chunk__50501_50646 = G__50664;
count__50502_50647 = G__50665;
i__50503_50648 = G__50666;
continue;
} else {
var vec__50520_50668 = cljs.core.first(seq__50500_50661__$1);
var name_50669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50520_50668,(0),null);
var map__50523_50670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50520_50668,(1),null);
var map__50523_50671__$1 = (((((!((map__50523_50670 == null))))?(((((map__50523_50670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50523_50670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50523_50670):map__50523_50670);
var doc_50672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50523_50671__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50523_50671__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50669], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50673], 0));

if(cljs.core.truth_(doc_50672)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50672], 0));
} else {
}


var G__50674 = cljs.core.next(seq__50500_50661__$1);
var G__50675 = null;
var G__50676 = (0);
var G__50677 = (0);
seq__50500_50645 = G__50674;
chunk__50501_50646 = G__50675;
count__50502_50647 = G__50676;
i__50503_50648 = G__50677;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50525 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50526 = null;
var count__50527 = (0);
var i__50528 = (0);
while(true){
if((i__50528 < count__50527)){
var role = chunk__50526.cljs$core$IIndexed$_nth$arity$2(null,i__50528);
var temp__5735__auto___50678__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50678__$1)){
var spec_50679 = temp__5735__auto___50678__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50679)], 0));
} else {
}


var G__50680 = seq__50525;
var G__50681 = chunk__50526;
var G__50682 = count__50527;
var G__50683 = (i__50528 + (1));
seq__50525 = G__50680;
chunk__50526 = G__50681;
count__50527 = G__50682;
i__50528 = G__50683;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50525);
if(temp__5735__auto____$1){
var seq__50525__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50525__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50525__$1);
var G__50684 = cljs.core.chunk_rest(seq__50525__$1);
var G__50685 = c__4609__auto__;
var G__50686 = cljs.core.count(c__4609__auto__);
var G__50687 = (0);
seq__50525 = G__50684;
chunk__50526 = G__50685;
count__50527 = G__50686;
i__50528 = G__50687;
continue;
} else {
var role = cljs.core.first(seq__50525__$1);
var temp__5735__auto___50688__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50688__$2)){
var spec_50689 = temp__5735__auto___50688__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50689)], 0));
} else {
}


var G__50690 = cljs.core.next(seq__50525__$1);
var G__50691 = null;
var G__50692 = (0);
var G__50693 = (0);
seq__50525 = G__50690;
chunk__50526 = G__50691;
count__50527 = G__50692;
i__50528 = G__50693;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50694 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50695 = cljs.core.ex_cause(t);
via = G__50694;
t = G__50695;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__50545 = datafied_throwable;
var map__50545__$1 = (((((!((map__50545 == null))))?(((((map__50545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50545):map__50545);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50545__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50545__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50545__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50546 = cljs.core.last(via);
var map__50546__$1 = (((((!((map__50546 == null))))?(((((map__50546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50546):map__50546);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50547 = data;
var map__50547__$1 = (((((!((map__50547 == null))))?(((((map__50547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50547):map__50547);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50548 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50548__$1 = (((((!((map__50548 == null))))?(((((map__50548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50548):map__50548);
var top_data = map__50548__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50553 = phase;
var G__50553__$1 = (((G__50553 instanceof cljs.core.Keyword))?G__50553.fqn:null);
switch (G__50553__$1) {
case "read-source":
var map__50554 = data;
var map__50554__$1 = (((((!((map__50554 == null))))?(((((map__50554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50554):map__50554);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50554__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50554__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50557 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50557__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50557,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50557);
var G__50557__$2 = (cljs.core.truth_((function (){var fexpr__50558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50558.cljs$core$IFn$_invoke$arity$1 ? fexpr__50558.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50558.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50557__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50557__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50557__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50559 = top_data;
var G__50559__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50559);
var G__50559__$2 = (cljs.core.truth_((function (){var fexpr__50560 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50560.cljs$core$IFn$_invoke$arity$1 ? fexpr__50560.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50560.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50559__$1);
var G__50559__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50559__$2);
var G__50559__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50559__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50559__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50559__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50561 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(3),null);
var G__50564 = top_data;
var G__50564__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50564,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50564);
var G__50564__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50564__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50564__$1);
var G__50564__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50564__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50564__$2);
var G__50564__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50564__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50564__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50564__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50564__$4;
}

break;
case "execution":
var vec__50566 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50566,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50566,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50566,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50566,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50544_SHARP_){
var or__4185__auto__ = (p1__50544_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__50570 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50570.cljs$core$IFn$_invoke$arity$1 ? fexpr__50570.cljs$core$IFn$_invoke$arity$1(p1__50544_SHARP_) : fexpr__50570.call(null,p1__50544_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50571 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50571__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50571,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50571);
var G__50571__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50571__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50571__$1);
var G__50571__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50571__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50571__$2);
var G__50571__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50571__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50571__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50571__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50571__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50553__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50575){
var map__50576 = p__50575;
var map__50576__$1 = (((((!((map__50576 == null))))?(((((map__50576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50576):map__50576);
var triage_data = map__50576__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50578 = phase;
var G__50578__$1 = (((G__50578 instanceof cljs.core.Keyword))?G__50578.fqn:null);
switch (G__50578__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50579 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50581 = loc;
var G__50582 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50583_50703 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50584_50704 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50585_50705 = true;
var _STAR_print_fn_STAR__temp_val__50586_50706 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50585_50705);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50586_50706);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50573_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50573_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50584_50704);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50583_50703);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50579,G__50580,G__50581,G__50582) : format.call(null,G__50579,G__50580,G__50581,G__50582));

break;
case "macroexpansion":
var G__50587 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50588 = cause_type;
var G__50589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50590 = loc;
var G__50591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50587,G__50588,G__50589,G__50590,G__50591) : format.call(null,G__50587,G__50588,G__50589,G__50590,G__50591));

break;
case "compile-syntax-check":
var G__50592 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50593 = cause_type;
var G__50594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50595 = loc;
var G__50596 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50592,G__50593,G__50594,G__50595,G__50596) : format.call(null,G__50592,G__50593,G__50594,G__50595,G__50596));

break;
case "compilation":
var G__50597 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50598 = cause_type;
var G__50599 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50600 = loc;
var G__50601 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50597,G__50598,G__50599,G__50600,G__50601) : format.call(null,G__50597,G__50598,G__50599,G__50600,G__50601));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50602 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50603 = symbol;
var G__50604 = loc;
var G__50605 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50606_50707 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50607_50708 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50608_50709 = true;
var _STAR_print_fn_STAR__temp_val__50609_50710 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50608_50709);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50609_50710);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50574_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50574_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50607_50708);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50606_50707);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50602,G__50603,G__50604,G__50605) : format.call(null,G__50602,G__50603,G__50604,G__50605));
} else {
var G__50611 = "Execution error%s at %s(%s).\n%s\n";
var G__50612 = cause_type;
var G__50613 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50614 = loc;
var G__50615 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50611,G__50612,G__50613,G__50614,G__50615) : format.call(null,G__50611,G__50612,G__50613,G__50614,G__50615));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50578__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
