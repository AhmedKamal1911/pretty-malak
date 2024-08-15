const flattenResponse = (response) => {
  // Check if the response has a data property and it's an array
  if (!response || !Array.isArray(response.data)) {
    throw new Error("Invalid Strapi response format");
  }

  // Map over the data array and merge id with attributes for each item
  return response.data.map((item) => ({
    id: item.id,
    ...item.attributes,
  }));
};
export default flattenResponse;
