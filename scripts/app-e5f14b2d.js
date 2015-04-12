"use strict";var fireboot;!function(t){var e=function(){function t(t){t.date=new Date}return t.$inject=["$scope"],t}();t.NavbarCtrl=e}(fireboot||(fireboot={}));var fireboot;!function(t){var e=function(){function t(t,e,r,o){this.title=t,this.url=e,this.description=r,this.logo=o,this.rank=Math.random()}return t}(),r=function(){function t(t){var r=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"jQuery",url:"http://jquery.com/",description:"jQuery is a fast, small, and feature-rich JavaScript library.",logo:"jquery.jpg"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"TypeScript",url:"http://www.typescriptlang.org/",description:"TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",logo:"typescript.png"}];t.awesomeThings=new Array,r.forEach(function(r){t.awesomeThings.push(new e(r.title,r.url,r.description,r.logo))})}return t.$inject=["$scope"],t}();t.MainCtrl=r}(fireboot||(fireboot={}));var fireboot;!function(t){angular.module("fireboot",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ngMaterial"]).controller("MainCtrl",t.MainCtrl).controller("NavbarCtrl",t.NavbarCtrl).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}),e.otherwise("/")}])}(fireboot||(fireboot={})),angular.module("fireboot").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="vertical" layout-fill=""><header ng-include="\'components/navbar/navbar.html\'"></header><md-content><section class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn" ng-href="#">Splendid!</a></p></section><div class="techs" layout-align="center"><md-card ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></md-card></div></md-content><footer><md-toolbar layout="row" layout-align="center center"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></md-toolbar></footer></div>'),t.put("components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'yyyy-MM-dd\' }}</md-button></md-toolbar>')}]);