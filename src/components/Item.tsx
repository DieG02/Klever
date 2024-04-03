import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import { CheckIcon, TrashIcon } from 'react-native-heroicons/mini';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { toggleItem, deleteItem } from '../services/firestore';
import { Heading } from './common';
import { Colors } from '../styles/global';

interface ItemProps {
  id: string;
  label: string;
  check: boolean;
  parentId: string;
}
export default function Item({ item }: { item: ItemProps }) {
  const { label, check } = item;
  const handlePress = () => {
    toggleItem(item.id, !check);
  };

  const handleDelete = () => {
    deleteItem(item.id);
  };

  const RightSideActions = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0],
    });
    return (
      <TouchableOpacity onPress={handleDelete}>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 15,
          }}>
          <Animated.View
            style={{
              backgroundColor: Colors.Pastel,
              justifyContent: 'center',
              alignItems: 'center',
              height: 35,
              width: 35,
              borderRadius: 20,
            }}>
            <TrashIcon color={Colors.Danger} />
          </Animated.View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={RightSideActions}>
      <TouchableOpacity
        style={styles.item}
        onPress={handlePress}
        // onLongPress={handleDelete}
      >
        <View style={check ? styles.itemChecked : styles.itemButton}>
          <CheckIcon color={check ? Colors.White : 'transparent'} width={15} />
        </View>
        <Heading
          numberOfLines={2}
          ellipsizeMode='tail'
          size={13}
          style={[
            styles.itemLabel,
            check && { textDecorationLine: 'line-through' },
          ]}>
          {label}
        </Heading>
      </TouchableOpacity>
    </Swipeable>
  );
}

export const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.White,
    height: 50,
  },
  itemLabel: {
    flex: 1,
    marginLeft: 10,
    color: Colors.Text,
  },
  itemButton: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: Colors.Light,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemChecked: {
    height: 20,
    width: 20,
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
