import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } 
  from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type LoginNavProp = 
  NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginNavProp>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* ── Logo / Brand Section ── */}
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>💼</Text>
        </View>
        <Text style={styles.appName}>InstaHire</Text>
        <Text style={styles.tagline}>
          Find your perfect job match
        </Text>
      </View>

      {/* ── Illustration Placeholder ── */}
      <View style={styles.illustrationSection}>
        <View style={styles.illustrationCircle}>
          <Text style={styles.illustrationEmoji}>🔍</Text>
        </View>
        <Text style={styles.illustrationText}>
          Connecting talent with opportunity
        </Text>
      </View>

      {/* ── Bottom Auth Section ── */}
      <View style={styles.bottomSection}>

        {/* Google Sign In Button */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => navigation.navigate('GetStarted')}
          activeOpacity={0.85}
        >
          <Text style={styles.googleIcon}>G</Text>
          <Text style={styles.googleButtonText}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Email Sign In Button */}
        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => navigation.navigate('GetStarted')}
          activeOpacity={0.85}
        >
          <Text style={styles.emailButtonText}>
            Continue with Email
          </Text>
        </TouchableOpacity>

        {/* Terms */}
        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of Service</Text>
          {' '}and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // ── Top Section ──
  topSection: {
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 16,
  },
  logoContainer: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#A4D93A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#A4D93A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  logoIcon: {
    fontSize: 36,
  },
  appName: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1A1A1A',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  tagline: {
    fontSize: 15,
    color: '#888888',
    fontWeight: '400',
  },

  // ── Illustration ──
  illustrationSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  illustrationCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#F5F9EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#E8F5C8',
  },
  illustrationEmoji: {
    fontSize: 64,
  },
  illustrationText: {
    fontSize: 16,
    color: '#AAAAAA',
    textAlign: 'center',
    lineHeight: 24,
  },

  // ── Bottom Section ──
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingVertical: 15,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  googleIcon: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4285F4',
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#EFEFEF',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 13,
    color: '#BBBBBB',
  },
  emailButton: {
    backgroundColor: '#A4D93A',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#A4D93A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  emailButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  termsText: {
    fontSize: 12,
    color: '#BBBBBB',
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: '#A4D93A',
    fontWeight: '600',
  },
});