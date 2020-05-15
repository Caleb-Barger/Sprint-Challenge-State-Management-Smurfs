import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../store/actions'

import SmurfCard from './SmurfCard'

const ShowSmurfs = props => {
    useEffect(() => {
        props.getSmurfs()
    }, [])
    // console.log(props.error)

    return (
        <>
            {props.smurfs.map((smurf, index) => {
                return (
                    <SmurfCard key={Date.now()} smurf={smurf[index]} />
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(ShowSmurfs)