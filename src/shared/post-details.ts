export interface POSTS_RESPONSE {
  map(arg0: (item: any) => any): any;
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface USER_RESPONSE {
  find(arg0: (t: any) => boolean): any;
  id: number;
  name: string;
  username: string;
  email: string;
  address: ADDRESS;
  phone: string;
  website: string;
  company: COMPANY;
}

export interface COMPANY {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ADDRESS {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GEO;
}

export interface GEO {
  lat: string;
  lng: string;
}

export interface User_Data {
  userId: number;
  id: number;
  title: string;
  body: string;
  name: string;
  username: string;
  email: string;
  address: ADDRESS;
  phone: string;
  website: string;
  company: COMPANY;
}

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
