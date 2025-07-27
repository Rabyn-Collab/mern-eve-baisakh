



export const getProducts = (req, res) => {
  return res.status(200).json({ message: 'All products' });
}



export const getProduct = (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.status(200).json({ message: 'product' });
}


export const addProduct = (req, res) => {

}



export const updateProduct = (req, res) => {

}




export const removeProduct = (req, res) => {

}
