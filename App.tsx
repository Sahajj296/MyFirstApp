import React, {useState} from 'react';
import {Alert} from 'react-native';
import SplashScreen from './SplashScreen';
import UserTypeScreen from './UserTypeScreen';

type Screen = 'splash' | 'userType';

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');

  const handleGetStarted = () => {
    setCurrentScreen('userType');
  };

  const handleSelectUserType = (type: 'employer' | 'jobseeker') => {
    Alert.alert(
      'User Type Selected',
      `You selected: ${type === 'employer' ? 'Employer' : 'Job Seeker'}`,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log(`Selected: ${type}`);
          },
        },
      ],
    );
  };

  if (currentScreen === 'splash') {
    return <SplashScreen onGetStarted={handleGetStarted} />;
  }

  if (currentScreen === 'userType') {
    return <UserTypeScreen onSelectType={handleSelectUserType} />;
  }

  return <></>;
}

export default App;