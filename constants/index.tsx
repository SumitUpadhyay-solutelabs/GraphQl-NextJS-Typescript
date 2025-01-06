export interface productsProps {
  id: number;
  title: string;
  price: number;
  image: string;
  isDeleteButtonVisible?: boolean;
  handleDelete?: (id: number) => void;
  isAddToCartButtonVisible?: boolean;
  inCart?: boolean;
}
export interface userProps {
  id: any;
  name: string;
  age: number;
  isMarried: boolean;
}
