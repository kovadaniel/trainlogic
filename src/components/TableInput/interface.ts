import { MutableRefObject } from "react";
import { CharacteristicType, Characteristics } from "../../types/train";

export interface ITableInput{
    initial: string,
    field: Characteristics,
    i: number,
    tableRef: MutableRefObject<CharacteristicType[] | null>,
    validate: (val:string) => boolean,
    setIsValidForm: (isValid: boolean) => void,
}