"use client";
import { doSignin } from "@/app/actions/auth-actions";
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
import Form from "next/form";
import Link from "next/link";
import { useActionState } from "react";

export function LoginForm() {
	const [state, formAction, isPending] = useActionState(doSignin, {
		success: false,
		user: null,
	});
	return (
		<>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Login to your account</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form action={formAction}>
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
				</Form>
			</CardContent>
		</>
	);
}
