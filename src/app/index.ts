'use strict';

module fireboot {
  var module = angular.module('fireboot',
    [
     'ngAnimate',
     'ngCookies',
     'ngTouch',
     'ngSanitize',
     'ui.router',
     'ngMaterial',
     'firebase'
     ]
  );

  export function Component(directive: angular.IDirective) {

    return function(clazz) {
      console.log('@Component', clazz);

      module.controller(clazz.$componentName, clazz);

      directive.controller = className(clazz.$componentName);
      directive.controllerAs = instanceName(directive.controller);

      if (!directive.restrict) {
        directive.restrict = 'E';
      }

      if (!directive.scope) {
        directive.scope = {};
      }

      var args = [];
      args.push.apply(args, clazz.$inject);
      args.push(function() {
        return directive;
      });

      console.log('@Directive', directive, args);
      module.directive(directive.controllerAs, args);

    }
  }



  export function Directive(clazz: any) {
    var args = [];
    args.push.apply(args, clazz.$inject);
    args.push(function() {
      var directive = new clazz(arguments);
      directive.controller = className(clazz.$componentName) + 'Ctrl';
      directive.controllerAs = instanceName(directive.controller);
      return directive;
    });
    console.log('@Directive', clazz, args);
    module.directive(clazz.$componentName, args);

  }

  function className(name) {
    return name.toUpperCase()[0] + name.substring(1);
  }

  function instanceName(controllreName) {
    controllreName = controllreName.toLowerCase()[0] + controllreName.substring(1);
    controllreName = controllreName
      .replace(/Ctrl$/, '')
      .replace(/Controller$/, '');
    return controllreName;
  }

  export function State(state: angular.ui.IState) {
    return function(clazz) {
      console.log('@Component', clazz);
      module.controller(clazz.$componentName, clazz);

      var controllerName = clazz.$componentName;

      module
        .config(function($stateProvider: angular.ui.IStateProvider) {

        state.controller = controllerName;
        state.controllerAs = instanceName(controllerName);
        state.onExit = clazz.onExit;
        state.onEnter = clazz.onEnter;
        state.resolve = clazz.resolve;

        $stateProvider.state(state);
        console.log('@State', state);
      });

    }
  }

}
