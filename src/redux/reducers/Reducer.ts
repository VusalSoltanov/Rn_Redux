export function TodoReducer(state:any,action:any){
    if (typeof state === 'undefined') {
        return [];
    }
    if (action.type == 'ADD_TODO') {
        return [...state,action.payload]
    }
    else {
        return state;
    }
  }