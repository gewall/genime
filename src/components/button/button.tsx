import type {
  ButtonProps,
  ButtonVariantData,
  ButtonVariantObject,
} from "@/components/button/button.types";
import clsx from "clsx";
import useColorSchema from "../hooks/colorSchema/useColorSchema";

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  colorSchema,
  additionalClass,
}) => {
  const selectedVariant = useButtonVariants(variant);
  const selectedColorSchema = useColorSchema(colorSchema);

  return (
    <button
      className={clsx(
        "py-2 px-4 rounded-md  transition ease-in-out duration-500",
        additionalClass,
        [selectedVariant?.border],
        [
          selectedColorSchema?.bgColor,
          selectedColorSchema?.color,
          selectedColorSchema?.border,
        ]
      )}
    >
      {label}
    </button>
  );
};

const useButtonVariants = (variant: string): ButtonVariantData | null => {
  const variants: ButtonVariantObject = {
    solid: {
      border: "",
    },
    outline: {
      border: "ring-2 bg-transparent",
    },
  };

  if (!variants[variant]) {
    return null;
  }

  return variants[variant];
};

export default Button;
