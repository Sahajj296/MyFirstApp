import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  UserType: undefined;
  SignUp: {userType: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const {width} = Dimensions.get('window');

const SplashScreen = ({navigation}: Props) => {
  const handleGetStarted = () => {
    navigation.navigate('UserType');
  };

  return (
    <View style={styles.container}>
      {/* Floating Avatars */}
      <View style={styles.avatarsContainer}>
        <View style={[styles.avatar, styles.avatar1]}>
          <Text style={styles.avatarText}>👨‍💼</Text>
        </View>
        <View style={[styles.avatar, styles.avatar2]}>
          <Text style={styles.avatarText}>👩‍💻</Text>
        </View>
        <View style={[styles.avatar, styles.avatar3]}>
          <Text style={styles.avatarText}>👨‍🔧</Text>
        </View>
        <View style={[styles.avatar, styles.avatar4]}>
          <Text style={styles.avatarText}>👩‍🎨</Text>
        </View>
      </View>

      {/* Stats Card */}
      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Join Our Community</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10K+</Text>
            <Text style={styles.statLabel}>Jobs</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5K+</Text>
            <Text style={styles.statLabel}>Companies</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50K+</Text>
            <Text style={styles.statLabel}>Users</Text>
          </View>
        </View>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatarsContainer: {
    width: width * 0.8,
    height: 200,
    marginBottom: 40,
    position: 'relative',
  },
  avatar: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar1: {
    top: 20,
    left: 20,
  },
  avatar2: {
    top: 40,
    right: 30,
  },
  avatar3: {
    bottom: 40,
    left: 60,
  },
  avatar4: {
    bottom: 20,
    right: 50,
  },
  avatarText: {
    fontSize: 30,
  },
  statsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: '#6C63FF',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
