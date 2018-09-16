export const SelectGiftCard = (selected) => dispatch => {
  dispatch({
    type: 'SELECTED_GC',
    payload: selected
  })
}
