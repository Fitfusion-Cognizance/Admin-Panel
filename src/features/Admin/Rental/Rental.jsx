import * as React from 'react';
import RentalForm from './RentalForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Rental() {
  return (
    <>
      <RentalForm />
      <div className="mt-6 flex flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Dumbel</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              rerum perspiciatis ab tempora. Tempore labore sit quasi maiores
              unde ea veritatis dolores perferendis dolore hic, nostrum deserunt
              ipsam eaque. Sed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span>Available - Yes</span>
              <span>Quantity - 25</span>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="cursor-pointer">Edit</Button>
            <Button className="cursor-pointer">Delete</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dumbel</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              rerum perspiciatis ab tempora. Tempore labore sit quasi maiores
              unde ea veritatis dolores perferendis dolore hic, nostrum deserunt
              ipsam eaque. Sed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span>Available - Yes</span>
              <span>Quantity - 25</span>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="cursor-pointer">Edit</Button>
            <Button className="cursor-pointer">Delete</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dumbel</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              rerum perspiciatis ab tempora. Tempore labore sit quasi maiores
              unde ea veritatis dolores perferendis dolore hic, nostrum deserunt
              ipsam eaque. Sed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              <span>Available - Yes</span>
              <span>Quantity - 25</span>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="cursor-pointer">Edit</Button>
            <Button className="cursor-pointer">Delete</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
