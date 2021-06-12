import axios from "axios";

export const changeImage = (image) => {
  switch (image) {
    case "credit":
      return "../Assets/Icons/Top-up-icon.png";
    case "data":
      return "../Assets/Icons/Data-icon.png";
    case "airtime":
      return "../Assets/Icons/Airtime-icon.png";
    case "cable":
      return "../Assets/Icons/Airtime-icon.png";

    default:
      break;
  }
};
export const fetchService = () => {
  const data = {
    action: "10",
    id: "1",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  };
  const formData = new FormData();
  formData.append("action", data.action);
  formData.append("apptoken", data.apptoken);
  formData.append("id", data.id);

  return axios.post(process.env.REACT_APP_END_POINT, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
export const buyData = (formData) => {
  return axios.post(process.env.REACT_APP_END_POINT, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
