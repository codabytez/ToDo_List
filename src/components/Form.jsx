import React, { useState } from "react";

const Form = ({
  todo: { title, description },
  onTodo,
  setTodo,
  onSetDescription,
  onAddTask,
}) => {
  const handleSubmit = (e) => {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    e.preventDefault();
    onAddTask(newTask);
    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <div className="relative">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-center text-xs"
      >
        <div className={`${title ? "h-[100px]" : "h-[30px]"}`}>
          <input
            className={`bg-[#262626] text-[#808080] rounded p-2.5 w-[700px] focus:border ring-offset-0 border-0 outline-none outline-1 focus-visible:border-[#5e60ce] absolute ${
              title ? "bottom-[86%]" : "bottom-[70%]"
            } left-[14%]`}
            type="text"
            name="title"
            id="title"
            placeholder="Add a new task..."
            value={title}
            onChange={onTodo}
            autoComplete="off"
          />

          {title && (
            <textarea
              className="bg-[#262626] text-[#808080] rounded p-2.5 w-[700px] focus:border ring-offset-0 border-0 outline-none outline-1 focus-visible:border-[#5e60ce] mt-2 absolute top-[20%] left-[14%] overflow-hidden resize-none"
              name="description"
              id="description"
              placeholder="Add a description..."
              value={description}
              onChange={onTodo}
            />
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#1e6f9f] text-[#F2F2F2] font-bold p-3 mx-2 rounded-md transition-all hover:bg-[#4ea8de] "
        >
          Create{" "}
          <span className="border rounded-full px-1.5 pb-1 ml-1 ">+</span>
        </button>
      </form>
    </div>
  );
};

export default Form;