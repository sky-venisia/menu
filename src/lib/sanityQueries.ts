export const MENU_QUERY = `*[_type == "menuItem"] {
  _id,
  name,
  description,
  price,
  category->{
    _id,
    name
  },
  image{
    asset->{
      _id,
      url
    }
  }
}`
