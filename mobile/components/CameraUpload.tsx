// mobile/components/CameraUpload.tsx
import React, { useRef } from 'react';
import { Button, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';

export default function CameraUpload({ onUpload }) {
  const cameraRef = useRef();

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const resized = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ resize: { width: 800 } }],
        { compress: 0.7, format: 'jpeg' }
      );
      // Upload to backend with facial verification
      const formData = new FormData();
      formData.append('photo', { uri: resized.uri, name: 'face.jpg', type: 'image/jpeg' });
      await fetch('http://localhost:3000/api/user/photo', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    }
  };

  return (
    <Camera style={{ flex: 1 }} ref={cameraRef}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button title="Take Photo" onPress={takePicture} />
      </View>
    </Camera>
  );
}