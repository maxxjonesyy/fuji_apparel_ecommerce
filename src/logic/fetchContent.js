import * as contentful from "contentful";

const images = {};
const products = {};

const data = [];

function fetchContent(type) {
  const client = contentful.createClient({
    space: import.meta.env.VITE_SPACE,
    accessToken: import.meta.env.VITE_TOKEN,
  });

  return client
    .getEntries({ content_type: type })
    .then((response) => response.items)
    .catch((error) => console.error(error));
}

fetchContent("images").then((response) => {
  response.forEach((item) => {
    images[item.fields.name] = {
      name: item.fields.name,
      url: item.fields.image.fields.file.url,
    };
  });
});

fetchContent("product").then((response) => {
  response.forEach((item) => {
    products[item.fields.productName] = {
      name: item.fields.productName,
      images: item.fields.productImage,
      description: item.fields.productDescription,
      price: item.fields.productPrice,
    };
  });
});

data.products = products;
data.images = images;

export { data };
