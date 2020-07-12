export interface SingleItem {
  id: number;
  name: string;
  description: string;
}

export interface State {
  items: SingleItem[];
  isLoading: boolean;
}
