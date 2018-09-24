import Axios from '@utils/Axios'
// import { BASE_URL } from '@constants/BaseUrl'

export const NewTransaction = (data, navigation) => dispatch => {
  //cardType, cardImages, TotalAmount
  console.log(data)
  dispatch({ type: 'SHOW_SPINNER' });
  try {
    const form = new FormData()
    Object.keys(data).forEach(key => {
      if (key !== 'cardImages') {
        const item = data[key]
        form.append(key, item)
      }
    })

    // append images last
    data.cardImages.forEach((image, index) =>
      form.append('cardImages', {
        uri: image.uri,
        type: 'image/png',
        name: 'image-0' + (index + 1)
      })
    )

    const options = {
      method: 'POST',
      data: form,
      url: `/transaction/${data.user}`
    }
    Axios(options)
      .then(response => {
        console.log(response);
        // dispatch({ type: PRODUCT_CREATED, payload: response.data })
        dispatch({ type: 'HIDE_SPINNER' })
      })
      .catch(({ response }) => {
        dispatch({ type: 'HIDE_SPINNER' })
      })
  } catch (e) {
    console.log(e)
  }
}
