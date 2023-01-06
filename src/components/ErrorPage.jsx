import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
  return (
    <div className=" space-y-8" id="error-page">
      <h1 className=" text-center text-6xl font-extrabold mt-20 text-blue-900">errores !</h1>
      <p className=" text-center text-2xl" >un erro ha ocurrido.</p>
      <p className=" text-center text-2xl" >
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

