import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type GetStartedNavProp = 
  NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;

const { width, height } = Dimensions.get('window');

// Avatar placeholder component
const Avatar = ({ 
  initials, 
  size = 60, 
  color = '#C8C8C8',
  style 
}: { 
  initials: string; 
  size?: number; 
  color?: string; 
  style?: any 
}) => (
  <View
    style={[
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        borderWidth: 2.5,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
      },
      style,
    ]}
  >
    <Text style={{ 
      fontSize: size * 0.35, 
      fontWeight: '600', 
      color: '#FFFFFF' 
    }}>
      {initials}
    </Text>
  </View>
);

export default function GetStartedScreen() {
  const navigation = useNavigation<GetStartedNavProp>();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* ── Floating Avatars Section ── */}
      <View style={styles.avatarSection}>
        
        {/* Concentric circles background */}
        <View style={styles.circle3} />
        <View style={styles.circle2} />
        <View style={styles.circle1} />

        {/* Top center avatar */}
        <Avatar 
          initials="JM" 
          size={58} 
          color="#B0BEC5"
          style={styles.avatarTopCenter} 
        />
        {/* Left avatar */}
        <Avatar 
          initials="SR" 
          size={54} 
          color="#90A4AE"
          style={styles.avatarLeft} 
        />
        {/* Center avatar (larger, prominent) */}
        <Avatar 
          initials="AT" 
          size={70} 
          color="#78909C"
          style={styles.avatarCenter} 
        />
        {/* Right avatar */}
        <Avatar 
          initials="KL" 
          size={54} 
          color="#B0BEC5"
          style={styles.avatarRight} 
        />
        {/* Top right partial avatar */}
        <Avatar 
          initials="MR" 
          size={48} 
          color="#9E9E9E"
          style={styles.avatarTopRight} 
        />
      </View>

      {/* ── Statistics Card ── */}
      <View style={styles.statsCard}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <View style={styles.statIconRow}>
              <Text style={styles.statIcon}>👤</Text>
              <Text style={styles.statNumber}>2,847</Text>
            </View>
            <Text style={styles.statLabel}>Job seeker</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <View style={styles.statIconRow}>
              <Text style={styles.statIcon}>🏢</Text>
              <Text style={styles.statNumber}>1,293</Text>
            </View>
            <Text style={styles.statLabel}>Open Jobs</Text>
          </View>
        </View>
        
        <Text style={styles.statsSubtext}>
          Tap a profile to see who's hiring & who's looking
        </Text>
      </View>

      {/* ── Bottom Avatar ── */}
      <View style={styles.bottomAvatarContainer}>
        <Avatar 
          initials="EP" 
          size={72} 
          color="#A0ADB5" 
        />
      </View>

      {/* ── Get Started Button ── */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('UserType')}
          activeOpacity={0.85}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
        
        <Text style={styles.tagline}>
          Join thousands finding their perfect job
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },

  // ── Avatar Section ──
  avatarSection: {
    height: height * 0.48,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Concentric circles
  circle1: {
    position: 'absolute',
    width: width * 0.55,
    height: width * 0.55,
    borderRadius: width * 0.275,
    backgroundColor: '#E8E8E8',
  },
  circle2: {
    position: 'absolute',
    width: width * 0.78,
    height: width * 0.78,
    borderRadius: width * 0.39,
    backgroundColor: '#ECECEC',
  },
  circle3: {
    position: 'absolute',
    width: width * 1.0,
    height: width * 1.0,
    borderRadius: width * 0.5,
    backgroundColor: '#F0F0F0',
  },

  // Avatar positions
  avatarTopCenter: {
    position: 'absolute',
    top: '8%',
    alignSelf: 'center',
  },
  avatarLeft: {
    position: 'absolute',
    top: '22%',
    left: '8%',
  },
  avatarCenter: {
    position: 'absolute',
    top: '28%',
    alignSelf: 'center',
  },
  avatarRight: {
    position: 'absolute',
    top: '20%',
    right: '8%',
  },
  avatarTopRight: {
    position: 'absolute',
    top: '5%',
    right: '15%',
  },

  // ── Statistics Card ──
  statsCard: {
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginTop: -10,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  statIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  statIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  statLabel: {
    fontSize: 13,
    color: '#888888',
    marginLeft: 22,
  },
  statDivider: {
    width: 1,
    height: 36,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 16,
  },
  statsSubtext: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 4,
  },

  // ── Bottom Avatar ──
  bottomAvatarContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },

  // ── Bottom Section ──
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  getStartedButton: {
    backgroundColor: '#A4D93A',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#A4D93A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  tagline: {
    textAlign: 'center',
    color: '#AAAAAA',
    fontSize: 13,
    marginTop: 10,
  },
});