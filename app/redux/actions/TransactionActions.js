import Axios from '@utils/Axios'
import { DisplayAlert } from './MiscActions'

export const NewTransaction = (data, navigation) => dispatch => {
  //cardType, cardImages, TotalAmount

  dispatch({ type: 'SHOW_SPINNER' })
  try {
    const form = new FormData()
    Object.keys(data).forEach(key => {
      if (key !== 'cardImages') {
        const item = data[key]
        form.append(key, item)
      }
    })
    // append images last
    data.cardImages.forEach((image, index) => {
      form.append('cardImages', {
        uri: image,
        type: 'image/png',
        name: 'image-0' + (index + 1)
      })
    })

    const options = {
      method: 'POST',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: `/transaction/${data.user}`
    }
    Axios(options)
      .then(response => {
        console.log(response)
        navigation('TransactionHistory');
        dispatch({ type: 'HIDE_SPINNER' })
      })
      .catch((response) => {
        dispatch({ type: 'HIDE_SPINNER' })
        DisplayAlert('Error occured, try again later', 'error')(dispatch)
        console.log(response)
      })
  } catch (e) {
    console.log(e)
  }
}
