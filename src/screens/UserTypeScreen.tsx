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

type UserTypeNavProp = 
  NativeStackNavigationProp<RootStackParamList, 'UserType'>;

const { width, height } = Dimensions.get('window');

const BlurredAvatar = ({ 
  size = 52, 
  style 
}: { 
  size?: number; 
  style?: any 
}) => (
  <View
    style={[
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#CCCCCC',
        opacity: 0.45,
        borderWidth: 2,
        borderColor: '#FFFFFF',
      },
      style,
    ]}
  />
);

export default function UserTypeScreen() {
  const navigation = useNavigation<UserTypeNavProp>();

  return (
    <View style={styles.container}>

      {/* ── Blurred Avatar Background ── */}
      <View style={styles.backgroundSection}>
        <View style={styles.bgCircle} />
        <BlurredAvatar size={60} style={styles.bgAvatarTop} />
        <BlurredAvatar size={52} style={styles.bgAvatarLeft} />
        <BlurredAvatar size={68} style={styles.bgAvatarCenter} />
        <BlurredAvatar size={50} style={styles.bgAvatarRight} />
        <BlurredAvatar size={44} style={styles.bgAvatarBottomLeft} />
      </View>

      {/* ── Bottom White Card ── */}
      <View style={styles.bottomCard}>
        
        {/* "sign up" label top left */}
        <Text style={styles.signUpLabel}>sign up</Text>

        {/* Title */}
        <Text style={styles.title}>Welcome to HireMatch</Text>
        <Text style={styles.subtitle}>
          How would you like to get started?
        </Text>

        {/* Selection Cards Row */}
        <View style={styles.cardsRow}>

          {/* I'm hiring card */}
          <TouchableOpacity
            style={styles.roleCard}
            onPress={() => 
              navigation.navigate('SignUp', { userType: 'employer' })
            }
            activeOpacity={0.8}
          >
            <Text style={styles.cardIcon}>🏢</Text>
            <Text style={styles.cardLabel}>I'm hiring</Text>
          </TouchableOpacity>

          {/* I'm looking card */}
          <TouchableOpacity
            style={styles.roleCard}
            onPress={() => 
              navigation.navigate('SignUp', { userType: 'jobseeker' })
            }
            activeOpacity={0.8}
          >
            <Text style={styles.cardIcon}>👤</Text>
            <Text style={styles.cardLabel}>I'm looking</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },

  // ── Background Avatar Section ──
  backgroundSection: {
    flex: 1,
    position: 'relative',
  },
  bgCircle: {
    position: 'absolute',
    width: width * 0.85,
    height: width * 0.85,
    borderRadius: width * 0.425,
    backgroundColor: '#E2E2E2',
    top: '5%',
    alignSelf: 'center',
    opacity: 0.6,
  },
  bgAvatarTop: {
    position: 'absolute',
    top: '12%',
    alignSelf: 'center',
  },
  bgAvatarLeft: {
    position: 'absolute',
    top: '28%',
    left: '10%',
  },
  bgAvatarCenter: {
    position: 'absolute',
    top: '22%',
    alignSelf: 'center',
  },
  bgAvatarRight: {
    position: 'absolute',
    top: '26%',
    right: '12%',
  },
  bgAvatarBottomLeft: {
    position: 'absolute',
    top: '50%',
    left: '14%',
  },

  // ── Bottom White Card ──
  bottomCard: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 8,
  },
  signUpLabel: {
    fontSize: 13,
    color: '#AAAAAA',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 24,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 14,
  },
  roleCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    borderRadius: 14,
    paddingVertical: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D2D2D',
  },
});