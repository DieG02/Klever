import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../styles/global';

type ColorsType = keyof typeof Colors;

interface LayoutProps extends StatusBarProps {
  backgroundColor?: ColorsType;
  style?: ViewStyle;
  children?: React.ReactNode;
}
export default function Layout({
  backgroundColor = 'White',
  style = {},
  barStyle = 'dark-content',
  children,
  ...props
}: LayoutProps) {
  const styles = StyleSheet.compose(
    {
      flex: 1,
      backgroundColor: Colors[backgroundColor],
    },
    style,
  );
  return (
    <SafeAreaView style={styles} {...props}>
      <StatusBar
        backgroundColor={Colors[backgroundColor]}
        barStyle={barStyle}
      />
      {children}
    </SafeAreaView>
  );
}
