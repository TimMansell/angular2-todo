var Service = function() {};
Service.prototype.greeting = function() {
  return 'hello';
};

var Cmp = angular.
  Component({
    selector: 'my-app',
    appInjector: [Service]
  }).
  View({
    template: '{{greeting}} world!'
  }).
  Class({
    constructor: [Service, function(service) {
      this.greeting = service.greeting();
    }]
  });

document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(Cmp);
});