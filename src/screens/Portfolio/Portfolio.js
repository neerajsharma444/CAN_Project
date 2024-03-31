import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import styles from './Portfolio.Styles';
import {useSelector} from 'react-redux';
import {useLazyPortfolioListQuery} from '@redux/services/mendateService';

const Portfolio = () => {
  const id = useSelector(state => state.auth?.user?.result?._id);
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [data] = useLazyPortfolioListQuery();

  const fetchData = async () => {
    try {
      const response = await data(id).unwrap();
      const res = response?.result;
      setPortfolioData(res);
      setLoading(false);
      console.log('RESPONSE===>', res);
    } catch (err) {
      setLoading(false);
      console.log('Error fetching portfolio list:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCardItem = ({item}) => (
    <Card
      name={item.company_name}
      description={item.description}
      logo={item.logo}
      amountLabel="Amount: "
      amount={item.amount.total_amount}
      roundSizeLabel="# of Shares: "
      roundSize={item.number_of_share}
      valuationLabel="At Valuation: "
      valuation={`${item.valuation.valuation_amount} ${item.valuation.valuation_amount_in}`}
      investmentLabel="Round Size: "
      investment={`${item.round_size.round_size_amount} ${item.round_size.round_size_amount_in}`}
      investmentDateLabel="Date of Investment: "
      investmentDate={item.date}
    />
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <>
            <View>
              <Text style={styles.title}>My Portfolio</Text>
              <FlatList
                data={portfolioData}
                renderItem={renderCardItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Portfolio;
