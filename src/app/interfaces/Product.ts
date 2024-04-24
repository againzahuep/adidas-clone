export interface Product {
  Image: string;
  Image1: string;
  Content: string;
  Keywords: string;
  Name: string;
  Category: string;
  Colors: string;
  Price: string;
  Promo_apply: string;
  Reviews:  {
    votes: number;
    rating: number;
  };
  Description_title: string;
  Description_content: string;
  Details: string;
  Care: {
    title : string;
    content: []
  };
  Color_detail: {
    color: string;
    image_url: string;
  }
}
