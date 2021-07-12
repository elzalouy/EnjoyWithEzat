export const onHandleChange=(state,action)=>{
    state[action.payload.element]=action.payload.value;
}
export const onLoginError=(state,action)=>{
    state.onLoginError=action.payload;
}
const exports={onHandleChange,onLoginError};
export default exports;