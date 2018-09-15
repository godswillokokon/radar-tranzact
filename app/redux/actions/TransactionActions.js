import axios from 'axios'
import { BASE_URL } from '@constants/BaseUrl'

export const NewTransaction = data => dispatch => {
  //cardType, cardImages, TotalAmount
  console.log(data)
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
      url: `${BASE_URL}/transaction`
    }
    axios(options)
      .then(response => {
        // dispatch({ type: PRODUCT_CREATED, payload: response.data })
        // dispatch({ type: HIDE_SPINNER })
      })
      .catch(({ response }) => {
        // dispatch({ type: HIDE_SPINNER })
      })
  } catch (e) {
    console.log(e)
  }
}
