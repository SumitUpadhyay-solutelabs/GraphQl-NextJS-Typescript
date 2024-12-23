export interface productsProps {
  id: number;
  title: string;
  price: number;
  image: string;
  isDeleteButtonVisible?: boolean;
  handleDelete?: (id: number) => void;
}
export interface userProps {
  id: any;
  name: string;
  age: number;
  isMarried: boolean;
}
