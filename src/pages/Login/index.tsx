import React from "react";

import { Img, Input, Text } from "components";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient2  flex font-montserrat h-[1117px] justify-end mx-auto relative w-full">
        <div className="flex flex-col md:gap-10 gap-[134px] h-full justify-end mt-auto mx-auto w-full">
          <div className="flex flex-col mr-[1132px] md:px-5 relative w-[35%] md:w-full">
            <Img
              className="h-[63px] mx-auto object-cover w-full"
              src="images/img_iit3.png"
              alt="iitThree"
            />
            <Img
              className="h-[482px] mb-auto mt-[-63px] object-cover w-[12%] z-[1]"
              src="images/img_iit4.png"
              alt="iitFour"
            />
          </div>
          <div className="h-[1045px] md:h-[626px] md:ml-[0] ml-[1124px] pb-[419px] md:px-5 relative w-[35%] md:w-full">
            <Img
              className="absolute h-[626px] object-cover right-[0] top-[0] w-[13%]"
              src="images/img_iit3_626x76.png"
              alt="iitThree_One"
            />
            <Img
              className="absolute h-[82px] inset-x-[0] mx-auto object-cover top-[40%] w-full"
              src="images/img_iit4_82x604.png"
              alt="iitFour_One"
            />
          </div>
        </div>
        <div className="absolute sm:h-[1117px] h-[1122px] md:h-[1578px] inset-[0] justify-center m-auto pb-[5px] md:px-5 w-full">
          <Img
            className="h-[1117px] m-auto object-cover"
            src="images/img_vector14.png"
            alt="vectorFourteen"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[65px] items-end justify-start left-[4%] top-[3%] w-[88%]">
            <div className="flex flex-row gap-[75px] items-start justify-end w-[18%] md:w-full">
              <Img
                className="h-[35px] mb-[7px] w-[35px]"
                src="images/img_home.svg"
                alt="home"
              />
              <div className="flex flex-row gap-[7px] items-start justify-between mt-2.5 w-3/5">
                <Img
                  className="h-[25px] md:h-auto object-cover"
                  src="images/img_ing1.png"
                  alt="ingOne"
                />
                <div className="h-[31px] relative w-[74%]">
                  <Img
                    className="absolute bottom-[0] h-7 right-[0] w-7"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Text
                    className="absolute h-full inset-y-[0] left-[0] my-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtMontserratRomanRegular25"
                  >
                    English
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="h-[611px] md:mt-0 mt-[89px] relative w-[42%] md:w-full">
                <Img
                  className="absolute h-[611px] inset-y-[0] left-[0] my-auto object-cover w-[90%]"
                  src="images/img_1phoneremovebgpreview.png"
                  alt="1phoneremovebgp"
                />
                <div className="absolute bg-white-A700 bottom-[12%] h-[266px] right-[0] rounded-[40px] shadow-bs w-[53%]"></div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-14 items-center justify-center p-[58px] md:px-10 sm:px-5 rounded-[30px] w-[46%] md:w-full">
                <Text
                  className="mt-[22px] sm:text-4xl md:text-[38px] text-[40px] text-black-900_f2"
                  size="txtMontserratRomanSemiBold40"
                >
                  Sign In
                </Text>
                <div className="flex flex-col items-start justify-start mb-12 w-[99%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtMontserratRomanMedium20"
                  >
                    Email Or PhoneNumber
                  </Text>
                  <Input
                    name="groupTwenty"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex mt-[17px] outline outline-[0.5px] outline-blue_gray-100 w-full"
                    prefix={
                      <div className="mr-[35px] sm:w-full sm:mx-0 w-[6%] bg-gray-600_7f">
                        <Img
                          className="my-auto"
                          src="images/img_lock.svg"
                          alt="lock"
                        />
                      </div>
                    }
                    shape="round"
                    color="blue_gray_100_33"
                    size="lg"
                    variant="fill"
                  ></Input>
                  <Text
                    className="mt-[50px] text-black-900 text-xl"
                    size="txtMontserratRomanMedium20"
                  >
                    Password
                  </Text>
                  <Input
                    name="groupTwentyOne"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex mt-2 outline outline-[0.5px] outline-blue_gray-100 w-full"
                    prefix={
                      <Img
                        className="h-[35px] mr-[35px] my-auto"
                        src="images/img_carbonpassword.svg"
                        alt="carbon:password"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_33"
                    size="xl"
                    variant="fill"
                  ></Input>
                  <Text
                    className="md:ml-[0] ml-[373px] mt-[23px] text-black-900 text-xl"
                    size="txtMontserratRomanLight20"
                  >
                    <span className="text-black-900 font-montserrat text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-gray-900 font-montserrat text-left font-medium">
                      Forgot Password?
                    </span>
                  </Text>
                  <Text
                    className="bg-gradient3  md:ml-[0] ml-[27px] mt-[60px] pb-[18px] pt-[21px] sm:px-5 px-[35px] rounded-[37px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtMontserratRomanSemiBold28"
                  >
                    Sign In
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[13px] mt-[50px] sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                    size="txtMontserratRomanLight21"
                  >
                    <span className="text-black-900 font-montserrat text-left font-light">
                      Don’t have An account Yet?{" "}
                    </span>
                    <span className="text-gray-900 font-montserrat text-left font-semibold">
                      Create An Account
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
