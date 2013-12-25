function applyTooltips(){$(document).foundation({tooltips:{selector:".has-tip",additional_inheritable_classes:[],tooltip_class:".tooltip",touch_close_text:"tap to close",disable_for_touch:!1,tip_template:function(a,b){return'<span data-selector="'+a+'" class="'+Foundation.libs.tooltips.settings.tooltipClass.substring(1)+'">'+b+'<span class="nub"></span></span>'}}})}window.haDash={API:"10.0.54.74"==document.location.host?"http://10.0.54.74":"http://api.hyperaud.io/v1",Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";this.router=new this.Routers.Router,Backbone.history.start({pushState:!0}),this.whoami(),$("a.media").click(function(a){a.preventDefault(),haDash.router.navigate("media/",{trigger:!0})}),$("a.mixes").click(function(a){a.preventDefault(),haDash.router.navigate("mixes/",{trigger:!0})}),$("a.logout").click(function(a){a.preventDefault(),haDash.router.navigate("signout/",{trigger:!0})}),$("a.register").click(function(a){a.preventDefault(),haDash.router.navigate("secret-signup/",{trigger:!0})}),$("a.login").click(function(a){a.preventDefault(),haDash.router.navigate("secret-signin/",{trigger:!0})})},user:null,whoami:function(a){$.ajax({url:this.API+"/whoami",xhrFields:{withCredentials:!0},success:function(b){b.user?(window.haDash.user=b.user,$("body").removeClass("anonymous").addClass("user")):(window.haDash.user=null,$("body").removeClass("user").addClass("anonymous")),a&&a()}})}},$(document).ready(function(){"use strict";haDash.init(),$(document).foundation()}),this.JST=this.JST||{},this.JST["app/scripts/templates/addMedia.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<h2>Add YouTube Video</h2>\n\n<p class="lead">Please input the full URL of an YouTube video below</p>\n\n<input id="yt" type="text" class="large" placeholder="youtube video">\n\n<button class="button primary">Add</button>\n\n<a class="close-reveal-modal">&#215;</a>\n';return __p},this.JST["app/scripts/templates/media.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<td class="span1"><img src="http://placekitten.com/g/100/100" class=""></td>\n<td class="span2 label">'+(null==(__t=label)?"":__t)+'</td>\n<td class="span4">'+(null==(__t=desc)?"":__t)+'</td>\n<td class="span2">24th Dec 2014, '+(null==(__t=transcripts.length)?"":__t)+"</td>\n<td>"+(null==(__t=owner)?"":__t)+"</td>\n";return __p},this.JST["app/scripts/templates/mediaList.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<div class="user">\n\n	\n	<table>\n	  <caption>Your Media</caption>\n	  <thead>\n	    <tr>\n	      <th class="span1">Head caption</th>\n	      <th class="span2">Head caption</th>\n	      <th class="span4">Head caption</th>\n	      <th class="span2">Head caption</th>\n	      <th>Head caption</th>\n	    </tr>\n	  </thead>\n	  <tfoot>\n	    <tr>\n	      <td class="span1">Foot caption</td>\n	      <td class="span2">Foot caption</td>\n	      <td class="span4">Foot caption</td>\n	      <td class="span2">Foot caption</td>\n	      <td>Foot caption</td>\n	    </tr>\n	  </tfoot>\n	  <tbody class="yours"></tbody>\n	</table>\n	\n	<button id="addMedia" class="button primary">Add Media</button>\n</div>\n\n\n<table>\n  <caption>Recent Media</caption>\n  <thead>\n    <tr>\n      <th class="span1">Head caption</th>\n      <th class="span2">Head caption</th>\n      <th class="span4">Head caption</th>\n      <th class="span2">Head caption</th>\n      <th>Head caption</th>\n    </tr>\n  </thead>\n  <tfoot>\n    <tr>\n      <td class="span1">Foot caption</td>\n      <td class="span2">Foot caption</td>\n      <td class="span4">Foot caption</td>\n      <td class="span2">Foot caption</td>\n      <td>Foot caption</td>\n    </tr>\n  </tfoot>\n  <tbody class="other"></tbody>\n</table>\n\n\n\n<div id="previewModal" class="reveal-modal" data-reveal>\n</div>\n\n<div id="addMediaModal" class="reveal-modal" data-reveal>\n</div>\n\n';return __p},this.JST["app/scripts/templates/mediaPreview.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape,Array.prototype.join}with(obj){__p+="<h2>"+(null==(__t=label)?"":__t)+"</h2>\n<video controls>\n	";for(s in source)__p+='\n	   <source src="'+(null==(__t=source[s].url)?"":__t)+'" type="'+(null==(__t=source[s].type)?"":__t)+'">\n	';__p+='\n</video>\n<p class="lead">'+(null==(__t=desc)?"":__t)+"</p>\n\n<ol>\n	";for(var i=0;i<transcripts.length;i++)__p+="\n   		<li>"+(null==(__t=transcripts[i].label)?"":__t)+"</li>\n	";__p+='\n</ol>\n\n<a class="button primary" target="_new" href="http://hyperaud.io/maker/?m='+(null==(__t=_id)?"":__t)+'">Create Transcript</a>\n<a class="button primary" target="_new" href="http://hyperaud.io/converter/?m='+(null==(__t=_id)?"":__t)+'">Convert Transcript</a>\n\n<a class="close-reveal-modal">&#215;</a>\n'}return __p},this.JST["app/scripts/templates/mix.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<td class="span1"><img src="http://placekitten.com/g/100/100" class=""></td>\n<td class="span2 label">'+(null==(__t=label)?"":__t)+'</td>\n<td class="span4">'+(null==(__t=desc)?"":__t)+'</td>\n<td class="span2">24th Dec 2014</td>\n<td>'+(null==(__t=owner)?"":__t)+"</td>\n";return __p},this.JST["app/scripts/templates/mixList.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<div class="user">\n\n	\n	<table>\n	  <caption>Your Mixes</caption>\n	  <thead>\n	    <tr>\n	      <th class="span1">Head caption</th>\n	      <th class="span2">Head caption</th>\n	      <th class="span4">Head caption</th>\n	      <th class="span2">Head caption</th>\n	      <th>Head caption</th>\n	    </tr>\n	  </thead>\n	  <tfoot>\n	    <tr>\n	      <td class="span1">Foot caption</td>\n	      <td class="span2">Foot caption</td>\n	      <td class="span4">Foot caption</td>\n	      <td class="span2">Foot caption</td>\n	      <td>Foot caption</td>\n	    </tr>\n	  </tfoot>\n	  <tbody class="yours"></tbody>\n	</table>\n	\n	<a class="button primary" href="http://hyperaud.io/pad/" target="_new">Create Mix</a>\n</div>\n\n\n<table>\n  <caption>Recent Mixes</caption>\n  <thead>\n    <tr>\n      <th class="span1">Head caption</th>\n      <th class="span2">Head caption</th>\n      <th class="span4">Head caption</th>\n      <th class="span2">Head caption</th>\n      <th>Head caption</th>\n    </tr>\n  </thead>\n  <tfoot>\n    <tr>\n      <td class="span1">Foot caption</td>\n      <td class="span2">Foot caption</td>\n      <td class="span4">Foot caption</td>\n      <td class="span2">Foot caption</td>\n      <td>Foot caption</td>\n    </tr>\n  </tfoot>\n  <tbody class="other"></tbody>\n</table>\n\n';return __p},this.JST["app/scripts/templates/signIn.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<hgroup class="section-head">\n  <h1 class="section-head-heading">\n    Sign In\n  </h1>\n</hgroup>\n<div class="row">\n  <div class="large-8 medium-8 medium-offset-2 small-12 columns large-offset-2">\n    <form id="loginForm" class="form">\n      <div class="form-component">\n        <label for="username" class="form-label centered">Username</label>\n        <input type="text" name="username" id="username" class="form-input text-input block large centered" placeholder="Username">\n				<!-- <p style="display:none" class="form-alert">Wrong username.</p> -->\n      </div>\n      <div class="form-component">\n        <label for="password" class="form-label centered">Password</label>\n        <input type="password" name="password" id="password" class="form-input text-input block large centered" placeholder="Password">\n        <p id="loginFormError" style="display:none" class="form-alert">\n          Wrong username or password.\n        </p>\n      </div>\n      <div class="form-component actions">\n        <input id="signin" type="submit" class="button large primary" value="Sign In">\n      </div>\n    </form>\n  </div>\n</div>\n';return __p},this.JST["app/scripts/templates/signUp.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<hgroup class="section-head">\n  <h1 class="section-head-heading">\n    Sign up\n  </h1>\n</hgroup>\n<div class="row">\n  <div class="large-8 medium-8 small-12 columns large-offset-2 medium-offset-2">\n    <form id="registerForm" class="form">\n      <div class="form-component">\n        <label for="username" class="form-label centered">Username</label> <input id="username" type="text" name="username" class="form-input text-input block large centered" placeholder="Username">\n        <p id="registerFormError" style="display:none" class="form-alert">\n          Wrong username.\n        </p>\n      </div>\n      <div class="form-component">\n        <label for="password" class="form-label centered">Password</label> <input id="password" type="password" name="password" class="form-input text-input block large centered" placeholder="Password">\n      </div>\n      <div class="form-component actions">\n        <input id="signup" type="submit" class="button large primary" value="Sign up">\n      </div>\n    </form>\n  </div>\n</div>\n</div>\n';return __p},haDash.Models=haDash.Models||{},function(){"use strict";haDash.Models.MixModel=Backbone.Model.extend({idAttribute:"_id",defaults:function(){return{label:"Empty",desc:"no content",type:"text",owner:null,meta:{}}}})}(),haDash.Collections=haDash.Collections||{},function(){"use strict";haDash.Collections.MixCollection=Backbone.Collection.extend({model:haDash.Models.MixModel,url:function(){return haDash.API+"/mixes"}})}(),haDash.Routers=haDash.Routers||{},function(){"use strict";haDash.Routers.Router=Backbone.Router.extend({routes:{"":"dashboard","mixes/":"mixes","media/":"media","secret-signin/":"signin","signout/":"signout","secret-signup/":"signup"},dashboard:function(){console.log("Dashboard N/A")},mixes:function(){haDash.mixListView=new haDash.Views.MixListView({collection:new haDash.Collections.MixCollection})},media:function(){haDash.mediaListView=new haDash.Views.MediaListView({collection:new haDash.Collections.MediaCollection})},signin:function(){haDash.signInView=new haDash.Views.SignInView({})},signout:function(){$.ajax({url:haDash.API+"/logout",xhrFields:{withCredentials:!0},success:function(){haDash.whoami(function(){haDash.router.navigate("mixes/",{trigger:!0})})}})},signup:function(){haDash.signUpView=new haDash.Views.SignUpView({})}})}(),haDash.Views=haDash.Views||{},function(){"use strict";haDash.Views.MixView=Backbone.View.extend({tagName:"tr",template:JST["app/scripts/templates/mix.ejs"],initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}})}(),haDash.Views=haDash.Views||{},function(){"use strict";haDash.Views.MixListView=Backbone.View.extend({el:"#main",template:JST["app/scripts/templates/mixList.ejs"],initialize:function(){this.render(),this.listenTo(this.collection,"add",this.addItem),this.listenTo(this.collection,"reset",this.addAllItems),this.collection.fetch()},render:function(){return this.$el.html(this.template()),this},addItem:function(a){var b=new haDash.Views.MixView({model:a});haDash.user&&haDash.user.username==a.get("owner")?this.$("tbody.your").append(b.render().el):this.$("tbody.other").append(b.render().el)},addAllItems:function(){this.collection.each(this.addItem,this)}})}(),haDash.Views=haDash.Views||{},function(){"use strict";haDash.Views.SignInView=Backbone.View.extend({el:"#main",template:JST["app/scripts/templates/signIn.ejs"],initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this},events:{'click #loginForm input[type="submit"]':"signin"},signin:function(a){a.preventDefault(),$.ajax({url:haDash.API+"/login",xhrFields:{withCredentials:!0},method:"post",data:{username:$("#username").val(),password:$("#password").val()}}).done(function(a){console.log(a),a.user?(window.haDash.user=a.user,$("body").removeClass("anonymous").addClass("user"),haDash.router.navigate("mixes/",{trigger:!0})):(window.haDash.user=null,$("body").removeClass("user").addClass("anonymous"))}).fail(function(){$("#loginFormError").show()})}})}(),haDash.Views=haDash.Views||{},function(){"use strict";haDash.Views.SignUpView=Backbone.View.extend({el:"#main",template:JST["app/scripts/templates/signUp.ejs"],initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this},events:{'click #registerForm input[type="submit"]':"signup"},signup:function(a){a.preventDefault(),$.ajax({url:haDash.API+"/register",xhrFields:{withCredentials:!0},method:"post",data:{username:$("#username").val(),password:$("#password").val()}}).done(function(a){console.log(a)}).fail(function(){$("#registerFormError").show()})}})}(),haDash.Models=haDash.Models||{},function(){"use strict";haDash.Models.MediaModel=Backbone.Model.extend({idAttribute:"_id",defaults:function(){return{label:"Empty",desc:"no content",type:"video",owner:null,meta:{},transcripts:[]}}})}(),haDash.Collections=haDash.Collections||{},function(){"use strict";haDash.Collections.MediaCollection=Backbone.Collection.extend({model:haDash.Models.MediaModel,url:function(){return haDash.API+"/media"}})}(),haDash.Views=haDash.Views||{},function(){"use strict";haDash.Views.MediaView=Backbone.View.extend({tagName:"tr",template:JST["app/scripts/templates/media.ejs"],initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this},events:{"click .label":"preview"},preview:function(){var a=this.model;a.fetch(),new haDash.Views.MediaPreviewView({model:a}).render()}})}(),haDash.Views=haDash.Views||{},function(){"use strict";haDash.Views.MediaListView=Backbone.View.extend({el:"#main",template:JST["app/scripts/templates/mediaList.ejs"],initialize:function(){this.render(),this.listenTo(this.collection,"add",this.addItem),this.listenTo(this.collection,"reset",this.addAllItems),this.collection.fetch()},render:function(){return this.$el.html(this.template()),this},addItem:function(a){var b=new haDash.Views.MediaView({model:a});haDash.user&&haDash.user.username==a.get("owner")?this.$("tbody.your").append(b.render().el):this.$("tbody.other").append(b.render().el)},addAllItems:function(){this.collection.each(this.addItem,this)},events:{"click #addMedia":"addMedia"},addMedia:function(){new haDash.Views.AddMediaView({model:new haDash.Models.MediaModel}).render()}})}(),haDash.Views=haDash.Views||{},function(){"use strict";haDash.Views.MediaPreviewView=Backbone.View.extend({el:"#previewModal",template:JST["app/scripts/templates/mediaPreview.ejs"],initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.$el.foundation("reveal","open"),this}})}(),haDash.Views=haDash.Views||{},function(){"use strict";haDash.Views.AddMediaView=Backbone.View.extend({el:"#addMediaModal",template:JST["app/scripts/templates/addMedia.ejs"],initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.$el.foundation("reveal","open"),this},events:{"click button":"addYT"},addYT:function(){var a=new URI(this.$el.find("input").val()),b=a.search(!0).v;console.log(b);var c=this.model;$.ajax({url:"http://gdata.youtube.com/feeds/api/videos/"+b+"?v=2&alt=json",success:function(a){console.log(a),c.set("owner",haDash.user.username),c.set("label",a.entry.title.$t),c.set("desc",a.entry.media$group.media$description.$t),c.set("source",{youtube:{type:"video/youtube",url:"http://www.youtube.com/watch?v="+b}}),console.log(c),haDash.mediaListView.collection.push(c),c.save()}})}})}();