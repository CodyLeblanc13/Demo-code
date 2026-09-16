import Link from "next/link";
export default function page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">WebDev 2 Demos</h1>
      <p>Click one of the following links to see that weeks demo</p>
      <Link href="/week2" className="text-underline text-blue-500">
        Go to Week 2
      </Link>
      <br></br>
      <Link href="/week3" className="text-underline text-blue-500">
        Go to Week 3
      </Link>
    </main>
  );
}
