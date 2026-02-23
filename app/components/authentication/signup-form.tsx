"use client";
import { doRegister } from "@/app/actions/auth-actions";
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
import { useActionState } from "react";

export function SignupForm() {
	const [state, formAction, isPending] = useActionState(doRegister, {
		success: false,
		user: null,
	});
	return (
		<>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Create a new account</CardTitle>
				<CardDescription>
					Enter your email below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form action={formAction}>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="name">Full Name</FieldLabel>
							<Input
								id="name"
								name="name"
								type="text"
								placeholder="John Doe"
								required
								className="bg-[#262626]"
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
								className="bg-[#262626]"
							/>
						</Field>
						<Field>
							<Field>
								<FieldLabel htmlFor="password">Password</FieldLabel>
								<Input
									id="password"
									name="password"
									type="password"
									placeholder="Password"
									required
									className="bg-[#262626]"
								/>
							</Field>
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
								{isPending ? "Registering..." : "Register"}
							</Button>
						</Field>
					</FieldGroup>
				</Form>
			</CardContent>
		</>
	);
}
