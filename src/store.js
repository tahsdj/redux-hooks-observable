import {Observable,fromEventPattern} from 'rxjs'

class StateProducer {
	constructor() {
        this.listeners = [];
        this.dispatch = this.dispatch.bind(this)
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
	dispatch(message) {
    
        // if input is observable, subscribe the event
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

