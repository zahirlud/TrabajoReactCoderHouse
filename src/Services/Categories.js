
const getCategories = async () => {
    try {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories")
    const data = await response.json()
  return data
}
  catch (error) {
     console.log("Error", error)
  }


}

const getCategoriesByProducts = async (id) => {
  try {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
  const data = await response.json()
return data
}
catch (error) {
   console.log("Error", error)
}


}


export {getCategories, getCategoriesByProducts}