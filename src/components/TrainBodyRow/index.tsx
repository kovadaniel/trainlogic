import {FC} from 'react'
import { ITrainListItem } from './interface';
import cl from './trainBodyRow.module.scss'

const TrainBodyRow:FC<ITrainListItem> = ({data, switchPageHandler}) => {
        return (  
            <tr onClick={() => switchPageHandler(data.name)}>
                <td className={cl.cell}>{data.name}</td>
                <td className={cl.cell}>{data.description}</td>
            </tr>
        );
}
 
export default TrainBodyRow;