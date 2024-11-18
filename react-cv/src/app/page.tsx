import Image from 'next/image';
import Nav from './components/Nav';
import Card from './components/Card';


export interface Person {
  first: string;
  middle: string;
  last: string;
}

const myName: Person = {
  first: "Nathaniel",
  middle: "Richard",
  last: "Guenard"
};

export default function Home() {
  return (
    <>
      <Nav person={myName} />
      <Card>HEADING</Card>
      <section className="splash">
        <h1>{myName.first} {myName.last}</h1>
        <Image
          src="/components/images/NathanielGuenardHeadshot.jpg"
          alt="photo of website author"
          width={200}
          height={200}
        />
      </section>
    </>
  );
}
