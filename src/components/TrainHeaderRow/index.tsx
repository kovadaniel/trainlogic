import {FC} from 'react'
import { ITrainListItem } from './interface';
import cl from './trainHeaderRow.module.scss'

const TrainHeaderRow:FC<ITrainListItem> = ({data}) => {
        return (  
            <tr>
                <td className={cl.cell}>{data[0] && data[0]}</td>
                <td className={cl.cell}>{data[1] && data[1]}</td>
            </tr>
        );
}
 
export default TrainHeaderRow;