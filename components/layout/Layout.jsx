import Link from "next/link";
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";

function Layout({ children }) {
  const { status } = useSession();

  const handleLogOut = () => {
    signOut();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-bluee h-[80px] md:h-[150px] text-white text-xl font-bold flex items-center justify-between px-4 md:px-6">
        <p className="md:mb-4 text-center md:text-left w-full">Todo App</p>

        {status === "authenticated" ? (
          <button
            onClick={handleLogOut}
            className="text-bluee bg-white border border-white h-fit py-[5px] px-[10px] text-lg rounded-lg"
          >
            <FiLogOut />
          </button>
        ) : null}
      </header>

      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-white w-full md:w-[180px] lg:w-[250px] rounded-tr-[20px] text-grayy pt-6 pl-6 shadow-custom md:relative md:bottom-[60px]">
          <p className="text-slategray font-bold text-lg md:text-xl mb-6">
            Welcome 👋
          </p>
          <ul>
            <li className="font-medium text-base md:text-lg text-softbluegray my-4 flex items-center">
              <VscListSelection />
              <Link className="ml-3" href="/">
                Todos
              </Link>
            </li>

            <li className="font-medium text-base md:text-lg text-softbluegray my-4 flex items-center">
              <BiMessageSquareAdd />
              <Link className="ml-3" href="/add-todo">
                Add Todo
              </Link>
            </li>

            <li className="font-medium text-base md:text-lg text-softbluegray my-4 flex items-center">
              <RxDashboard />
              <Link className="ml-3" href="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </aside>

        <section className="flex-1 p-4">{children}</section>
      </div>
    </div>
  );
}

export default Layout;
