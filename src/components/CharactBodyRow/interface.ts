import { MutableRefObject } from "react";
import { CharacteristicType } from "../../types/train";

export interface ICharactRow{
    data: CharacteristicType,
    tableRef: MutableRefObject<CharacteristicType[] | null>,
    i: number,
    setIsValidForm: (isValis: boolean) =>  void,
}