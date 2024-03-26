import { View } from 'react-native';
import { Colors } from '../../styles/global';

interface SeparatorProps {}
export default function Separator({}: SeparatorProps) {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: Colors.Gray,
      }}
    />
  );
}
