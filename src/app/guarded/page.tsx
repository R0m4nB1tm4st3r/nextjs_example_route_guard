"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useCookies } from "react-cookie"

const FAKE_AUTH_PASSKEY = "AI-Und-So"

export default function GuardedPage() {
    const router = useRouter()
    
    const [cookies, setCookie] = useCookies(["fake_auth"])

    if (cookies.fake_auth !== FAKE_AUTH_PASSKEY) router.replace("/")

    return <h2>Classified!!!</h2>
}