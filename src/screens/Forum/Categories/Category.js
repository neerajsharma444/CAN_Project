import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '@components/common/Header/Header';
import styles from './Category.Styles';
import {fetchForumCategories} from '@redux/services/api';

const Category = ({navigation}) => {
  const [forumCategories, setForumCategories] = useState([]);
  const token = useSelector(state => state.user?.Token);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log('Token:', token);
        if (token) {
          const categories = await fetchForumCategories(token);
          setForumCategories(categories);
        }
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    fetchCategories();
  }, [token]);

  const handleCategories = categoryId => {
    navigation.navigate('Details', {categoryId: categoryId});
  };

  const renderForumData = ({item}) => (
    <View style={styles.forumItemContainer}>
      <TouchableOpacity onPress={() => handleCategories(item._id)}>
        <Text style={styles.forumItemTitle}>{item.category_name}</Text>
        <Text style={styles.forumItemText}>{item.description}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Forum Categories</Text>
        <FlatList
          data={forumCategories}
          renderItem={renderForumData}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Category;
