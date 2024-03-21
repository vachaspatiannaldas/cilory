const GetParams = (query) => {
  query = decodeURI(query);

  if (query) {
    const queryString = query.split("?")[1];
    if (queryString.length > 0) {
      const params = queryString.split("&");
      const paramsObj = {};
      params.forEach((param) => {
        const keyValue = param.split("=");
        if (keyValue[1]) {
          paramsObj[keyValue[0]] = keyValue[1].split(",");
        }
      });

      return paramsObj;
    }
  }

  return {};
};

const GenrateUrl = (e, genrateUrl) => {
  const value = e.target.value;
  let Url;
  const name = e.target.name;
  if (e.target.checked) {
    if (genrateUrl[name]) {
      Url = { ...genrateUrl, [name]: [...genrateUrl[name], value] };
    } else {
      Url = { ...genrateUrl, [name]: [value] };
    }
  } else {
    const FilterUrl = genrateUrl[name].filter((i) => {
      return i !== value;
    });
    Url = { ...genrateUrl, [name]: FilterUrl };
  }

  return Url;
};
export { GetParams, GenrateUrl };
