import AuthForm from "@/app/(site)/_components/AuthForm";
import Image from "next/image";

export default function AuthPage() {
  return (
    <main className="flex min-h-full flex-col justify-center bg-gray-200">
      <Image
        src="/name.png"
        alt="Hola Amigo"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="mt-4 text-center text-4xl text-transparent bg-clip-text bg-gradient-to-t from-primary to-secondary py-1 font-bold tracking-tight">
        Welcome to Hola Amigo !
      </h1>
      <AuthForm />
    </main>
  );
}
