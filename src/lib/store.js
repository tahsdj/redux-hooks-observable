import {Subject} from 'rxjs'
import {merge, scan} from 'rxjs/operators'

export const combineWithEpics = (epics) => ($o) => $o.pipe(merge(...epics.map(e=>e($o))))

class StreamSource {
    constructor() {
        this.subject = new Subject()
        this.source = this.subject
    }
    run = ($rootEpic) => {
        this.source = $rootEpic(this.subject)
    }
    combineWithReducer = (reducer, initialState) => this.source.pipe(scan(reducer, initialState))
    dispatch = (action) => {
        this.subject.next(action)
    }
}

export const Store = new StreamSource()
