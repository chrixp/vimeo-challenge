const imagePath = require.context('./assets/images', true)
export const imageRequire = (imageLink) => {
 return imagePath(imageLink)
}