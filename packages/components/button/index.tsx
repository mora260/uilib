import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { Pressable, Text } from 'dripsy';
export interface ButtonProps {
  label: string;
  color?: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const Button = ({ label, color = 'royalblue', onPress }: ButtonProps) => {
  const styles = {
    buttonStyles: {
      backgroundColor: color,
      padding: 10,
      margin: 12,
      borderRadius: 6,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 50,
    },
  };

  return (
    <Pressable onPress={onPress} sx={styles.buttonStyles}>
      <Text>{label}</Text>
    </Pressable>
  );
};
