import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Layout from '../screens/Layout';
import Weather from '../screens/Weather';
import YoutubeViewer from '../screens/YoutubeViewer';
import TodoList from '../screens/TodoList';


const Nav = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Layout" component={Layout} options={{title: '처음 Layout'}}/>
                <Nav.Screen name = "Home" component={Home} options={{title: '추가 Home'}}/>
                <Nav.Screen name = "Weather" component={Weather} options={{title: '날씨조회화면'}}/>
                <Nav.Screen name = "Youtube" component={YoutubeViewer} options={{title: 'YOUTUBE'}}/>
                <Nav.Screen name = "TodoList" component={TodoList} options={{title: 'TodoList'}}/>


            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default MainTabNavigator;