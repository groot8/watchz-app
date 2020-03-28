import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getAllTopics } from '../redux/actions/movies';
import ItemCard from './ItemCard';

const Movies = ({ getAllTopics, movies }) => {
  useEffect(() => {
    getAllTopics();
  }, [getAllTopics]);
  console.log(movies);
  const renderMovies = () => {
    return (
      movies &&
      movies.map((movie) => (
        // <Text style={{ color: '#fff' }}>{movie.title}</Text>
        <ItemCard title={movie.title} thumbnail={movie.coverImage}></ItemCard>
      ))
    );
  };
  return <View style={styles.container}>{renderMovies()}</View>;
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { getAllTopics })(Movies);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1D242B',
    paddingTop: 20,
  },
});
