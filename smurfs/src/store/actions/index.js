import axios from 'axios'

// const url = "/smurfs"

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const ADD_SMURF = "ADD_SMURF"

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS_START, payload: { isFetching: true } })
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: { smurfs: res.data, isFetching: false } })
        })
        .catch(err => {
            dispatch({ type: GET_SMURFS_FAIL, payload: { error: err } })
            debugger
        })
}

export const addSmurf = (newSmurf) => dispatch => {
    newSmurf.id = Math.floor(Math.random() * 10000)
    axios
        .post(`http://localhost:3333/smurfs`, newSmurf)
        .then(res => {
            dispatch({ type: ADD_SMURF, payload: res.data })
            console.log(res)
        })
        .catch(err => {
            console.log(newSmurf)
            console.log("BAD SMURF!!")
            console.log(err)

        })
}