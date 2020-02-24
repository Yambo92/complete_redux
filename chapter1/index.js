

const initialState = { //初始化store
    counter: 3
}

function reducer(state, action){ //reducer接收state和action， 通过action.type来更新state;
    switch(action.type){
        case 'INC':
            return {...state, counter: state.counter + 1};
        case 'DEC':
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
}

const store = Redux.createStore(reducer, initialState); //redux创建一个store实例


function updateView(){
    document.querySelector('#counter').innerHTML = store.getState().counter
}

store.subscribe(updateView);

updateView(); //初始化

document.querySelector('#inc').onclick = () => store.dispatch({type:'INC'});
document.querySelector('#dec').onclick = () => store.dispatch({type:'DEC'});