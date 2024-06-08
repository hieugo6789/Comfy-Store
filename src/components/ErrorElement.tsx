import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  console.log(error);
  return <h2 className="font-bold text-4xl"> there was an error...</h2>;
}
export default ErrorElement;
