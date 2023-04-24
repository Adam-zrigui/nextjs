import { ParsedUrlQuery } from "querystring";

export default interface IUser {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat:string;
        lng:string;    
        }
    };
    phone: string;
    website: string;
    company: {
        name:string;
        catchPhrase:string;
        bs: string;
    };
}
export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface IParams  {
    params: {
        postId: string;
        productId: string;
        category: string;
      };
}
export interface IProduct {
    id: number;
    description: string;
    title: string;
    price: number;
}
export interface INews {
    id: number;
    title: string;
    description: string;
    category:string
}
export interface IData {
    posts: number;
    likes: number;
    followers: number;
    following:number
}
export interface IEvent {
    id: number;
title: string
description: string;
date: string;
category: string;
}