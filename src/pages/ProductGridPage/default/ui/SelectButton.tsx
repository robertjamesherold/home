import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '@/ui';
import { Container } from '@/layout';

type SelectType = {
  value: string;
  onChange: (value: string) => void;
};

const SelectButton: React.FC<SelectType> = ({ value, onChange }) => {
  return (
    <Container className="flex w-full justify-end">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="max-w-50 rounded-md border bg-white px-4 py-2 ">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="w-fit bg-white">
          <SelectItem value="featured">Empfohlen</SelectItem>
          <SelectItem value="price-asc">Preis aufsteigend</SelectItem>
          <SelectItem value="price-desc">Preis absteigend</SelectItem>
          <SelectItem value="rating">Bewertung</SelectItem>
        </SelectContent>
      </Select>
    </Container>
  );
};

export default SelectButton;
