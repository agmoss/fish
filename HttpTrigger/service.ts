import { fish } from "@ngneat/falso";
import _ from "lodash";

interface IFish {
  id: number;
  name: string;
}

const fishes: IFish[] = _.range(1000).map((i) => {
  return {
    id: i,
    name: fish(),
  };
});

export const getAllFish = () => fishes;
export const getFish = (id: number) => fishes[id];
