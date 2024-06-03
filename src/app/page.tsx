"use client"

import { ChangeEvent, useState } from "react";
import { useCookies } from "react-cookie";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [cookieText, setCookieText] = useState("")
  const [cookies, setCookie] = useCookies()

  function onCookieTextChange(event: ChangeEvent<HTMLInputElement>) {
    setCookieText(event.target.value)
  }

  function onCookieSetButtonClick() {
    setCookie("fake_auth", cookieText, { path: '/' })
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <input type="text" value={cookieText} onChange={onCookieTextChange}></input>
        <button onClick={onCookieSetButtonClick}>Set Cookie</button>
        <Link href="/unguarded">Go to Unguarded</Link>
        <Link href="/guarded">Go to Guarded</Link>
      </div>
    </main>
  );
}
