import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const supportedExtesionType = ['.webp', '.jpg', 'jpeg', '.png', '.gif']

export const checkFile = (req, res, next) => {
  const image = req.files?.image;

  if (image) {
    const extensionType = path.extname(image.name);
    if (supportedExtesionType.includes(extensionType)) {
      const imagePath = `${uuidv4()}-${image.name}`;

      image.mv(`./uploads/${imagePath}`, (err) => {
        if (err) res.status(400).json({ message: 'something went wrong' });
        req.imagePath = imagePath;
        next();
      })

    } else {
      res.status(400).json({ message: 'please provide  valid image' });
    }


  } else {
    res.status(400).json({ message: 'please provide image' });
  }

}