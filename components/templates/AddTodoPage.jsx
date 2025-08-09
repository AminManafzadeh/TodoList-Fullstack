import { GrAddCircle } from "react-icons/gr";
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { useState } from "react";
import RadioButton from "../elements/RadioButton";
import { toast } from "react-toastify";

// function AddTodoPage() {
//   const [title, setTitle] = useState("");
//   const [status, setStatus] = useState("todo");

//   const handleAdd = async () => {
//     const res = await fetch("/api/todos", {
//       method: "POST",
//       body: JSON.stringify({ title, status }),
//       headers: { "Content-Type": "application/json" },
//     });

//     const data = res.json();
//     if (data.status === "success") {
//       setTitle("");
//       setStatus("todo");
//       toast.success("Todo Added");
//     }
//   };

//   return (
//     <div className="flex flex-col p-5">
//       <h2 className="flex items-center font-bold text-grayy">
//         <GrAddCircle className="mr-2" />
//         Add New Todo
//       </h2>

//       <div className="mt-5">
//         <div className="flex flex-col mb-[50px]">
//           <label htmlFor="title">Title :</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>

//         <div className="flex flex-col mb-5 w-fit">
//           <RadioButton
//             setStatus={setStatus}
//             status={status}
//             title="Todo"
//             value="todo"
//             bg="bg-orangee"
//           >
//             <BsAlignStart className="mr-[10px]" />
//           </RadioButton>

//           <RadioButton
//             setStatus={setStatus}
//             status={status}
//             title="in progress"
//             value="inProgress"
//             bg="bg-aquagreen"
//           >
//             <FiSettings className="mr-[10px]" />
//           </RadioButton>

//           <RadioButton
//             setStatus={setStatus}
//             status={status}
//             title="Review"
//             value="review"
//             bg="bg-azureblue"
//           >
//             <AiOutlineFileSearch className="mr-[10px]" />
//           </RadioButton>

//           <RadioButton
//             setStatus={setStatus}
//             status={status}
//             title="Done"
//             value="done"
//             bg="bg-brightcyan"
//           >
//             <IoMdDoneAll className="mr-[10px]" />
//           </RadioButton>
//         </div>

//         <button onClick={handleAdd} className="btn">
//           Add
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddTodoPage;

function AddTodoPage() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleAdd = async () => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") {
      setTitle("");
      setStatus("todo");
      toast.success("Todo added!");
    }
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
      <h2 className="flex items-center text-lg sm:text-xl font-bold text-gray-700 mb-4">
        <GrAddCircle className="mr-2 text-primary" />
        Add New Todo
      </h2>

      <div className="flex flex-col mb-6 w-full">
        <label
          htmlFor="title"
          className="mb-2 text-sm font-medium text-gray-600"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          placeholder="Enter todo title..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6 w-full">
        <RadioButton
          setStatus={setStatus}
          status={status}
          title="Todo"
          value="todo"
          bg="bg-orangee"
        >
          <BsAlignStart className="mr-2" />
        </RadioButton>

        <RadioButton
          setStatus={setStatus}
          status={status}
          title="Progress"
          value="inProgress"
          bg="bg-aquagreen"
        >
          <FiSettings className="mr-2" />
        </RadioButton>

        <RadioButton
          setStatus={setStatus}
          status={status}
          title="Review"
          value="review"
          bg="bg-azureblue"
        >
          <AiOutlineFileSearch className="mr-2" />
        </RadioButton>

        <RadioButton
          setStatus={setStatus}
          status={status}
          title="Done"
          value="done"
          bg="bg-brightcyan"
        >
          <IoMdDoneAll className="mr-2" />
        </RadioButton>
      </div>

      <button
        onClick={handleAdd}
        className="w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodoPage;
