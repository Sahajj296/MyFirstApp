import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type SignUpNavProp =
  NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
type SignUpRouteProp =
  RouteProp<RootStackParamList, 'SignUp'>;

export default function SignUpScreen() {
  const navigation = useNavigation<SignUpNavProp>();
  const route = useRoute<SignUpRouteProp>();
  const { userType } = route.params;

  const isEmployer = userType === 'employer';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [company, setCompany]     = useState('');

  const handleContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          {/* ── Header with Back Button ── */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Text style={styles.backArrow}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
              {isEmployer
                ? 'Create Recruiter Account'
                : 'Create Candidate Profile'}
            </Text>
          </View>

          {/* ── Progress Bar ── */}
          <View style={styles.progressBarTrack}>
            <View style={[
              styles.progressBarFill,
              { width: isEmployer ? '30%' : '25%' }
            ]} />
          </View>

          {/* ── Form Fields ── */}
          <View style={styles.form}>

            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#BBBBBB"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
            />

            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#BBBBBB"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#BBBBBB"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#BBBBBB"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            {/* Company Name — only for employer */}
            {isEmployer && (
              <TextInput
                style={styles.input}
                placeholder="Company Name"
                placeholderTextColor="#BBBBBB"
                value={company}
                onChangeText={setCompany}
                autoCapitalize="words"
              />
            )}

          </View>

        </ScrollView>

        {/* ── Continue Button (pinned to bottom) ── */}
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.85}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  // ── Header ──
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 12,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backArrow: {
    fontSize: 24,
    color: '#333333',
    lineHeight: 28,
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#1A1A1A',
    flex: 1,
  },

  // ── Progress Bar ──
  progressBarTrack: {
    height: 3,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 20,
    borderRadius: 4,
    marginBottom: 28,
  },
  progressBarFill: {
    height: 3,
    backgroundColor: '#1A1A1A',
    borderRadius: 4,
  },

  // ── Form ──
  form: {
    paddingHorizontal: 20,
    gap: 14,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 15,
    color: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },

  // ── Continue Button ──
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 8 : 20,
    paddingTop: 12,
    backgroundColor: '#F5F5F5',
  },
  continueButton: {
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
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});