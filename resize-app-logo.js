const Jimp = require("jimp");

// read image from process argument
const imageName = process.argv[2];
// image extension
const imageExtension = imageName.split(".").pop();
// image name without extension, if the image has dots in the name this should work
const imageNameWithoutExtension = imageName.replace("." + imageExtension, "");
const imageNameSize16 = imageNameWithoutExtension.concat("-16x16.").concat(imageExtension);
const imageNameSize32 = imageNameWithoutExtension.concat("-32x32.").concat(imageExtension);
const imageNameSize48 = imageNameWithoutExtension.concat("-48x48.").concat(imageExtension);
const imageNameSize128 = imageNameWithoutExtension.concat("-128x128.").concat(imageExtension);

// Resize image to 16x16 and write beside original image
Jimp.read(imageName)
  .then((image16) => {
    return image16
      .resize(16, 16) // resize
      .write(imageNameSize16); // save
  })
  .catch((err) => {
    console.error(err);
  });

// Resize image to 32x32 and write beside original image
Jimp.read(imageName)
  .then((image32) => {
    return image32
      .resize(32, 32) // resize
      .write(imageNameSize32); // save
  })
  .catch((err) => {
    console.error(err);
  });

// Resize image to 48x48 and write beside original image
Jimp.read(imageName)
  .then((image48) => {
    return image48
      .resize(48, 48) // resize
      .write(imageNameSize48); // save
  })
  .catch((err) => {
    console.error(err);
  });

// Resize image to 128x128 and write beside original image
Jimp.read(imageName)
  .then((image128) => {
    return image128
      .resize(128, 128) // resize
      .write(imageNameSize128); // save
  })
  .catch((err) => {
    console.error(err);
  });
