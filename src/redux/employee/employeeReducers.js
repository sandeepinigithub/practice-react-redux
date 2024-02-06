import { ADD_EPMLOYEE } from "./employeeTypes"

const initialState = {
    numOfEmployee: 10
}

const employeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_EPMLOYEE: return {
            ...state,
            numOfEmployee: state.numOfEmployee + 1
        }

        default: return state

    }

}

export default employeeReducer;