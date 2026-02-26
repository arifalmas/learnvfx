"use client";

import { doLogout } from "@/actions/auth-actions";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useProfile from "@/hooks/useProfile";
import { useQueryClient } from "@tanstack/react-query";
import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";
const menuItems = [
	{ name: "Home", link: "/" },
	{ name: "Courses", link: "/courses" },
	{ name: "Contact", link: "/contact" },
	{ name: "Pricing", link: "/crystal-price" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { data: profile, isPending } = useProfile();
	const user = profile?.data;
  const crystal = user?.crystal

	const router = useRouter();

	const queryClient = useQueryClient();
  
	const handleLogout = async () => {
		await doLogout();
		queryClient.removeQueries({ queryKey: ["profile"] });
		router.replace("/auth/login");
	};

	return (
		<header className="fixed md:top-2 left-0 right-0 z-50 transition-all duration-300">
			<div className="w-full md:max-w-7xl mx-auto lg:px-4 ">
				<nav
					className={`relative backdrop-blur-xl bg-black border border-white/20 shadow-xl rounded-2xl ${!isOpen ? "rounded-none lg:rounded-lg" : "rounded-none lg:rounded-lg lg:rounded-bl-lg rounded-br-none lg:rounded-br-lg"}  py-1`}>
					<div className="flex items-center justify-between px-6 py-3">
						{/* ==== LOGO ==== */}
						<Link
							href="/"
							className="text-lg font-semibold tracking-wide text-white hover:opacity-80 transition">
							VFX COURSE
						</Link>

						{/* ==== DESKTOP MENU ==== */}
						<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
							{menuItems.map((item) => (
								<Link
									key={item.name}
									href={item.link}
									className="hover:text-white transition">
									{item.name}
								</Link>
							))}

							{isPending ? (
								<div className="flex items-center gap-2">
									<Skeleton className="h-5 w-10 bg-gray-700 rounded" />
									<Skeleton className="aspect-square w-9 rounded-full bg-gray-700" />
								</div>
							) : user ? (
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<button className="flex items-center gap-2">
											<span>💎 {crystal}</span>
											<User
												size={36}
												className="text-white/80 hover:text-white transition cursor-pointer bg-gray-700 rounded-full p-1"
											/>
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="w-40" align="end">
										<DropdownMenuGroup>
											<DropdownMenuLabel>
												My Account
											</DropdownMenuLabel>
											<DropdownMenuItem>
												Profile
												<DropdownMenuShortcut>
													⇧⌘P
												</DropdownMenuShortcut>
											</DropdownMenuItem>
										</DropdownMenuGroup>
										<DropdownMenuSeparator />
										<DropdownMenuGroup>
											<DropdownMenuItem onClick={handleLogout}>
												Log out
												<DropdownMenuShortcut>
													⇧⌘Q
												</DropdownMenuShortcut>
											</DropdownMenuItem>
										</DropdownMenuGroup>
									</DropdownMenuContent>
								</DropdownMenu>
							) : (
								<Link
									href="/auth/login"
									className="px-3 py-2 rounded-full bg-white text-black font-semibold">
									Login/Register
								</Link>
							)}
						</div>

						{/* ==== MOBILE BUTTON ==== */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden text-white">
							{isOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>

					{/* ==== MOBILE OVERLAY MENU ==== */}
					{isOpen && (
						<div className="fixed top-full left-0 w-full  backdrop-blur-sm bg-black md:hidden border border-white/20 rounded-lg rounded-tl-none rounded-tr-none z-50">
							<div className="px-6 py-6 flex flex-col text-white text-sm">
								{menuItems.map((item) => (
									<Link
										key={item.name}
										href={item.link}
										onClick={() => setIsOpen(false)}
										className="py-3 border-b border-white/20">
										{item.name}
									</Link>
								))}

								<div className="pt-4">
									<Link
										href="/auth/login"
										onClick={() => setIsOpen(false)}
										className="block text-center py-2 rounded-full bg-white text-black font-semibold">
										Login/Register
									</Link>
								</div>
							</div>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
}
