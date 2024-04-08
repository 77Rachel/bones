import hyRequest from '../request'

export function getDownLoadFile(fileURL) {
  return hyRequest.get({
    url: "/download",
    params: { fileURL },
    responseType: 'blob' 
  })
}