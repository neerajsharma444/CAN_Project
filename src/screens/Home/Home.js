import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import {fetchMandateList} from '@redux/services/api';
import styles from './Home.Styles';

const Home = ({navigation}) => {
  const [mandateList, setMandateList] = useState([]);
  const token = useSelector(state => state.user?.Token);

  useEffect(() => {
    const fetchMandates = async () => {
      try {
        const response = await fetchMandateList(token);
        setMandateList(response.result);
      } catch (error) {
        console.error('Error fetching mandate list:', error);
      }
    };

    fetchMandates();
  }, [token]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Active Mandate</Text>

          {mandateList.map((mandate, index) => (
            <Card
              key={index}
              name={mandate.company_name}
              description={mandate.description}
              amountLabel="MRP: "
              amount={`${mandate.mrr.mrr_amount} ${mandate.mrr.mrr_amount_in}`}
              roundSizeLabel="Round Size: "
              roundSize={`${mandate.round_size.round_size_amount} ${mandate.round_size.round_size_amount_in}`}
              valuationLabel="Valuation: "
              valuation={`${mandate.valuation.valuation_amount} ${mandate.valuation.valuation_amount_in}`}
              investmentLabel="Commitment: "
              investment={`${mandate.commitment.commitment_amount} ${mandate.commitment.commitment_amount_in}`}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
