import { ReactNode } from "react";
import { TableSize } from "../../types/train";

export interface ITable<T>{
    items: T[],
    // a function that accepts item information and returns one drawn item of the list:
    renderItem: (item: T, i: number) => ReactNode,
    renderHeader: () => ReactNode,
    titles?: string[],
    size?: TableSize,
}