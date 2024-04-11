import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native';

interface TouchableDebounceProps extends TouchableOpacityProps {
  onPress: (event: GestureResponderEvent) => void;
  delay?: number;
}
const TouchableDebounce = ({
  onPress,
  children,
  delay = 1000,
  ...props
}: TouchableDebounceProps) => {
  const [debounce, setDebounce] = useState<boolean>(false);
  const timeout = useRef<number | null>(null);

  const _onPress = (e: GestureResponderEvent) => {
    if (debounce) return;
    if (timeout.current) clearTimeout(timeout.current);
    setDebounce(true);
    onPress(e);

    timeout.current = setTimeout(() => {
      setDebounce(false);
    }, delay);
  };
  return (
    <TouchableOpacity onPress={_onPress} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableDebounce;
