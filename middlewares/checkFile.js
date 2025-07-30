import path from 'path';

const supportedExtesionType = ['.webp', '.jpg', 'jpeg', '.png', '.gif']

export const checkFile = (req, res, next) => {
  const image = req.files?.image;
  console.log(image);

  if (image) {
    const extensionType = path.extname(image.name);
    if (supportedExtesionType.includes(extensionType)) {

      image.mv(`./uploads/${image.name}`, (err) => {
        if (err) res.status(400).json({ message: 'something went wrong' });
        req.imagePath = image.name;
        next();
      })

    } else {
      res.status(400).json({ message: 'please provide  valid image' });
    }


  } else {
    res.status(400).json({ message: 'please provide image' });
  }

}