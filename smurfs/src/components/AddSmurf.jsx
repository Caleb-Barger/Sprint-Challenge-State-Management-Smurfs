import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../store/actions'

import NewSmurfCard from './NewSmurfCard'

const AddSmurf = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: 0,
        height: "1cm",
    })

    const onChangeHandler = e => {
        const name = e.target.name
        const value = e.target.value

        setNewSmurf({
            ...newSmurf,
            [name]: value
        })
    }

    return (
        <>
            <NewSmurfCard smurf={newSmurf} />
            Name: <input
                name="name"
                value={newSmurf.name}
                onChange={onChangeHandler}
            />
            <br />
            Age: <input
                name="age"
                value={newSmurf.age}
                onChange={onChangeHandler}
            />
            <br />
            Height: <input
                name="height"
                value={newSmurf.height}
                onChange={onChangeHandler}
            />
            <br />
            <input
                value="add-smurf"
                type="button"
                onClick={() => { props.addSmurf(newSmurf) }}
            />
        </>
    )
}

export default connect(null, { addSmurf })(AddSmurf)