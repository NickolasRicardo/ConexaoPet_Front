import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(
      "sk_test_51O9FcRI9LWUvkECmnXX98sCo01vBPxV4L6y10hc4nAf0t9q1GjMHs1ecxIvb09zM1ke5VS1GpffflFEX4IqHsPJq00moyWOEfq",
      {
        payment_method: {
          card: elements.getElement(CardElement) as any,
        },
      }
    );

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Pagamento bem-sucedido
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
    </form>
  );
};

export default CheckoutForm;
