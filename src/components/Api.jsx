import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWJiYjNkYmY5YTc4YmYzMzg4NzQ2NWRjMzNkYmZhMyIsInN1YiI6IjY1ZTg4NWM2MmIxYjQ0MDE4NzZhMWI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhBueR8wNg5cCNXzyHxhDQn0OaW1VXF-Xqm42zVWZhg';

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}

export const searchMovies = async query => {
  try {
    const response = await axios.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error during API call:', error);
    throw error;
  }
};

export async function fetchMovieById(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by id:', error);
    throw error;
  }
}


export async function fetchMovieCredits(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  } 
}


export async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`); 
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
}
