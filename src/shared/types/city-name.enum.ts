const cityNames = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export type CityName = typeof cityNames[number];

export function isCityName(str: string): CityName | undefined {
  const foundStr = cityNames.find((val) => val === str);

  if (!foundStr) {
    return;
  }

  return foundStr;
}
