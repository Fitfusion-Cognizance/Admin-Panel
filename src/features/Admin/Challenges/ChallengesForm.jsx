import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlusCircle } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

function ChallengesForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Challenges</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta
          doloribus quae perferendis voluptatibus! Nam possimus delectus beatae
          dolores vero?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of the equipment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity">Rules</Label>
              <Textarea id="quantity" placeholder="Quantity" type="textarea" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="available">Active</Label>
              <Select>
                <SelectTrigger id="available">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Yes</SelectItem>
                  <SelectItem value="sveltekit">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="default" className="cursor-pointer">
          <span>Submit</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ChallengesForm;
