import { map, scan, filter, delay, mapTo, switchMap} from 'rxjs/operators'
import {merge, of} from 'rxjs'

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