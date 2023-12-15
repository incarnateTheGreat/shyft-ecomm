import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notFound">
      <h1>404.</h1>
      <h2>Nothing to shop for here.</h2>
      <Link href="/">Go back to Home</Link>
    </section>
  );
}
