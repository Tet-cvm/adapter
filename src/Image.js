import * as Mixin from './util/mixin'

export default function Image() {
  const image = wx.createImage();
  if (!('tagName' in image)) {
    image.tagName = 'IMG'
  }

  Mixin.parentNode(image);
  Mixin.classList(image);

  console.log(image, '@111-image')

  return image;
}