import Link from "next/link";

interface Files {
  files: string[];
}

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/files");
  const {files}: Files = await res.json();

  return (
    <section className="flex justify-center gap-4">
      {files.map((file) => (
        <Link key={file} className="rounded bg-slate-600 px-4 py-2" href={file}>
          {file}
        </Link>
      ))}
    </section>
  );
}
