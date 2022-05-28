import axios from 'axios'
import { URL } from '@/constants/default.js'

export function getR(router) {
  return new Promise((res, rej) => {
    const url = `${URL}${router}`
      axios.get(url)
        .then(({data:resData}) => {
          if (resData.code == "200" && resData.msg == "success") {
            res(resData.data)
          } else {
            rej(`code: ${resData.code}, msg: ${resData.msg}`)
          }
        }).catch((reason) => {
          rej(reason)
        })
  })
}