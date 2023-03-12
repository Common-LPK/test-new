function deepCopy(object) {
  const res = {};

  for (const key in object) {
    if (key === "child") {
      res[key] = deepCopy(object[key]);
    } else {
      res[key] = object[key];
    }
  }

  return res;
}

export default deepCopy;
