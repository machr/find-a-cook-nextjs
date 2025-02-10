import Link from "next/link";
import { AddSpecialsForm } from "@/components/AddSpecialsForm";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Here's what on today</h1>

      <AddSpecialsForm />

      <Link href="/cooks" className="text-3xl font-bold bg-black text-white p-2 rounded">Find some food</Link>
    </>
  );
}
