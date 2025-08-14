// mobile/screens/MatchScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import SwipeCard from '../components/SwipeCard';

export default function MatchScreen() {
  const profiles = [{ id: 1, name: 'Alice', photo: '...' }];

  return (
    <View style={{ flex: 1 }}>
      {profiles.map(p => (
        <SwipeCard key={p.id} profile={p} />
      ))}
    </View>
  );
}