export function localStorageAvailable() {
  try {
    const key = '__test_key__';
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export function localStorageGetItem<T>(key: string, defaultValue: T): T {
  if (!localStorageAvailable()) return defaultValue;

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
}

export function localStorageSetItem<T>(key: string, value: T): void {
  if (!localStorageAvailable()) return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing localStorage key "${key}":`, error);
  }
}
