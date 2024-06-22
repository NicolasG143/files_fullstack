import Link from "next/link";

interface FileData {
  file: string;
  lines: {text: string; number: number; hex: string}[];
}

export default async function Page({params}: {params: {file: string}}) {
  const {file} = params;
  const data = await fetch(`http://localhost:3000/api/files/${file}`);
  const {lines}: FileData = await data.json();

  if (lines.length === 0)
    return (
      <section className="flex flex-col items-center gap-24">
        <p className="text-center text-4xl text-red-400">No available data from {file}</p>
        <Link className="bg-slate-600 px-4 py-2 text-2xl font-bold" href="/">
          Go Back
        </Link>
      </section>
    );

  return (
    <section className="flex flex-col items-center gap-4">
      <Link className="bg-slate-600 px-4 py-2 text-2xl font-bold" href="/">
        Go Back
      </Link>
      <table>
        <caption>{file}</caption>
        <thead>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </thead>
        <tbody>
          {lines.map((line) => (
            <tr key={line.hex}>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
