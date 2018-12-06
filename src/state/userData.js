import { database } from '../firebaseConfig'

const CHANGE_TEXT = 'userData/CHANGE_TEXT'

const INITIAL_STATE = {
    text: ''
}

export const saveTextToDbAsyncAction = () => (dispatch, getState) => {
    const text = getState().userData.text
    const uuid = getState().auth.user.uid

    database.ref(`userData/${uuid}`).set({
        text
    })
}

export const loadTextFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid
    database.ref(`userData/${uuid}/text`).once(
        'value',
        snapshot => {
            dispatch(changeTextAction(snapshot.val() || ''))
        }
    )
}

export const changeTextAction = (text) => ({
    type: CHANGE_TEXT,
    text
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}