"use client";

import axios from "axios";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/inputs/Input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";

type variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = () => {
    setVariant((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      if (variant === "REGISTER") {
        axios.post("/api/register", data).then((res) => {
          setIsLoading(false);
          console.log(res.data);
        });
      }
      if (variant === "LOGIN") {
        // NextAuth signIn
      }
    } catch (error) {
      console.error(error);
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // NextAuth signIn with social providers
  };

  return (
    <main className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
          <div
            className="
          flex
          gap-2
          justify-center
          text-sm
          mt-6
          px-2
          text-gray-500
          "
          >
            <span>
              {variant === "LOGIN"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>
            <button onClick={toggleVariant} className="text-gray-700 underline">
              {variant === "LOGIN" ? "Create an account" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthForm;
