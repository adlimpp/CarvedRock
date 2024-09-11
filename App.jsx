import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './views/Home';
import About from './views/About';
import Careers from './views/Careers';
import Contact from './views/Contact';
import Trail from './views/Trail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Trail"
          component={Trail}
          options={{title: 'Trail'}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{title: 'Contact Us'}}
        />
        <Stack.Screen
          name="Careers"
          component={Careers}
          options={{title: 'Carrers'}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'About Us'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
