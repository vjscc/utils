/**
 * convert img file to base64 by FileReader
 * @param {*} file file object
 * @return {Promise<any>} a Promise with converting result
 */
export default function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
