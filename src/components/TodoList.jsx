import React from "react";
import clipborad from "../assets/Clipboard.svg";
import Task from "./Tasks";

const TodoList = ({ task, onCompleted, onDelete }) => {
  const createdTask = task.length;
  const completedTask = task.filter((items) => items.completed).length;

  return (
    <div className="p-6 py-10 w-full m-auto">
      <div className="flex justify-between p-2">
        <p className="text-[#4EA8DE] text-sm sm:text-base font-bold ">
          Task Created{" "}
          <span className="bg-[#333] text-[#d9d9d9] px-2 py-0.5 rounded-full ml-2">
            {createdTask}
          </span>
        </p>
        <p className="text-[#8284FA] font-bold text-sm sm:text-base">
          Completed{" "}
          <span className="bg-[#333] text-[#d9d9d9] px-2.5 py-0.5 rounded-full ml-2">
            {completedTask} {createdTask > 0 && `of ${createdTask}`}
          </span>
        </p>
      </div>
      {createdTask ? (
        <>
          {task.map(({ id, title, description, completed }) => {
            return (
              <Task
                key={id}
                id={id}
                title={title}
                description={description}
                completed={completed}
                onCompleted={onCompleted}
                onDelete={onDelete}
              />
            );
          })}
        </>
      ) : (
        <div>
          <div className=" mt-4 border-t border-[#333] rounded-full h-2" />
          <div className=" mt-10 select-none opacity-60">
            <img src={clipborad} alt="clipboard" className="w-14 m-auto" />
            <p className="text-[#808080] text-center text-base mt-4">
              you still don't have tasks registered
            </p>
            <p className="text-[#808080] text-center text-base">
              Create tasks and organize your to-do items
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
