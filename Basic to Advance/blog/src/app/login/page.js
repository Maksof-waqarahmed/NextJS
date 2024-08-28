'use client'
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();

  const navigate = (page) => {
    router.push(`/login${page}`);
  }
  return (
    <main>
      <h1>Login Page</h1>
    </main>
  );
}