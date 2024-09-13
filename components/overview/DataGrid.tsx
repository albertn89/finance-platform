"use client";

import { useSearchParams } from "next/navigation";
import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

import { useGetSummary } from "@/features/summary/api/use-get-summary";

import { DataCard, DataCardLoading } from "@/components/overview/DataCard";
import { formatDateRange } from "@/lib/utils";

export const DataGrid = () => {
	const { data, isLoading } = useGetSummary();

	const params = useSearchParams();
	const to = params.get("to") || undefined;
	const from = params.get("from") || undefined;

	const dateRangelabel = formatDateRange({ to, from });

	if (isLoading) {
		return (
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
				<DataCardLoading />
				<DataCardLoading />
				<DataCardLoading />
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
			<DataCard
				title="Remaining"
				value={data?.remainingAmount}
				percentageChange={data?.remainingChange}
				icon={FaPiggyBank}
				dateRange={dateRangelabel}
			/>
			<DataCard
				title="Income"
				value={data?.incomeAmount}
				percentageChange={data?.incomeChange}
				icon={FaArrowTrendUp}
				dateRange={dateRangelabel}
			/>
			<DataCard
				title="Expenses"
				value={data?.expensesAmount}
				percentageChange={data?.expensesChange}
				icon={FaArrowTrendDown}
				dateRange={dateRangelabel}
			/>
		</div>
	);
};
