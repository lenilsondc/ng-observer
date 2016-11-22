<a name="ngObserver"></a>

## ngObserver
`ngObserver` is a simple angularjs module which providesintegration with the observer pattern and the Scope APIvia the [$observable](#ngObserver.$observable) service.See [$observable](#ngObserver.$observable) for usage.Instalation````bashnpm install --save https://github.com/lenilsondc/ng-observer.git````````html<script src="/node_modules/ng-observer/dist/ng-observer.min.js"></script>````````jsangular.module('myApp', ['ngObserver']);````

**Kind**: global ngModule  

* [ngObserver](#ngObserver)
    * [.$observable](#ngObserver.$observable) ⇒ <code>Observable</code>
    * [.Observable](#ngObserver.Observable)
        * [new Observable()](#new_ngObserver.Observable_new)
        * [.subscribe($scope, fn)](#ngObserver.Observable+subscribe) ⇒ <code>Observable</code>
        * [.subscribe(fn)](#ngObserver.Observable+subscribe) ⇒ <code>Observable</code>
        * [.unsubscribe(fn)](#ngObserver.Observable+unsubscribe) ⇒ <code>Observable</code>
        * [.notify(args)](#ngObserver.Observable+notify) ⇒ <code>Observable</code>

<a name="ngObserver.$observable"></a>

### ngObserver.$observable ⇒ <code>Observable</code>
A factory which creates an observable object instance, see [Observable](#ngObserver.Observable) for more details.

**Kind**: static ngService of <code>[ngObserver](#ngObserver)</code>  
**Returns**: <code>Observable</code> - An instance of observable "class"  with methods for the default set of observing operations like `subscribe` and `notify`.  
**Example**  
You can create a service to retrieve data from the serveror to run an async task ans use the [$observable](#ngObserver.$observable) service to notify the observers. ````js angular.module('myApp')     .service('ServiceA', function($observervable, $http) {              var subject = $observervable();         this.getData = function() {             $http.get('path/to/my/api').then(function (response) {                 subject.notify(response.data);             });             return subject;         }     });````So that from the component side, you can subscribe to that subjectand get notified when data is ready.````jsangular.module('myApp')     .controller('MyController', function($scope, ServiceA) {              $scope.data = [];         init();         function init() {             ServiceA.getData()                 .subscribe($scope, function (data) {                     $scope.data = data;                 });         }     });````
<a name="ngObserver.Observable"></a>

### ngObserver.Observable
Observable class

**Kind**: static class of <code>[ngObserver](#ngObserver)</code>  

* [.Observable](#ngObserver.Observable)
    * [new Observable()](#new_ngObserver.Observable_new)
    * [.subscribe($scope, fn)](#ngObserver.Observable+subscribe) ⇒ <code>Observable</code>
    * [.subscribe(fn)](#ngObserver.Observable+subscribe) ⇒ <code>Observable</code>
    * [.unsubscribe(fn)](#ngObserver.Observable+unsubscribe) ⇒ <code>Observable</code>
    * [.notify(args)](#ngObserver.Observable+notify) ⇒ <code>Observable</code>

<a name="new_ngObserver.Observable_new"></a>

#### new Observable()
Creates a new instance of Observable

<a name="ngObserver.Observable+subscribe"></a>

#### observable.subscribe($scope, fn) ⇒ <code>Observable</code>
Subscribe a callback to be triggered when the observable gets notifiedand add an `unsubscribe` when `$scope` gets destroyed.

**Kind**: instance method of <code>[Observable](#ngObserver.Observable)</code>  
**Returns**: <code>Observable</code> - self  
**Throws**:

- InvalidArgumentException


| Param | Type | Description |
| --- | --- | --- |
| $scope | <code>ng.$rootScope.Scope</code> | scope |
| fn | <code>function</code> | observer callback |

<a name="ngObserver.Observable+subscribe"></a>

#### observable.subscribe(fn) ⇒ <code>Observable</code>
Subscribe a callback to be triggered when the observable gets notifiedand without the `$scope`, `unsubscribe` must be called manually.

**Kind**: instance method of <code>[Observable](#ngObserver.Observable)</code>  
**Returns**: <code>Observable</code> - self  
**Throws**:

- InvalidArgumentException


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | observer callback |

<a name="ngObserver.Observable+unsubscribe"></a>

#### observable.unsubscribe(fn) ⇒ <code>Observable</code>
Unsubscribe callback if it was previously registered

**Kind**: instance method of <code>[Observable](#ngObserver.Observable)</code>  
**Returns**: <code>Observable</code> - self  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | observer callback to be unsubscribed |

<a name="ngObserver.Observable+notify"></a>

#### observable.notify(args) ⇒ <code>Observable</code>
Notify each observer callbacks

**Kind**: instance method of <code>[Observable](#ngObserver.Observable)</code>  
**Returns**: <code>Observable</code> - self  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>any</code> | paramters for the observable callbacks |

