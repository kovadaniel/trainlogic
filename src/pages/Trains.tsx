import { trainListHeaders, trainListTitles } from "../constants";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from "../hooks/useAppSelector";
import Table from "../components/Table";

import { TrainType } from "../types/train";
import TrainBodyRow from "../components/TrainBodyRow";
import TrainHeaderRow from "../components/TrainHeaderRow";

const Trains = () => {
    const {trains, loading, error} = useAppSelector(state => state.train);
    const navigate = useNavigate();

    if(loading){
        return (
            <div>
                Загрузка...
            </div>
        )
    }

    if(error){
        return (
            <div>
                Произошла ошибка: {error}
            </div>
        )
    }

    const switchPageHandler = (name: string) => {
        navigate('/train/' + name);
    }

    return ( 
        <div id="trains-page">
            <Table 
                items={trains} 
                renderItem={(train: TrainType) => 
                    <TrainBodyRow 
                        key={train.name}
                        data={train}
                        switchPageHandler={switchPageHandler}
                    />}
                titles={trainListTitles} 
                renderHeader={() => 
                    <TrainHeaderRow data={trainListHeaders}/>}/>

        </div> 

    );
}
 
export default Trains;