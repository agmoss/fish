import { fish } from "@ngneat/falso";
import _ from "lodash";

interface IFish {
  id: number;
  name: string;
}

const _fishes = [...new Set(_.range(1000).map(() => fish()))];

const fishes: IFish[] = _fishes.map((i,_i) => {
  return {
    id: _i,
    name: i,
  };
});

export const getAllFish = () => fishes;
export const getFish = (id: number) => fishes[id];
