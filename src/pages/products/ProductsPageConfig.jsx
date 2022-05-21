import CreateProductPage from './CreateProductPage';
import AllProductsPage from './AllProductsPage';
import ProductEditScreen from './ProductEditScreen';
import ProductDetailsPage from './ProductDetailsPage';
import SelectQuantityPage from './SelectProductQuantity';
import CartPage from './CartScreen';
export const ProductsPageConfig = {
  routes: [
    {
      path: '/products',
      exact: true,
      component: AllProductsPage,
    },
    {
      path: '/products/create-product',
      exact: true,
      component: CreateProductPage,
    },
    {
      path: '/products/:id/edit',
      exact: true,
      component: ProductEditScreen,
    },
    {
      path: '/products/:id',
      exact: true,
      component: ProductDetailsPage,
    },
    {
      path: '/products/:id/qty',
      exact: true,
      component: SelectQuantityPage,
    },
    {
      path: '/products/:id/cart',
      exact: true,
      component: CartPage,
    },
  ],
};
