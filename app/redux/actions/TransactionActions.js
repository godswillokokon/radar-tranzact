import Axios from "@utils/Axios";
import SupportHeader from "@utils/SupportHeader";
import { DisplayAlert } from "./MiscActions";

export const NewTransaction = (data, navigation) => async dispatch => {
  //cardType, cardImages, TotalAmount

  dispatch({ type: "SHOW_SPINNER" });
  try {
    const form = new FormData();
    Object.keys(data).forEach(key => {
      if (key !== "cardImages") {
        const item = data[key];
        form.append(key, item);
      }
    });
    // append images last
    data.cardImages.forEach((image, index) => {
      form.append("cardImages", {
        uri: image,
        type: "image/png",
        name: "image-0" + (index + 1)
      });
    });
    const headers = await SupportHeader({
        "Content-Type": "multipart/form-data"
      })
    const options = {
      method: "POST",
      data: form,
      headers,
      url: `/transaction/${data.user.id}`
    };
    Axios(options)
      .then(response => {
        navigation("TransactionHistory");
        dispatch({ type: "HIDE_SPINNER" });
      })
      .catch(response => {
        dispatch({ type: "HIDE_SPINNER" });
        DisplayAlert("Error occured, try again later", "error")(dispatch);
      });
  } catch (e) {
    console.log(e);
  }
};

export const GetTransaction = async userId => {
  try {
    console.log(await SupportHeader())
    const response = await Axios.get(`/transaction/${userId}`, await SupportHeader());
    console.log(response.data, '-ttt');
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
