"use client";
import { doSignin } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<{
    success: boolean;
    error?: { message: string };
  }>({
    success: false,
  });
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const result = await doSignin(formData);
      if (result.success) {
        await queryClient.invalidateQueries({ queryKey: ["profile"] });
        router.replace("/");
      } else {
        setState({
          success: false,
          error: result.error,
        });
      }
    });
  };

  return (
    <>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <div className="flex items-center">
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </Link>
              </div>
            </Field>
            <Field>
              {state.error && (
                <FieldError>{state.error?.message}</FieldError>
              )}
              <Button
                disabled={isPending}
                type="submit"
                variant="outline"
                className="text-black">
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </>
  );
}
