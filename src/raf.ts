import { AnyFunction } from './functions'

let i = 0
const idMap = new Map<number, ReturnType<typeof requestAnimationFrame>>()

/**
 * Clean `id`.
 *
 * @param id `id` in idMap.
 */
function cleanup(id: number) {
  idMap.delete(id)
}

/**
 * Use RAF to do somthing. When there's no left frames,
 * exec callback function.
 *
 * @param callback Callback when animation is over.
 * @param delayFrames Frames before fn executing.
 * @returns Return id of this RAF.
 */
export function createRAF(callback: AnyFunction, delayFrames = 1): number {
  const id = i++

  /**
   * Call raf when there's no left frame.
   *
   * @param leftFrames Left frames before executing.
   */
  function callRaf(leftFrames: number) {
    if (leftFrames === 0) {
      cleanup(id)
      callback()
      return
    }

    // Call raf and bind real raf id with `idMap`.
    const realId = requestAnimationFrame(() => callRaf(leftFrames - 1))
    idMap.set(id, realId)
  }

  callRaf(delayFrames)

  return id
}

/**
 * Cancel raf by id.
 *
 * @param id Raf id created by `raf`.
 */
export function cancelRAF(id: number): void {
  const realId = idMap.get(id)
  if (realId) {
    cleanup(id)
    cancelAnimationFrame(realId)
  }
}
