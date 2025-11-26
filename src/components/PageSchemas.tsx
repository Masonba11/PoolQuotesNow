import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import JSONLDScript from "./JSONLDScript";

interface PageSchemasProps {
  includeWebsite?: boolean;
  includeBreadcrumb?: boolean;
}

export default function PageSchemas({
  includeWebsite = false,
  includeBreadcrumb = false,
}: PageSchemasProps) {
  const organizationSchema = generateOrganizationSchema();
  const schemas: object[] = [organizationSchema];

  if (includeWebsite) {
    const websiteSchema = generateWebsiteSchema();
    schemas.push(websiteSchema);
  }

  if (includeBreadcrumb) {
    const breadcrumbSchema = generateBreadcrumbSchema();
    schemas.push(breadcrumbSchema);
  }

  return <JSONLDScript data={schemas} />;
}

