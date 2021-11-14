import axios from 'axios'
import Cookies from 'js-cookie'

const Token = Cookies.get('access-token')



export const sendToken = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + '/authentication/accesstoken', data)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const DeleteMember = (data) => {
  return axios
    .delete(process.env.REACT_APP_SECRET_API + '/authentication/delete', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const FetchAllMember = () => {
  return axios
    .get(process.env.REACT_APP_SECRET_API + '/member/all', null ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const InsertProducts = (data) => {
  console.log("Token ==>" , Token)
  return axios
    .post(process.env.REACT_APP_SECRET_API + '/product/insert', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const DeleteProduct = (data) => {
  return axios
    .delete(process.env.REACT_APP_SECRET_API + '/product/delete', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const UpdateProduct = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + '/product/update', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const UpdateStatusProduct = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + '/product/updatestatus', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const FetchAllProduct = (data) => {
  return axios
    .get(process.env.REACT_APP_SECRET_API + '/product/all', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}
