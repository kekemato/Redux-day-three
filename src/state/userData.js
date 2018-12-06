import { database } from '../firebaseConfig'

const CHANGE_TEXT = 'userData/CHANGE_TEXT'

const INITIAL_STATE = {
    text: ''
}

export const saveTextAsyncAction = () => (dispatch, getState) => {
    database.ref('userData').push({
        text: getState().userData.text
    })
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