export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Component Registry</h1>
        <p className="text-muted-foreground">
          Browse our library of components organized by atomic design
          principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Atoms"
          description="Fundamental building blocks of the interface"
          count={15}
          href="/components/atoms/button"
        />
        <CategoryCard
          title="Molecules"
          description="Groups of atoms bonded together for common functionality"
          count={17}
          href="/components/molecules/accordion"
        />
        <CategoryCard
          title="Organisms"
          description="Complex UI components composed of molecules"
          count={6}
          href="/components/organisms/data-table"
        />
        <CategoryCard
          title="Templates"
          description="Page-level objects that place components into a layout"
          count={5}
          href="/components/templates/dashboard-layout"
        />
        <CategoryCard
          title="Pages"
          description="Specific instances of templates with real content"
          count={5}
          href="/components/pages/dashboard"
        />
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  count,
  href,
}: {
  title: string;
  description: string;
  count: number;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
      <div className="mt-4 text-sm font-medium">{count} components</div>
    </a>
  );
}
