import { Input } from '@/ui/input';
import { Button } from '@/ui/button';

const FormTable = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3>Account Settings</h3>
        <p>Update your account information</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="mb-2">First Name</label>
          <Input placeholder="John" />
        </div>
        <div className="space-y-2">
          <label className="mb-2">Last Name</label>
          <Input placeholder="Doe" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="mb-2">Email</label>
          <Input type="email" />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};
