import {combineReducers} from 'redux';
import usage from './usageReducers';
import control from './controlReducers';

export default combineReducers({
    usage,
    control
});