import { View } from 'react-native';

interface DividerProps {
  size?: number;
}
export default function Divider({ size }: DividerProps) {
  const value = typeof size === 'number' ? size : 15;
  return <View style={{ height: value }} />;
}
