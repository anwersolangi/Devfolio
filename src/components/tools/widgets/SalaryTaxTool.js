"use client";
import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

export default function SalaryTaxTool() {
  const [salary, setSalary] = useState("100000");
  const [period, setPeriod] = useState("monthly");

  const stats = useMemo(() => {
    const raw = parseFloat(salary.replace(/,/g, "")) || 0;
    const annualSalary = period === "monthly" ? raw * 12 : raw;
    const monthlySalary = period === "monthly" ? raw : raw / 12;

    let annualTax = 0;

    if (annualSalary <= 600000) {
      annualTax = 0;
    } else if (annualSalary <= 1200000) {
      annualTax = (annualSalary - 600000) * 0.05;
    } else if (annualSalary <= 2200000) {
      annualTax = 30000 + (annualSalary - 1200000) * 0.15;
    } else if (annualSalary <= 3200000) {
      annualTax = 180000 + (annualSalary - 2200000) * 0.25;
    } else if (annualSalary <= 4100000) {
      annualTax = 430000 + (annualSalary - 3200000) * 0.3;
    } else {
      annualTax = 700000 + (annualSalary - 4100000) * 0.35;
    }

    const monthlyTax = annualTax / 12;
    const netAnnual = annualSalary - annualTax;
    const netMonthly = monthlySalary - monthlyTax;

    return {
      annualSalary,
      monthlySalary,
      annualTax,
      monthlyTax,
      netAnnual,
      netMonthly,
      percentTax: annualSalary > 0 ? (annualTax / annualSalary) * 100 : 0,
    };
  }, [salary, period]);

  const formatPKR = (num) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-rule bg-bg-2 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
              Enter Salary (PKR)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3 font-medium">
                Rs
              </span>
              <input
                type="text"
                value={salary}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, "");
                  setSalary(val);
                }}
                className="w-full rounded-lg border border-rule bg-bg py-2.5 pl-11 pr-4 text-ink focus:border-accent/50 focus:outline-none"
                placeholder="0"
              />
            </div>
          </div>
          <div className="w-full sm:w-48">
            <label className="block mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
              Per
            </label>
            <div className="flex rounded-lg border border-rule bg-bg overflow-hidden p-1">
              <button
                className={`flex-1 rounded py-1.5 text-xs font-medium transition ${
                  period === "monthly"
                    ? "bg-accent-deep text-on-accent"
                    : "text-ink-2 hover:text-ink"
                }`}
                onClick={() => setPeriod("monthly")}
              >
                Month
              </button>
              <button
                className={`flex-1 rounded py-1.5 text-xs font-medium transition ${
                  period === "yearly"
                    ? "bg-accent-deep text-on-accent"
                    : "text-ink-2 hover:text-ink"
                }`}
                onClick={() => setPeriod("yearly")}
              >
                Year
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-rule bg-bg p-5 sm:p-6">
          <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Monthly Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-rule/50 pb-4">
              <span className="text-sm text-ink-2">Gross Salary</span>
              <span className="font-mono text-sm text-ink font-medium">
                {formatPKR(stats.monthlySalary)}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-rule/50 pb-4">
              <span className="text-sm text-ink-2">Tax Deduction</span>
              <span className="font-mono text-sm text-red-500 font-medium">
                - {formatPKR(stats.monthlyTax)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-base text-ink font-semibold">Net Income</span>
              <span className="font-mono text-xl text-accent font-bold">
                {formatPKR(stats.netMonthly)}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-rule bg-bg p-5 sm:p-6">
          <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Yearly Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-rule/50 pb-4">
              <span className="text-sm text-ink-2">Gross Salary</span>
              <span className="font-mono text-sm text-ink font-medium">
                {formatPKR(stats.annualSalary)}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-rule/50 pb-4">
              <span className="text-sm text-ink-2">Tax Deduction</span>
              <span className="font-mono text-sm text-red-500 font-medium">
                - {formatPKR(stats.annualTax)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-base text-ink font-semibold">Net Income</span>
              <span className="font-mono text-xl text-accent font-bold">
                {formatPKR(stats.netAnnual)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-accent/5 px-4 py-3 flex items-start gap-3">
        <Calculator className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-ink-2 leading-relaxed">
          Based on the <strong>FBR Budget 2026-2027</strong> tax slabs for
          salaried individuals. Your effective tax rate is{" "}
          <strong className="text-ink">{stats.percentTax.toFixed(1)}%</strong> of
          your gross income.
        </p>
      </div>
    </div>
  );
}
