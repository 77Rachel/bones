import hyRequest from '../request'

export function uploadFile(formdata) {
  return hyRequest.post({
    url: "/upload",
    data:{ formdata },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}