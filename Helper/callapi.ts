import instance from "./axios";

const fetchTrendingMovies = async () => {
  try {
    const data = await instance.get(`trending/movie/day`);
    return data;
  } catch (error) {
    console.error("error =>", error);
  }
};

export { fetchTrendingMovies };
