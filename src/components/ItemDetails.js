import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

const ItemDetails = (props) => {
  console.log(props.route.params);
  const { title, date, rating, brief, coverImage } = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <Image
          source={{
            uri: coverImage
              ? coverImage
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYg2IOBdgl5h_HzjwNUtrAIuzOlArFhh-xWVhLLzMTT3EcbQB2',
          }}
          style={{
            width: '100%',
            height: 180,
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rate}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={rating}
            // selectedStar={(rating) => setRating(rating)}
            starSize={20}
            emptyStarColor={'#222B33'}
            fullStarColor={'#55B02C'}
          />
        </View>
      </View>
      <View style={styles.brief}>
        <Text style={{ color: '#E5E8EC', fontSize: 16 }}>{brief}</Text>
      </View>
      <View style={styles.date}>
        <Text style={{ color: '#445566', fontSize: 16, fontWeight: 'bold' }}>
          added at {date}
        </Text>
      </View>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1D242B',
  },
  thumbnail: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    paddingRight: 10,
    paddingLeft: 13,
    marginTop: 20,
  },
  rate: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#E5E8EC',
    fontSize: 24,
    fontWeight: 'bold',
  },
  brief: {
    padding: 20,
  },
  date: {
    marginRight: 15,
    alignSelf: 'flex-end',
  },
});
