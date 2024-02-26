import { Pressable, PressableProps, StyleSheet } from 'react-native';
import Title from './Title';
import { Colors } from '../../styles/global';

interface PrimaryButtonProps extends PressableProps {
  children: React.ReactNode
}
export default function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <Pressable style={styles.wrapper} {...props}>
      <Title color='white'>{children}</Title>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
