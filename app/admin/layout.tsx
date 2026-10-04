import Link from "next/link";
import {
  ShieldCheck,
  LayoutDashboard,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  Layers,
  DollarSign,
  CreditCard,
  Settings,
  Users,
  MessageSquare,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 border-r border-slate-800 bg-slate-950 p-5 shrink-0 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-black text-xl text-white shadow-md">
              M
            </div>
            <div>
              <span className="font-bold text-sm text-white block">
                MYP Admin Console
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                Super Admin
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1.5 text-xs font-semibold">
            <Link
              href="/admin"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <LayoutDashboard className="h-4 w-4 text-blue-400" />
              <span>Dashboard & Analytics</span>
            </Link>

            <Link
              href="/admin/orders"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <ShoppingCart className="h-4 w-4 text-indigo-400" />
              <span>Order Management</span>
            </Link>

            <Link
              href="/admin/curriculum"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <GraduationCap className="h-4 w-4 text-emerald-400" />
              <span>Curriculum Tree (K-12 & Madrasa)</span>
            </Link>

            <Link
              href="/admin/pricing"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <DollarSign className="h-4 w-4 text-amber-400" />
              <span>Pricing Rules & Rates</span>
            </Link>

            <Link
              href="/admin/payments"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <CreditCard className="h-4 w-4 text-teal-400" />
              <span>Payment Verifications</span>
            </Link>

            <Link
              href="/admin/settings"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Settings className="h-4 w-4 text-slate-400" />
              <span>Platform Settings</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Switcher */}
        <div className="pt-6 border-t border-slate-800">
          <Link
            href="/"
            className="flex items-center justify-between rounded-xl bg-slate-900 border border-slate-800 p-2.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <span>View Public Platform</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto max-w-7xl">
        {children}
      </main>
    </div>
  );
}
