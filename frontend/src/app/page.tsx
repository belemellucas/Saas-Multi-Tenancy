'use client';
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import RootLayout from "./layout";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/providers/NextAuthContext';

export default function Dashboard() {
  const router = useRouter();
  const { user } = useAuth();
  /*if (!user) { 
    router.push('/auth/signin');
   // return null;
  }*/
  return (
    <>
    
      <DefaultLayout>
        <ECommerce />
       </DefaultLayout>
      
    </>
  );
}
