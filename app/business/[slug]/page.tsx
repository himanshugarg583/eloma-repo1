import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BusinessDetailTemplate from "@/components/business/BusinessDetailTemplate";
import { businesses, getBusinessBySlug } from "@/lib/business-data";

type BusinessDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: BusinessDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    return { title: "Business Detail" };
  }

  return {
    title: business.name,
    description: business.description
  };
}

export default async function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  return <BusinessDetailTemplate business={business} />;
}
