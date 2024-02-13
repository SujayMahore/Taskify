import React, { useState, useEffect } from "react";

import TaskDetailsModal from "./TaskDetailsModal";
// import {data} from "./MockData";
import axios from "axios";

import classNames from "classnames";
import TaskMeter from "./TaskMeter";
import { CiFilter } from "react-icons/ci";
import { RxCaretSort } from "react-icons/rx";
import DeleteAlertModal from "./DeleteAlertModal";

const Tasks = () => {
  const [data, setData] = useState(null);
  // console.log("Data", data);
  const [filter, setFilter] = useState("");
  const [sortToggle, setSortToggle] = useState(false);

  /* --------------------------- Filter Status Logic -------------------------- */
  let filteredTasks;
  if (filter === "") {
    filteredTasks = data;
    console.log("Status ALL", filteredTasks);
  } else {
    filteredTasks = filter
      ? data.filter((task) => task.status === filter)
      : data;
    console.log("Filtered Tasks", filteredTasks);
  }
  console.log("Filtered Tasks", filteredTasks);

  /* -------------------------------- Logic End ------------------------------- */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tasks/getTask");
        setData(response.data);
        console.log("Og Api Hit");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/tasks/getTask/filter",
  //         filter
  //       );
  //       console.log("filter hit");
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //       console.log("filter hit failed");
  //     }
  //   };
  //   fetchData();
  // }, [filterTrigger]);

  // console.log("ApiCall", data);
  /* -------------------------- Taskmeter Stats Logic ------------------------- */
  let completedTask = 0;
  let progressvar = 0;
  let due = 0;
  let total = 0;
  if (data !== null) {
    for (const task of Object.values(data)) {
      if (task.status === "in progress") {
        progressvar++;
      } else if (task.status === "completed") {
        completedTask++;
      } else if (task.status === "overdue") {
        due++;
      }
    }
    total = Object.keys(data).length;
  }
  /* ------------------------------ Taskmeter end ----------------------------- */
  /* --------------------- Updated Data after post request --------------------- */
  function updateData(childData) {
    setData([...data, childData]);
    console.log("Updated Data", data);
  }
  /* ----------------------------------- End ---------------------------------- */
  function filterHandler(e) {
    if (e.target.value === "all") {
      // setAllData(!allData);
      setFilter("");

      console.log("All", filter);
    } else {
      setFilter(e.target.value);
    }
    console.log("filter", filter);
  }
  /* ------------------------------ Sort Api Call ----------------------------- */
  let sortBy = "";
  function handleSortToggle(status) {
    const order = sortToggle ? "ASC" : "DESC";
    console.log(status);

    console.log(order);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/tasks/getTask/sort`,
          { params: {status , order} }
        );
        setData(response.data);
        console.log("Sort Api Hit");
      } catch (error) {
        console.log("Sort Api error", error);
      }
    };
    fetchData();
    setSortToggle(!sortToggle);
    console.log(sortToggle);
  }
  /* ----------------------------- Sort Api Logic END ----------------------------- */

  const badgeClass = "text-black p-1 capitalize rounded-md px-2";
  return (
    <>
      {/* TaskMeter */}
      <TaskMeter
        completedTask={completedTask}
        progressvar={progressvar}
        due={due}
        total={total}
        updateData={updateData}
      ></TaskMeter>

      {/* Table */}
      <div className="flex flex-col w-full h-full font-inter   text-gray-300 px-5 py-4 overflow-x-auto overflow-y-auto">
        {/* <div className="mx-2">
          <div>
            <Modal updateData={updateData}></Modal>
          </div>
        </div> */}

        {data === null ? (
          <h1 className="text-4xl text-center">Please Add Tasks</h1>
        ) : (
          <>
            <div className="flex ml-3 border border-gray-500 px-2 rounded-md w-40  ">
              <div className="flex items-center">
                <CiFilter size={18}></CiFilter>
                <span>Filter</span>
              </div>

              <select
                value={filter}
                onChange={filterHandler}
                className=" appearance-none w-auto px-2 bg-transparent text-gray-500 rounded-lg focus:outline-none  "
              >
                <option value="all" className="bg-transparent">
                  All
                </option>
                <option value="completed" className="bg-transparent">
                  Completed
                </option>
                <option value="in progress" className="bg-transparent">
                  In Progress
                </option>
                <option value="overdue" className="bg-transparent">
                  Overdue
                </option>
              </select>
            </div>
            <div className=" mx-2 shadow-lg   rounded-md overflow-x-auto overflow-y-auto ">
              <table className="  table-auto w-full border-separate space-y-6 border-spacing-y-6   ">
                <thead className="  font-bold  ">
                  <tr>
                    <td className="  p-3 text-left ">Title</td>
                    <td className=" p-3 text-left  ">Status</td>
                    <td className="  p-3 text-left  ">
                      <div className="flex items-center gap-1">
                        Start Date
                        <span
                          className=" cursor-pointer hover:scale-150 transition-all duration-300"
                          onClick={() => handleSortToggle("startDate")}
                        >
                          <RxCaretSort size={20}></RxCaretSort>
                        </span>
                      </div>
                    </td>
                    <td className=" p-3 text-left  ">
                      <div className="flex items-center">
                        Due Date
                        <span
                          className=" cursor-pointer hover:scale-150 transition-all duration-300 "
                          onClick={() => handleSortToggle("dueDate")}
                        >
                          <RxCaretSort size={20}></RxCaretSort>
                        </span>
                      </div>
                    </td>
                    <td className=" p-3 text-left  "></td>
                    <td className=" p-3 text-left  "></td>
                  </tr>
                </thead>
                <tbody className=" ">
                  {filteredTasks.map((entry) => (
                    <tr
                      className=" rounded-md cursor-pointer duration-300  bg-lightBlackOlive  hover:bg-hunterGreen "
                      key={entry.taskId}
                    >
                      <td className="  p-3 rounded-l-lg  ">{entry.title}</td>
                      <td className=" p-3  ">
                        <span
                          className={classNames(
                            entry.status === "overdue" ? "bg-red-500" : "",
                            entry.status === "in progress"
                              ? "bg-yellow-400"
                              : "",
                            entry.status === "completed" ? "bg-green-600" : "",
                            badgeClass
                          )}
                        >
                          {entry.status}
                        </span>
                      </td>
                      <td className="  p-3 ">{entry.startDate} </td>
                      <td className="p-3 ">{entry.dueDate}</td>
                      <td className="p-3 ">
                        <TaskDetailsModal entry={entry}></TaskDetailsModal>
                      </td>
                      <td className="p-3 rounded-r-lg ">
                        
                        <DeleteAlertModal setData={setData} entry={entry}></DeleteAlertModal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tasks;
