import React from "react";
import { Input } from "antd";
const { Search } = Input;
export default function Navbar() {
  const onSearch = (value) => console.log(value);
  const userName = "Abhinav Kumar";
  return (
    <div className="bg-white-100 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            height={20}
            width={30}
            src="/icons/trello.svg"
            alt="Trello Logo"
          />
          <p className="font-bold text-2xl text-[#843DF5]">Trello</p>
          <div className="flex px-10 text-lg font-medium items-center hover:text-[#843DF5]">
            Workspaces{" "}
            <p className="pt-[2px] font-hairline pl-2 text-base">
              ˅
            </p>
          </div>
          <div className="px-10 flex text-lg font-medium items-center hover:text-[#843DF5]">
            Recent{" "}
            <p className="pt-[2px] font-hairline pl-2 text-base">
              ˅
            </p>
          </div>
          <div className="flex px-10 text-lg font-medium items-center hover:text-[#843DF5]">
            Starred{" "}
            <p className="pt-[2px] font-hairline pl-2 text-base">
              ˅
            </p>
          </div>
          <div className="flex px-10 text-lg font-medium items-center hover:text-[#843DF5] ">
            Templates{" "}
            <p className="pt-[2px] font-hairline pl-2 text-base">
              ˅
            </p>
          </div>
        </div>
        <div className="flex items-center px-10">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            allowClear
            className="mr-10"
          />
          <img
            height={20}
            width={28}
            src="/images/notifications.png"
            alt="Notifications Symbol"
            className="mr-10"
          />
          <div className="rounded-3xl text-sm font-bold w-12 h-8 tracking-[0.01em] leading-6 text-white-100  text-center pt-1 bg-[#000B80]">
              {userName?.[0].toUpperCase() + userName.split(" ")[1][0].toUpperCase()}
            </div>
        </div>
      </div>
    </div>
  );
}
