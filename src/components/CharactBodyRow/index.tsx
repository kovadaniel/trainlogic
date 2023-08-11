import {FC, useState} from 'react'
import { ICharactRow } from './interface';
import cl from './charactRow.module.scss'
import { Characteristics } from '../../types/train';
import TableInput from '../TableInput';

const CharactBodyRow:FC<ICharactRow> = ({data, tableRef, i, setIsValidForm}) => {
    const cells = [
        {
            init: data.engineAmperage.toString(),
            field: Characteristics.engineAmperage,
            regexp: /^[1-9]([0-9])+$/,
        },
        {
            init: data.force.toString(),
            field: Characteristics.force,
            regexp: /^0(\.0*[1-9]\d*)$|^[1-9]\d*\.\d+$/,
        },        {
            init: data.speed.toString(),
            field: Characteristics.speed,
            regexp: /^\d+$/,
        }
    ]

    return (  
        <tr>
            {cells.map(cell => 
                <td className={cl.cell} key={cell.field}>
                    {tableRef.current &&
                        <TableInput
                            initial={cell.init}
                            field={cell.field}
                            i={i}
                            tableRef={tableRef}
                            validate={(val: string) =>  cell.regexp.test(val)}
                            setIsValidForm={setIsValidForm}/>
                    }
                </td>
            )}
        </tr>
    );
}
 
export default CharactBodyRow;