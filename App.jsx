import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './views/Home';
import About from './views/About';
import Careers from './views/Careers';
import Contact from './views/Contact';
import Trail from './views/Trail';
import TrailDetail from './views/TrailDetail';
import Store from './views/Store';
import BootShop from './views/BootShop';
import Boot from './views/Boot';
import KayakShop from './views/KayakShop';
import Kayak from './views/Kayak';
import ClimbingShop from './views/ClimbingShop';
import Climbing from './views/Climbing';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Climbing"
          component={Climbing}
          options={{title: 'Climbing'}}
        />
        <Stack.Screen
          name="ClimbingShop"
          component={ClimbingShop}
          options={{title: 'ClimbingShop'}}
        />
        <Stack.Screen
          name="Kayak"
          component={Kayak}
          options={{title: 'Kayak'}}
        />
        <Stack.Screen
          name="KayakShop"
          component={KayakShop}
          options={{title: 'Kayak Shop'}}
        />
        <Stack.Screen name="Boot" component={Boot} options={{title: 'Boot'}} />
        <Stack.Screen
          name="BootShop"
          component={BootShop}
          options={{title: 'BootShop'}}
        />
        <Stack.Screen
          name="Store"
          component={Store}
          options={{title: 'Store'}}
        />
        <Stack.Screen
          name="TrailDetail"
          component={TrailDetail}
          options={{title: 'Trail Detail'}}
        />
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
