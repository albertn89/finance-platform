import { Settings } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const SettingsHeader = () => {
	return (
		<Card className="border-none drop-shadow-sm">
			<CardHeader>
				<div className="flex items-center gap-x-2">
					<Settings className="size-6 text-blue-600" />
					<CardTitle className="text-2xl">Settings</CardTitle>
				</div>
				<CardDescription>Manage your account preferences and application settings</CardDescription>
			</CardHeader>
		</Card>
	);
};
