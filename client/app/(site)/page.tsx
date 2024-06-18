import AuthForm from "@/components/AuthForm";
import Image from "next/image";

export default function AuthPage() {
  return (
    <main className="flex min-h-full flex-col justify-center">
      <Image
        src="/name.png"
        alt="Hola Amigo"
        width={200}
        height={200}
        className="mx-auto"
      />
      {/* <h1>Sign in to your account</h1> */}
      <h1 className="mt-6 text-center text-3xl font-bold tracking-tight">
        Sign in to your account
      </h1>
      <AuthForm />
    </main>
  );
}
