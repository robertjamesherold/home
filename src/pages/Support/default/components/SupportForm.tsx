import { Card, CardContent } from '@/ui';
import {FormTable} from '@/components';
import { SupportFormData } from '../../data';

type SupporFormProps = {
    data: typeof SupportFormData
};

const SupportForm: React.FC<SupporFormProps> = ({data}) =>
{
    return (
        <Card className="border bg-white shadow-sm">
            <CardContent className="p-6">
                <FormTable { ...data } />
            </CardContent>
        </Card>
    )
}
export default SupportForm;