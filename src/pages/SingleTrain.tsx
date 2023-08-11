import { Params, useNavigate, useParams } from "react-router-dom";
import Table from "../components/Table";
import { useAppSelector } from "../hooks/useAppSelector";
import { CharacteristicType, TableSize, SingleTrainParams, TrainType } from "../types/train";
//import CharacteristicListItem from "../components/CharacteristicListItem";
import { useEffect, useRef, useState } from 'react'
import { singleTrainHeaders, singleTrainTitles } from "../constants";
import CharactBodyRow from "../components/CharactBodyRow";
import CharactHeaderRow from "../components/CharactHeaderRow";
import { useActions } from "../hooks/useActions";
import Submit from "../components/Submit";
import Back from "../components/Back";

const SingleTrain = () => {
    const params = useParams<SingleTrainParams>();
    const {trains, train} = useAppSelector(state => state.train);
    const [characts, setCharacts] = useState<CharacteristicType[]>();
    const [isValid, setIsValid] = useState(true);

    const {setTrain, sendTrainCharacts} = useActions();
    useEffect(() => {
        if(params.name){
            setTrain(params.name);
        }
    }, [trains]);

    const localTableRef = useRef<(CharacteristicType[]|null)>(null);
    useEffect(() => {
        if(train){
            setCharacts(train.characteristics)
            localTableRef.current = train.characteristics;
        }
    }, [train])
    
    return (
        <div id="single-train-page">
            {characts && 
            <Table
                items={characts}
                renderItem={(charact: CharacteristicType, i) => 
                    <CharactBodyRow
                        key={charact.engineAmperage * charact.force * charact.speed}
                        data={charact}
                        tableRef={localTableRef}
                        i={i}
                        setIsValidForm={setIsValid}
                    />
                }
                titles={params.name ? singleTrainTitles.concat(params.name) : singleTrainTitles}
                renderHeader={() => 
                    <CharactHeaderRow
                        data={singleTrainHeaders}
                    />
                }
                size={TableSize.lg}
            />}


            <Submit 
                title="Отправить сообщения" 
                isActive={isValid} 
                onClick={() => {
                    if(localTableRef.current){
                        sendTrainCharacts(localTableRef.current)
                    }
                }
                }/>

            {/*<Back title="Назад" to="/trains"/>*/}

        </div>
    );
}
 
export default SingleTrain;