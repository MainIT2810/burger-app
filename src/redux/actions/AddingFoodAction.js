import { ADDING } from "../types/addingFoodType";

export const AddingFoodAction = (propsBurger, amount) => {
  // number: 1 là tăng
  return {
    type: ADDING,
    propsBurger,
    amount,
  };
};
