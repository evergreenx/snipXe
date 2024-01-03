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
import {
  handleHPaddingUpdate,
  handleLineHeightUpdate,
  handleVPaddingUpdate,
} from "@/sm/features/control/controlSlice";

const LineHeightSelect = () => {
  const dispatch = useDispatch();

  const data = [
    {
      value: "1",
      placeholder: 1,
    },
    {
      value: "15%",
      placeholder: 15,
    },
    {
      value: "20%",
      placeholder: 20,
    },

    {
      value: "25%",
      placeholder: 25,
    },
    {
      value: "30%",
      placeholder: 30,
    },
    {
      value: "35%",
      placeholder: 35,
    },
    {
      value: "40%",
      placeholder: 40,
    },
    {
      value: "45%",
      placeholder: 45,
    },
    {
      value: "50%",
      placeholder: 55,
    },

    {
        value: "70%",
        placeholder: 70,
      },

      {
        value: "80%",
        placeholder: 80,
      },
      {
        value: "100%",
        placeholder: 100,
      },

      {
        value: "150%",
        placeholder: 150,
      },

      
      {
        value: "200%",
        placeholder: 200,
      },

      
  ];

  const selectedLineHeight = useSelector((state: RootState) => state.control.lineH);

  const handleSelectedHPadding = (value: string) => {
    dispatch(handleLineHeightUpdate(value));
    setValue(value);
  };

  const [value, setValue] = React.useState(selectedLineHeight);
  return (
    <Select.Root
      onValueChange={handleSelectedHPadding}
      defaultValue={selectedLineHeight}
      value={value}
    >
      <Select.Trigger
        className="inline-flex w-[77px] pl-4 text-center  items-center justify-between rounded   text-base font-semibold leading-none   bg-transparent text-secondary border-[0.5px] border-[#DDE1E1] outline-none"
        aria-label="vpadding"
      >
        <Select.Value
          aria-label={value}
          className=""
          placeholder="Select line height"
        ></Select.Value>
        <Select.Icon className="bg-[#7789A9] rounded-r w-[28px] flex justify-center items-center h-[28px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.49996L10 12.5L15 7.49996"
              stroke="#DDE1E1"
              strokeWidth="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden  z-[100] bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-black cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              {data.map((i) => {
                return <SelectItem value={i.value}>{i.placeholder}</SelectItem>;
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

export default LineHeightSelect;
