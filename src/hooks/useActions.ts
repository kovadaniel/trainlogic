import * as TrainActionCreators from '../store/action-creators/train';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'

/* this hook enables us to make a displatch 
 * simply by wrighting: "fetchTrains()" instead 
 * of "dispatch(fetchTrains())"
 */
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TrainActionCreators, dispatch)
}