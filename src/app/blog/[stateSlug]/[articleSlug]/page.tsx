import Link from "next/link";
import { notFound } from "next/navigation";
import { STATES, getStateBySlug } from "@/data/locations";
import { getArticleContent, getAllArticleSlugs } from "@/data/articleContent";
import {
  generateOrganizationSchema,
  generateBlogBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/seo";
import JSONLDScript from "@/components/JSONLDScript";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stateSlug: string; articleSlug: string }>;
}): Promise<Metadata> {
  const { stateSlug, articleSlug } = await params;
  const article = getArticleContent(stateSlug, articleSlug);
  const state = getStateBySlug(stateSlug);

  if (!article || !state) {
    return {
      title: "Article Not Found - PoolQuotesNow",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ stateSlug: string; articleSlug: string }>;
}) {
  const { stateSlug, articleSlug } = await params;
  const article = getArticleContent(stateSlug, articleSlug);
  const state = getStateBySlug(stateSlug);

  if (!article || !state) {
    notFound();
  }

  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBlogBreadcrumbSchema(
    stateSlug,
    articleSlug,
    article.title
  );
  const articleSchema = generateArticleSchema(
    stateSlug,
    articleSlug,
    article.title
  );

  const schemas = [
    organizationSchema,
    breadcrumbSchema,
    articleSchema,
  ].filter(Boolean);

  return (
    <>
      <JSONLDScript data={schemas} />
      <div className="min-h-screen bg-white">
        <Hero
          title={article.title}
          subtitle={`Expert pool advice for ${state.name} homeowners`}
          showCTAs={false}
        />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="blog-content"
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <ContactForm />
        </div>
      </main>
    </div>
    </>
  );
}
