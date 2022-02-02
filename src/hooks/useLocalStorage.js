import {useState, useEffect} from 'react'
import { serializeData, deSerializeData } from '../utils/AuthUtil';

const useLocalStorage = (KEY, initialState) => {
    const [state, setState] = useState(() => {
        console.log('DESERIALIZEED')
        return deSerializeData(KEY, initialState)
    });
    
    useEffect(() => {
        serializeData(KEY, state)
    }, [state])

    return [state, setState]
}

export default useLocalStorage