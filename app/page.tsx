import Image from 'next/image';
import ExploreBtn from './components/ExploreBtn';

export default function Home() {
  console.log('Next.js 16 with Turbopack!');
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every DEV <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">Hackathons, Meetups and Conferences, All in One Place</p>
      <ExploreBtn />
    </section>
  );
}
