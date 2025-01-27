"use client"

import { db } from '@/db/index';
import { Users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
const Provider = ({children}: {children: React.ReactNode}) => {
  const {user} = useUser();

  useEffect(() => {
    user && isNewUser();
  }, [user]);
  const isNewUser = async() =>{
    if (!user || !user.primaryEmailAddress?.emailAddress) return;

    const result = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));

    console.log(result);
    if(result.length === 0)
    {
      await db.insert(Users).values({
        name: user.fullName ?? "Unknown",
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user.imageUrl ?? "",
      });
    }
  }
  return <div>{children}</div>;
}

export default Provider