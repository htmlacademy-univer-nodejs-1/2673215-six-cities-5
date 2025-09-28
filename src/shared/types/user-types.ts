const userTypes = ['обычный', 'pro'];
export type UserType = typeof userTypes[number];

export function isUserType(str: string): UserType | undefined {
  const foundStr = userTypes.find((val) => val === str);

  if (!foundStr) {
    return;
  }

  return foundStr;
}
