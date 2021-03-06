/*!
 ngObserver v1.0.0
 https://github.com/lenilsondc/ng-observer
 License: MIT
*/
(function () {
    'use strict';

    /**
     * 
     * @name ngObserver
     * 
     * @kind ngModule 
     * 
     * @description
     * `ngObserver` is a simple angularjs module which provides
     * integration with the observer pattern and the Scope API
     * via the {@link ngObserver.$observable} service.
     *
     * See {@link ngObserver.$observable} for usage.
     * 
     * Instalation
     * 
     * ````bash
     * npm install --save https://github.com/lenilsondc/ng-observer.git
     * ````
     * 
     * ````html
     * <script src="/node_modules/ng-observer/dist/ng-observer.min.js"></script>
     * ````
     * 
     * ````js
     * angular.module('myApp', ['ngObserver']);
     * ````
     *  
     */
    angular
        .module('ngObserver', [])

    /**
     * 
     * @name $observable 
     * @memberOf ngObserver
     * @kind ngService
     * @description
     * A factory which creates an observable object instance, 
     * see {@link ngObserver.Observable} for more details.
     * 
     * @returns {Observable} An instance of observable "class"  with methods for 
     * the default set of observing operations like `subscribe` and `notify`.
     * 
     * @example You can create a service to retrieve data from the server
     * or to run an async task and use the {@link ngObserver.$observable} 
     * service to notify all the observers.
     *  
     * ````js 
     * angular.module('myApp')
     *      .service('ServiceA', function($observable, $http) {
     *      
     *          var subject = $observable();
     * 
     *          this.getData = function() {
     * 
     *              $http.get('path/to/my/api').then(function (response) {
     *                  subject.notify(response.data);
     *              });
     * 
     *              return subject;
     *          }
     *      });
     * ````
     * 
     * So that from the component side, you can subscribe to that subject
     * and get notified when data is ready.
     * 
     * ````js
     * 
     * angular.module('myApp')
     *      .controller('MyController', function($scope, ServiceA) {
     *      
     *          $scope.data = [];
     * 
     *          init();
     * 
     *          function init() {
     *              ServiceA.getData()
     *                  .subscribe($scope, function (data) {
     *                      $scope.data = data;
     *                  });
     *          }
     *      });
     * ````
     * The previously given example is way too simple, hence it doesn't justify using observers 
     * when it could be done by using promises. However, the reason of using observers is to make 
     * it simple for more complex scenarios like using `webworkers` and `websockets` which promises 
     * doesn't fit as a solution (at least not a simple one).
     * 
     * For example, when using a chat app with websockets to deliver messages to users, promises 
     * doesn't fit this scenario because promises only gets notified once. So to avoid workarounds 
     * with the promise system, observers would deal better with it.
     * 
     * ````js
     * 
     * angular.module('myApp')
     *     .component('chat', {
     *         bindings: {
     *             userId: '<'
     *         },
     *         controller: 'ChatComponentController'
     *     })
     *     .controller('ChatComponentController', function ($scope, resolve, ChatService) {
     *         var self = this;
     * 
     *         self.messages = [];
     * 
     *         self.$onInit = function init() {
     * 
     *             ChatService.connect(self.userId)
     *                 .subscribe($scope, function (message) {
     *                     $scope.messages.push(message);
     *                 });
     *         }
     *     });
     * ````
     */
    angular
        .module('ngObserver')
        .service('$observable', $observable)

    function $observable() {

        return function () {
            return new Observable();
        };
    }

    var Observable = (function () {

        /**
         * Creates a new instance of Observable
         * 
         * @class Observable class
         * @memberOf ngObserver
         */
        function Observable() {
            this.observers = [];
        }

        /**
          * @param $scope {ng.$rootScope.Scope} scope
          * @param fn {Function} observer callback
          * @return {Observable} self
          * @throws InvalidArgumentException
          * @description
          * Subscribe a callback to be triggered when the observable gets notified
          * and add an `unsubscribe` when `$scope` gets destroyed.
          *//**
          * @param fn {Function} observer callback
          * @return {Observable} self
          * @throws InvalidArgumentException
          * @description
          * Subscribe a callback to be triggered when the observable gets notified
          * and without the `$scope`, `unsubscribe` must be called manually.
          */
        Observable.prototype.subscribe = function ($scope, fn) {
            var self = this;

            if (typeof $scope === 'function') {
                fn = $scope;
                $scope = false;
            }

            if (typeof fn !== 'function') {
                throw "InvalidArgumentException: Expect callback to be a fucntion object";
            }

            self.observers.push(fn);

            if ($scope && '$on' in $scope) {
                $scope.$on('$destroy', function () {
                    self.unsubscribe(fn);
                });
            }

            return self;
        };

        /**
          * @param fn {Function} observer callback to be unsubscribed
          * @return {Observable} self
          *
          * @description
          * Unsubscribe callback if it was previously registered
          */
        Observable.prototype.unsubscribe = function (fn) {
            var self = this;

            var idx = self.observers.indexOf(fn);

            if (idx !== -1) {
                self.observers.splice(idx, 1);
            }

            return self;
        };

        /**
          * @param args {any} paramters for the observable callbacks
          * @return {Observable} self
          *
          * @description
          * Notify each observer callbacks
          */
        Observable.prototype.notify = function () {
            var self = this;

            for (var observer in self.observers) {
                self.observers[observer].apply(null, arguments);
            }

            return self;
        };

        return Observable;
    })();
} ());