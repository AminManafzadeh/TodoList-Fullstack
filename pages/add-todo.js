import { useSession } from "next-auth/react";
import AddTodoPage from "../components/templates/AddTodoPage";
import { useEffect } from "react";
import { useRouter } from "next/router";

function AddTodo() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/signin");
  }, [status]);

  return (
    <div>
      <AddTodoPage />
    </div>
  );
}

export default AddTodo;
