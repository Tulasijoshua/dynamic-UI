import { StyleSheet, Text, View, Dimensions } from 'react-native';
import DynamicComp from './components/DynamicComp';
// import UseWindowComp from './components/UseWindowComp';
import AreaView from './components/AreaView';
import CrossPlatformComp from './components/CrossPlatformComp';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "plum", padding: 60}} >
      {/* <DynamicComp /> */}
      {/* <UseWindowComp /> */}
      {/* <AreaView /> */}
      <CrossPlatformComp />
    </View>
  );
}

