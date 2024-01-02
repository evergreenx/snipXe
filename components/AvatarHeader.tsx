import { Session } from "@supabase/supabase-js";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { cookies } from "next/headers";

export async function AvatarHeader({ session }: { session: Session }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="relative h-[36px] w-[36px] rounded-full outline-none lg:pl-[60px] ">
            <Avatar className="h-8 w-8">
              <AvatarImage src={session?.user?.user_metadata.avatar_url} />
              <AvatarFallback>
                {session?.user?.user_metadata.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[201px] z-[99] right-0 absolute shadow-lg backdrop-blur-md"
          align="end"
          forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {/* {session?.user?.user_metadata.name} */}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user?.user_metadata.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup></DropdownMenuGroup>

          <DropdownMenuItem>
            <form
              action="/auth/sign-out"
              method="post"
              className="flex space-x-[8px]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6.66667L18.3333 10M18.3333 10L15 13.3333M18.3333 10H7.49996M12.5 3.50337C11.4377 2.86523 10.2043 2.5 8.88885 2.5C4.90012 2.5 1.66663 5.85786 1.66663 10C1.66663 14.1421 4.90012 17.5 8.88885 17.5C10.2043 17.5 11.4377 17.1348 12.5 16.4966"
                  stroke="#0D102A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <button type="submit">Log out</button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
