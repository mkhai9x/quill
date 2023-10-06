'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { trpc } from '../_trpc/client';
import { Loader, Loader2 } from 'lucide-react';

function Page() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get('origin');

  trpc.authCallback.useQuery(undefined, {
    onSuccess: (data) => {
      if (data.succes) {
        // user is synced to db
        router.push(origin ? `/${origin}` : '/dashboard');
      }
    },
    onError: (error) => {
      if (error.data?.code === 'UNAUTHORIZED') {
        router.push('/sign-in');
      }
    },
    retry: true,
    retryDelay: 500,
  });

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center grap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800"/>
        <h3 className="font-semibold text-xl">Setting up your account ...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  )
}

export default Page;
