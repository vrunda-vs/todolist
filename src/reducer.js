const initialState={
    todos:[],
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:[...state.todos,action.payload],
            };
        case 'REMOVE_TODO':
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id!==action.payload),
            }
        case 'ACTIVE_TODO':
            return{
                ...state,
                todos:state.todos.filter(todo=>!todo.status),
            }
        case 'COMPLITE_TODO':
            return{
                    ...state,
                    todos:state.todos.filter(todo=>todo.status),
                }
        case 'COMPLETETASK':
            return{
                
                ...state,
                todos:state.todos[action.payload].status=true,

            }
        default:
            return state;
    }
}
export default reducer;