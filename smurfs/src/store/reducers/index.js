import { GET_SMURFS_SUCCESS, GET_SMURFS_FAIL, GET_SMURFS_START, ADD_SMURF } from '../actions'

const initalState = {
    isFetching: false,
    smurfs: [],
    error: "",
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: [
                    ...state.smurfs,
                    action.payload.smurfs
                ]
            }
        case GET_SMURFS_FAIL:
            console.log("SOMETHING WENT HORRIBLY WRONG!! CHECK YOUR CODE!!")
            return {
                ...state,
                isFetching: false
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default reducer