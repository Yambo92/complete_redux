import {createStore, applyMiddleware} from 'redux'
import rootReducers from "../reducers/root";
import logMiddleware from "../middleware/logMiddleware";
import apiMiddleware from "../middleware/apiMiddleware";

//redux中只有一个store; 是通过createStore方法创建并初始化的
//createStore的必须参数是reducer
//  const store = createStore(reducer, initialState);

 const store =  createStore(
     rootReducers,
     applyMiddleware(logMiddleware, apiMiddleware)
 )
 window.store = store;

 export default store;