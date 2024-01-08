"use client";
import Link from "next/link";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const [userData, setUserData] = useState<Session | null>(null);

  const supabase = createClient();
  const signInGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });
  };

  const signInMicrosoft = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "azure",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });
  };

  const router = useRouter();
  useEffect(() => {
    const handleFetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUserData(session);
    };

    handleFetchUser();
  }, [supabase.auth]);

  if (userData?.user) {
    return router.push("/create");
  }

  if (!userData) {
    router.push("/login");
  }
  return (
    <div className="flex-1 flex flex-col w-full px-3   justify-center mx-auto gap-2">
      <div className="animate-in flex-1 flex flex-col w-full justify-center mt-[200px] ">
        <button
          onClick={signInGithub}
          className="gh
        mb-[24px]
        lg:w-[320px]
        mx-auto
        shadow-lg
        w-full  border-[0.25px] border-[#DDE1E1] rounded-md bg-white flex px-[24px] py-[12px] items-center space-x-[24px]  "
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_262_2596)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.0149 0C8.05312 0 0 8.11249 0 18.1488C0 26.1713 5.15991 32.9622 12.3181 35.3657C13.213 35.5464 13.5409 34.9752 13.5409 34.4947C13.5409 34.0739 13.5114 32.6318 13.5114 31.1291C8.50005 32.211 7.45649 28.9657 7.45649 28.9657C6.65114 26.8623 5.45786 26.3217 5.45786 26.3217C3.81766 25.2099 5.57734 25.2099 5.57734 25.2099C7.39675 25.3301 8.35144 27.0729 8.35144 27.0729C9.96177 29.837 12.5567 29.056 13.6006 28.5751C13.7496 27.4033 14.2271 26.592 14.7341 26.1414C10.7373 25.7207 6.53203 24.1583 6.53203 17.1871C6.53203 15.2039 7.24741 13.5814 8.38094 12.3196C8.2021 11.8689 7.57559 10.0057 8.56015 7.5118C8.56015 7.5118 10.0812 7.03095 13.511 9.37472C14.9794 8.97745 16.4937 8.77536 18.0149 8.77366C19.536 8.77366 21.0866 8.98422 22.5184 9.37472C25.9485 7.03095 27.4696 7.5118 27.4696 7.5118C28.4542 10.0057 27.8273 11.8689 27.6485 12.3196C28.8119 13.5814 29.4978 15.2039 29.4978 17.1871C29.4978 24.1583 25.2925 25.6904 21.2658 26.1414C21.9222 26.7122 22.4886 27.7938 22.4886 29.5066C22.4886 31.9404 22.4591 33.8936 22.4591 34.4943C22.4591 34.9752 22.7873 35.5464 23.6818 35.366C30.84 32.9618 35.9999 26.1713 35.9999 18.1488C36.0294 8.11249 27.9468 0 18.0149 0Z"
                fill="#24292F"
              />
            </g>
            <defs>
              <clipPath id="clip0_262_2596">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-base text-primary font-medium">
            Log in with GitHub
          </p>
        </button>
{/* 
        <div
          className="gg
          lg:w-[320px]
          mx-auto
        mb-[24px]
        shadow-lg
        w-full  border-[0.25px] border-[#DDE1E1] rounded-md bg-white flex px-[24px] py-[12px] items-center space-x-[24px]  "
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9997 14.7272V21.6981H27.687C27.2616 23.9399 25.9851 25.8382 24.0706 27.1145L29.9123 31.6473C33.316 28.5056 35.2796 23.891 35.2796 18.4092C35.2796 17.1328 35.1651 15.9054 34.9523 14.7274L17.9997 14.7272Z"
              fill="#4285F4"
            />
            <path
              d="M7.91201 21.426L6.59447 22.4346L1.93076 26.0673C4.89257 31.9417 10.963 36 17.9993 36C22.8592 36 26.9337 34.3963 29.912 31.6473L24.0702 27.1146C22.4665 28.1946 20.4211 28.8492 17.9993 28.8492C13.3194 28.8492 9.34311 25.691 7.91937 21.4364L7.91201 21.426Z"
              fill="#34A853"
            />
            <path
              d="M1.93077 9.93274C0.703563 12.3545 0 15.0872 0 17.9999C0 20.9126 0.703563 23.6454 1.93077 26.0671C1.93077 26.0833 7.91996 21.4198 7.91996 21.4198C7.55996 20.3398 7.34718 19.1944 7.34718 17.9997C7.34718 16.805 7.55996 15.6596 7.91996 14.5796L1.93077 9.93274Z"
              fill="#FBBC05"
            />
            <path
              d="M17.9997 7.16727C20.6506 7.16727 23.007 8.08361 24.8888 9.8509L30.0433 4.69642C26.9178 1.78375 22.8598 0 17.9997 0C10.9634 0 4.89257 4.04181 1.93076 9.93274L7.91976 14.58C9.34332 10.3254 13.3197 7.16727 17.9997 7.16727Z"
              fill="#EA4335"
            />
          </svg>

          <p className="text-base text-primary font-medium">
            Log in with Google
          </p>
        </div>

        <div
          onClick={signInMicrosoft}
          className="ms cursor-pointer
        mb-[24px]
        lg:w-[320px]
        mx-auto
        shadow-lg
        w-full  border-[0.25px] border-[#DDE1E1] rounded-md bg-white flex px-[24px] py-[12px] items-center space-x-[24px]  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ff5722"
              d="M6 6H22V22H6z"
              transform="rotate(-180 14 14)"
            ></path>
            <path
              fill="#4caf50"
              d="M26 6H42V22H26z"
              transform="rotate(-180 34 14)"
            ></path>
            <path
              fill="#ffc107"
              d="M26 26H42V42H26z"
              transform="rotate(-180 34 34)"
            ></path>
            <path
              fill="#03a9f4"
              d="M6 26H22V42H6z"
              transform="rotate(-180 14 34)"
            ></path>
          </svg>

          <p className="text-base text-primary font-medium">
            Log in with Microsoft
          </p>
        </div> */}

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </div>
    </div>
  );
}
