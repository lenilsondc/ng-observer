<a name="ngObserver"></a>

## ngObserver
`ngObserver` is a simple angularjs module which provides

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
A factory which creates an observable object instance, 

**Kind**: static ngService of <code>[ngObserver](#ngObserver)</code>  
**Returns**: <code>Observable</code> - An instance of observable "class"  with methods for 
**Example**  
You can create a service to retrieve data from the server
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
Subscribe a callback to be triggered when the observable gets notified

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
Subscribe a callback to be triggered when the observable gets notified

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
