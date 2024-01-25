import React from "react";

import { Img, Input, Line, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="md:h-[1632px] sm:h-[802px] h-[805px] relative w-full">
          <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[41px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[121px] items-center justify-start mb-5 mt-3.5 w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-8 justify-start mb-0.5 w-[39%] md:w-full">
                  <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0] w-[77%] md:w-full">
                    <div className="md:h-[85px] h-[92px] relative w-full">
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto md:text-5xl text-[70px] text-deep_purple-500_b2 w-max"
                        size="txtInterRegular70"
                      >
                        <span className="text-deep_purple-500_b2 font-montserrat text-left font-extrabold">
                          Genu ne
                        </span>
                        <span className="text-deep_purple-500_b2 font-montserrat text-left font-medium">
                          Pay
                        </span>
                      </Text>
                      <Img
                        className="absolute h-20 left-[39%] top-[0] w-20"
                        src="images/img_gameiconstakemymoney.svg"
                        alt="gameiconstakemy_One"
                      />
                    </div>
                    <Text
                      className="mt-[17px] sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 w-[66%] sm:w-full"
                      size="txtMontserratRomanMedium33"
                    >
                      Where Trust Meets Transactions!
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[21px] mt-[178px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtMontserratRomanRegular25"
                    >
                      Take Control Of Your Finances Now
                    </Text>
                  </div>
                  <Input
                    name="groupEleven"
                    placeholder="Enter Your Email"
                    className="font-montserrat leading-[normal] md:text-[23px] p-0 placeholder:text-black-900 sm:text-[21px] text-[25px] text-left w-full"
                    wrapClassName="rounded-[50px] w-full"
                    color="white_A700"
                    size="2xl"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[49px] justify-start md:mt-0 mt-[57px] w-[57%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[21px] w-[85%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-1 sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                      size="txtMontserratRomanSemiBold45"
                    >
                      Legal
                    </Text>
                    <Text
                      className="mb-1 sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                      size="txtMontserratRomanSemiBold45"
                    >
                      Reach Out{" "}
                    </Text>
                  </div>
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                        <Text
                          className="md:mt-0 mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                          size="txtMontserratRomanRegular30"
                        >
                          Privacy Policy
                        </Text>
                        <Img
                          className="h-[45px] md:ml-[0] ml-[345px] w-[45px]"
                          src="images/img_call.svg"
                          alt="call"
                        />
                        <Text
                          className="md:ml-[0] ml-[15px] md:mt-0 mt-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                          size="txtMontserratRomanRegular25"
                        >
                          +250798978831
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-9">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                          size="txtMontserratRomanRegular30"
                        >
                          Terms Of Use
                        </Text>
                        <Img
                          className="h-[45px] md:ml-[0] ml-[349px] md:mt-0 mt-[18px] w-[45px]"
                          src="images/img_clarityemailline.svg"
                          alt="clarityemaillin"
                        />
                        <Text
                          className="md:ml-[0] ml-[15px] md:mt-0 mt-7 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                          size="txtMontserratRomanRegular25"
                        >
                          genuinepay@gmail.com
                        </Text>
                      </div>
                    </li>
                    <li>
                      <Text
                        className="mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtMontserratRomanRegular30"
                      >
                        Refund Policy
                      </Text>
                    </li>
                    <li>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[21px]">
                        <Text
                          className="sm:mt-0 mt-[23px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                          size="txtMontserratRomanRegular30"
                        >
                          Terms Of Services
                        </Text>
                        <Text
                          className="mb-[5px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                          size="txtMontserratRomanSemiBold45"
                        >
                          Follow Us:
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[30px]">
                        <Text
                          className="md:mt-0 mt-[19px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                          size="txtMontserratRomanRegular30"
                        >
                          Data Protection Addendum
                        </Text>
                        <Img
                          className="h-[45px] mb-[11px] md:ml-[0] ml-[130px] w-[45px]"
                          src="images/img_lucidelinkedin.svg"
                          alt="lucidelinkedin"
                        />
                        <Img
                          className="h-[45px] mb-[11px] md:ml-[0] ml-[51px] w-[45px]"
                          src="images/img_devicontwitter.svg"
                          alt="devicontwitter"
                        />
                        <Img
                          className="h-[45px] mb-[11px] ml-9 md:ml-[0] w-[45px]"
                          src="images/img_riinstagramline.svg"
                          alt="riinstagramline"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-[31px] relative w-[39%] md:w-full">
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-max"
                  size="txtMontserratRomanRegular25"
                >
                  Copyright 2024 GenuinePay.All Rights Reserved
                </Text>
                <Img
                  className="absolute h-[30px] left-[31%] top-[0] w-[30px]"
                  src="images/img_phcopyright.svg"
                  alt="phcopyright"
                />
              </div>
            </div>
          </div>
          <Line className="absolute bg-white-A700_4c bottom-[19%] h-px inset-x-[0] mx-auto w-full" />
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
