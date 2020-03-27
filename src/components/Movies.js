import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getAllTopics } from '../redux/actions/movies';
const Movies = ({ getAllTopics, movies }) => {
  useEffect(() => {
    getAllTopics();
  }, [getAllTopics]);
  console.log(movies);
  const renderMovies = () => {
    return movies.map(movie => <Text>{movie.title}</Text>);
  };
  return <View>{renderMovies()}</View>;
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { getAllTopics })(Movies);
