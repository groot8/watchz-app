import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { getAllSeries } from '../redux/actions/series';
import ItemCard from './ItemCard';

const Series = ({ getAllSeries, series,navigation }) => {
  useEffect(() => {
    getAllSeries();
  }, [getAllSeries]);
  const renderSeries = () => {
    return (
      series &&
      series.map((item) => (
        // <Text style={{ color: '#fff' }}>{movie.title}</Text>
        <ItemCard
          title={item.title}
          thumbnail={item.coverImage}
          rating={item.rating}
          key={item.id}
          onClick={()=>navigation.navigate('ItemDetails',item)}

        ></ItemCard>
      ))
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: '#445566', fontSize: 20, fontWeight: '900' }}>
          I Watched ...
        </Text>
        <Button onPress={() => setModal(true)} title="+ Log" color="#55B02C" />
      </View>
      {renderSeries()}
    </View>
  );
};

const mapStateToProps = (state) => ({
  series: state.series.series,
});

export default connect(mapStateToProps, { getAllSeries })(Series);

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
