

export interface CartState{
    items:ProductCart[]
    totalPrice:number
}
export interface Rating {
    rate: number;
    count: number;
  }
  
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }

export interface ProductCart extends Product{
    quantity: number
}