import {useState, useEffect} from 'react'
import { serializeData, deSerializeData } from '../utils/AuthUtil';
import { isTokenExpired } from '../utils/AuthUtil';
import {LOCAL_STR_ACCESS_TOKEN} from '../constants/constants'

const useLocalStorage = (KEY, initialState) => {
    // console.log('state');
    // console.log(KEY, initialState)
    const [state, setState] = useState(() => {
        console.log('DESERIALIZEED')
        return deSerializeData(KEY, initialState)
    });
    // console.log('BEFORE', state)
    
    useEffect(() => {
        // console.log('old state of key', state)
        // const newToken = JSON.parse(localStorage.getItem(LOCAL_STR_ACCESS_TOKEN))
        // console.log('========= NEW state of TOKEN =========', newToken)
        // if (newToken) {
        //     console.log('state diff', state?.accessToken === newToken)
        // }
        serializeData(KEY, state)
    }, [state])
    // console.log('AFTER', state)

    return [state, setState]
}

export default useLocalStorage