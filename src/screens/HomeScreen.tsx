import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeNavProp = 
  NativeStackNavigationProp<RootStackParamList, 'Home'>;

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <View style={styles.container}>
      
      {/* Success Icon */}
      <View style={styles.iconContainer}>
        <Text style={styles.successIcon}>✅</Text>
      </View>

      {/* Success Message */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to HireMatch!</Text>
        <Text style={styles.subtitle}>
          Your account has been created successfully. You can now start exploring job opportunities or posting positions.
        </Text>
      </View>

      {/* Get Started Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.8}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  // ── Success Icon ──
  iconContainer: {
    marginBottom: 32,
  },
  successIcon: {
    fontSize: 80,
  },

  // ── Content ──
  contentContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: width * 0.8,
  },

  // ── Button ──
  buttonContainer: {
    width: '100%',
    maxWidth: 280,
  },
  getStartedButton: {
    backgroundColor: '#A4D93A',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  getStartedButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});