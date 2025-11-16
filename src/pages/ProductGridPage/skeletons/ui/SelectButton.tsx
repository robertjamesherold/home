import {
  Select,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from '@/ui';
import { Container } from '@/layout';



const SkeletonSelectButton: React.FC= () => {
  return (
    <Container className="flex w-full justify-end">
      <Select>
        <Skeleton className='w-full max-w-50 h-fit rounded-md'>
          <SelectTrigger className="max-w-50 rounded-md border bg-white px-4 py-2 opacity-0">
            <SelectValue />
          </SelectTrigger>
        </Skeleton>
      </Select>
    </Container>
  );
};

export default SkeletonSelectButton;
