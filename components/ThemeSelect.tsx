import React, { HTMLAttributes, ReactNode, Ref } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/sm/store";
import { handleThemeUpdate } from "@/sm/features/control/controlSlice";

const ThemeSelect = ({ data }: { data: any[] }) => {
  const dispatch = useDispatch();

  const selectedTheme = useSelector((state: RootState) => state.control.theme);

  const handleSelectedTheme = (value: string) => {
    dispatch(handleThemeUpdate(value));
  };

  return (
    <Select.Root
      onValueChange={handleSelectedTheme}
      defaultValue={selectedTheme}
    >
      <Select.Trigger
        className="inline-flex z-[100] mt-[20px] items-center justify-between rounded py-[8px] px-[16px] text-base font-semibold leading-none h-[35px] gap-[5px] bg-transparent text-secondary border-[0.5px] border-[#DDE1E1] w-full outline-none"
        aria-label="theme"
      >
        <Select.Value placeholder="Select theme" />
        <Select.Icon>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#DDE1E1"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden z-[100] bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-black cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
  

              {data.map((i) => {
                return <SelectItem value={i.value}>{i.name}</SelectItem>;
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-black cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | any;
  value: string;
}

const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: SelectItemProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    return (
      <Select.Item
        className={classnames(
          "text-[13px] leading-none text-black rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default ThemeSelect;
