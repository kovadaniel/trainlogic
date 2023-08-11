import {FC} from 'react'
import { ICharactHeaderRow } from './interface';
import cl from './charactRow.module.scss'

const CharactHeaderRow:FC<ICharactHeaderRow> = ({data}) => {
        return (  
            <tr>
                <th className={cl.cell}>{data[0]}</th>
                <th className={cl.cell}>{data[1]}</th>
                <th className={cl.cell}>{data[2]}</th>
            </tr>
        );
}
 
export default CharactHeaderRow;