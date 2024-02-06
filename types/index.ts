import { MouseEventHandler } from "react";

export type caBtnProps = {
  title: string;
  containerStyle: string;
  type?: "button" | "submit" | "reset";
  trailingIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type FilterSelectorProps = {
  title: string;
};

export type SearchManuFacturerProps = {
  manufacturer: string;
  setManuFacturer: (manufacture: string) => void;
};

export type CarObjectProps = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};
