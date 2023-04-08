import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <SafeAreaView>
  //       <ScrollView>
  //         <View style={styles.div}>
  //           <Text style={styles.text}>
  //             App
  //           </Text>
  //         </View>
  //       </ScrollView>
  //     </SafeAreaView>
  //   </NavigationContainer>
  // )
};

// const styles = React.StyleSheet.create({
//   text: {
//     color: 'red'
//   },
//   div: {
//     flex: 1,

//     backgroundColor: 'green'
//   }
// })

const HomeScreen = ({ navigation }: any) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }: any) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default App;
