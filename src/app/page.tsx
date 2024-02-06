import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <ul>
        <li>
            <Link href={'/'}>
            Home
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
            About me
            </Link>
          </li>
          <li>
            <Link href={'/projects'}>
            My projects
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
          Contact
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
