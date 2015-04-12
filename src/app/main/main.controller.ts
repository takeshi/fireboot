'use strict';

module fireboot {
  class Thing {
    public title: string;
    public description: string;
  }

  @fireboot.State({
    name: 'home',
    url: '/',
    templateUrl: 'app/main/main.html'
  })
  class MainCtrl {
    awesomeThings: Thing[];
    data:any;

    constructor($scope,awesomeThings: Thing[],public $firebaseObject){
      this.awesomeThings = awesomeThings;
      var ref = new Firebase("https://popping-heat-3530.firebaseio.com/");
      $scope.data = $firebaseObject(ref);
      $scope.data.$bindTo($scope, "data");

    }

    static resolve = {
      awesomeThings: () => {
        return [
          {
            'title': 'AngularJS',
            'description': 'HTML enhanced for web apps!',
          },
          {
            'title': 'BootStrap',
            'description': 'Test Apps!',
          }
        ];
      }
    }

    static onEnter() {
      console.log('onEnter', arguments);
    }

    static onExit() {
      console.log('onExit', arguments);
    }

  }

}
