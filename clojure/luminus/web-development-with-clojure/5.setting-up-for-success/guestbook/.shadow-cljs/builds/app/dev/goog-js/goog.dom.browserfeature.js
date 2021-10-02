["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/browserfeature.js"],"~:js","goog.provide(\"goog.dom.BrowserFeature\");\ngoog.require(\"goog.userAgent\");\ngoog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS = goog.define(\"goog.dom.ASSUME_NO_OFFSCREEN_CANVAS\", false);\ngoog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS = goog.define(\"goog.dom.ASSUME_OFFSCREEN_CANVAS\", false);\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\n  try {\n    return Boolean((new self.OffscreenCanvas(0, 0)).getContext(contextName));\n  } catch (ex) {\n  }\n  return false;\n};\ngoog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D = !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS && (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS || goog.dom.BrowserFeature.detectOffscreenCanvas_(\"2d\"));\ngoog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);\ngoog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = !goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher(\"1.9.1\");\ngoog.dom.BrowserFeature.CAN_USE_INNER_TEXT = goog.userAgent.IE && !goog.userAgent.isVersionOrHigher(\"9\");\ngoog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY = goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT;\ngoog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\ngoog.dom.BrowserFeature.LEGACY_IE_RANGES = goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9);\n","~:source","// Copyright 2010 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Browser capability checks for the dom package.\n *\n */\n\n\ngoog.provide('goog.dom.BrowserFeature');\n\ngoog.require('goog.userAgent');\n\n\n/**\n * @define {boolean} Whether we know at compile time that the browser doesn't\n * support OffscreenCanvas.\n */\ngoog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS =\n    goog.define('goog.dom.ASSUME_NO_OFFSCREEN_CANVAS', false);\n\n/**\n * @define {boolean} Whether we know at compile time that the browser supports\n * all OffscreenCanvas contexts.\n */\n// TODO(user): Eventually this should default to \"FEATURESET_YEAR >= 202X\".\ngoog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS =\n    goog.define('goog.dom.ASSUME_OFFSCREEN_CANVAS', false);\n\n/**\n * Detects if a particular OffscreenCanvas context is supported.\n * @param {string} contextName name of the context to test.\n * @return {boolean} Whether the browser supports this OffscreenCanvas context.\n * @private\n */\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\n  // This code only gets removed because we forced @nosideeffects on\n  // the functions. See: b/138802376\n  try {\n    return Boolean(new self.OffscreenCanvas(0, 0).getContext(contextName));\n  } catch (ex) {\n  }\n  return false;\n};\n\n/**\n * Whether the browser supports OffscreenCanvas 2D context.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D =\n    !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS &&\n    (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS ||\n     goog.dom.BrowserFeature.detectOffscreenCanvas_('2d'));\n\n/**\n * Whether attributes 'name' and 'type' can be added to an element after it's\n * created. False in Internet Explorer prior to version 9.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES =\n    !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);\n\n/**\n * Whether we can use element.children to access an element's Element\n * children. Available since Gecko 1.9.1, IE 9. (IE<9 also includes comment\n * nodes in the collection.)\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE =\n    !goog.userAgent.GECKO && !goog.userAgent.IE ||\n    goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) ||\n    goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher('1.9.1');\n\n/**\n * Opera, Safari 3, and Internet Explorer 9 all support innerText but they\n * include text nodes in script and style tags. Not document-mode-dependent.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_INNER_TEXT =\n    (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9'));\n\n/**\n * MSIE, Opera, and Safari>=4 support element.parentElement to access an\n * element's parent if it is an Element.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY =\n    goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT;\n\n/**\n * Whether NoScope elements need a scoped element written before them in\n * innerHTML.\n * MSDN: http://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx#1\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\n\n/**\n * Whether we use legacy IE range API.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.LEGACY_IE_RANGES =\n    goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9);\n","~:compiled-at",1633159619766,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.browserfeature.js\",\n\"lineCount\":19,\n\"mappings\":\"AAoBAA,IAAA,CAAKC,OAAL,CAAa,yBAAb,CAAA;AAEAD,IAAA,CAAKE,OAAL,CAAa,gBAAb,CAAA;AAOAF,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBC,0BAAxB,GACIL,IAAA,CAAKM,MAAL,CAAY,qCAAZ,EAAmD,KAAnD,CADJ;AAQAN,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBG,uBAAxB,GACIP,IAAA,CAAKM,MAAL,CAAY,kCAAZ,EAAgD,KAAhD,CADJ;AASAN,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBI,sBAAxB,GAAiDC,QAAQ,CAACC,WAAD,CAAc;AAGrE,KAAI;AACF,WAAOC,OAAA,CAAQ,CAAA,IAAIC,IAAJ,CAASC,eAAT,CAAyB,CAAzB,EAA4B,CAA5B,CAAA,EAA+BC,UAA/B,CAA0CJ,WAA1C,CAAR,CAAP;AADE,GAEF,QAAOK,EAAP,CAAW;;AAEb,SAAO,KAAP;AAPqE,CAAvE;AAcAf,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBY,mBAAxB,GACI,CAAChB,IAAD,CAAMG,GAAN,CAAUC,cAAV,CAAyBC,0BAD7B,KAEKL,IAFL,CAEUG,GAFV,CAEcC,cAFd,CAE6BG,uBAF7B,IAGKP,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBI,sBAAxB,CAA+C,IAA/C,CAHL;AAUAR,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBa,+BAAxB,GACI,CAACjB,IAAD,CAAMkB,SAAN,CAAgBC,EADpB,IAC0BnB,IAAA,CAAKkB,SAAL,CAAeE,sBAAf,CAAsC,CAAtC,CAD1B;AASApB,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBiB,0BAAxB,GACI,CAACrB,IAAD,CAAMkB,SAAN,CAAgBI,KADpB,IAC6B,CAACtB,IAAD,CAAMkB,SAAN,CAAgBC,EAD7C,IAEInB,IAFJ,CAESkB,SAFT,CAEmBC,EAFnB,IAEyBnB,IAAA,CAAKkB,SAAL,CAAeE,sBAAf,CAAsC,CAAtC,CAFzB,IAGIpB,IAHJ,CAGSkB,SAHT,CAGmBI,KAHnB,IAG4BtB,IAAA,CAAKkB,SAAL,CAAeK,iBAAf,CAAiC,OAAjC,CAH5B;AAUAvB,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBoB,kBAAxB,GACKxB,IADL,CACUkB,SADV,CACoBC,EADpB,IAC0B,CAACnB,IAAA,CAAKkB,SAAL,CAAeK,iBAAf,CAAiC,GAAjC,CAD3B;AAQAvB,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBqB,+BAAxB,GACIzB,IADJ,CACSkB,SADT,CACmBC,EADnB,IACyBnB,IADzB,CAC8BkB,SAD9B,CACwCQ,KADxC,IACiD1B,IADjD,CACsDkB,SADtD,CACgES,MADhE;AASA3B,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwBwB,+BAAxB,GAA0D5B,IAA1D,CAA+DkB,SAA/D,CAAyEC,EAAzE;AAMAnB,IAAA,CAAKG,GAAL,CAASC,cAAT,CAAwByB,gBAAxB,GACI7B,IADJ,CACSkB,SADT,CACmBC,EADnB,IACyB,CAACnB,IAAA,CAAKkB,SAAL,CAAeE,sBAAf,CAAsC,CAAtC,CAD1B;;\",\n\"sources\":[\"goog/dom/browserfeature.js\"],\n\"sourcesContent\":[\"// Copyright 2010 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Browser capability checks for the dom package.\\n *\\n */\\n\\n\\ngoog.provide('goog.dom.BrowserFeature');\\n\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile time that the browser doesn't\\n * support OffscreenCanvas.\\n */\\ngoog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS =\\n    goog.define('goog.dom.ASSUME_NO_OFFSCREEN_CANVAS', false);\\n\\n/**\\n * @define {boolean} Whether we know at compile time that the browser supports\\n * all OffscreenCanvas contexts.\\n */\\n// TODO(user): Eventually this should default to \\\"FEATURESET_YEAR >= 202X\\\".\\ngoog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS =\\n    goog.define('goog.dom.ASSUME_OFFSCREEN_CANVAS', false);\\n\\n/**\\n * Detects if a particular OffscreenCanvas context is supported.\\n * @param {string} contextName name of the context to test.\\n * @return {boolean} Whether the browser supports this OffscreenCanvas context.\\n * @private\\n */\\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\\n  // This code only gets removed because we forced @nosideeffects on\\n  // the functions. See: b/138802376\\n  try {\\n    return Boolean(new self.OffscreenCanvas(0, 0).getContext(contextName));\\n  } catch (ex) {\\n  }\\n  return false;\\n};\\n\\n/**\\n * Whether the browser supports OffscreenCanvas 2D context.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D =\\n    !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS &&\\n    (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS ||\\n     goog.dom.BrowserFeature.detectOffscreenCanvas_('2d'));\\n\\n/**\\n * Whether attributes 'name' and 'type' can be added to an element after it's\\n * created. False in Internet Explorer prior to version 9.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES =\\n    !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);\\n\\n/**\\n * Whether we can use element.children to access an element's Element\\n * children. Available since Gecko 1.9.1, IE 9. (IE<9 also includes comment\\n * nodes in the collection.)\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE =\\n    !goog.userAgent.GECKO && !goog.userAgent.IE ||\\n    goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) ||\\n    goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher('1.9.1');\\n\\n/**\\n * Opera, Safari 3, and Internet Explorer 9 all support innerText but they\\n * include text nodes in script and style tags. Not document-mode-dependent.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_INNER_TEXT =\\n    (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9'));\\n\\n/**\\n * MSIE, Opera, and Safari>=4 support element.parentElement to access an\\n * element's parent if it is an Element.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY =\\n    goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT;\\n\\n/**\\n * Whether NoScope elements need a scoped element written before them in\\n * innerHTML.\\n * MSDN: http://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx#1\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\\n\\n/**\\n * Whether we use legacy IE range API.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.LEGACY_IE_RANGES =\\n    goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9);\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"BrowserFeature\",\"ASSUME_NO_OFFSCREEN_CANVAS\",\"define\",\"ASSUME_OFFSCREEN_CANVAS\",\"detectOffscreenCanvas_\",\"goog.dom.BrowserFeature.detectOffscreenCanvas_\",\"contextName\",\"Boolean\",\"self\",\"OffscreenCanvas\",\"getContext\",\"ex\",\"OFFSCREEN_CANVAS_2D\",\"CAN_ADD_NAME_OR_TYPE_ATTRIBUTES\",\"userAgent\",\"IE\",\"isDocumentModeOrHigher\",\"CAN_USE_CHILDREN_ATTRIBUTE\",\"GECKO\",\"isVersionOrHigher\",\"CAN_USE_INNER_TEXT\",\"CAN_USE_PARENT_ELEMENT_PROPERTY\",\"OPERA\",\"WEBKIT\",\"INNER_HTML_NEEDS_SCOPED_ELEMENT\",\"LEGACY_IE_RANGES\"]\n}\n"]