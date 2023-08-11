export interface TrainState {
    trains: TrainType[];
    train: TrainType|null;
    loading: boolean;
    error: null | string;
}

export enum TrainActionTypes{
    FETCH_TRAINS = "FETCH_TRAINS",
    FETCH_TRAINS_SUCCESS = "FETCH_TRAINS_SUCCESS",
    FETCH_TRAINS_ERROR = "FETCH_TRAINS_ERROR",
    SET_TRAIN = "SET_TRAIN",
    SEND_TRAIN_CHARACTERISTICS = "SEND_TRAIN_CHARACTERISTICS",

}
interface FetchTrainsAction{
    type: TrainActionTypes.FETCH_TRAINS;
}
interface FetchTrainsSuccessAction{
    type: TrainActionTypes.FETCH_TRAINS_SUCCESS;
    payload: TrainType[];
}
interface FetchTrainsErrorAction{
    type: TrainActionTypes.FETCH_TRAINS_ERROR;
    payload: string;
}
interface SetTrainAction{
    type: TrainActionTypes.SET_TRAIN;
    payload: string,
}
interface SetTrainCharacteristics{
    type: TrainActionTypes.SEND_TRAIN_CHARACTERISTICS;
    payload: CharacteristicType[],
}

export type TrainAction = 
    FetchTrainsAction | FetchTrainsSuccessAction | FetchTrainsErrorAction | SetTrainAction | SetTrainCharacteristics

export interface TrainType{
    name: string,
    description: string,
    characteristics: CharacteristicType[]
}

export enum Characteristics{
    speed = 'speed',
    force = 'force',
    engineAmperage = 'engineAmperage',
}

export interface CharacteristicType{
    [Characteristics.speed]: number,
    [Characteristics.force]: number,
    [Characteristics.engineAmperage]: number,
}


export enum TableSize{
    lg = 'lg',
    sm = 'sm',
}

export type SingleTrainParams = {
    name: string,
}