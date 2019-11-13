import {Observable,fromEventPattern, Subject, of} from 'rxjs'
import {merge, mapTo} from 'rxjs/operators'

class StateProducer {
	constructor() {
        this.listeners = []
        this.dispatch = this.dispatch.bind(this)
        this.subject = new Subject()
	}
	addListener(listener) {
		if(typeof listener === 'function') {
			this.listeners.push(listener)
		} else {
			throw new Error('listener should be a function')
		}
	}
	removeListener(listener) {
		this.listeners.splice(this.listeners.indexOf(listener), 1)
    }
    combineWithEpics() {
        
    }
    passs(action) {
        const $action = of(action)
        const streem = merge(...this.epics.map( f => f($action)))
    }
	dispatch(message) {
        // this.subject
        if ( message instanceof Observable) {
            message
                .subscribe( e => {
                    this.listeners.forEach(listener => {
                        listener(e)
                })
            })
        } else {

            // pass the value directly
            this.listeners.forEach(listener => listener(message))
        }
	}
}

export const producer = new StateProducer()

export const store = fromEventPattern(
  (handler) => producer.addListener(handler), 
  (handler) => producer.removeListener(handler)
)



export const combineWithEpics = (epics) => ($o) => $o.pipe(merge(...epics.map(e=>e($o))))

class controller {
    constructor() {
        this.subject = new Subject()
        this.source = this.subject
        this.dispatch = this.dispatch.bind(this)
    }
    run($rootEpics) {
        this.source = $rootEpics(this.subject)
    }
    dispatch(action) {
        this.subject.next(action)
    }
}

export const Store = new controller()
