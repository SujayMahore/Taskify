import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoAlertCircleOutline } from "react-icons/io5";
import { GoAlertFill } from "react-icons/go";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";



export default function DeleteAlertModal({setData,entry}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const taskData = JSON.stringify(entry)
// console.log(taskData)
  function handleDelete(){
    // const deleteData = async (taskData) => {
    //     try{
    //         const response = await axios.delete("http://localhost:8080/tasks/deleteTask",{ data: taskData});
    //         console.log("Task deleted successfully")
    //         setData(response.data);
    //     }catch(error){
    //         console.error("Error deleting task" , error)

    //     }
        
        
    // }
    // deleteData()

    const deleteTask = async (taskData)=>{
        try{
            const response = await fetch("http://localhost:8080/tasks/deleteTask" , {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: taskData
            });
            if(!response.ok){
                throw new Error("Failed to delete task")
            }
            const responseData = await response.json()
            
            console.log("Task deleted successfully " , responseData)
            setData(responseData)
        }catch(error){
            console.log("Error deleting task" , error)
        }

       
    }
    deleteTask(taskData)

    closeModal()
    
  }

  return (
    <div className='font-barlow'>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="hover:text-blue-300 "
        >
          <MdDeleteOutline size={24}></MdDeleteOutline>
        </button>
      </div>

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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-auto max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" flex  text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className='flex items-center gap-1'> <GoAlertFill  size={15} color='red' ></GoAlertFill> <span className=' font-bold '> Delete Item</span> </div>
                    
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     Are you sure you want to delete this task?
                    </p>
                  </div>

                  <div className="mt-4">
                  <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium  hover:bg-red-300 "
                      onClick={handleDelete}
                    >
                    Delete
                    </button>
                  
                    <button
                      type="button"
                      className="mx-1 inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium  "
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
