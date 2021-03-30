import Identicon from 'identicon.js'

export function generateAvatar(hash) {
  const options = { size: 500 }
  const avatar = new Identicon(hash, options).toString()
  return `data:image/pngbase64,${avatar}`
}
