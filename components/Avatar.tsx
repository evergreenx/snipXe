import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const AvatarDemo = ({ url, name }: { url: string; name: string }) => {
  return (
    <div className="flex gap-5">
      <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <Avatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src={url}
          alt={name}
        />
        <Avatar.Fallback
          className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-red-300 text-[15px] font-medium"
          delayMs={600}
        >
          {name.slice(0, 2)}
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};
export default AvatarDemo;
