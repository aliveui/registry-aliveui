"use client";

import { usePathname } from "next/navigation";
import { SidebarNav, atomicDesignCategories } from "../../navigation/sidebar";

export function RegistrySidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen border-r bg-background p-4 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Component Registry</h2>
        <p className="text-sm text-muted-foreground">
          Browse our component library
        </p>
      </div>

      <SidebarNav items={atomicDesignCategories} activeHref={pathname} />
    </div>
  );
}
