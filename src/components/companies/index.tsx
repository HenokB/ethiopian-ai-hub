"use client";
import { companies, CompanyType } from "@/data/companies";
import Link from "next/link";

const CompanyCard = ({ company }: { company: CompanyType }) => {
  return (
    <div
      className="group relative w-full rounded-2xl p-6 transition-all duration-300 overflow-hidden 
          bg-white
          border border-[#e5e5e7]
          shadow-sm
          hover:shadow-lg
          hover:border-[#800020]/30
          hover:-translate-y-1"
    >
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex-1">
          {company.website ? (
            <Link
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-[#800020] hover:text-[#900024] transition-colors duration-200 inline-block"
            >
              {company.name}
              <svg
                className="w-4 h-4 inline-block ml-2 mb-1 text-[#86868b]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          ) : (
            <h3 className="text-xl font-bold text-[#800020]">
              {company.name}
            </h3>
          )}
        </div>

        {/* Area */}
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-[#86868b]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          <span className="text-sm font-medium text-[#1d1d1f]">{company.area}</span>
        </div>

        {/* Description */}
        {company.description && (
          <p className="text-[#86868b] text-sm leading-relaxed line-clamp-2">
            {company.description}
          </p>
        )}

        {/* Website */}
        {company.website && (
          <div className="flex items-center gap-2 pt-2 border-t border-[#e5e5e7]">
            <svg
              className="w-4 h-4 text-[#86868b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <Link
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#800020] hover:text-[#900024] hover:underline transition-colors"
            >
              {company.website.replace(/^https?:\/\//, '')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Companies = () => {
  // Sort companies alphabetically by name
  const sortedCompanies = [...companies].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Companies;

