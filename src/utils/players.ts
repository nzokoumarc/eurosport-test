export type CountryType = {
  picture: string;
  code: string;
};

export type DataType = {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: number[];
};

export type PlayersType = {
  country: CountryType;
  data: DataType;
  firstname: string;
  lastname: string;
  picture: string;
  sex: string;
  shortname: string;
};

export const getHeight = (height: number) => {
  return height / 100;
};

export const getWeight = (weight: number) => {
  return weight / 1000;
};

export const getScore = (key: number, last: number[]) => {
  return last.filter((value: number) => value === key).length;
};
