export interface ButtonProps {
  variant: string;
  label: string;
  colorSchema: string;
  additionalClass?: string;
}

export interface ButtonVariantData {
  border: string;
}

export interface ButtonVariantObject {
  [key: string]: any;
}
