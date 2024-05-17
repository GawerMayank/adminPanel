import React from "react";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";
import { MdDeleteForever } from "react-icons/md";

const UserDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      <div className="flex justify-around items-center mt-10 p-2 flex-col mx-24">
        <div className="flex justify-around w-full mx-20">
          <h1 className="text-3xl text-zinc-500">List of User Details</h1>
          <button
            className="bg-sky-700 text-white rounded p-2 font-semibold cursor-pointer shadow-inner shadow-sky-50"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add new Users
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10  ">
        <ul className="flex flex-col justify-around gap-5 text-xl p-1 w-1/2">
          {data.map((user, id) => {
            return (
              <li
                className="flex justify-between  border-b-2 border-b-zinc-500"
                key={id}
              >
                {user}
                <button onClick={() => deleteUser(id)}>
                  <MdDeleteForever className="size-8" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UserDetails;
