import images from "../meta.json";
import { getSeasonFormMonth } from "./image";

test(`returns [12,1,2] for 12`, () => {
  const expected = [12, 1, 2];
  expect(getSeasonFormMonth(12)).toEqual([12, 1, 2]);
});

test(`returns [3,4,5] for 5`, () => {
  const expected = [3, 4, 5];
  expect(getSeasonFormMonth(5)).toEqual(expected);
});

test(`returns [6,7,8] for 6`, () => {
  const expected = [6, 7, 8];
  expect(getSeasonFormMonth(6)).toEqual(expected);
});

test(`returns [9,10,11] for 11`, () => {
  const expected = [9, 10, 11];
  expect(getSeasonFormMonth(11)).toEqual(expected);
});
