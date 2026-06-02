import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompanyDetailTemplate from "@/components/company/CompanyDetailTemplate";
import { companies, getCompanyBySlug } from "@/lib/company-data";

type CompanyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({ params }: CompanyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    return { title: "Company Detail" };
  }

  return {
    title: company.name,
    description: company.description
  };
}

export default async function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  return <CompanyDetailTemplate company={company} />;
}
