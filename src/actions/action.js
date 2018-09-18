/**
 * Created by jialeren on 2018/9/18.
 */
import ActionTypes from '../store/ActionTypes';
import Dispatcher from '../store/dispatcher';

const updateWeather = (locationId) => {
    Dispatcher.dispatch({
        type: ActionTypes.UPDATE_LOCATION,
        locationId: locationId
    });
}

export default updateWeather
