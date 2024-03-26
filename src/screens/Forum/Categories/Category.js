import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '@components/common/Header/Header';
import styles from './Category.Styles';
import {useLazyForumCategoriesQuery} from '@redux/services/authService';
import {
  categorySuccess,
  fetchCategoriesSuccess,
} from '@redux/slices/forumSlice';

const Category = ({navigation}) => {
  const [forumCategories, setForumCategories] = useState([]);
  const id = useSelector(state => state.auth.user?.result._id);
  const dispatch = useDispatch();

  const [data] = useLazyForumCategoriesQuery();

  const fetchCategories = async () => {
    try {
      const response = await data(id);
      const forumCategories = response.data.result;
      console.log('FORUM CATEGORIES', forumCategories);
      dispatch(fetchCategoriesSuccess(forumCategories));
      setForumCategories(forumCategories);
    } catch (err) {
      console.log('Error fetching Categories:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategories = category => {
    dispatch(categorySuccess(category));
    // dispatch(fetchCategoriesSuccess(fetchCategories));
    console.log('CATEGORY NAVIGATION RESPONSE===>>', category);
    navigation.navigate('Details');
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Forum Categories</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {forumCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.forumItemContainer}
              onPress={() => handleCategories(category)}>
              <Text style={styles.forumItemTitle}>
                {category.category_name}
              </Text>
              <Text style={styles.forumItemText}>{category.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Category;
