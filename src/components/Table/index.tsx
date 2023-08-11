import { TableSize } from "../../types/train";
import { ITable } from "./interface";
import cl from './table.module.scss'


// universal component for different types
export default function Table<T>
    ({items, renderItem, renderHeader, titles, size = TableSize.sm}: ITable<T>){
    const containerSize = size === TableSize.sm ? cl.small : cl.large;

    return (  
        <div className={[cl.container, containerSize].join(' ')}>
        <table className={cl.table}>
                {titles && titles.map(title => 
                    <caption key={title} className={cl.title}>{title}</caption>)}
                <thead>
                    {renderHeader()}
                </thead>
                <tbody>
                    {items && items.map(renderItem)}
                </tbody>
            </table> 
        </div>
    );
}