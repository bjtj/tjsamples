["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/freelist.js"],"~:js","goog.provide(\"goog.async.FreeList\");\ngoog.async.FreeList = function(create, reset, limit) {\n  this.limit_ = limit;\n  this.create_ = create;\n  this.reset_ = reset;\n  this.occupants_ = 0;\n  this.head_ = null;\n};\ngoog.async.FreeList.prototype.get = function() {\n  var item;\n  if (this.occupants_ > 0) {\n    this.occupants_--;\n    item = this.head_;\n    this.head_ = item.next;\n    item.next = null;\n  } else {\n    item = this.create_();\n  }\n  return item;\n};\ngoog.async.FreeList.prototype.put = function(item) {\n  this.reset_(item);\n  if (this.occupants_ < this.limit_) {\n    this.occupants_++;\n    item.next = this.head_;\n    this.head_ = item;\n  }\n};\ngoog.async.FreeList.prototype.occupants = function() {\n  return this.occupants_;\n};\n","~:source","// Copyright 2015 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Simple freelist.\n *\n * An anterative to goog.structs.SimplePool, it imposes the requirement that the\n * objects in the list contain a \"next\" property that can be used to maintain\n * the pool.\n */\n\ngoog.provide('goog.async.FreeList');\n\n\n/**\n * @template ITEM\n */\ngoog.async.FreeList = class {\n  /**\n   * @param {function():ITEM} create\n   * @param {function(ITEM):void} reset\n   * @param {number} limit\n   */\n  constructor(create, reset, limit) {\n    /** @private @const {number} */\n    this.limit_ = limit;\n    /** @private @const {function()} */\n    this.create_ = create;\n    /** @private @const {function(ITEM):void} */\n    this.reset_ = reset;\n\n    /** @private {number} */\n    this.occupants_ = 0;\n    /** @private {ITEM} */\n    this.head_ = null;\n  }\n\n  /**\n   * @return {ITEM}\n   */\n  get() {\n    let item;\n    if (this.occupants_ > 0) {\n      this.occupants_--;\n      item = this.head_;\n      this.head_ = item.next;\n      item.next = null;\n    } else {\n      item = this.create_();\n    }\n    return item;\n  }\n\n  /**\n   * @param {ITEM} item An item available for possible future reuse.\n   */\n  put(item) {\n    this.reset_(item);\n    if (this.occupants_ < this.limit_) {\n      this.occupants_++;\n      item.next = this.head_;\n      this.head_ = item;\n    }\n  }\n\n  /**\n   * Visible for testing.\n   * @package\n   * @return {number}\n   */\n  occupants() {\n    return this.occupants_;\n  }\n};\n","~:compiled-at",1633159619819,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.freelist.js\",\n\"lineCount\":32,\n\"mappings\":\"AAsBAA,IAAA,CAAKC,OAAL,CAAa,qBAAb,CAAA;AAMAD,IAAA,CAAKE,KAAL,CAAWC,QAAX,GAMEC,QAAW,CAACC,MAAD,EAASC,KAAT,EAAgBC,KAAhB,CAAuB;AAEhC,MAAA,CAAKC,MAAL,GAAcD,KAAd;AAEA,MAAA,CAAKE,OAAL,GAAeJ,MAAf;AAEA,MAAA,CAAKK,MAAL,GAAcJ,KAAd;AAGA,MAAA,CAAKK,UAAL,GAAkB,CAAlB;AAEA,MAAA,CAAKC,KAAL,GAAa,IAAb;AAXgC,CANpC;AAuBE,IAAAC,CAAA,KAAAA,CAAA,QAAAA,CAAA,SAAAA,CAAA,GAAAA,GAAAA,QAAG,EAAG;AACJ,MAAIC,IAAJ;AACA,MAAI,IAAJ,CAASH,UAAT,GAAsB,CAAtB,CAAyB;AACvB,QAAA,CAAKA,UAAL,EAAA;AACAG,QAAA,GAAO,IAAP,CAAYF,KAAZ;AACA,QAAA,CAAKA,KAAL,GAAaE,IAAb,CAAkBC,IAAlB;AACAD,QAAA,CAAKC,IAAL,GAAY,IAAZ;AAJuB,GAAzB;AAMED,QAAA,GAAO,IAAA,CAAKL,OAAL,EAAP;AANF;AAQA,SAAOK,IAAP;AAVI,CAAND;AAgBA,IAAAG,CAAA,KAAAA,CAAA,QAAAA,CAAA,SAAAA,CAAA,GAAAA,GAAAA,QAAG,CAACF,IAAD,CAAO;AACR,MAAA,CAAKJ,MAAL,CAAYI,IAAZ,CAAA;AACA,MAAI,IAAJ,CAASH,UAAT,GAAsB,IAAtB,CAA2BH,MAA3B,CAAmC;AACjC,QAAA,CAAKG,UAAL,EAAA;AACAG,QAAA,CAAKC,IAAL,GAAY,IAAZ,CAAiBH,KAAjB;AACA,QAAA,CAAKA,KAAL,GAAaE,IAAb;AAHiC;AAF3B,CAAVE;AAcA,IAAAC,CAAA,KAAAA,CAAA,QAAAA,CAAA,SAAAA,CAAA,SAAAA,GAAAA,QAAS,EAAG;AACV,SAAO,IAAP,CAAYN,UAAZ;AADU,CAAZM;;\",\n\"sources\":[\"goog/async/freelist.js\"],\n\"sourcesContent\":[\"// Copyright 2015 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Simple freelist.\\n *\\n * An anterative to goog.structs.SimplePool, it imposes the requirement that the\\n * objects in the list contain a \\\"next\\\" property that can be used to maintain\\n * the pool.\\n */\\n\\ngoog.provide('goog.async.FreeList');\\n\\n\\n/**\\n * @template ITEM\\n */\\ngoog.async.FreeList = class {\\n  /**\\n   * @param {function():ITEM} create\\n   * @param {function(ITEM):void} reset\\n   * @param {number} limit\\n   */\\n  constructor(create, reset, limit) {\\n    /** @private @const {number} */\\n    this.limit_ = limit;\\n    /** @private @const {function()} */\\n    this.create_ = create;\\n    /** @private @const {function(ITEM):void} */\\n    this.reset_ = reset;\\n\\n    /** @private {number} */\\n    this.occupants_ = 0;\\n    /** @private {ITEM} */\\n    this.head_ = null;\\n  }\\n\\n  /**\\n   * @return {ITEM}\\n   */\\n  get() {\\n    let item;\\n    if (this.occupants_ > 0) {\\n      this.occupants_--;\\n      item = this.head_;\\n      this.head_ = item.next;\\n      item.next = null;\\n    } else {\\n      item = this.create_();\\n    }\\n    return item;\\n  }\\n\\n  /**\\n   * @param {ITEM} item An item available for possible future reuse.\\n   */\\n  put(item) {\\n    this.reset_(item);\\n    if (this.occupants_ < this.limit_) {\\n      this.occupants_++;\\n      item.next = this.head_;\\n      this.head_ = item;\\n    }\\n  }\\n\\n  /**\\n   * Visible for testing.\\n   * @package\\n   * @return {number}\\n   */\\n  occupants() {\\n    return this.occupants_;\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"async\",\"FreeList\",\"constructor\",\"create\",\"reset\",\"limit\",\"limit_\",\"create_\",\"reset_\",\"occupants_\",\"head_\",\"get\",\"item\",\"next\",\"put\",\"occupants\"]\n}\n"]