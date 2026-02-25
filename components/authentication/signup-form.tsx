"use client";
import { doRegister } from "@/actions/auth-actions";
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
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export function SignupForm() {
	const [isPending, startTransition] = useTransition();
	const [state, setState] = useState<{
		success: boolean;
		error?: { message: string };
	}>({
		success: false,
	});
	const queryClient = useQueryClient();
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		startTransition(async () => {
			const result = await doRegister(formData);
			if (result.success) {
				queryClient.setQueryData(["profile"], result.user);
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
				<CardTitle className="text-xl">Create a new account</CardTitle>
				<CardDescription>
					Enter your email below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
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
				</form>
			</CardContent>
		</>
	);
}
