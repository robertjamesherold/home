type InputType = {
  htmlFor: string;
  label: string;
  id: string;
  isRequired?: boolean;
  placeholder: string;
};

type TextAreaType = {
  htmlFor: string;
  label: string;
  id: string;
  isRequired?: boolean;
    placeholder: string;
    rows: number;
};

type FormTableType = {
  title: string;
  subtitle: string;
} & {
  inputs: InputType[];
} & {
  cancel: string;
  save: string;
} & {
  textArea: TextAreaType;
};

export type { FormTableType, InputType, TextAreaType };