/**
 * Convert file to base64 by FileReader.
 *
 * @param file File object.
 * @return Promise of result.
 */
export function getBase64(file: File): Promise<FileReader['result'] | ProgressEvent> {
  return new Promise((res, rej) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => res(reader.result)
    reader.onerror = error => rej(error)
  })
}
