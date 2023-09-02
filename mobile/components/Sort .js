import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { Button } from '@ant-design/react-native';
import { Card, ListItem } from 'react-native-elements';



const Sort = ({navigation}) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios
        .get('https://fakestoreapi.com/products?sort=desc')
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    const searchpage=()=>{
      navigation.navigate('SearchScreen')
    }
    const renderItem = ({ item }) => (
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
    );
  
    return (
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <View >
            { <Button  onPress={searchpage} >Next</Button>}
            
          </View>
        }
      />
    );
  };
  
  export default Sort;
  