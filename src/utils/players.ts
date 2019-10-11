// player country type
export type CountryType = {
  picture: string;
  code: string;
};
// player data type
export type DataType = {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: number[];
};
// player type
export type PlayersType = {
  country: CountryType;
  data: DataType;
  firstname: string;
  lastname: string;
  picture: string;
  sex: string;
  shortname: string;
};

/**
 * return height in M
 * @param height
 */
export const getHeight = (height: number) => {
  return height / 100;
};

/**
 * return weight in KG
 * @param weight
 */
export const getWeight = (weight: number) => {
  return weight / 1000;
};

/**
 * return nb score
 * @param key
 * @param last
 */
export const getScore = (key: number, last: number[]) => {
  return last.filter((value: number) => value === key).length;
};
