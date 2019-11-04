import { map, scan, filter, delay, mapTo} from 'rxjs/operators'
import {merge, of} from 'rxjs'

export const plus = () => ({type: 'PLUS'})

export const minus = () => ({type: 'MINUS'})


export const plusWithAnimation = () => {
    const stream = of(null)
    return merge(
        stream.pipe(mapTo({type: 'PLUS'})),
        stream.pipe(
            delay(1000),
            mapTo({type: 'MINUS'})
        )
    )     
}