import AsyncStorage from '@react-native-async-storage/async-storage';


export interface CustomAsyncStorage {
  boardKey: string;
  itemKey: string;
  getBoards: () => Promise<void>;
  getItems: (options: any) => Promise<void>;
  getAllKeys: () => Promise<any>;
  addBoard: (options: any) => Promise<void>;
  addItem: (options: any) => Promise<void>;
  deleteBoard: (options: any) => Promise<void>;
  deleteItem: (options: any) => Promise<void>;
}


class LocalStorageManager implements CustomAsyncStorage {
  boardKey: string;
  itemKey: string;


  constructor() {
    this.boardKey = 'Board';
    this.itemKey = 'Item';
  }

  async getBoards (): Promise<any> {
    const keys = await this.getAllKeys();
    const aux: any[] = [];
    for (let i = 0; i < keys.length; i++) {
      const jsonValue = await AsyncStorage.getItem(keys[i]);
      const value = jsonValue && JSON.parse(jsonValue);
      aux.push(value);
    }
    return aux;
  }
  async getItems (options: any): Promise<void> {
    const { key, error, success } = options;
    await AsyncStorage.getItem(key, (err, res): void => {
      if (err) error(err);
      else success(res);
    });
  }
  async getAllKeys () {
    return await AsyncStorage.getAllKeys();
  }


  async addBoard(options: any): Promise<void> {
    const { key, value, error, success } = options;
    await AsyncStorage.setItem(key, value, (err): void => {
      if (err) error(err);
      else success();
    });
  }
  async addItem(options: any): Promise<void> {
    const { key, value, error } = options;
    await AsyncStorage.setItem(key, value, (err): void => {
      if (err) error(err);
    });
  }


  async deleteBoard (options: any): Promise<void> {
    const { key, error } = options;
    await AsyncStorage.removeItem(key, (err): void => {
      if (error) error(err);
    });
  }
  async deleteItem (options: any): Promise<void> {
    const { key, error } = options;
    await AsyncStorage.removeItem(key, (err): void => {
      if (error) error(err);
    });
  }

}

export default LocalStorageManager;
