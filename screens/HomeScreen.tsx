import React from 'react';

import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';
import HeaderSection from '../components/screens/HomeScreen/HeaderSection';
import MainSection from '../components/screens/HomeScreen/MainSection';
import { HomeScreenNavigationProps } from '../types/Types';

const HomeScreen: React.FC<HomeScreenNavigationProps> = ({ navigation }) => {
  return (
    <Container>
      <FocusAwareStatusBar style="light" />
      <HeaderSection />
      <MainSection navigation={navigation} />
    </Container>

  );
};

export default HomeScreen;
