import { colorSchemaData, colorSchemaObjects } from "./useColorScheme.types";

const useColorSchema = (colorSchema: string): colorSchemaData | null => {
  const colorSchemas: colorSchemaObjects = {
    primary: {
      color: "text-white",
      bgColor: "bg-blue-500 hover:ring ring-opacity-50",
      border: "ring-blue-500 hover:bg-blue-500",
    },
    secondary: {
      color: "text-white",
      bgColor: "bg-red-500 hover:ring ring-opacity-50",
      border: "ring-red-500 hover:bg-red-500",
    },
  };

  if (!colorSchemas[colorSchema]) {
    return null;
  }

  return colorSchemas[colorSchema];
};

export default useColorSchema;
