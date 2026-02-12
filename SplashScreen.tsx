import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';

type SplashNavProp = 
  NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const { width } = Dimensions.get('window');

const avatars = [
  { uri: 'https://i.pravatar.cc/100?img=1', size: 80, style: { top: 100, left: 50 } },
  { uri: 'https://i.pravatar.cc/100?img=2', size: 60, style: { top: 180, left: 20 } },
  { uri: 'https://i.pravatar.cc/100?img=3', size: 70, style: { top: 200, right: 30 } },
  { uri: 'https://i.pravatar.cc/100?img=4', size: 60, style: { top: 350, left: 30 } },
  { uri: 'https://i.pravatar.cc/100?img=5', size: 80, style: { top: 500, right: 40 } },
  { uri: 'https://i.pravatar.cc/100?img=6', size: 70, style: { top: 120, right: 50 } },
];

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashNavProp>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}>
        <View style={styles.container}>
          {avatars.map((avatar) => (
            <Image
              key={avatar.uri}
              source={{ uri: avatar.uri }}
              style={[
                styles.avatar,
                avatar.style,
                {
                  width: avatar.size,
                  height: avatar.size,
                  borderRadius: avatar.size / 2,
                },
              ]}
              resizeMode="cover"
            />
          ))}

          <View style={styles.card}>
            <View style={styles.statsRow}>
              <View>
                <Text style={styles.statValue}>👤 2,847</Text>
                <Text style={styles.statLabel}>Job seeker</Text>
              </View>
              <View>
                <Text style={styles.statValue}>🏢 1,293</Text>
                <Text style={styles.statLabel}>Open Jobs</Text>
              </View>
            </View>
            <Text style={styles.cardFooter}>
              Tap a profile to see who's hiring & who's looking
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => navigation.navigate('GetStarted')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.bottomText}>Join thousands finding their perfect job</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  background: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },
  avatar: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  card: {
    width: width * 0.9,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F1F1F',
  },
  statLabel: {
    marginTop: 4,
    fontSize: 14,
    color: '#777',
  },
  cardFooter: {
    fontSize: 13,
    color: '#8C8C8C',
    textAlign: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 80,
    width: width * 0.85,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  button: {
    backgroundColor: '#A4D93A',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomText: {
    position: 'absolute',
    bottom: 40,
    fontSize: 14,
    color: '#999999',
  },
});

export default SplashScreen;
