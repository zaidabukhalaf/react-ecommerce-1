import create from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addItem: (product) => {
    set((state) => {
      const existProduct = state.cart.find((x) => x.id === product.id);
      if (existProduct) {
        return {
          cart: state.cart.map((x) => (x.id === existProduct.id ? product : x)),
        };
      } else {
        state.cart.push(product);
      }
    });
  },
  updateItem: (product, qty) => {
    set((state) => {
      return {
        cart: state.cart.map((el) =>
          el.id === product.id ? { ...el, qty: qty } : el
        ),
      };
    });
  },
  removeItem: (id) => {
    set((state) => {
      return {
        cart: state.cart.filter((x) => x.id !== id),
      };
    });
  },
}));

export const useAlerts = create((set) => ({
  alert: false,
  showAlert: () => {
    set((state) => {
      return {
        alert: true,
      };
    });
  },
  removeAlert: () => {
    set((state) => {
      return {
        alert: false,
      };
    });
  },
}));
