import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '@components/common/Header/Header';
import styles from './Category.Styles';
import {useLazyForumCategoriesQuery} from '@redux/services/authService';
import {categorySuccess} from '@redux/slices/forumSlice';

const Category = ({navigation}) => {
  const [forumCategories, setForumCategories] = useState([]);
  const id = useSelector(state => state.auth.user?.result._id);
  const dispatch = useDispatch();

  const [data] = useLazyForumCategoriesQuery();

  const fetchCategories = async () => {
    try {
      const response = await data(id);
      const forumCategory = response.data.result;
      console.log('FORUM CATEGORIES', forumCategory);
      setForumCategories(forumCategory);
    } catch (err) {
      console.log('Error fetching Categories:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategories = () => {
    dispatch(categorySuccess(forumCategories));
    console.log('CATEGORY NAVIGATION RESPONSE===>>', forumCategories);
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
              onPress={() => handleCategories(category._id)}>
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
