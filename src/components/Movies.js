import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getAllTopics } from '../redux/actions/movies'
// import {getAllTopics} from 'redux/actions/movies';
const Movies = ({getAllTopics,topics}) => {
    useEffect(() => {
        getAllTopics();
      }, [getAllTopics]);
    console.log(topics)
    return (
        <View>
            <Text>{topics && topics.id}</Text>
            {/* <Text>dfffffffff</Text> */}
        </View>
    )
}

const mapStateToProps = state => ({
    topics: state.movies.topics,
  });
  
export default connect(mapStateToProps,{getAllTopics})( Movies)
