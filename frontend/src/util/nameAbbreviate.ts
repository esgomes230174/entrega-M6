const nameAbbreviate = (name: string) => {
  if (name.split(" ")[1]) {
    return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
  }
  return `${name.split(" ")[0][0]}`;
};

export default nameAbbreviate;
