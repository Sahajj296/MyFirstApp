import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';

const {width} = Dimensions.get('window');

interface UserTypeScreenProps {
  onSelectType: (type: 'employer' | 'jobseeker') => void;
}

const UserTypeScreen: React.FC<UserTypeScreenProps> = ({onSelectType}) => {
  const avatars = [
    {id: 1, uri: 'https://i.pravatar.cc/100?img=7', top: 60, left: 30, size: 60},
    {id: 2, uri: 'https://i.pravatar.cc/100?img=8', top: 120, right: 40, size: 70},
    {id: 3, uri: 'https://i.pravatar.cc/100?img=9', top: 160, left: width / 2 - 35, size: 70},
    {id: 4, uri: 'https://i.pravatar.cc/100?img=10', top: 300, left: 50, size: 60},
    {id: 5, uri: 'https://i.pravatar.cc/100?img=11', top: 350, right: 30, size: 60},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Floating Avatars */}
        {avatars.map(avatar => (
          <Image
            key={avatar.id}
            source={{uri: avatar.uri}}
            style={[
              styles.avatar,
              {
                top: avatar.top,
                left: avatar.left,
                right: avatar.right,
                width: avatar.size,
                height: avatar.size,
                borderRadius: avatar.size / 2,
              },
            ]}
          />
        ))}

        {/* Selection Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Welcome to InstaHire</Text>
          <Text style={styles.subtitle}>How would you like to get started?</Text>

          <View style={styles.optionsRow}>
            <TouchableOpacity
              style={styles.optionCard}
              onPress={() => onSelectType('employer')}
              activeOpacity={0.7}>
              <Text style={styles.icon}>🏢</Text>
              <Text style={styles.optionText}>I'm hiring</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionCard}
              onPress={() => onSelectType('jobseeker')}
              activeOpacity={0.7}>
              <Text style={styles.icon}>👤</Text>
              <Text style={styles.optionText}>I'm looking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#E0E0E0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    width: width * 0.9,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  icon: {
    fontSize: 32,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default UserTypeScreen;