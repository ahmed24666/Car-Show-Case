import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  textStyles?: string;
  rightIcon?: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturar: string) => void;
}
export interface CarCardProps {
  city_mpg: number;
  class: "compact car";
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
}
export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarCardProps;
}
export interface FilterProps 
  {
    manufacturar:string ,
    year:number ,
    fuel: string,
    limit:number ,
    model: string,
  }
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }
  export interface OptionProps {
    title: string;
    value: string;
  }
