import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const ContactusPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 font-montserrat h-[4324px] mx-auto relative w-full">
        <div className="md:h-[3420px] h-[4324px] sm:h-[4395px] m-auto md:px-5 w-full">
          <div className="absolute bg-gradient11  flex flex-col inset-x-[0] items-center justify-start mx-auto p-[39px] sm:px-5 top-[0] w-full">
            <div className="flex flex-col items-center justify-start mb-[1038px] mt-[18px] w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-full">
                <div className="font-inter h-12 md:h-[58px] mb-4 relative w-[13%] md:w-full">
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-deep_purple-500 w-max"
                    size="txtInterRegular30"
                  >
                    <span className="text-deep_purple-500 font-montserrat text-left font-extrabold">
                      Genu ne
                    </span>
                    <span className="text-deep_purple-500 font-montserrat text-left font-normal">
                      Pay
                    </span>
                  </Text>
                  <Img
                    className="absolute h-[42px] left-[36%] top-[0]"
                    src="images/img_gameiconstakemymoney.svg"
                    alt="gameiconstakemy"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[151px] md:mt-0 mt-[27px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtMontserratRomanMedium28"
                >
                  Home{" "}
                </Text>
                <Text
                  className="md:ml-[0] ml-[57px] md:mt-0 mt-[27px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtMontserratRomanMedium28"
                >
                  About Us
                </Text>
                <Text
                  className="md:ml-[0] ml-[60px] md:mt-0 mt-[27px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtMontserratRomanMedium28"
                >
                  Features
                </Text>
                <div className="flex md:flex-1 flex-row font-montserrat sm:gap-10 items-start justify-between md:ml-[0] ml-[55px] md:mt-0 mt-[29px] w-[34%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtMontserratRomanMedium28"
                  >
                    Pricing
                  </Text>
                  <div className="flex flex-row gap-[7px] items-start justify-between w-1/4">
                    <Img
                      className="h-[25px] md:h-auto mb-0.5 object-cover"
                      src="images/img_ing1.png"
                      alt="ingOne"
                    />
                    <div className="h-6 md:h-[27px] mt-[3px] relative w-[69%]">
                      <Img
                        className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                        src="images/img_checkmark_black_900.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="absolute h-max inset-y-[0] left-[0] my-auto text-black-900 text-lg"
                        size="txtMontserratRomanMedium18"
                      >
                        English
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row font-montserrat gap-[23px] items-start justify-start md:ml-[0] ml-[58px] md:mt-0 mt-[33px] w-[9%] md:w-full">
                  <Img
                    className="h-[26px]"
                    src="images/img_octiconperson24_black_900.svg"
                    alt="octiconpersonTwentyFour"
                  />
                  <a
                    href="javascript:"
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                  >
                    <Text size="txtMontserratRomanMedium23">Sign In</Text>
                  </a>
                </div>
              </div>
              <Text
                className="bg-clip-text bg-gradient3  mt-[114px] md:text-5xl text-[70px] text-center text-transparent"
                size="txtMontserratRomanSemiBold70Gray900"
              >
                Contact Us
              </Text>
              <Text
                className="bg-clip-text bg-gradient6  mt-[21px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-transparent w-[61%] sm:w-full"
                size="txtMontserratRomanRegular25Gray900b2"
              >
                Our dedicated customer support team is ready to address your
                inquiries, provide assistance with transactions, and offer
                guidance on any concerns you may have.
              </Text>
              <div className="md:gap-10 gap-[108px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[70px] w-[98%] md:w-full">
                <div className="gray_900_indigo_900_border7 h-[260px] outline outline-[2px] rounded-[30px] w-full"></div>
                <div className="gray_900_indigo_900_border8 h-[260px] outline outline-[2px] rounded-[30px] w-full"></div>
                <div className="gray_900_indigo_900_border9 h-[260px] outline outline-[2px] rounded-[30px] w-full"></div>
              </div>
              <Text
                className="bg-clip-text bg-gradient3  mt-[88px] sm:text-4xl md:text-[38px] text-[40px] text-center text-transparent"
                size="txtMontserratRomanSemiBold40Gray900"
              >
                Do You Have A Question?
              </Text>
              <div className="bg-white-A700 flex flex-col items-start justify-end mt-[54px] p-[27px] sm:px-5 rounded-[30px] shadow-bs w-[99%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[711px] justify-start mb-9 mt-[63px] w-[86%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[34px] w-[98%] md:w-full">
                      <Text
                        className="md:mt-0 mt-2 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                        size="txtMontserratRomanMedium40"
                      >
                        Name
                      </Text>
                      <Text
                        className="mb-2 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                        size="txtMontserratRomanMedium40"
                      >
                        Email Or Phone Number
                      </Text>
                    </div>
                    <div className="bg-gray-300 h-[150px] mt-3 rounded-[20px] w-[57%]"></div>
                    <div className="flex flex-col md:gap-10 gap-[261px] items-start justify-start md:ml-[0] ml-[34px] mt-[52px]">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                        size="txtMontserratRomanMedium40"
                      >
                        Subject
                      </Text>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                        size="txtMontserratRomanMedium40"
                      >
                        Message
                      </Text>
                    </div>
                  </div>
                  <div className="bg-light_blue-900 flex flex-col items-center justify-end md:ml-[0] ml-[9px] mr-[742px] p-[47px] md:px-10 sm:px-5 rounded-[74px] shadow-bs">
                    <Text
                      className="mt-1 sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                      size="txtMontserratRomanSemiBold40WhiteA700"
                    >
                      Leave A Message
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[869px] object-cover right-[0] top-[12%]"
            src="images/img_group8_869x399.png"
            alt="groupEight"
          />
          <Img
            className="absolute h-[298px] left-[0] object-cover top-[0]"
            src="images/img_group13.png"
            alt="groupNine"
          />
          <Img
            className="absolute bottom-[29%] h-[893px] object-cover right-[0]"
            src="images/img_group12_893x531.png"
            alt="groupTwelve"
          />
          <Footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
        <div className="absolute flex flex-col md:gap-10 gap-[121px] inset-x-[0] items-end justify-start max-w-[1545px] mx-auto md:px-5 top-[26%] w-full">
          <div className="bg-gray-300 h-[150px] rounded-[20px] w-[49%]"></div>
          <div className="flex flex-col md:gap-10 gap-[121px] items-center justify-start w-full">
            <div className="bg-gray-300 h-48 rounded-[20px] w-full"></div>
            <div className="bg-gray-300 h-[627px] rounded-[20px] w-full"></div>
          </div>
        </div>
        <div className="absolute bottom-[19%] h-[859px] inset-x-[0] mx-auto md:px-5 w-full">
          <Img
            className="h-[859px] m-auto object-cover w-full"
            src="images/img_screenshot20240114.png"
            alt="screenshot20240"
          />
          <div className="absolute bg-black-900_26 flex flex-col md:gap-10 gap-[614px] h-full inset-[0] justify-center m-auto p-5 w-full">
            <div className="bg-white-A700 h-[50px] md:ml-[0] ml-[1629px] mr-2 mt-[17px] w-[50px]"></div>
            <div className="bg-white-A700 h-[120px] mb-[18px] md:ml-[0] ml-[1637px] w-[3%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
