import Link from "next/link";
import { AddSpecialsForm } from "@/components/AddUpdateVenueForm";
import { UpdateAddVenueForm } from "@/components/UpdateAddSpecialsForm";
import { createClient } from "./utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: venues } = await supabase.from("venues").select();
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Here`s what on today</h1>

      <section>
        <header>What are we doing?</header>
        <div className="flex justify-between gap-6">
          <AddSpecialsForm venues={venues} />
          <UpdateAddVenueForm venues={venues} />
        </div>
      </section>

      <Link href="/venues" className="text-3xl font-bold bg-black text-white p-2 rounded">Find some food</Link>
    </>
  );
}
