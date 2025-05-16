import { Title } from '@/components/Title';
import Link from 'next/link';

export default async function Page() {
  return (
    <section className='container mx-auto grid grid-cols-1 gap-6 p-12'>
      <Title>Die 101 Besten</Title>
      <hr />
      <Link href='/hotels'>Hotels index &rarr;</Link>
    </section>
  );
}
