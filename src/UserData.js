import React from 'react'
import TextField from 'material-ui/TextField'

import { connect } from 'react-redux'
import { changeTextAction, saveTextToDbAsyncAction } from './state/userData'
import { RaisedButton } from 'material-ui';

const UserData = (props) => {
    return (
        <div>
            <TextField
                hintText='Add your sentence'
                value={props._text}
                onChange={props._changeTextAction}
            />
            <RaisedButton
                primary={true}
                label={'Add to firebase'}
                onClick={props._saveTextToDbAsyncAction}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    _text: state.userData.text
})

const mapDispatchToProps = dispatch => ({
    _changeTextAction: (event) => dispatch(changeTextAction(event.target.value)),
    _saveTextToDbAsyncAction: () => dispatch(saveTextToDbAsyncAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserData)