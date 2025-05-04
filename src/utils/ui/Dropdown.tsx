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
      <div className="relative w-full md:w-fit z-50">
        <div
          className="cursor-pointer flex items-center space-x-3 px-4 py-2 rounded-xl border border-white/10 bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-white hover:opacity-90 backdrop-blur-sm shadow-md hover:shadow-blue-500/10 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconFilter className="w-4 h-4 text-gray-300" />
          <span className="text-sm font-medium">Filter by category</span>
        </div>

        {isOpen && (
          <div className="absolute mt-2 w-full md:min-w-64 max-h-[400px] overflow-auto bg-gradient-to-br from-blue-950/90 via-gray-900/90 to-purple-950/90 text-white border border-white/10 shadow-lg rounded-2xl p-4 space-y-4 backdrop-blur-md z-50">
            {Object.entries(filterOptions).map(([key, values], index) => {
              if (values.length === 0) return null;
              const typedKey = key as keyof FilterOptionsTypes;

              return (
                <div key={index} className="space-y-2">
                  <p className="text-sm font-semibold text-gray-300 border-b border-white/10 pb-1 capitalize">
                    {key}
                  </p>
                  {values.map((option, i) => (
                    <label
                      key={i}
                      className="flex items-center space-x-2 text-sm text-gray-200 hover:text-white transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={checkedFilters[typedKey].some(
                          (item: string) => item.toLowerCase() === option.toLowerCase()
                        )}
                        onChange={() => {
                          const updatedFilters = { ...checkedFilters };
                          const existing = updatedFilters[typedKey];

                          if (
                            existing.some(
                              (item: string) =>
                                item.toLowerCase() === option.toLowerCase()
                            )
                          ) {
                            updatedFilters[typedKey] = existing.filter(
                              (item: string) =>
                                item.toLowerCase() !== option.toLowerCase()
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
    </>
  );
};

export default Dropdown;
