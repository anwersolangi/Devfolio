"use client";
import { useMemo, useState } from "react";
import { Coins, Info } from "lucide-react";

const InputRow = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between py-3 border-b border-rule/30 last:border-0">
    <label className="text-sm text-ink-2 font-medium">{label}</label>
    <div className="relative w-full sm:w-1/2">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-3 font-medium text-sm">
        Rs
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-rule bg-bg py-2 pl-9 pr-3 text-ink text-sm focus:border-accent/50 focus:outline-none"
        placeholder={placeholder || "0"}
      />
    </div>
  </div>
);

export default function ZakatCalculatorTool() {
  const [assets, setAssets] = useState({
    cash: "",
    gold: "",
    silver: "",
    business: "",
    investments: "",
  });
  const [liabilities, setLiabilities] = useState("");

  const updateAsset = (key, value) => {
    setAssets((prev) => ({
      ...prev,
      [key]: value.replace(/[^0-9]/g, ""),
    }));
  };

  const stats = useMemo(() => {
    let totalAssets = 0;
    Object.values(assets).forEach((val) => {
      totalAssets += parseFloat(val) || 0;
    });

    const totalLiabilities = parseFloat(liabilities.replace(/[^0-9]/g, "")) || 0;
    const netWealth = Math.max(0, totalAssets - totalLiabilities);
    const zakatPayable = netWealth * 0.025;

    return {
      totalAssets,
      totalLiabilities,
      netWealth,
      zakatPayable,
    };
  }, [assets, liabilities]);

  const formatPKR = (num) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-rule bg-bg-2 p-5 sm:p-6">
        <h3 className="label mb-4">
          1. Zakatable Assets (in PKR)
        </h3>
        <div className="space-y-1">
          <InputRow
            label="Cash in Hand & Bank"
            value={assets.cash}
            onChange={(val) => updateAsset("cash", val)}
          />
          <InputRow
            label="Value of Gold"
            value={assets.gold}
            onChange={(val) => updateAsset("gold", val)}
          />
          <InputRow
            label="Value of Silver"
            value={assets.silver}
            onChange={(val) => updateAsset("silver", val)}
          />
          <InputRow
            label="Business Inventory / Assets"
            value={assets.business}
            onChange={(val) => updateAsset("business", val)}
          />
          <InputRow
            label="Investments (Shares, Bonds, etc.)"
            value={assets.investments}
            onChange={(val) => updateAsset("investments", val)}
          />
        </div>
      </div>

      <div className="rounded-xl border border-rule bg-bg-2 p-5 sm:p-6">
        <h3 className="label mb-4">
          2. Deductible Liabilities
        </h3>
        <InputRow
          label="Debts, Loans & Unpaid Bills"
          value={liabilities}
          onChange={(val) => setLiabilities(val.replace(/[^0-9]/g, ""))}
        />
      </div>

      <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-6">
          <Coins className="w-5 h-5 text-accent" />
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Zakat Calculation
          </h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3">
            <span className="text-sm text-ink-2">Total Assets</span>
            <span className="font-mono text-sm text-ink">
              {formatPKR(stats.totalAssets)}
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-rule/50 pb-4">
            <span className="text-sm text-ink-2">Total Liabilities</span>
            <span className="font-mono text-sm text-red-500">
              - {formatPKR(stats.totalLiabilities)}
            </span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm text-ink font-semibold">Net Zakatable Wealth</span>
            <span className="font-mono text-base text-ink font-semibold">
              {formatPKR(stats.netWealth)}
            </span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-accent/20 mt-4">
            <span className="text-lg text-ink font-bold">Zakat Payable (2.5%)</span>
            <span className="font-mono text-2xl text-accent font-bold">
              {formatPKR(stats.zakatPayable)}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-bg-2 px-4 py-3 flex items-start gap-3 border border-rule">
        <Info className="w-5 h-5 text-ink-3 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-2 leading-relaxed">
          <strong>Note:</strong> Zakat is obligatory on Muslims whose total wealth meets or exceeds the Nisab threshold (typically the value of 52.5 tolas of silver) and has been held for one lunar year. 
        </p>
      </div>
    </div>
  );
}
