import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Cart() {
  return (
    <>
      <h1 className="text-4xl">Cart Page</h1>
      <Link
        to="/"
        className="text-7xl text-red-900"
      >
        Back home
      </Link>
      <Button
        asChild
        size="lg"
      >
        <Link to="/">home</Link>
      </Button>
    </>
  );
}
export default Cart;
