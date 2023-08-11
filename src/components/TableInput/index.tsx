import { useState, FC, useEffect, useCallback } from 'react';
import cl from './tableInput.module.scss'
import { ITableInput } from './interface';


const TableInput:FC<ITableInput> = ({initial, field, i, tableRef, validate, setIsValidForm}) => {
    const [value, setValue] = useState<string>(initial);
    const [isValid, setIsValid] = useState<boolean>(true);

    const setValidity = useCallback((val: boolean) => {
        setIsValid(val);
        setIsValidForm(val);
    }, [])

    useEffect(()=> {
        if(tableRef.current){
            const nValue = parseFloat(value)
            const rowData = tableRef.current[i];
            const newRow = {...rowData, [field]: nValue};
            const newTable = [...tableRef.current.slice(0, i), newRow, ...tableRef.current.slice(i+1)];
            tableRef.current = newTable;
        }
    }, [value]);

    const handleInput = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            // validation:
            if(validate(e.currentTarget.value)){
                setValidity(true)
            } else{
                setValidity(false)
            }
            setValue(e.currentTarget.value);
    }, [])

    return (  
        <input 
            className={cl.input + ' ' + (isValid ? cl.valid : cl.invalid)} 
            type='text' 
            value={value} 
            onInput={handleInput}/>
    );
}
 
export default TableInput;