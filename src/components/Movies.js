import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { getAllMovies } from '../redux/actions/movies';
import ItemCard from './ItemCard';
import LogModal from './LogModal';

const Movies = ({ getAllMovies, movies }) => {
  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);
  const [visible, setModal] = useState(false);
  const renderMovies = () => {
    return (
      movies &&
      movies.map((movie) => (
        // <Text style={{ color: '#fff' }}>{movie.title}</Text>
        <ItemCard
          title={movie.title}
          thumbnail={movie.coverImage}
          key={movie.id}
        ></ItemCard>
      ))
    );
  };
  return (
    <>
      <View style={styles.container}>
        <LogModal visible={visible} setModal={setModal} />
        <View style={styles.header}>
          <Text style={{ color: '#445566', fontSize: 20, fontWeight: '900' }}>
            I Watched ...
          </Text>
          <Button onPress={() => setModal(true)} title="Log" color="#55B02C" />
        </View>
        {renderMovies()}
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { getAllMovies })(Movies);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1D242B',
    paddingTop: 20,
  },
  header: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
  },
});
