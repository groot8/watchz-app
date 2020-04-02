import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { getAllSeries, logNewSeries } from '../redux/actions/series';
import ItemCard from './ItemCard';
import LogModal from './LogModal';
import StarRating from 'react-native-star-rating';
import moment from 'moment';
import { generateID } from '../../helpers';
const Series = ({ getAllSeries, series, navigation, logNewSeries }) => {
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
          onClick={() => navigation.navigate('ItemDetails', item)}
        ></ItemCard>
      ))
    );
  };
  const handleSubmit = () => {
    logNewSeries({
      id: generateID(),
      title: movieName,
      brief: movieBrief,
      rating: rating,
      date: moment(new Date()).format('MMMM Do YYYY'),
    });
    setName('');
    setBrief('');
    setRating(0);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  const [visible, setModal] = useState(false);
  const [movieName, setName] = useState('');
  const [movieBrief, setBrief] = useState('');
  const [rating, setRating] = useState(0);
  const [thumbnail, setThumbnail] = useState('');
  return (
    <>
      <LogModal visible={visible} setModal={setModal}>
        <Text style={{ color: '#CCDDEE', marginBottom: 10, fontSize: 18 }}>
          Log a new series
        </Text>
        <TextInput
          value={movieName}
          onChangeText={(value) => setName(value)}
          placeholder="name"
          placeholderTextColor={'#445566'}
          style={{
            height: 40,
            borderColor: '#CCDDEE',
            paddingLeft: 8,
            backgroundColor: '#CCDDEE',
            borderWidth: 1,
            color: '#445566',
            borderRadius: 4,
            marginBottom: 10,
          }}
        />
        <TextInput
          value={movieBrief}
          onChangeText={(value) => setBrief(value)}
          placeholder="your thoughts .."
          placeholderTextColor={'#445566'}
          multiline={true}
          numberOfLines={4}
          style={{
            height: 80,
            borderColor: '#CCDDEE',
            paddingLeft: 8,
            paddingTop: 8,
            backgroundColor: '#CCDDEE',
            borderWidth: 1,
            color: '#445566',
            borderRadius: 4,
            textAlignVertical: 'top',
            marginBottom: 20,
          }}
        />

        <View style={styles.rate}>
          <Text style={{ color: '#CCDDEE', marginRight: 10, fontSize: 16 }}>
            Rate :
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={rating}
            selectedStar={(rating) => setRating(rating)}
            starSize={20}
            emptyStarColor={'#222B33'}
            fullStarColor={'#55B02C'}
          />
        </View>
        <View style={{ marginTop: 20, width: 80, alignSelf: 'flex-end' }}>
          <Button onPress={() => handleSubmit()} title="save" color="#55B02C" />
        </View>
      </LogModal>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#445566', fontSize: 20, fontWeight: '900' }}>
            I Watched ...
          </Text>
          <Button
            onPress={() => setModal(true)}
            title="+ Log"
            color="#55B02C"
          />
        </View>
        {renderSeries()}
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  series: state.series.series,
});

export default connect(mapStateToProps, { getAllSeries, logNewSeries })(Series);

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
  rate: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
