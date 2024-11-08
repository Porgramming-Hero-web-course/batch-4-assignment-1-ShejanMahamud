function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  for (const key of keys) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
}
