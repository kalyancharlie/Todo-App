import {useState, useEffect} from 'react'
import { serializeData, deSerializeData } from '../utils/AuthUtil';


const useLocalStorage = (KEY, initialState) => {
    // console.log('state');
    // console.log(KEY, initialState)
    const [state, setState] = useState(() => {
        return deSerializeData(KEY, initialState)
    });

    useEffect(() => {
        serializeData(KEY, state)
    }, [state])

    return [state, setState]
}

export default useLocalStorage