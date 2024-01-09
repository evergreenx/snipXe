import React, { useEffect, useRef, useState } from "react";
import { useToggle, useOnClickOutside } from "usehooks-ts";
import bg from "../../assets/bg.jpg";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { handleBgImageUpdate } from "@/sm/features/control/controlSlice";
import { RootState } from "@/sm/store";
export default function BGImage() {
  const [value, toggle, setValue] = useToggle();

  const [bgImage, setBGImage] = useState<null | string>();

  const [images, setImages] = useState<any[]>([]);

  const ref = useRef(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = () => {
    setValue(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //ts-ignore
    const file: File | null = e.target.files && e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);

      handleImageBG(url);
      setBGImage(url);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Accept-Language": "en-US",
      Accept: "application/json",
    },
  };

  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchUser = () => {
      setIsLoading(true);
      axios(config)
        .then(function (response) {
          setImages(response.data.results);
          setIsLoading(false); // Set isLoading to false when data is fetched
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false); // Set isLoading to false in case of error
        });
    };
    fetchUser();
  }, []);

  const dispatch = useDispatch();

  const handleImageBG = (url: string) => {
    dispatch(handleBgImageUpdate(url));
  };

  const bgImageUrl = useSelector((state: RootState) => state.control.bg.i);

  return (
    <div>
      <div className="" onClick={toggle}>
        {bgImageUrl ? (
          <Image
            alt="txt"
            className="w-[28px] h-[28px] cursor-pointer"
            src={bgImageUrl}
            width={40}
            height={40}
          />
        ) : (
          <svg
            className="cursor-pointer "
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="27"
              fill="url(#pattern0)"
            />
            <rect x="0.5" y="0.5" width="27" height="27" stroke="#DDE1E1" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_311_514" transform="scale(0.015625)" />
              </pattern>
              <image
                id="image0_311_514"
                width="64"
                height="64"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        )}
      </div>

      {value && (
        <div
          className="w-[201px] rounded-[16px] bg-white h-[320px] absolute z-50 p-2  overflow-hidden  "
          ref={ref}
        >
          <div
            onClick={handleButtonClick}
            style={{
              backgroundImage: `url(${bgImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className=" px-[13px] bg-blue-300 w-full pt-[28px] pb-[20px] flex items-center flex-col rounded-lg"
          >
            <svg
              width="36"
              className="mb-[8px]"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.0005 7.49994L28.5005 2.99994M28.5005 2.99994L33.0005 7.49994M28.5005 2.99994V11.9999M18.7505 4.49994H11.7005C9.18025 4.49994 7.92013 4.49994 6.95753 4.99041C6.1108 5.42184 5.42239 6.11025 4.99096 6.95698C4.50049 7.91958 4.50049 9.1797 4.50049 11.6999V24.2999C4.50049 26.8202 4.50049 28.0803 4.99096 29.0429C5.42239 29.8896 6.1108 30.578 6.95753 31.0095C7.92013 31.4999 9.18025 31.4999 11.7005 31.4999H25.5005C26.8954 31.4999 27.5929 31.4999 28.1652 31.3466C29.7181 30.9305 30.9311 29.7175 31.3472 28.1646C31.5005 27.5924 31.5005 26.8949 31.5005 25.4999M15.7505 12.7499C15.7505 14.4068 14.4073 15.7499 12.7505 15.7499C11.0936 15.7499 9.75049 14.4068 9.75049 12.7499C9.75049 11.0931 11.0936 9.74994 12.7505 9.74994C14.4073 9.74994 15.7505 11.0931 15.7505 12.7499ZM22.4855 17.8772L9.79721 29.412C9.08353 30.0608 8.72669 30.3852 8.69513 30.6662C8.66777 30.9098 8.76117 31.1514 8.94527 31.3132C9.15766 31.4999 9.63991 31.4999 10.6044 31.4999H24.6845C26.8432 31.4999 27.9226 31.4999 28.7704 31.1373C29.8346 30.682 30.6825 29.8341 31.1378 28.7698C31.5005 27.922 31.5005 26.8427 31.5005 24.6839C31.5005 23.9576 31.5005 23.5944 31.4211 23.2562C31.3213 22.8311 31.1299 22.433 30.8604 22.0895C30.6459 21.8162 30.3623 21.5894 29.7951 21.1356L25.5992 17.7789C25.0316 17.3248 24.7477 17.0977 24.4352 17.0176C24.1597 16.947 23.8698 16.9561 23.5993 17.044C23.2924 17.1437 23.0234 17.3882 22.4855 17.8772Z"
                stroke="white"
                stroke-width="3.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-sm font-normal text-white text-center">
              <input
                ref={fileInputRef}
                id="fileInput"
                type="file"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              Click to Upload image or Drag and Drop image
            </p>
          </div>

          <div className="images grid gap-2 grid-cols-3 mt-[16px] items-center place-content-center mx-auto justify-center">
            {isLoading && (
              <p className="text-primary text-sm text-center"> loading </p>
            )}

            {images &&
              images.map((image) => {
                return (
                  <div
                    onClick={() => handleImageBG(image.urls?.regular)}
                    className="flex items-center  mx-auto cursor-pointer"
                  >
                    <Image
                      width={40}
                      height={40}
                      alt="image"
                      src={image.urls?.small}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
