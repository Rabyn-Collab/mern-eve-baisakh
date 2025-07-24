import fs from 'fs';






if (fs.existsSync('./folder/sample.txt')) {
  fs.unlink('./folder/sample.txt', (err) => {
    console.log(err);
  })
} else {
  fs.writeFile('./folder/sample.txt', 'hello jee', 'utf-8', (err) => {
    console.log(err);
  })
}