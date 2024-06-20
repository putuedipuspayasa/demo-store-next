import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li><Link href='/login'>Login</Link></li>
        </ul>
        {children}
      </body>
    </html>
  )
}
