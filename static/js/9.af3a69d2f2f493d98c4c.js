webpackJsonp([9,11],{201:function(e,t,s){t=e.exports=s(2)(),t.push([e.id,".login{color:#eee;display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.login .title{font-size:2em;font-weight:100;margin-bottom:1em}.login form{width:300px}",""])},227:function(e,t,s){var r=s(201);"string"==typeof r&&(r=[[e.id,r,""]]);s(3)(r,{});r.locals&&(e.exports=r.locals)},350:function(e,t,s){var r=s(11),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},410:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(420),n=r(o),a=s(5),i=r(a);t.default={beforeRouteEnter:function(e,t,s){s(function(t){"out"===e.query.logout&&t.$store.dispatch("logout")}),s()},data:function(){return{user:{username:"",password:""},rules:{username:{required:!0},password:{required:!0}},loading:!1}},mounted:function(){var e=this;this.$nextTick(function(){var t=window.localStorage.getItem("user_history");try{var s=JSON.parse(t);e.user=(0,i.default)({},e.user,s),e.user.username&&e.user.password&&e.onSubmit()}catch(e){}})},methods:{onSubmit:function(e){var t=this;this.loading=!0,this.$post("user/token",this.user).then(function(e){var s=e.data,r=s;return t.$store.dispatch("login",r).then(function(e){window.localStorage.setItem("user_history",(0,n.default)(t.user)),t.$message.success("login success");var s=t.$route.query.redirect||"/";return s&&t.$router.replace(s),e})}).catch(function(){t.loading=!1})}}}},420:function(e,t,s){e.exports={default:s(350),__esModule:!0}},435:function(e,t,s){var r,o;s(227),r=s(410);var n=s(446);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,e.exports=r},446:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-bg"},[s("div",{staticClass:"login"},[s("el-form",{ref:"login",staticClass:"login-form",attrs:{"label-position":"top",rules:e.rules,model:e.user}},[s("div",{staticClass:"title"},[e._v("LOGIN")]),s("el-form-item",{attrs:{prop:"username"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-input",attrs:{autocomplete:"off",placeholder:"Email"},domProps:{value:e._s(e.user.username)},on:{input:function(t){t.target.composing||(e.user.username=t.target.value)}}})]),s("el-form-item",{attrs:{prop:"password"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-input",attrs:{type:"password",autocomplete:"off",placeholder:"Password"},domProps:{value:e._s(e.user.password)},on:{input:function(t){t.target.composing||(e.user.password=t.target.value)}}})]),s("el-form-item",[s("button",{staticClass:"btn btn-block",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.onSubmit(t)}}},[e._v("登录")])])],1)],1)])},staticRenderFns:[]}}});