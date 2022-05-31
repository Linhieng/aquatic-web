import { URL } from '@/constants/default.js'
import axios from 'axios'

export function getAllVehicle() {
  return new Promise(async  (res, rej) => {
    const url = `${URL}/vehicle/all`
    const { data: resData } = await axios.get(url)
    if (resData.code === 200 && resData.msg === 'success') {
      res(resData.data)
    }
    else 
      rej(resData.msg)
  })
}