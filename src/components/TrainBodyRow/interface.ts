import { TrainType } from "../../types/train";

export interface ITrainListItem{
    data: TrainType,
    switchPageHandler: (name: string) => void,
}