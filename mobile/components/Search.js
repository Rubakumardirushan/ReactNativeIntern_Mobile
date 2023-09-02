import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,  FlatList } from 'react-native';
import axios from 'axios';
import { Button } from '@ant-design/react-native';
import { Card, ListItem } from 'react-native-elements';
const Search = ({navigation}) => {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [productId]);

  const fetchData = () => {
    setIsLoading(true);

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProductData([response.data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => (
    <View>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: item.image }} />
        <Text style={{ marginVertical: 10 }}>{item.description}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Price: ${item.price}</Text>
          <Text>Category: {item.category}</Text>
        </View>
      </Card>
    </View>
  );
const Limipage=()=>{
    navigation.navigate('LimitScreen')
}
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Enter Product ID:</Text>
      <TextInput
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
        onChangeText={(text) => setProductId(text)}
        value={productId}
        keyboardType="numeric"
      />
      <Button  onPress={fetchData} >Search</Button>
      {isLoading && <Text>Loading...</Text>}
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
            <View >
              {<Button  onPress={Limipage} >Next</Button>}
              
            </View>
          }

      />
    </View>
  );
};

export default Search;
