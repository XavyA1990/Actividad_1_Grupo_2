import { useCartBillingDetail } from "@/hooks/useCartBillingDetail";
import type { Book } from "@/types/book";

type CheckoutDetailProps = {
  books: Book[];
};

export const CheckoutDetail = ({ books }: CheckoutDetailProps) => {
    
  const { subTotalPrice, taxAmount, totalPrice } = useCartBillingDetail({
    books,
  });

  return (
    <section className="checkout-detail__section">
      <h2 className="checkout-detail__title">Detalle de facturación</h2>
      <div className="checkout-detail__item">
        <span>Subtotal:</span>
        <span>${subTotalPrice.toFixed(2)}</span>
      </div>
      <div className="checkout-detail__item">
        <span>Impuestos (15%):</span>
        <span>${taxAmount.toFixed(2)}</span>
      </div>
      <div className="checkout-detail__item checkout-detail__item--total">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </section>
  );
};
