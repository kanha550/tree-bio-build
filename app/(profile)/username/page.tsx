import { logProfileVist } from '@/modules/analytics/actions';
import { getUserByUsername } from '@/modules/profile/actions';
import TreeBioProfile from '@/modules/profile/components/treebio-profile';

import { redirect } from 'next/navigation';
import React from 'react';

export const dynamic = 'force-dynamic';

type ProfileData = {
  id: string;
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
  links: Array<{
    id: string;
    title: string;
    url: string;
    description?: string | null;
    clickCount: number;
    userId: string;
    createdAt: string;
    updatedAt: string;
  }>;
  socialLinks: Array<{
    id: string;
    platform: string;
    url: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
  }>;
} | null;

const Page = async ({ params }: { params: { username: string } }) => {
  const { username } = params;
  const profileData = await getUserByUsername(username) as ProfileData;

  if (profileData?.username !== username) {
    return redirect("/");
  }

  await logProfileVist(profileData.id).catch((err) => {
    console.error("Error logging profile visit:", err);
  });

  return <TreeBioProfile profileData={profileData} />
}

export default Page