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
          className="cursor-pointer flex items-center space-x-3 px-5 py-3 rounded-2xl border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] hover:border-[#86868b] transition-all duration-200 active:scale-95 shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconFilter className="w-5 h-5 text-[#86868b]" />
          <span className="text-sm font-medium">Filter by category</span>
        </div>

        {isOpen && (
          <div className="absolute mt-2 w-full md:min-w-72 max-h-[400px] overflow-auto bg-white text-[#1d1d1f] border border-[#d2d2d7] shadow-lg rounded-2xl p-5 space-y-4 z-50">
            {Object.entries(filterOptions).map(([key, values], index) => {
              if (values.length === 0) return null;
              const typedKey = key as keyof FilterOptionsTypes;

              return (
                <div key={index} className="space-y-2">
                  <p className="text-sm font-semibold text-[#86868b] border-b border-[#d2d2d7] pb-2 capitalize">
                    {key}
                  </p>
                  {values.map((option, i) => (
                    <label
                      key={i}
                      className="flex items-center space-x-3 text-sm text-[#1d1d1f] hover:text-[#007aff] transition-colors cursor-pointer py-1"
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
                        className="h-4 w-4 rounded border-[#d2d2d7] bg-white text-[#007aff] focus:ring-2 focus:ring-[#007aff]/20 cursor-pointer"
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
