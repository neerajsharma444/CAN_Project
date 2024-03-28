import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import styles from './Portfolio.Styles';
import {useLazyPortfolioListQuery} from '@redux/services/authService';
import {useSelector} from 'react-redux';

const Portfolio = () => {
  const id = useSelector(state => state.auth?.user?.result?._id);
  const [portfolioData, setPortfolioData] = useState([]);

  const [data] = useLazyPortfolioListQuery();

  const fetchData = async () => {
    try {
      const response = await data(id).unwrap();
      const res = response?.result;
      setPortfolioData(res);
      console.log('RESPONSE===>', res);
    } catch (err) {
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
        <Text style={styles.title}>My Portfolio</Text>
        <FlatList
          data={portfolioData}
          renderItem={renderCardItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Portfolio;
