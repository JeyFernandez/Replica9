import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import  Nav  from "../component/Nav";
import Container from './Container';

function Index() {
  return (
    <ScrollView>
       <Nav/>
       <Container/>
    </ScrollView>
  )
};

export default Index