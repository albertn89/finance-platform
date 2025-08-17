"use client";

import React from "react";
import { SettingsHeader } from "./settings-header";
import { ProfileSection } from "./profile-section";

const SettingsPage = () => {
	return (
		<div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
			<div className="space-y-6">
				<SettingsHeader />
				<ProfileSection />
			</div>
		</div>
	);
};

export default SettingsPage;
