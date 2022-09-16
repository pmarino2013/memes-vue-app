const memesLoad = async () => {
  const resp = await fetch("https://api.imgflip.com/get_memes");
  const { data } = await resp.json();

  return data;
};

export default memesLoad;
