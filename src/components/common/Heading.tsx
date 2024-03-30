import {
  Text,
  TextProps,
  TextStyle,
  StyleSheet,
  StyleProp,
} from 'react-native';
import { Colors, Poppins } from '../../styles/global';

type PoppinsType = keyof typeof Poppins;
type ColorsType = keyof typeof Colors;

interface HeadingProps extends TextProps {
  type?: PoppinsType;
  color?: ColorsType;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

/**
 * Custom text component that accepts font `type` and `color` as props
 * @param type Optional type of the font from PoppinsType
 * @param color Optional color of the text as FigmaColorsType
 * @returns {JSX.Element} A JSX element representing the custom text
 */
export default function Heading(props: HeadingProps): JSX.Element {
  const { children, type = 'Regular', color = 'Text', style } = props;
  const styles = StyleSheet.compose(
    {
      fontFamily: Poppins[type],
      color: Colors[color],
    },
    style,
  );

  return <Text style={styles}>{children}</Text>;
}
