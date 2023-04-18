import { LocalStorageKeyType } from "./type";

export class LocalStorage {
  static setItemLocalStorage = (
    key: LocalStorageKeyType,
    value: string | number | boolean | Object
  ) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  static getItemLocalStorage = <T extends any>(key: LocalStorageKeyType): T | undefined => {
    try {
      const item = window.localStorage.getItem(key) as string;
      return item ? JSON.parse(item) : item;
    } catch (error) {
      return undefined;
    }
  };

  static removeItemLocalStorage = (key: LocalStorageKeyType) => {
    try {
      const item = window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };
}

export const setItemLocalStorage = (
  key: LocalStorageKeyType,
  value: string | number | boolean | Object
) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const getItemLocalStorage = <T extends any>(key: LocalStorageKeyType): T | undefined => {
  try {
    const item = window.localStorage.getItem(key) as string;
    return item ? JSON.parse(item) : item;
  } catch (error) {
    return undefined;
  }
};

export const removeItemLocalStorage = (key: LocalStorageKeyType) => {
  try {
    const item = window.localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
