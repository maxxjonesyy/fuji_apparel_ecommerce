import * as contentful from "contentful";

const content = { images: {}, products: {} };

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

function contentCleanup() {
  fetchContent("images").then((response) =>
    response.forEach((item) => {
      content.images[item.fields.name] = {
        name: item.fields.name,
        src: item.fields.image.fields.file.url,
      };
    })
  );

  fetchContent("product").then((response) =>
    response.forEach((item) => {
      content.products[item.fields.name] = {
        name: item.fields.name,
        description: item.fields.productDescription,
        images: item.fields.productImage,
        price: item.fields.productPrice,
      };
    })
  );
}

contentCleanup();

export { content };
