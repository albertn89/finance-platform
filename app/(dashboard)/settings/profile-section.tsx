import { useState } from "react";
import { User, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export const ProfileSection = () => {
	const [showBalance, setShowBalance] = useState(true);

	return (
		<Card className="border-none drop-shadow-sm">
			<CardHeader>
				<div className="flex items-center gap-x-2">
					<User className="size-5 text-slate-600" />
					<CardTitle className="text-xl">Profile Settings</CardTitle>
				</div>
				<CardDescription>Update your personal information and display preferences</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="firstName">First Name</Label>
						<Input id="firstName" placeholder="John" defaultValue="John" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="lastName">Last Name</Label>
						<Input id="lastName" placeholder="Doe" defaultValue="Doe" />
					</div>
					<div className="space-y-2 md:col-span-2">
						<Label htmlFor="email">Email Address</Label>
						<Input
							id="email"
							type="email"
							placeholder="john@example.com"
							defaultValue="john@example.com"
						/>
					</div>
				</div>
				<Separator />
				<div className="flex items-center justify-between">
					<div className="space-y-1">
						<Label>Show Balance on Dashboard</Label>
						<p className="text-sm text-muted-foreground">Hide sensitive financial information</p>
					</div>
					<div className="flex items-center gap-2">
						{showBalance ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
						<Switch checked={showBalance} onCheckedChange={setShowBalance} />
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
