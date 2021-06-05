import { ADD_COURSE } from "../Action/courseAction"

const initialState = {
    course:{ }
  
}

if(Object.keys(initialState.course).length>0){
    console.log(initialState.course)
}
const courseReducer = (state = initialState, action) =>{
  
    switch(action.type){
        case ADD_COURSE:
            // const newCourse ={
            //     title: action.title,
            //     duration: action.duration,
            //     description: action.description,
            //     price: action.price,
            //     image: action.image,
            // }
            // console.log(newApartment)
            // const updatedApartment =[...state.apartment,newApartment]
            return {...state, course:action.course};


        default:
            return state;
    }
}
export default courseReducer;