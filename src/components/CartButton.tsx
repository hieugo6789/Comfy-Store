import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function CartButton() {
  const numItemsInCart = 5;
  return (
    <Button
      asChild
      variant="outline"
      className="flex justify-center items-center relative rounded-lg"
      size="icon"
    >
      <Link to="./cart">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
