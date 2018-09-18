/**
 * Created by jialeren on 2018/9/18.
 */
import EventEmitter  from 'events';
import Dispatcher from './dispatcher';
import ActionTypes from './ActionTypes'

let dailyInfo = {
    locationId: 1,
};
let locationInfo = {};
const WeatherStore = Object.assign({}, EventEmitter.prototype, {
    getDailyInfo: function(){
        return dailyInfo;
    },

    getLocationInfo: function(){
        return locationInfo;
    },

    emitChange: function(){
        this.emit(ActionTypes.UPDATE_LOCATION)
    },

    addChangeListener: function(cb){
        this.on(ActionTypes.UPDATE_LOCATION, cb);
    },

    removeChangeListener: function(cb){
        this.removeListener(ActionTypes.UPDATE_LOCATION, cb);
    }
});

Dispatcher.register(function(action){
    if(action.type === ActionTypes.UPDATE_LOCATION) {
        dailyInfo.locationId = 2;
        WeatherStore.emitChange()
    }
});

export default WeatherStore;

