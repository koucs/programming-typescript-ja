import { rejects } from "assert"
import { appendFile, readFile } from "fs"
import { resolve } from "path"

// callback pattern
function appendAndRead(
    path: string,
    data: string,
    cb: (error: Error | null, result: string | null) => void
) {
    appendFile(path, data, error => {
        if (error) {
            return cb(error, null)
        }
        readFile(
            path,     
            { encoding: 'utf8' },
            (error, result) => {
                if (error){
                    return cb(error, null)
                }
                console.info('success reading', result)
                cb(null, result)
            }
        )
    })
}

type Executor<T> = (
    resolve: (result: T) => void,
    reject: (error: unknown) => void
) => void

class Promise<T> {
    constructor(f: Executor<T>) {}
    then<U>(g: (result: T) => Promise<U> | U): Promise<U> {
    }
    catch<U>(g: (error: unknown) => Promise<U> | U): Promise<U>{

    }
}

// promise pattern
// function appendAndReadPromise(path: string, data: string): Promise<string> {
//     return appendPromise(path, data)
//         .then(() => readPromise(path))
//         .catch(error => console.error(error))
// }

// function appendAndReadPromise(path: string, data: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         readFile(path, (error, result) => {
//             if (error) {
//                 reject(error)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }
    