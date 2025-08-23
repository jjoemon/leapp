import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import dbConnect from "@/app/lib/mongodb";
import Entry from "@/app/models/entry";

// This is now an async server component
export default async function Page() {
// Connect to MongoDB
await dbConnect();

// Fetch data
const entries = await Entry.find().sort({ createdAt: -1 }).lean();

return (
  <main>
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-4xl`}>
      Joemon&apos;s Dashboard
    </h1>
    <div className="flex items-center justify-center md:w-3/5 md:px-28 md:py-12 gap-12">


      {/* Left side: image */}

      <div className="rounded-full border-8 border-blue-500 overflow-hidden">
        <Image
          src="/joemon.jpg"
          width={1000}
          height={760}
          className="rounded-full object-cover"
          alt="Dashboard image"
        />
      </div>

      {/* Right side: Display data */}
      <div className="flex-1 px-4 md:px-8">
        <h3 className={`${lusitana.className} mb-4 text-xl md:text-4xl`}>
          Latest Entries
        </h3>

        <ul className="space-y-4">
          {entries.map((entry: any) => (
            <li key={entry._id} className="rounded-lg border p-4 shadow max-w-xl">
              <h3 className="font-semibold">{entry.userId}</h3>
              <h4 className="font-semibold">{entry.title}</h4>
              <p className="text-gray-600">{entry.description}</p>
              <small className="text-gray-400">
                {new Date(entry.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
);
}
