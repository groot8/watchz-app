import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getAllTopics } from '../redux/actions/movies';
const Movies = ({ getAllTopics, movies }) => {
  useEffect(() => {
    getAllTopics();
  }, [getAllTopics]);
  console.log(movies);
  const renderMovies = () => {
    return (
      movies &&
      movies.map((movie) => (
        <Text style={{ color: '#fff' }}>{movie.title}</Text>
      ))
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>movies</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { getAllTopics })(Movies);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D242B',
  },
});
