import React from "react";
export interface IMealList{
    id: string;
    name: string;
    description: string;
    price: string;
 }

 export interface ICart{
    id: number;
    name: string;
    description: string;
    price: string;
 }[]

 export type Cart = {
    item: {id: number;
    name: string;
    description: string;
    price: string;};
    totalAmount: number;
    // addItem: (item: ICart) => [];
    // removeItem: (id: string) => void;
  };