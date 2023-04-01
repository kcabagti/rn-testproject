import React, { useState } from 'react';
import { DashboardScreenComponentStyleheet, View, Text, TouchableOpacity } from 'react-native';
import DashboardScreenComponentStyle from '../components/DashboardScreen.component.style';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={DashboardScreenComponentStyle.container}>
      <View style={DashboardScreenComponentStyle.header}>
        {/* <Text style={DashboardScreenComponentStyle.headerText}>My Dashboard</Text> */}
      </View>
      <View style={DashboardScreenComponentStyle.nav}>
        <TouchableOpacity
          style={[DashboardScreenComponentStyle.navItem, activeTab === 'home' && DashboardScreenComponentStyle.activeNavItem]}
          onPress={() => handleTabPress('home')}>
          <Text style={DashboardScreenComponentStyle.navItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[DashboardScreenComponentStyle.navItem, activeTab === 'enrollment' && DashboardScreenComponentStyle.activeNavItem]}
          onPress={() => handleTabPress('enrollment')}>
          <Text style={DashboardScreenComponentStyle.navItemText}>Enrollment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[DashboardScreenComponentStyle.navItem, activeTab === 'logout' && DashboardScreenComponentStyle.activeNavItem]}
          onPress={() => handleTabPress('logout')}>
          <Text style={DashboardScreenComponentStyle.navItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={DashboardScreenComponentStyle.content}>
        {activeTab === 'home' && ( // conditional rendering in javascript
          <View style={DashboardScreenComponentStyle.tabContent}>
            <Text>Home content goes here</Text>
          </View>
        )}
        {activeTab === 'enrollment' && (
          <View style={DashboardScreenComponentStyle.tabContent}>
            <Text>Enrollment content goes here</Text>
          </View>
        )}
        {activeTab === 'logout' && (
          <View style={DashboardScreenComponentStyle.tabContent}>
            <Text>logout content goes here</Text>
          </View>
        )}
      </View>
    </View>
  );
};


export default Dashboard;