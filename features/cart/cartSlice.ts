import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
  count: number;
  slug: string;
}

interface CartState {
  CartItem: CartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartState = {
  CartItem: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.CartItem.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.CartItem.push({ ...action.payload, quantity: 1 });
      }

      state.amount = state.CartItem.reduce(
        (sum, item) => sum + item.quantity * item.count,
        0
      );
      state.total = state.CartItem.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.CartItem = state.CartItem.filter(
        (item) => item.id !== action.payload
      );
      state.amount = state.CartItem.reduce(
        (sum, item) => sum + item.quantity * item.count,
        0
      );
      state.total = state.CartItem.reduce((sum, item) => sum + item.price, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.CartItem = [];
      state.amount = 0;
      state.total = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    initializeCart: (state, action: PayloadAction<CartState>) => {
      return action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, initializeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
