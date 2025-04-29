"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import IconFilter from "../icons/IconFilter";
import { filterOptions } from "../constants";
import { FilterOptionsTypes } from "../types";

type DropdownProps = {
  checkedFilters: FilterOptionsTypes;
  setCheckedFilters: Dispatch<SetStateAction<FilterOptionsTypes>>;
};

const Dropdown = ({ checkedFilters, setCheckedFilters }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-transparent z-40"
        />
      )}
      <div className="relative flex sm:block w-full md:w-fit items-center space-x-5 sm:space-x-0 space-y-2">
        <div className="relative w-full">
          <div
            className="border rounded-lg w-full min-w-56 px-3 py-2 flex space-x-2 items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white cursor-pointer hover:opacity-80 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconFilter/><div className="w-4 h-4 text-gray-400" />
            <p className="text-sm font-medium">Filter by category</p>
          </div>

          {isOpen && (
            <div className="absolute top-full mt-2 bg-gray-900 text-white rounded-lg border border-gray-700 shadow-lg w-full max-h-[400px] overflow-auto z-50 p-4 space-y-4">
              {Object.entries(filterOptions).map(([key, values], index) => {
                if (values.length === 0) return null;
                const typedKey = key as keyof FilterOptionsTypes;

                return (
                  <div key={index} className="space-y-2">
                    <p className="font-semibold text-gray-300 capitalize border-b pb-1 border-gray-700">{key}</p>
                    {values.map((option, i) => (
                      <label
                        key={i}
                        className="flex items-center space-x-2 text-sm cursor-pointer hover:text-gray-200"
                      >
                        <input
                          type="checkbox"
                          checked={checkedFilters[typedKey].some(
                            (item: string) => item.toLowerCase() === option.toLowerCase()
                          )}
                          onChange={() => {
                            const updatedFilters = { ...checkedFilters };
                            const existing = updatedFilters[typedKey];

                            if (existing.some(
                              (item: string) => item.toLowerCase() === option.toLowerCase()
                            )) {
                              updatedFilters[typedKey] = existing.filter(
                                (item: string) => item.toLowerCase() !== option.toLowerCase()
                              );
                            } else {
                              updatedFilters[typedKey] = [...existing, option];
                            }

                            setCheckedFilters(updatedFilters);
                          }}
                          className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-400"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
