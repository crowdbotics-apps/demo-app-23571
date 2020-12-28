import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial188460Navigator from '../features/Tutorial188460/navigator';
import NotificationList188432Navigator from '../features/NotificationList188432/navigator';
import Settings188431Navigator from '../features/Settings188431/navigator';
import Settings188423Navigator from '../features/Settings188423/navigator';
import UserProfile188421Navigator from '../features/UserProfile188421/navigator';
import ArticleList188383Navigator from '../features/ArticleList188383/navigator';
import ArticleList188382Navigator from '../features/ArticleList188382/navigator';
import ArticleList188381Navigator from '../features/ArticleList188381/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial188460: { screen: Tutorial188460Navigator },
NotificationList188432: { screen: NotificationList188432Navigator },
Settings188431: { screen: Settings188431Navigator },
Settings188423: { screen: Settings188423Navigator },
UserProfile188421: { screen: UserProfile188421Navigator },
ArticleList188383: { screen: ArticleList188383Navigator },
ArticleList188382: { screen: ArticleList188382Navigator },
ArticleList188381: { screen: ArticleList188381Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
