import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '@components/common/Header/Header';
import styles from './Category.Styles';

const Category = ({navigation}) => {
  const handleCategories = () => {
    navigation.navigate('Details');
  };
  const forumData = [
    {
      title: 'General Guideline',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Pitch Session',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Valuations & MRR',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'General Guideline',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Pitch Session',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const renderForumData = ({item}) => (
    <View style={styles.forumItemContainer}>
      <TouchableOpacity onPress={handleCategories}>
        <Text style={styles.forumItemTitle}>{item.title}</Text>
      </TouchableOpacity>
      <Text style={styles.forumItemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Forum Categories</Text>
        <FlatList
          data={forumData}
          renderItem={renderForumData}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Category;
