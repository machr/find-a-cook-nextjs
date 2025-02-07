import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Go to cooks!</h1>
      <Link href="/cooks">Find some food</Link>
    </>
  );
}
