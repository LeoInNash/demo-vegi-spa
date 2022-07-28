export default interface OrderType {
  id: string;
  date: string;
  amount: number;
  status: string;
  items?:
    | [
        {
          id: string;
          name: string;
          description: string;
          price: number;
          quantity: number;
          thumbnail: string;
        }
      ]
    | [];
}
