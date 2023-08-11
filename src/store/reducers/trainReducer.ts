import { getByName } from "../../utils";
import { TrainAction, TrainActionTypes, TrainState } from "../../types/train";

const initialState: TrainState = {
    trains: [],
    train: null,
    loading: false,
    error: null,
}

function trainReducer(state = initialState, action: TrainAction): TrainState {
    switch(action.type){
        case TrainActionTypes.FETCH_TRAINS:
            return {
                loading: true, 
                error: null,
                trains: [], 
                train: null,
            };
        case TrainActionTypes.FETCH_TRAINS_SUCCESS:
            return {
                loading: false, 
                error: null, 
                trains: action.payload, 
                train: action.payload[0],
            };
        case TrainActionTypes.FETCH_TRAINS_ERROR:
            return {
                loading: false, 
                error: action.payload, 
                trains: [], 
                train: null,
            };
        case TrainActionTypes.SET_TRAIN:
            return {
                ...state,
                train: getByName(action.payload, state.trains),
            };
        case TrainActionTypes.SEND_TRAIN_CHARACTERISTICS:
            console.log(action.payload.map(characts => characts.speed).sort((a, b) => a - b));
            return state;
        default:
            return state;
    }
}

export default trainReducer;