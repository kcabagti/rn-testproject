
import { StyleSheet } from 'react-native'
export default StyleSheet.create({

  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Homepage'
    }
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      title: 'Settings'
    }
  },
  Notifications: {
    screen: NotificationPage,
    navigationOptions: {
      title: 'Notifications'
    }
  },
  News: {
    screen: NewsPage,
    navigationOptions: {
      title: 'News'
    }
  }
},
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2
  });

