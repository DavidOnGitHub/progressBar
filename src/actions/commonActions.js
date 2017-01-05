import {get} from '../utils/httpUtils';
import {setUsages} from './usageActions';
import {setControls, setLimit} from './controlActions';

export function fetchAllData() {
    return (dispatch) => {
        return get('bars').then((response) => {
            dispatch(setUsages(response.bars));
            dispatch(setControls(response.buttons));
            dispatch(setLimit(response.limit));
        });
    };
}