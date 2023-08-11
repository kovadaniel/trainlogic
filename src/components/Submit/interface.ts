import { CharacteristicType } from "../../types/train";

export interface ISubmit{
    title: string,
    isActive: boolean,
    onClick?: () => void
}