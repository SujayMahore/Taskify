import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";


export default function Modal({ updateData }) {
  let [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    taskDetails: "",
    dueDate: "",
  });

  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
    setFormData({ title: "", taskDetails: "", dueDate: "" });
  }

  function openModal() {
    setIsOpen(true);
  }
  function changeHandler(e) {
    const { name, value, type } = e.target;
    // let dateObj;
    // if (name === "dueDate") {
    //   console.log( typeof e.target.value)
    //   dateObj = new Date(formData.dueDate);
    //   console.log(typeof dateObj, dateObj.toLocaleDateString());
    // }
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit() {
    const apiUrl = "http://localhost:8080/tasks/addTask";
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("Success");
        updateData(response.data);
      })
      .catch((error) => {
        console.error("POST Failed");
      });

    closeModal();
    console.log(formData)
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="max-sm:w-60 max-sm:ml-6 rounded-lg bg-fernGreen px-4 py-2 shadow-md mt-1 mb-1 text-sm font-roboto text-white hover:bg-hunterGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <div className="md:flex items-center gap-1"> <span >  New Task</span> </div>
        </button>
      </div>
      <div className="flex justify-center ">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto ">
              <div className="flex min-h-full items-center justify-center p-4 text-center ">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all items-center justify-center ml-10 ">
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-center font-medium leading-6 text-gray-900"
                    >
                      New Task
                    </Dialog.Title>
                    <form className="flex flex-col   ">
                      <label>
                        Title :<br></br>
                        <div>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={changeHandler}
                            className="px-2 border border-gray-900 rounded-md "
                          />
                        </div>
                      </label>

                      <label>
                        Description :<br></br>
                        <input
                          type="text"
                          name="taskDetails"
                          value={formData.taskDetails}
                          onChange={changeHandler}
                          className="px-2  border border-gray-900 rounded-md "
                        />
                      </label>

                      <label>
                        End Date :<br></br>
                        <input
                          type="date"
                          name="dueDate"
                          value={formData.dueDate}
                          onChange={changeHandler}
                          className="px-2   "
                        />
                      </label>
                    </form>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleSubmit}
                      >
                        Done
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
