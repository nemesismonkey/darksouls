// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());
$(function(){$.extend($.fn.disableTextSelect=function(){return this.each(function(){if($.browser.mozilla){$(this).css("MozUserSelect","none")}else{if($.browser.msie){$(this).bind("selectstart",function(){return false})}else{$(this).mousedown(function(){return false})}}})});$(".noSelect").disableTextSelect()});
jQuery.base64=(function($){var _PADCHAR="=",_ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_VERSION="1.0";function _getbyte64(s,i){var idx=_ALPHA.indexOf(s.charAt(i));if(idx===-1){throw"Cannot decode base64"}return idx}function _decode(s){var pads=0,i,b10,imax=s.length,x=[];s=String(s);if(imax===0){return s}if(imax%4!==0){throw"Cannot decode base64"}if(s.charAt(imax-1)===_PADCHAR){pads=1;if(s.charAt(imax-2)===_PADCHAR){pads=2}imax-=4}for(i=0;i<imax;i+=4){b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12)|(_getbyte64(s,i+2)<<6)|_getbyte64(s,i+3);x.push(String.fromCharCode(b10>>16,(b10>>8)&255,b10&255))}switch(pads){case 1:b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12)|(_getbyte64(s,i+2)<<6);x.push(String.fromCharCode(b10>>16,(b10>>8)&255));break;case 2:b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12);x.push(String.fromCharCode(b10>>16));break}return x.join("")}function _getbyte(s,i){var x=s.charCodeAt(i);if(x>255){throw"INVALID_CHARACTER_ERR: DOM Exception 5"}return x}function _encode(s){if(arguments.length!==1){throw"SyntaxError: exactly one argument required"}s=String(s);var i,b10,x=[],imax=s.length-s.length%3;if(s.length===0){return s}for(i=0;i<imax;i+=3){b10=(_getbyte(s,i)<<16)|(_getbyte(s,i+1)<<8)|_getbyte(s,i+2);x.push(_ALPHA.charAt(b10>>18));x.push(_ALPHA.charAt((b10>>12)&63));x.push(_ALPHA.charAt((b10>>6)&63));x.push(_ALPHA.charAt(b10&63))}switch(s.length-imax){case 1:b10=_getbyte(s,i)<<16;x.push(_ALPHA.charAt(b10>>18)+_ALPHA.charAt((b10>>12)&63)+_PADCHAR+_PADCHAR);break;case 2:b10=(_getbyte(s,i)<<16)|(_getbyte(s,i+1)<<8);x.push(_ALPHA.charAt(b10>>18)+_ALPHA.charAt((b10>>12)&63)+_ALPHA.charAt((b10>>6)&63)+_PADCHAR);break}return x.join("")}return{decode:_decode,encode:_encode,VERSION:_VERSION}}(jQuery));
 /*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(a){a.cookie=function(g,f,k){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(f))||f===null||f===undefined)){k=a.extend({},k);if(f===null||f===undefined){k.expires=-1}if(typeof k.expires==="number"){var h=k.expires,j=k.expires=new Date();j.setDate(j.getDate()+h)}f=String(f);return(document.cookie=[encodeURIComponent(g),"=",k.raw?f:encodeURIComponent(f),k.expires?"; expires="+k.expires.toUTCString():"",k.path?"; path="+k.path:"",k.domain?"; domain="+k.domain:"",k.secure?"; secure":""].join(""))}k=f||{};var b=k.raw?function(i){return i}:decodeURIComponent;var c=document.cookie.split("; ");for(var e=0,d;d=c[e]&&c[e].split("=");e++){if(b(d[0])===g){return b(d[1]||"")}}return null}})(jQuery);
 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
// 
// Version 0.9.8
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
(function(){var a;a=(function(){function b(){this.options_index=0;this.parsed=[]}b.prototype.add_node=function(c){if(c.nodeName==="OPTGROUP"){return this.add_group(c)}else{return this.add_option(c)}};b.prototype.add_group=function(i){var h,e,g,d,f,c;h=this.parsed.length;this.parsed.push({array_index:h,group:true,label:i.label,children:0,disabled:i.disabled});f=i.childNodes;c=[];for(g=0,d=f.length;g<d;g++){e=f[g];c.push(this.add_option(e,h,i.disabled))}return c};b.prototype.add_option=function(d,e,c){if(d.nodeName==="OPTION"){if(d.text!==""){if(e!=null){this.parsed[e].children+=1}this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:d.value,text:d.text,html:d.innerHTML,selected:d.selected,disabled:c===true?c:d.disabled,group_array_index:e,classes:d.className,style:d.style.cssText,title:(d.hasAttribute("title")?d.getAttribute("title"):false),snid:(d.hasAttribute("snid")?d.getAttribute("snid"):false)})}else{this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:true})}return this.options_index+=1}};return b})();a.select_to_array=function(b){var g,f,e,c,d;f=new a();d=b.childNodes;for(e=0,c=d.length;e<c;e++){g=d[e];f.add_node(g)}return f.parsed};this.SelectParser=a}).call(this);(function(){var b,a;a=this;b=(function(){function c(d,e){this.form_field=d;this.options=e!=null?e:{};this.set_default_values();this.is_multiple=this.form_field.multiple;this.default_text_default=this.is_multiple?"Select Some Options":"Select an Option";this.setup();this.set_up_html();this.register_observers();this.finish_setup()}c.prototype.set_default_values=function(){var d=this;this.click_test_action=function(e){return d.test_active_click(e)};this.activate_action=function(e){return d.activate_field(e)};this.active_field=false;this.mouse_on_container=false;this.results_showing=false;this.result_highlighted=null;this.result_single_selected=null;this.allow_single_deselect=(this.options.allow_single_deselect!=null)&&(this.form_field.options[0]!=null)&&this.form_field.options[0].text===""?this.options.allow_single_deselect:false;this.disable_search_threshold=this.options.disable_search_threshold||0;this.search_contains=this.options.search_contains||false;this.choices=0;this.max_selected_options=this.options.max_selected_options||Infinity;return this.results_none_found=this.options.no_results_text||"No results match"};c.prototype.mouse_enter=function(){return this.mouse_on_container=true};c.prototype.mouse_leave=function(){return this.mouse_on_container=false};c.prototype.input_focus=function(d){var e=this;if(!this.active_field){return setTimeout((function(){return e.container_mousedown()}),50)}};c.prototype.input_blur=function(d){var e=this;if(!this.mouse_on_container){this.active_field=false;return setTimeout((function(){return e.blur_test()}),100)}};c.prototype.result_add_option=function(g){var e,f,h,d;if(!g.disabled){g.dom_id=this.container_id+"_o_"+g.array_index;e=g.selected&&this.is_multiple?[]:["active-result"];if(g.selected){e.push("result-selected")}if(g.group_array_index!=null){e.push("group-option")}if(g.classes!==""){e.push(g.classes)}d=(g.title&&g.snid)?'<div style="float:left;clear:none;width:25px;height:25px;background:transparent url('+g.title+") "+g.snid+' no-repeat;"></div>':"";if(d.length>0){h="height:25px;"}else{h=""}f=g.style.cssText!==""?" style='"+g.style+h+"'":"";return'<li id="'+g.dom_id+'" class="'+e.join(" ")+'"'+f+">"+d+g.html+"</li>"}else{return""}};c.prototype.results_update_field=function(){this.result_clear_highlight();this.result_single_selected=null;return this.results_build()};c.prototype.results_default_field=function(){this.result_clear_highlight();this.result_single_selected=null;return this.defaulTo()};c.prototype.results_toggle=function(){if(this.results_showing){return this.results_hide()}else{return this.results_show()}};c.prototype.results_search=function(d){if(this.results_showing){return this.winnow_results()}else{return this.results_show()}};c.prototype.keyup_checker=function(d){var f,e;f=(e=d.which)!=null?e:d.keyCode;this.search_field_scale();switch(f){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices>0){return this.keydown_backstroke()}else{if(!this.pending_backstroke){this.result_clear_highlight();return this.results_search()}}break;case 13:d.preventDefault();if(this.results_showing){return this.result_select(d)}break;case 27:if(this.results_showing){this.results_hide()}return true;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}};c.prototype.generate_field_id=function(){var d;d=this.generate_random_id();this.form_field.id=d;return d};c.prototype.generate_random_char=function(){var f,e,d;f="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";d=Math.floor(Math.random()*f.length);return e=f.substring(d,d+1)};return c})();a.AbstractChosen=b}).call(this);(function(){var e,f,d,a,b=Object.prototype.hasOwnProperty,c=function(j,h){for(var g in h){if(b.call(h,g)){j[g]=h[g]}}function i(){this.constructor=j}i.prototype=h.prototype;j.prototype=new i;j.__super__=h.prototype;return j};a=this;e=jQuery;e.fn.extend({chosen:function(g){if(e.browser.msie&&(e.browser.version==="6.0"||e.browser.version==="7.0")){return this}return this.each(function(h){var i;i=e(this);if(!i.hasClass("chzn-done")){return i.data("chosen",new f(this,g))}})}});f=(function(g){c(h,g);function h(){h.__super__.constructor.apply(this,arguments)}h.prototype.setup=function(){this.form_field_jq=e(this.form_field);return this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")};h.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")};h.prototype.set_up_html=function(){var n,m,j,i,o,k,l;this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id();this.container_id+="_chzn";this.f_width=this.form_field_jq.outerWidth();this.default_text=this.form_field_jq.data("placeholder")?this.form_field_jq.data("placeholder"):this.default_text_default;n=e("<div />",{id:this.container_id,"class":"chzn-container"+(this.is_rtl?" chzn-rtl":""),style:"width: "+this.f_width+"px;"});if(this.is_multiple){n.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>')}else{o=e(this.form_field).find(":selected");if(o.prop("title").length&&o.attr("snid").length){k=o.prop("title");l=o.attr("snid");n.html('<a href="javascript:void(0)" class="chzn-single chzn-default"><div style="float:left;position:relative;left:0;top:0;right;auto;clear:none;width:25px;height:25px;background:transparent url('+k+") "+l+' no-repeat;"></div><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>')}else{n.html('<a href="javascript:void(0)" class="chzn-single chzn-default"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>')}}this.form_field_jq.hide().after(n);this.container=e("#"+this.container_id);this.container.addClass("chzn-container-"+(this.is_multiple?"multi":"single"));this.dropdown=this.container.find("div.chzn-drop").first();m=this.container.height();j=this.f_width-d(this.dropdown);if(j<200){j=200}this.dropdown.css({width:j+"px",top:m+"px"});this.search_field=this.container.find("input").first();this.search_results=this.container.find("ul.chzn-results").first();this.search_field_scale();this.search_no_results=this.container.find("li.no-results").first();if(this.is_multiple){this.search_choices=this.container.find("ul.chzn-choices").first();this.search_container=this.container.find("li.search-field").first()}else{this.search_container=this.container.find("div.chzn-search").first();this.selected_item=this.container.find(".chzn-single").first();this.selected_item.find("span").data("default_formtext",e("#"+this.form_field.id).find("option").first().text());i=j-d(this.search_container)-d(this.search_field);this.search_field.css({width:i+"px"})}this.results_build();this.set_tab_index();return this.form_field_jq.trigger("liszt:ready",{chosen:this})};h.prototype.register_observers=function(){var i=this;this.container.mousedown(function(j){return i.container_mousedown(j)});this.container.mouseup(function(j){return i.container_mouseup(j)});this.container.mouseenter(function(j){return i.mouse_enter(j)});this.container.mouseleave(function(j){return i.mouse_leave(j)});this.search_results.mouseup(function(j){return i.search_results_mouseup(j)});this.search_results.mouseover(function(j){return i.search_results_mouseover(j)});this.search_results.mouseout(function(j){return i.search_results_mouseout(j)});this.form_field_jq.bind("liszt:updated",function(j){return i.results_update_field(j)});this.form_field_jq.bind("liszt:default",function(j){return i.results_default_field(j)});this.search_field.blur(function(j){return i.input_blur(j)});this.search_field.keyup(function(j){return i.keyup_checker(j)});this.search_field.keydown(function(j){return i.keydown_checker(j)});if(this.is_multiple){this.search_choices.click(function(j){return i.choices_click(j)});return this.search_field.focus(function(j){return i.input_focus(j)})}else{return this.container.click(function(j){return j.preventDefault()})}};h.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled){this.container.addClass("chzn-disabled");this.search_field[0].disabled=true;if(!this.is_multiple){this.selected_item.unbind("focus",this.activate_action)}return this.close_field()}else{this.container.removeClass("chzn-disabled");this.search_field[0].disabled=false;if(!this.is_multiple){return this.selected_item.bind("focus",this.activate_action)}}};h.prototype.container_mousedown=function(i){var j;if(!this.is_disabled){j=i!=null?(e(i.target)).hasClass("search-choice-close"):false;if(i&&i.type==="mousedown"&&!this.results_showing){i.stopPropagation()}if(!this.pending_destroy_click&&!j){if(!this.active_field){if(this.is_multiple){this.search_field.val("")}e(document).click(this.click_test_action);this.results_show()}else{if(!this.is_multiple&&i&&((e(i.target)[0]===this.selected_item[0])||e(i.target).parents("a.chzn-single").length)){i.preventDefault();this.results_toggle()}}return this.activate_field()}else{return this.pending_destroy_click=false}}};h.prototype.container_mouseup=function(i){if(i.target.nodeName==="ABBR"){return this.results_reset(i)}};h.prototype.blur_test=function(i){if(!this.active_field&&this.container.hasClass("chzn-container-active")){return this.close_field()}};h.prototype.close_field=function(){e(document).unbind("click",this.click_test_action);if(!this.is_multiple){this.selected_item.attr("tabindex",this.search_field.attr("tabindex"));this.search_field.attr("tabindex",-1)}this.active_field=false;this.results_hide();this.container.removeClass("chzn-container-active");this.winnow_results_clear();this.clear_backstroke();this.show_search_field_default();return this.search_field_scale()};h.prototype.activate_field=function(){if(!this.is_multiple&&!this.active_field){this.search_field.attr("tabindex",this.selected_item.attr("tabindex"));this.selected_item.attr("tabindex",-1)}this.container.addClass("chzn-container-active");this.active_field=true;this.search_field.val(this.search_field.val());return this.search_field.focus()};h.prototype.test_active_click=function(i){if(e(i.target).parents("#"+this.container_id).length){return this.active_field=true}else{return this.close_field()}};h.prototype.defaulTo=function(){this.selected_item.find("span").text(this.selected_item.find("span").data("default_formtext"));if(this.selected_item.find("div").length>0){this.selected_item.find("div").first().css("background-position","-10000px -10000px")}};h.prototype.results_build=function(){var j,m,l,i,k;this.parsing=true;this.results_data=a.SelectParser.select_to_array(this.form_field);if(this.is_multiple&&this.choices>0){this.search_choices.find("li.search-choice").remove();this.choices=0}else{if(!this.is_multiple){this.selected_item.find("span").text(this.default_text);if(this.form_field.options.length<=this.disable_search_threshold){this.container.addClass("chzn-container-single-nosearch")}else{this.container.removeClass("chzn-container-single-nosearch")}}}j="";k=this.results_data;for(l=0,i=k.length;l<i;l++){m=k[l];if(m.group){j+=this.result_add_group(m)}else{if(!m.empty){j+=this.result_add_option(m);if(m.selected&&this.is_multiple){this.choice_build(m)}else{if(m.selected&&!this.is_multiple){this.selected_item.removeClass("chzn-default").find("span").text(m.text);if(this.allow_single_deselect){this.single_deselect_control_build()}}}}}}this.search_field_disabled();this.show_search_field_default();this.search_field_scale();this.search_results.html(j);return this.parsing=false};h.prototype.result_add_group=function(i){if(!i.disabled){i.dom_id=this.container_id+"_g_"+i.array_index;return'<li id="'+i.dom_id+'" class="group-result">'+e("<div />").text(i.label).html()+"</li>"}else{return""}};h.prototype.result_do_highlight=function(j){var n,m,k,l,i;if(j.length){this.result_clear_highlight();this.result_highlight=j;this.result_highlight.addClass("highlighted");k=parseInt(this.search_results.css("maxHeight"),10);i=this.search_results.scrollTop();l=k+i;m=this.result_highlight.position().top+this.search_results.scrollTop();n=m+this.result_highlight.outerHeight();if(n>=l){return this.search_results.scrollTop((n-k)>0?n-k:0)}else{if(m<i){return this.search_results.scrollTop(m)}}}};h.prototype.result_clear_highlight=function(){if(this.result_highlight){this.result_highlight.removeClass("highlighted")}return this.result_highlight=null};h.prototype.results_show=function(){var i;if(!this.is_multiple){this.selected_item.addClass("chzn-single-with-drop");if(this.result_single_selected){this.result_do_highlight(this.result_single_selected)}}else{if(this.max_selected_options<=this.choices){this.form_field_jq.trigger("liszt:maxselected",{chosen:this});return false}}i=this.is_multiple?this.container.height():this.container.height()-1;var k=this.container.offset(),j;if(k.top+260-e(document).scrollTop()>e(window).height()){j={bottom:i+"px",left:0,top:"auto"}}else{j={top:i+"px",left:0,bottom:"auto"}}this.dropdown.css(j);this.results_showing=true;this.search_field.focus();this.search_field.val(this.search_field.val());return this.winnow_results()};h.prototype.results_hide=function(){if(!this.is_multiple){this.selected_item.removeClass("chzn-single-with-drop")}this.result_clear_highlight();this.dropdown.css({left:"-9000px"});return this.results_showing=false};h.prototype.set_tab_index=function(j){var i;if(this.form_field_jq.attr("tabindex")){i=this.form_field_jq.attr("tabindex");this.form_field_jq.attr("tabindex",-1);if(this.is_multiple){return this.search_field.attr("tabindex",i)}else{this.selected_item.attr("tabindex",i);return this.search_field.attr("tabindex",-1)}}};h.prototype.show_search_field_default=function(){if(this.is_multiple&&this.choices<1&&!this.active_field){this.search_field.val(this.default_text);return this.search_field.addClass("default")}else{this.search_field.val("");return this.search_field.removeClass("default")}};h.prototype.search_results_mouseup=function(i){var j;j=e(i.target).hasClass("active-result")?e(i.target):e(i.target).parents(".active-result").first();if(j.length){this.result_highlight=j;return this.result_select(i)}};h.prototype.search_results_mouseover=function(i){var j;j=e(i.target).hasClass("active-result")?e(i.target):e(i.target).parents(".active-result").first();if(j){return this.result_do_highlight(j)}};h.prototype.search_results_mouseout=function(i){if(e(i.target).hasClass("active-result"||e(i.target).parents(".active-result").first())){return this.result_clear_highlight()}};h.prototype.choices_click=function(i){i.preventDefault();if(this.active_field&&!(e(i.target).hasClass("search-choice"||e(i.target).parents(".search-choice").first))&&!this.results_showing){return this.results_show()}};h.prototype.choice_build=function(k){var i,j,l=this;if(this.is_multiple&&this.max_selected_options<=this.choices){this.form_field_jq.trigger("liszt:maxselected",{chosen:this});return false}i=this.container_id+"_c_"+k.array_index;this.choices+=1;this.search_container.before('<li class="search-choice" id="'+i+'"><span>'+k.html+'</span><a href="javascript:void(0)" class="search-choice-close" rel="'+k.array_index+'"></a></li>');j=e("#"+i).find("a").first();return j.click(function(m){return l.choice_destroy_link_click(m)})};h.prototype.choice_destroy_link_click=function(i){i.preventDefault();if(!this.is_disabled){this.pending_destroy_click=true;return this.choice_destroy(e(i.target))}else{return i.stopPropagation}};h.prototype.choice_destroy=function(i){this.choices-=1;this.show_search_field_default();if(this.is_multiple&&this.choices>0&&this.search_field.val().length<1){this.results_hide()}this.result_deselect(i.attr("rel"));return i.parents("li").first().remove()};h.prototype.results_reset=function(i){this.form_field.options[0].selected=true;this.selected_item.find("span").text(this.default_text);if(!this.is_multiple){this.selected_item.addClass("chzn-default")}this.show_search_field_default();e(i.target).remove();this.form_field_jq.trigger("change");if(this.active_field){return this.results_hide()}};h.prototype.result_select=function(j){var n,m,l,i;if(this.result_highlight){n=this.result_highlight;m=n.attr("id");this.result_clear_highlight();if(this.is_multiple){this.result_deactivate(n)}else{this.search_results.find(".result-selected").removeClass("result-selected");this.result_single_selected=n;this.selected_item.removeClass("chzn-default")}n.addClass("result-selected");i=m.substr(m.lastIndexOf("_")+1);l=this.results_data[i];l.selected=true;this.form_field.options[l.options_index].selected=true;if(this.is_multiple){this.choice_build(l)}else{var k=this.form_field.options[l.options_index];if(k.title.length>5){this.selected_item.find("div").first().attr("style","float:left;position:relative;left:0;top:0;right;auto;clear:none;width:25px;height:25px;background:transparent url("+k.title+") "+k.getAttribute("snid")+" no-repeat;")}this.selected_item.find("span").first().text(l.text);if(this.allow_single_deselect){this.single_deselect_control_build()}}if(!(j.metaKey&&this.is_multiple)){this.results_hide()}this.search_field.val("");this.form_field_jq.trigger("change");return this.search_field_scale()}};h.prototype.result_activate=function(i){return i.addClass("active-result")};h.prototype.result_deactivate=function(i){return i.removeClass("active-result")};h.prototype.result_deselect=function(k){var i,j;j=this.results_data[k];j.selected=false;this.form_field.options[j.options_index].selected=false;i=e("#"+this.container_id+"_o_"+k);i.removeClass("result-selected").addClass("active-result").show();this.result_clear_highlight();this.winnow_results();this.form_field_jq.trigger("change");return this.search_field_scale()};h.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1){return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')}};h.prototype.winnow_results=function(){var o,q,u,t,k,r,n,x,s,w,v,p,l,j,i,y,z,m;this.no_results_clear();s=0;w=this.search_field.val()===this.default_text?"":e("<div/>").text(e.trim(this.search_field.val())).html();r=this.search_contains?"":"^";k=new RegExp(r+w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i");l=new RegExp(w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i");m=this.results_data;for(j=0,y=m.length;j<y;j++){q=m[j];if(!q.disabled&&!q.empty){if(q.group){e("#"+q.dom_id).css("display","none")}else{if(!(this.is_multiple&&q.selected)){o=false;x=q.dom_id;n=e("#"+x);if(k.test(q.html)){o=true;s+=1}else{if(q.html.indexOf(" ")>=0||q.html.indexOf("[")===0){t=q.html.replace(/\[|\]/g,"").split(" ");if(t.length){for(i=0,z=t.length;i<z;i++){u=t[i];if(k.test(u)){o=true;s+=1}}}}}if(o){if(w.length){v=q.html.search(l);p=q.html.substr(0,v+w.length)+"</em>"+q.html.substr(v+w.length);p=p.substr(0,v)+"<em>"+p.substr(v)}else{p=q.html}titl=(q.title&&q.snid)?'<div style="float:left;clear:none;width:25px;height:25px;background:transparent url('+q.title+") "+q.snid+' no-repeat;"></div>':"";n.html(titl+p);this.result_activate(n);if(q.group_array_index!=null){e("#"+this.results_data[q.group_array_index].dom_id).css("display","list-item")}}else{if(this.result_highlight&&x===this.result_highlight.attr("id")){this.result_clear_highlight()}this.result_deactivate(n)}}}}}if(s<1&&w.length){return this.no_results(w)}else{return this.winnow_results_set_highlight()}};h.prototype.winnow_results_clear=function(){var i,l,m,k,j;this.search_field.val("");l=this.search_results.find("li");j=[];for(m=0,k=l.length;m<k;m++){i=l[m];i=e(i);if(i.hasClass("group-result")){j.push(i.css("display","auto"))}else{if(!this.is_multiple||!i.hasClass("result-selected")){j.push(this.result_activate(i))}else{j.push(void 0)}}}return j};h.prototype.winnow_results_set_highlight=function(){var i,j;if(!this.result_highlight){j=!this.is_multiple?this.search_results.find(".result-selected.active-result"):[];i=j.length?j.first():this.search_results.find(".active-result").first();if(i!=null){return this.result_do_highlight(i)}}};h.prototype.no_results=function(i){var j;j=e('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>');j.find("span").first().html(i);return this.search_results.append(j)};h.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()};h.prototype.keydown_arrow=function(){var j,i;if(!this.result_highlight){j=this.search_results.find("li.active-result").first();if(j){this.result_do_highlight(e(j))}}else{if(this.results_showing){i=this.result_highlight.nextAll("li.active-result").first();if(i){this.result_do_highlight(i)}}}if(!this.results_showing){return this.results_show()}};h.prototype.keyup_arrow=function(){var i;if(!this.results_showing&&!this.is_multiple){return this.results_show()}else{if(this.result_highlight){i=this.result_highlight.prevAll("li.active-result");if(i.length){return this.result_do_highlight(i.first())}else{if(this.choices>0){this.results_hide()}return this.result_clear_highlight()}}}};h.prototype.keydown_backstroke=function(){if(this.pending_backstroke){this.choice_destroy(this.pending_backstroke.find("a").first());return this.clear_backstroke()}else{this.pending_backstroke=this.search_container.siblings("li.search-choice").last();return this.pending_backstroke.addClass("search-choice-focus")}};h.prototype.clear_backstroke=function(){if(this.pending_backstroke){this.pending_backstroke.removeClass("search-choice-focus")}return this.pending_backstroke=null};h.prototype.keydown_checker=function(i){var k,j;k=(j=i.which)!=null?j:i.keyCode;this.search_field_scale();if(k!==8&&this.pending_backstroke){this.clear_backstroke()}switch(k){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:if(this.results_showing&&!this.is_multiple){this.result_select(i)}this.mouse_on_container=false;break;case 13:i.preventDefault();break;case 38:i.preventDefault();this.keyup_arrow();break;case 40:this.keydown_arrow();break}};h.prototype.search_field_scale=function(){var q,i,l,j,o,p,n,k,m;if(this.is_multiple){l=0;n=0;o="position:absolute; left: -1000px; top: -1000px; display:none;";p=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(k=0,m=p.length;k<m;k++){j=p[k];o+=j+":"+this.search_field.css(j)+";"}i=e("<div />",{style:o});i.text(this.search_field.val());e("body").append(i);n=i.width()+25;i.remove();if(n>this.f_width-10){n=this.f_width-10}this.search_field.css({width:n+"px"});q=this.container.height();return this.dropdown.css({top:q+"px"})}};h.prototype.generate_random_id=function(){var i;i="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();while(e("#"+i).length>0){i+=this.generate_random_char()}return i};return h})(AbstractChosen);d=function(g){var h;return h=g.outerWidth()-g.width()};a.get_side_border_padding=d}).call(this);
(function(a){var b=window.localStorage;var c;if(typeof b=="undefined"||typeof window.JSON=="undefined"){c=false}else{c=true}a.totalStorage=function(b,c,d){return a.totalStorage.impl.init(b,c)};a.totalStorage.setItem=function(b,c){return a.totalStorage.impl.setItem(b,c)};a.totalStorage.getItem=function(b){return a.totalStorage.impl.getItem(b)};a.totalStorage.getAll=function(){return a.totalStorage.impl.getAll()};a.totalStorage.impl={init:function(a,b){if(typeof b!="undefined"){return this.setItem(a,b)}else{return this.getItem(a)}},setItem:function(d,e){if(!c){try{a.cookie(d,e);return e}catch(f){console.log("Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality")}}var g=JSON.stringify(e);b.setItem(d,g);return this.parseResult(g)},getItem:function(d){if(!c){try{return this.parseResult(a.cookie(d))}catch(e){return null}}return this.parseResult(b.getItem(d))},getAll:function(){var d=new Array;if(!c){try{var e=document.cookie.split(";");for(var f=0;f<e.length;f++){var g=e[f].split("=");var h=g[0];d.push({key:h,value:this.parseResult(a.cookie(h))})}}catch(i){return null}}else{for(var f in b){if(f.length){d.push({key:f,value:this.parseResult(b.getItem(f))})}}}return d},parseResult:function(a){var b;try{b=JSON.parse(a);if(b=="true"){b=true}if(b=="false"){b=false}if(parseFloat(b)==b){b=parseFloat(b)}}catch(c){}return b}}})(jQuery)