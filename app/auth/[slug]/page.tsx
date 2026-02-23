import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "../../components/authentication/login-form";
import { SignupForm } from "../../components/authentication/signup-form";
import { Card } from "@/components/ui/card";
import { redirect } from "next/navigation";
import Link from "next/link";

const LoginRegisterPage = async ({
	params,
}: {
	params: Promise<{ slug: "login" | "register" }>;
}) => {
	const { slug } = await params;

	if (slug !== "login" && slug !== "register") {
		redirect("/auth/login");
	}

	return (
		<div className="max-w-md mx-auto py-32 min-h-[95svh]">
			<Card className="bg-[#1d1d1d] text-white border-[#262626]">
				{/* ======= TAB FOR LOGIN REGISTER======= */}
				<Tabs defaultValue={slug} className="w-full mt-2 ">
					{/* ======= TAB LISTS======= */}
					<TabsList className="bg-[#262626] flex justify-center w-fit mx-auto mb-4 rounded-md">
						<TabsTrigger value="login" asChild>
							<Link href="/auth/login">Login</Link>
						</TabsTrigger>
						<TabsTrigger value="register" asChild>
							<Link href="/auth/register">Register</Link>
						</TabsTrigger>
					</TabsList>

					{/* ======= SINGLE LINE BORDER====== */}
					<hr className="border-[#262626]" />

					{/* ======= TAB CONTENTS======= */}
					<TabsContent value="login">
						<LoginForm />
					</TabsContent>
					<TabsContent value="register">
						<SignupForm />
					</TabsContent>
				</Tabs>
			</Card>
		</div>
	);
};

export default LoginRegisterPage;
