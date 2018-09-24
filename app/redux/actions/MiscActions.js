export const SelectGiftCard = (selected) => dispatch => {
  dispatch({
    type: 'SELECTED_GC',
    payload: selected
  })
}

export const DisplayAlert = (message, messageType) => dispatch => {
  dispatch({
    type: 'DISPLAY_ALERT',
    payload: {
      message, messageType
    }
  })
}

export const ResetAlert = () => dispatch => {
  dispatch({
    type: 'RESET_DISPLAY_ALERT'
  })
}
