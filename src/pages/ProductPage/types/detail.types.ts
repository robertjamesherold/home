type DetailDataType = {
  title: string;
  content: {
    Icon: React.ElementType;
    text: string;
  }[];
};

type DetailTypes = {
    detailData: DetailDataType[];
};

export type { DetailTypes };

export type { DetailDataType };