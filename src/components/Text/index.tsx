import React from "react";

const sizeClasses = {
  txtMontserratRomanSemiBold30Gray900: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold70: "font-montserrat font-semibold",
  txtMontserratRomanMedium15Black900: "font-medium font-montserrat",
  txtPoppinsRegular16Bluegray700: "font-normal font-poppins",
  txtMontserratRomanSemiBold30WhiteA700: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold70Gray900: "font-montserrat font-semibold",
  txtPoppinsExtraLight13: "font-light font-poppins",
  txtPoppinsRegular30: "font-normal font-poppins",
  txtPoppinsExtraLight15: "font-light font-poppins",
  txtMontserratRomanMedium25Bluegray90001: "font-medium font-montserrat",
  txtMontserratRomanRegular30Gray900b2: "font-montserrat font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular19: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtMontserratRomanBold50: "font-bold font-montserrat",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterRegular30WhiteA700: "font-inter font-normal",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtHKGroteskBold16: "font-bold font-hkgrotesk",
  txtPoppinsRegular23: "font-normal font-poppins",
  txtHKGroteskMedium16: "font-hkgrotesk font-medium",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular23Indigo900: "font-normal font-poppins",
  txtMontserratRomanRegular18Black900: "font-montserrat font-normal",
  txtMontserratRomanRegular30: "font-montserrat font-normal",
  txtMontserratRomanMedium23Gray900: "font-medium font-montserrat",
  txtMontserratRomanSemiBold40Gray900: "font-montserrat font-semibold",
  txtMontserratRomanExtraLight8: "font-montserrat font-thin",
  txtMontserratRomanRegular28: "font-montserrat font-normal",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtPoppinsRegular16Gray60001: "font-normal font-poppins",
  txtMontserratRomanSemiBold65Gray900: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtInterRegular70: "font-inter font-normal",
  txtMontserratRomanMedium20WhiteA700: "font-medium font-montserrat",
  txtPoppinsRegular20Gray60001: "font-normal font-poppins",
  txtMontserratRomanBold30: "font-bold font-montserrat",
  txtMontserratRomanSemiBold25: "font-montserrat font-semibold",
  txtPoppinsRegular20Bluegray700: "font-normal font-poppins",
  txtMontserratRomanSemiBold23: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold20WhiteA700: "font-montserrat font-semibold",
  txtPoppinsRegular15Lime300: "font-normal font-poppins",
  txtMontserratRomanMedium40: "font-medium font-montserrat",
  txtMontserratRomanSemiBold60Black900: "font-montserrat font-semibold",
  txtPoppinsRegular20Gray900: "font-normal font-poppins",
  txtMontserratRomanSemiBold28: "font-montserrat font-semibold",
  txtMontserratRomanMedium20Gray900b2: "font-medium font-montserrat",
  txtMontserratRomanBold26: "font-bold font-montserrat",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtMontserratRomanRegular12: "font-montserrat font-normal",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtMontserratRomanRegular25Gray900b2: "font-montserrat font-normal",
  txtMontserratRomanMedium39: "font-medium font-montserrat",
  txtMontserratRomanSemiBold30: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold20Black900: "font-montserrat font-semibold",
  txtMontserratRomanMedium30: "font-medium font-montserrat",
  txtMontserratRomanLight20: "font-light font-montserrat",
  txtMontserratRomanMedium33: "font-medium font-montserrat",
  txtMontserratRomanLight21: "font-light font-montserrat",
  txtMontserratRomanMedium35: "font-medium font-montserrat",
  txtMontserratRomanLight23: "font-light font-montserrat",
  txtMontserratRomanSemiBold39: "font-montserrat font-semibold",
  txtMontserratRomanMedium34: "font-medium font-montserrat",
  txtMontserratRomanMedium23WhiteA700: "font-medium font-montserrat",
  txtPoppinsRegular18Gray500: "font-normal font-poppins",
  txtMontserratRomanSemiBold40: "font-montserrat font-semibold",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanRegular25: "font-montserrat font-normal",
  txtMontserratRomanRegular23: "font-montserrat font-normal",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanLight13: "font-light font-montserrat",
  txtMontserratRomanMedium25: "font-medium font-montserrat",
  txtMontserratRomanSemiBold45: "font-montserrat font-semibold",
  txtMontserratRomanMedium28: "font-medium font-montserrat",
  txtMontserratRomanLight15: "font-light font-montserrat",
  txtPoppinsRegular18Gray60001: "font-normal font-poppins",
  txtPoppinsMedium23: "font-medium font-poppins",
  txtMontserratRomanLight17: "font-light font-montserrat",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtMontserratRomanLight18: "font-light font-montserrat",
  txtPoppinsRegular15WhiteA700: "font-normal font-poppins",
  txtMontserratRomanMedium20: "font-medium font-montserrat",
  txtHelveticaNeue14: "font-helveticaneue font-normal",
  txtMontserratRomanMedium23: "font-medium font-montserrat",
  txtMontserratRomanSemiBold23Gray900: "font-montserrat font-semibold",
  txtMontserratRomanRegular30Black900: "font-montserrat font-normal",
  txtMontserratRomanSemiBold20Gray900: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold50: "font-montserrat font-semibold",
  txtMontserratRomanMedium15: "font-medium font-montserrat",
  txtMontserratRomanMedium17: "font-medium font-montserrat",
  txtMontserratRomanSemiBold40WhiteA700: "font-montserrat font-semibold",
  txtMontserratRomanMedium19: "font-medium font-montserrat",
  txtMontserratRomanSemiBold55: "font-montserrat font-semibold",
  txtMontserratRomanMedium18: "font-medium font-montserrat",
  txtMontserratRomanSemiBold65WhiteA700: "font-montserrat font-semibold",
  txtPoppinsMedium19: "font-medium font-poppins",
  txtPoppinsMedium17: "font-medium font-poppins",
  txtMontserratRomanSemiBold100: "font-montserrat font-semibold",
  txtMontserratRomanMedium30WhiteA700: "font-medium font-montserrat",
  txtMontserratRomanMedium13: "font-medium font-montserrat",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtInterRegular30: "font-inter font-normal",
  txtHKGroteskRegular16: "font-hkgrotesk font-normal",
  txtMontserratRomanSemiBold60: "font-montserrat font-semibold",
  txtHKGroteskRegular14: "font-hkgrotesk font-normal",
  txtPoppinsBold25: "font-bold font-poppins",
  txtPoppinsMedium15Deeppurple500: "font-medium font-poppins",
  txtMontserratRomanSemiBold65: "font-montserrat font-semibold",
  txtHelveticaNeueBold20: "font-bold font-helveticaneue",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
