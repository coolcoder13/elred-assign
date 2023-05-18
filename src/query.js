const fetchUrl = (url) => {
  return fetch(url).then((res) => res.json());
};

export const fetchCategories = async () => {
  const data = await fetchUrl(
    "https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json"
  );
  return data;
};
