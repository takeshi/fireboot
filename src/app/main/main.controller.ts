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
    awesomeThings: Thing[]

    constructor(awesomeThings: Thing[]) {
      this.awesomeThings = awesomeThings;
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
