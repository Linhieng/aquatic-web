
export function formatTime(ti) {
  let data
  if (typeof ti != 'object') return ti.replace(' ', 'T')
  try {
    data = 
      `${ti.getFullYear()}-${ti.getMonth() + 1 > 9 ? "" : "0"}${
        ti.getMonth() + 1
      }-${ti.getDate() > 9 ? "" : "0"}${ti.getDate()}T${
        ti.getHours() > 9 ? "" : "0"
      }${ti.getHours()}:${ti.getMinutes() > 9 ? "" : "0"}${ti.getMinutes()}:${
        ti.getSeconds() > 9 ? "" : "0"
      }${ti.getSeconds()}`
  } catch (error) {
    console.log(error)
  }
  return data
}