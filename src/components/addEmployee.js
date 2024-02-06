import React from 'react'
import { addEmployeeAction } from '../redux/index'
import { connect } from 'react-redux'

function addEmployee(props) {
    return (
        <div>
            <h1>Add Employee</h1>
            <div>Number of employee: {props.numOfEmployee}</div>
            <button onClick={props.addEmployeeAction}>Add</button>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        numOfEmployee: state.numOfEmployee
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addEmployeeAction: () => {
            dispatch(addEmployeeAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addEmployee) 