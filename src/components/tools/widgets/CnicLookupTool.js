"use client";
import { useState, useMemo } from "react";
import { Search, MapPin, User, Hash, AlertCircle, CheckCircle2, Info } from "lucide-react";

const PROVINCE_MAP = {
  1: "Khyber Pakhtunkhwa (KPK)",
  2: "FATA (Merged with KPK)",
  3: "Punjab",
  4: "Sindh",
  5: "Balochistan",
  6: "Islamabad Capital Territory",
  7: "Gilgit-Baltistan",
};

// Known NADRA district prefixes (First 3 digits of CNIC)
const KNOWN_DISTRICTS = {
  "111": "Bannu",
  "121": "D.I. Khan",
  "142": "Kohat",
  "156": "Swat",
  "173": "Peshawar",
  "312": "Bahawalpur",
  "331": "Faisalabad",
  "341": "Gujranwala",
  "352": "Lahore",
  "363": "Multan",
  "371": "Attock",
  "374": "Rawalpindi",
  "413": "Hyderabad",
  "421": "Karachi (Central)",
  "422": "Karachi (East)",
  "423": "Karachi (South)",
  "424": "Karachi (West)",
  "425": "Karachi (Malir/Korangi)",
  "432": "Sukkur",
  "544": "Quetta",
  "611": "Islamabad",
};

export default function CnicLookupTool() {
  const [cnic, setCnic] = useState("");

  const handleChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    
    if (val.length > 5) {
      val = val.substring(0, 5) + "-" + val.substring(5);
    }
    if (val.length > 13) {
      val = val.substring(0, 13) + "-" + val.substring(13, 14);
    }
    
    setCnic(val.substring(0, 15));
  };

  const rawCnic = cnic.replace(/\D/g, "");
  const isValidLength = rawCnic.length === 13;
  const isFormattingCorrect = /^\d{5}-\d{7}-\d{1}$/.test(cnic);

  const decoded = useMemo(() => {
    if (!isValidLength) return null;

    const provinceDigit = parseInt(rawCnic[0]);
    const divisionDigit = rawCnic[1];
    const districtDigit = rawCnic[2];
    const tehsilDigit = rawCnic[3];
    const ucDigit = rawCnic[4];
    
    const prefix3 = rawCnic.substring(0, 3);
    const familyNumber = rawCnic.substring(5, 12);
    const genderDigit = parseInt(rawCnic[12]);

    const province = PROVINCE_MAP[provinceDigit] || "Unknown Province";
    const knownDistrict = KNOWN_DISTRICTS[prefix3] || null;
    const gender = genderDigit % 2 === 0 ? "Female" : "Male";

    return {
      provinceDigit,
      province,
      divisionCode: divisionDigit,
      districtCode: districtDigit,
      tehsilCode: tehsilDigit,
      ucCode: ucDigit,
      knownDistrict,
      familyNumber,
      genderDigit,
      gender,
    };
  }, [rawCnic, isValidLength]);

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="space-y-2">
        <label htmlFor="cnic-input" className="block text-sm font-medium text-ink-2">
          Enter 13-Digit CNIC Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-3">
            <Search className="h-4 w-4" />
          </div>
          <input
            id="cnic-input"
            type="text"
            value={cnic}
            onChange={handleChange}
            placeholder="e.g. 35202-1234567-1"
            className="w-full bg-bg outline-none border border-border focus:border-accent rounded-xl py-3 pl-10 pr-4 text-ink placeholder:text-ink-3/50 font-mono text-lg transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 text-sm mt-2">
          {rawCnic.length > 0 && !isValidLength && (
            <span className="text-amber-500 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              Must be exactly 13 digits (currently {rawCnic.length})
            </span>
          )}
          {isValidLength && isFormattingCorrect && (
            <span className="text-emerald-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Valid Format
            </span>
          )}
        </div>
      </div>

      {/* Results Section */}
      {decoded && (
        <div className="bg-bg-2 border border-border rounded-2xl p-6 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
          
          <h3 className="text-lg font-semibold text-ink mb-6 flex items-center gap-2">
            Decoded Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-bg rounded-lg border border-border shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-medium text-ink-3 uppercase tracking-wider mb-0.5">
                    Province / Region (Digit 1)
                  </div>
                  <div className="text-ink font-medium">
                    {decoded.province} <span className="text-ink-3 font-mono text-xs ml-1">({decoded.provinceDigit})</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-bg rounded-lg border border-border shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-medium text-ink-3 uppercase tracking-wider mb-0.5">
                    Division & District (Digits 2-3)
                  </div>
                  <div className="text-ink font-medium">
                    {decoded.knownDistrict ? (
                      <span className="text-accent-2">{decoded.knownDistrict}</span>
                    ) : (
                      "Unknown specific district"
                    )}
                  </div>
                  <div className="text-ink-3 text-sm mt-0.5">
                    Division Code: <span className="font-mono">{decoded.divisionCode}</span> | 
                    District Code: <span className="font-mono">{decoded.districtCode}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-bg rounded-lg border border-border shrink-0">
                  <User className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-medium text-ink-3 uppercase tracking-wider mb-0.5">
                    Gender (Digit 13)
                  </div>
                  <div className="text-ink font-medium flex items-center gap-2">
                    {decoded.gender}
                    <span className="bg-bg border border-border px-1.5 py-0.5 rounded text-[10px] font-mono text-ink-3">
                      {decoded.genderDigit} is {decoded.genderDigit % 2 === 0 ? "Even" : "Odd"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-bg rounded-lg border border-border shrink-0">
                  <Hash className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-medium text-ink-3 uppercase tracking-wider mb-0.5">
                    Family Number (Digits 6-12)
                  </div>
                  <div className="text-ink font-mono">{decoded.familyNumber}</div>
                  <div className="text-ink-3 text-[11px] mt-1 leading-tight">
                    A unique system-generated identifier connecting family members.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-border/50">
            <div className="flex gap-2">
              <Info className="w-4 h-4 text-ink-3 shrink-0 mt-0.5" />
              <p className="text-xs text-ink-3 leading-relaxed">
                <strong>How does this work?</strong> A CNIC uses a structured format. The first 5 digits correspond to geographic codes (Province, Division, District, Tehsil, and Union Council). The middle 7 digits uniquely link you to your family tree, and the very last digit determines your gender (odd for male, even for female). <em>Note: The CNIC does not encode a date of birth.</em>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
