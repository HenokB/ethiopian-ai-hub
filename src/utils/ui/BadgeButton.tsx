"use client";
import { useSearchParams, useRouter } from "next/navigation";

interface BadgeButtonProps {
  field: string;
  value: string;
  className?: string;
  selectedClassName?: string;
  unselectedClassName?: string;
  children?: React.ReactNode;
}

function BadgeButton({
  className = "",
  field,
  value,
  selectedClassName,
  unselectedClassName,
  children,
}: BadgeButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // If field and value are different, treat as array (multi-select)
  const isArrayField =
    searchParams.getAll(field).length > 1 ||
    (searchParams.getAll(field).length === 1 &&
      searchParams.get(field) !== value);

  let isSelected: boolean;
  if (isArrayField) {
    // Multi-select: check if value is in the array
    isSelected = searchParams.getAll(field).includes(value);
  } else {
    // Single-select: check equality
    isSelected = searchParams.get(field) === value;
  }

  const onToggle = () => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (isArrayField) {
      // Multi-select: add/remove value from array
      const values = params.getAll(field);
      if (isSelected) {
        // Remove value
        const newValues = values.filter((v) => v !== value);
        params.delete(field);
        newValues.forEach((v) => params.append(field, v));
      } else {
        // Add value
        params.append(field, value);
      }
    } else {
      // Single-select: toggle value
      if (isSelected) {
        params.delete(field);
      } else {
        params.set(field, value);
      }
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      type="button"
      className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm border transition cursor-pointer ${
        isSelected ? selectedClassName : unselectedClassName
      } 
        ${className}`}
      onClick={onToggle}
    >
      {children ? children : value}
      {isSelected && <span className="ml-2 text-white font-bold">✓</span>}
    </button>
  );
}

export default BadgeButton;
