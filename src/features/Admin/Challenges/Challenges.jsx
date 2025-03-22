import React from 'react';
import ChallengesForm from './ChallengesForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Challenges() {
  return (
    <>
      <ChallengesForm />
      <div className="mt-6 flex gap-3 flex-col">
        <Card>
          <CardHeader>
            <CardTitle>5km Running for 10 Days in a streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl">Rules</h3>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                quasi ratione nostrum totam beatae similique laboriosam autem
                deserunt voluptas? Quasi magnam error itaque suscipit nobis
                assumenda optio! Veniam, assumenda eveniet.
              </p>
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

export default Challenges;
