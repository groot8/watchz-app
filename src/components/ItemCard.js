import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

const ItemCard = ({ title, thumbnail, rating }) => {
  return (
    <View style={styles.card}>
      <View style={styles.thumbnail}>
        <Image
          source={{
            uri: thumbnail
              ? thumbnail
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYg2IOBdgl5h_HzjwNUtrAIuzOlArFhh-xWVhLLzMTT3EcbQB2',
          }}
          style={{
            width: '100%',
            height: 140,
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View style={styles.info}>
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
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    width: 360,
    height: 200,
    // backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#445566',
    borderRadius: 8,
    // padding: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  thumbnail: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: '#E5E8EC',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rate: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
