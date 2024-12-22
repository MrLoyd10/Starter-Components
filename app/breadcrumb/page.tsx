import { Layout } from "@/components/common/layout";
import BreadcrumbResponsive from "../../components/common/breadcrumb-responsive";

const BreadCrumb = () => {
  const items = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];
  return (
    <Layout header="Breadcrumb" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <BreadcrumbResponsive items={items} itemsToDisplay={3} />
      </div>
    </Layout>
  );
};

export default BreadCrumb;
