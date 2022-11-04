import { createStore,combineReducers } from 'redux'
import {BuildingReducer,CreateAccountofficeReducer,CreateAccountBuildingReducer} from './AllReducers';


const mutipleReducers = combineReducers({
    BuildingReducer,
    CreateAccountofficeReducer,
    CreateAccountBuildingReducer
})

const store = createStore(mutipleReducers);



export default store