import { BookList } from "@/components/BookList";
import { CheckoutDetail } from "@/components/CheckoutDetail";
import { useCart } from "@/hooks/useCart";

export const Checkout = () => {
  const { cartBooks } = useCart({});
  
  return (
    <main className="checkout">
      <h1 className="checkout__title">Carrito de compras</h1>
      <BookList books={cartBooks} />
      <CheckoutDetail books={cartBooks} />
    </main>
  );
};
