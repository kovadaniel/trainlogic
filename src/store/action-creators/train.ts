import {Dispatch} from 'react'
import { CharacteristicType, TrainAction, TrainActionTypes, TrainType } from '../../types/train'
import axios from 'axios'

export const fetchTrains = () => {
    return async(dispatch: Dispatch<TrainAction>) => {
        try{
            dispatch({
                type: TrainActionTypes.FETCH_TRAINS,
            })
            const response = await axios.get('https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json')
        
            dispatch({
                type: TrainActionTypes.FETCH_TRAINS_SUCCESS, 
                payload: response.data,
            })
        } catch (e) {
            dispatch({
                type: TrainActionTypes.FETCH_TRAINS_ERROR, 
                payload: 'Error has occured when "trains" have been loading: ' + e,
            })
        }
    }
}


export const setTrain = (payload:string) => 
    ({type: TrainActionTypes.SET_TRAIN, payload})

    
export const sendTrainCharacts = (payload:CharacteristicType[]) => 
    ({type: TrainActionTypes.SEND_TRAIN_CHARACTERISTICS, payload})


