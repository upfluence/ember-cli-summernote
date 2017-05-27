"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,o,a){Object.defineProperty(e,"__esModule",{value:!0});var l=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,l=n.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default}),(0,o.default)(l,a.default.modulePrefix),e.default=l}),define("dummy/components/summer-note",["exports","ember-cli-summernote/components/summer-note"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/controllers/application",["exports","ember","dummy/config/environment"],function(e,n,t){Object.defineProperty(e,"__esModule",{value:!0});var o=n.default.Controller.extend({version:t.default.version});e.default=o}),define("dummy/controllers/examples",["exports","ember"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=n.default.set,o=n.default.Logger,a=n.default.Controller.extend({postContent:"Hello, world!",contentHeight:100,editingDisabled:!1,toolbarOptions:{style:!1,insert:{picture:!1},help:!0},callbackOptions:{onInit:function(){o.debug("Summernote is launched")},onEnter:function(){o.debug("Enter/Return key pressed")},onPaste:function(e){o.debug("Called event paste e: "+JSON.stringify(e))}},actions:{onContentChange:function(e){o.debug("onContentChange action... text:"+e),t(this,"postContent",e)},rerenderCheck:function(e){o.debug("rerenderCheck action... text:"+e),t(this,"postContent",e)}}});e.default=a}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function o(){var e=arguments[1]||arguments[0];if(!1!==t.default.exportApplicationGlobal){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var a,l=t.default.exportApplicationGlobal;a="string"==typeof l?l:n.default.String.classify(t.default.modulePrefix),o[a]||(o[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){Object.defineProperty(e,"__esModule",{value:!0});var o=n.default.Router.extend({location:t.default.locationType});o.map(function(){this.route("examples"),this.route("docs")}),e.default=o}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"qe+YXCeE",block:'{"statements":[[11,"h1",[]],[15,"id","title"],[13],[0,"ember-cli-summernote"],[14],[0,"\\n\\n"],[1,[26,["outlet"]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/summer-note",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"/6WN4NHK",block:'{"statements":[[11,"div",[]],[15,"id","summernote"],[16,"class",[26,["classNames"]],null],[13],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/summer-note.hbs"}})}),define("dummy/templates/docs",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"fFPndPqw",block:'{"statements":[],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/docs.hbs"}})}),define("dummy/templates/examples",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"moz8aAZX",block:'{"statements":[[0,"  "],[11,"div",[]],[15,"class","container"],[13],[0,"\\n\\n    As of version "],[11,"b",[]],[13],[0,"1.1.0"],[14],[0,", the addon embraces "],[11,"b",[]],[13],[0,"DDAU"],[14],[0,".\\n    The "],[11,"b",[]],[13],[0,"content"],[14],[0," property is readonly and "],[11,"b",[]],[13],[0,"onContentChange"],[14],[0," action is used for updated contents.\\n\\n    As a result to follow "],[11,"b",[]],[13],[0,"DDAU"],[14],[0,", the summernote internall callback "],[11,"b",[]],[13],[0,"onChange"],[14],[0," will not be supported through the "],[11,"b",[]],[13],[0,"callbacks"],[14],[0," property in a consumming application.\\n\\n    "],[11,"pre",[]],[13],[0,"\\n    Use the following code to put a wysiwyg editor.\\n    {{summer-note\\n                  height=contentHeight\\n                  btnSize=bs-sm\\n                  airMode=false\\n                  focus=false\\n                  header=\\"Example\\"\\n                  content=(readonly postContent)\\n                  onContentChange=(action \'onContentChange\')\\n                  disabled=myControlVariable\\n                  callbacks=callbackOptions\\n                  toolbarOptions=toolbarOptions}}\\n\\n    "],[14],[0,"\\n\\nExample of configuring the toolbar options.\\n\\n    "],[11,"pre",[]],[13],[0,"\\n    toolbarOptions: {\\n      style: false,\\n      insert: {\\n        picture: false\\n      },\\n      help: true\\n    }\\n    "],[14],[0,"\\n\\n    All callbacks except "],[11,"b",[]],[13],[0,"onChange"],[14],[0," are supported.\\n    The "],[11,"b",[]],[13],[0,"onChange"],[14],[0," callback are used internally for the "],[11,"b",[]],[13],[0,"onContentChange"],[14],[0," action.\\n\\n    "],[11,"pre",[]],[13],[0,"\\n    callbackOptions: {\\n      onInit: function() {\\n        console.log(\'Summernote is launched\');\\n      },\\n      onEnter: function() {\\n        console.log(\'Enter/Return key pressed\');\\n      },\\n      onPaste: function(e) {\\n        console.log(\'Called event paste\');\\n      },\\n    },\\n\\n    "],[14],[0,"\\n\\n    "],[11,"div",[]],[15,"class","container"],[13],[0,"\\n      "],[11,"h3",[]],[13],[0,"Example "],[14],[0,"\\n      "],[1,[33,["summer-note"],null,[["height","btnSize","airMode","focus","header","content","onContentChange","disabled","callbacks","toolbarOptions"],[[28,["contentHeight"]],[28,["bs-sm"]],false,false,"Example",[33,["readonly"],[[28,["postContent"]]],null],[33,["action"],[[28,[null]],"onContentChange"],null],[28,["editingDisabled"]],[28,["callbackOptions"]],[28,["toolbarOptions"]]]]],false],[0,"\\n\\n      "],[11,"p",[]],[13],[0,"Disable editing "],[1,[33,["input"],null,[["type","checked"],["checkbox",[28,["editingDisabled"]]]]],false],[14],[0,"\\n    "],[14],[0,"\\n    "],[11,"div",[]],[15,"class","container"],[13],[0,"\\n      "],[11,"div",[]],[15,"class","wysiwyg-preview"],[13],[0,"\\n        "],[11,"pre",[]],[13],[0,"\\n          "],[1,[26,["postContent"]],true],[0,"\\n        "],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n    "],[11,"button",[]],[5,["action"],[[28,[null]],"rerenderCheck","The editor is rerendered..."]],[13],[0,"\\n        Check rerender with new content\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/examples.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"nwOKuzvc",block:'{"statements":[[11,"div",[]],[15,"class","jumbotron"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","container"],[13],[0,"\\n\\t"],[11,"h2",[]],[15,"id","title"],[13],[0,"ember-cli addon for summernote"],[14],[0,"\\n\\t"],[11,"p",[]],[13],[0,"This is an ember component for rich text editor that integrate summernote."],[14],[0,"\\n\\n  "],[11,"p",[]],[13],[0," "],[11,"h5",[]],[13],[0,"This addon is inspired by  Heather Brysiewicz\'s blog."],[14],[0," "],[14],[0,"\\n\\n\\t"],[6,["link-to"],["examples"],[["class"],["btn btn-primary btn-lg"]],{"statements":[[0,"View the examples »"]],"locals":[]},null],[0,"\\n  "],[14],[0,"\\n\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var n="dummy/config/environment",t=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),o=JSON.parse(unescape(t)),a={default:o};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({});