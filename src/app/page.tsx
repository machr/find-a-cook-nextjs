import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Go to cooks!</h1>
      <Link href="/cooks" className="text-3xl font-bold bg-black text-white p-2 rounded">Find some food</Link>
    </>
  );
}
