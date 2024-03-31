import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '@components/common/Header/Header';
import styles from './Category.Styles';
import {useLazyForumCategoriesQuery} from '@redux/services/forumService';
import {
  categorySuccess,
  fetchCategoriesSuccess,
} from '@redux/slices/forumSlice';

const Category = ({navigation}) => {
  const [forumCategories, setForumCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    } catch (err) {
      console.log('Error fetching Categories:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategories = category => {
    dispatch(categorySuccess(category));
    console.log('CATEGORY NAVIGATION RESPONSE===>>', category);
    navigation.navigate('Details');
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            {loading ? (
              <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : (
              <>
                <Text style={styles.headingText}>Forum Categories</Text>
                {forumCategories.map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.forumItemContainer}
                    onPress={() => handleCategories(category)}>
                    <Text style={styles.forumItemTitle}>
                      {category.category_name}
                    </Text>
                    <Text style={styles.forumItemText}>
                      {category.description}
                    </Text>
                  </TouchableOpacity>
                ))}
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Category;
