'use strict';

module fireboot {

  @fireboot.Component({
   templateUrl:'components/navbar/navbar.html'
  })
  class NavbarCtrl {

    date: Date

    constructor () {
      this.date = new Date();
    }

  }

}
