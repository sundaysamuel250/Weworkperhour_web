import axios from "axios";
import _ from "lodash";
import ls from "localstorage-slim";
export const APP_API_URL = window.location.host.includes("localhost")
? "http://wwph.test:8000/api/v1"
  : "https://api.sojorne.com/api/v1";
export const validatePasswordRegex =
  // /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

export const httpPostWithoutToken = async (url, data) => {
  return await axios
    .post(`${APP_API_URL}/${url}`, data)
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return {
        error: msg,
        status: error?.response?.status,
      };
    });
};

export const httpPostWithToken = async (url, data) => {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  return await axios
    .post(`${APP_API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};
//test
export const httpPatchWithOneTimeToken = async (url, data, t) => {
  return await axios
    .patch(`${APP_API_URL}/${url}`, data, {
      headers: {
        Authorization: `${t}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpPatchWithoutToken = async (url, data) => {
  return await axios
    .patch(`${APP_API_URL}/${url}`, data)
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpDeleteWithToken = async (url, data) => {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  return await axios
    .delete(`${APP_API_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpWithTokenRest = async (url, data) => {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  return await axios
    .post(
      `${APP_API_URL}/${url}`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpPatch2WithTokenRest = async (url, data) => {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  return await axios
    .patch(`${APP_API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpPutWithTokenRest = async (url, data) => {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  return await axios
    .put(`${APP_API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpPatchWithTokenRest = async (url, data) => {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  return await axios({
    method: "PATCH",
    url: `${APP_API_URL}/${url}`,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });

  // return await fetch(`${APP_API_URL}/${url}`, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "PATCH",
  //   body: data,
  // })
  //   .then((res) => res.json())
  //   .then(
  //     (data) => {
  //       return data.data;
  //     }
  //   )
  //   .catch(
  //     (err) => {
  //       console.log(err);
  //       return { error: err };
  //     }
  //   );
  // return await axios
  //   .patch(
  //     `${APP_API_URL}/${url}`,
  //     { data: data },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   )
  //   .then((resp) => {
  //     return resp.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     return { error: error };
  //   });
};

export const httpGetWithTokenRest = async (url) => {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  return await axios
    .get(`${APP_API_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      if (error.code === "ERR_NETWORK") {
        return { error: "An error occurred, please try again later" };
      }
      const msg =
        _.get(error, "response?.data?.message") ||
        error?.response?.data?.message;
      return { error: msg };
    });
};

export const httpWithoutTokenGraph = async (url, query) => {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  return await axios
    .post(`${APP_API_URL}/${url}`, { query: query })
    .then((resp) => {
      return resp.data;
    })
    .catch(function (error) {
      console.log(error);
      return { error: error };
    });
};

async function uploadFileFetch(formData) {
  const token = sessionStorage.getItem("wwph_token");
  // const token = ls.get("wwph_token", { decrypt: true });
  const response = await fetch(`${APP_API_URL}/upload`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: formData,
  });
  return response.json();
}

async function uploadFileFetchWithoutToken(formData) {
  const response = await fetch(`${APP_API_URL}/upload`, {
    method: "POST",
    body: formData,
  }).catch((e) => {
    return false;
  });
  if (response == false) {
    return response;
  }
  return response.json();
}

export const uploadImage = async (data) => {
  let formData = new FormData();
  formData.append(`files`, data);
  const uploadImag = await uploadFileFetch(formData);
  return await uploadImag;
};

export const uploadMultipleImages = async (data) => {
  let formData = new FormData();
  data.forEach((file) => formData.append(`files`, file, file.name));
  // formData.append(`files`, data)
  const uploadImag = await uploadFileFetchWithoutToken(formData);
  return await uploadImag;
};

// export const sendMail = async (email, msg, subject) => {
//   let data = {
//     email: email,
//     message: msg,
//     subject: subject,
//   };

//   let response = await axios
//     .post(`${EmailBaseUrl}/email/send`, data)
//     .then(resp => {
//       return resp.data;
//     })
//     .catch(function (error) {
//       const msg =
//         _.get(error, 'response.data.message[0].messages[0].message') ||
//         error.message;
//       return { error: msg };
//     });

//   return response;

//   // let response = await httpWithoutToken('email/send', data)
// };

export const sendSms = async (number, message) => {
  var axios = require("axios");
  var data = new FormData();
  data.append("api_key", "Eqk02cYyyDty9EOxk98j");
  data.append("from", "Livevend");
  data.append("to", number);
  data.append("message", message);

  var config = {
    method: "post",
    url: "https://mail.tribearc.com/api/sms/send_now.php",
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const isValidUrl = (str) => {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
};
