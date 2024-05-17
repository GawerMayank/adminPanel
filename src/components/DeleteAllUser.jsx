import React from "react";
import { deleteUsers } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {

  const dispatch = useDispatch()

  const deleteAllUser = () => {
dispatch(deleteUsers())
  }

  return (
    <div className="flex justify-center mt-10">
      <button className="bg-orange-500 text-white rounded p-2 cursor-pointer  shadow-orange-50 shadow-inner font-semibold"
      onClick={() => deleteAllUser()}>
        Clear all Users
      </button>
    </div>
  );
};

export default DeleteAllUser;
