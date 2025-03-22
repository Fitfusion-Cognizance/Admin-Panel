import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { HeartPulse, Home, IndianRupee, Settings, Swords } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/">
                <HeartPulse className="h-5 w-5" />
                <span className="text-base font-semibold">Fit Fusion</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <div className="flex flex-col gap-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/">
                  <SidebarMenuButton className="cursor-pointer">
                    <Home />
                    <span>Home</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/rental">
                  <SidebarMenuButton className="cursor-pointer">
                    <IndianRupee />
                    <span>Rentals</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/challenges">
                  <SidebarMenuButton className="cursor-pointer">
                    <Swords />
                    <span>Challenges</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/setting">
                  <SidebarMenuButton className="cursor-pointer">
                    <Settings />
                    <span>Setting</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
