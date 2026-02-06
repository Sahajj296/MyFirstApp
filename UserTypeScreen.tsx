import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  UserType: undefined;
  SignUp: {userType: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'UserType'>;

const UserTypeScreen = ({navigation}: Props) => {
  const handleSelection = (type: string) => {
    navigation.navigate('SignUp', {userType: type});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>I am a...</Text>
      <Text style={styles.subtitle}>Choose your account type</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => handleSelection('Employer')}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>💼</Text>
          </View>
          <Text style={styles.optionTitle}>Employer</Text>
          <Text style={styles.optionDescription}>
            I'm hiring for my company
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => handleSelection('Job Seeker')}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🔍</Text>
          </View>
          <Text style={styles.optionTitle}>Job Seeker</Text>
          <Text style={styles.optionDescription}>
            I'm looking for a job
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 20,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0EFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 40,
  },
  optionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default UserTypeScreen;
