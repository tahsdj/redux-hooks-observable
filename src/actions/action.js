import { map, scan, filter, delay, mapTo, switchMap, mergeMap, takeUntil, take, throttle} from 'rxjs/operators'
import {merge, of, from, interval} from 'rxjs'

export const plus = () => ({type: 'PLUS'})

export const minus = () => ({type: 'MINUS'})


export const plusWithAnimation = () => {
    const stream = of(null)
    return merge(
        stream.pipe(mapTo({type: 'PLUS'})),
        stream.pipe(mapTo({type: 'SHOW_POPUP'})),
        stream.pipe(
            delay(1300),
            mapTo({type: 'HIDE_POPUP'})
        )
    )     
}

const number = interval(1000)


export const asyncDecrease = $action => 
    $action
        .pipe(
            filter( action => action.type === 'ASYNC_MINUS'),
            delay(1000),
            mapTo({type: 'MINUS'})
        )
        
export const plusAnimation = $action => 
    $action
        .pipe(
            filter( action => action.type === 'SHOW_POPUP'),
            switchMap( action => {
                return interval(1000).pipe(
                    // delay(100), 
                    // mapTo(),
                    // mapTo({type: 'HIDE_POPUP'}),
                    takeUntil($action.pipe(
                        filter( action => action.type === 'SHOW_POPUP')
                    ))
                )
            })
        )

const hasScrolled = (e) => {
    return 0.5
}

export const infiniteScroll = $action => 
    $action
        .pipe(
            filter( action => action.type === 'SCROLL'),
            throttle(200),
            map(action=>action.target),
            map(hasScrolled)
        )