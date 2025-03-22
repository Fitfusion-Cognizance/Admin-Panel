import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <mai className="w-full">
        <SidebarTrigger />
        <div className="p-8">{children}</div>
      </mai>
    </SidebarProvider>
  );
}
