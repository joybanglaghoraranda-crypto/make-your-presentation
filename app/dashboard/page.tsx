import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowRight,
  Plus,
  DollarSign,
  Download,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export const metadata = {
  title: "Customer Dashboard — Make Your Presentation",
  description: "Track your active presentation orders, download completed PPTX/PDF files, and message the production team.",
};

export default function DashboardPage() {
  const orders = repository.getOrders();
  const activeOrders = orders.filter((o) => !["completed", "cancelled"].includes(o.status));
  const completedOrders = orders.filter((o) => o.status === "completed");
  const pendingPayments = orders.filter((o) => o.payment_status !== "paid");
  const revisionOrders = orders.filter((o) => o.revision_count > 0);

  return (
    <div className="min-h-screen bg-slate-50/70 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Customer Dashboard" }]} />

        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Customer Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
              Welcome back to MYP Studio
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Manage your presentation decks, request revisions, and download finalized files.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/order"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all shrink-0"
            >
              <Plus className="h-4 w-4" />
              <span>Create New Presentation</span>
            </Link>
          </div>
        </div>

        {/* Overview Metric Cards (Requirement 37) */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Active Orders</span>
              <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900">
              {activeOrders.length}
            </div>
            <span className="text-[11px] text-blue-600 font-medium">In research & design</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Completed Decks</span>
              <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900">
              {completedOrders.length}
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">Ready to download</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Pending Invoices</span>
              <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <DollarSign className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900">
              {pendingPayments.length}
            </div>
            <span className="text-[11px] text-amber-600 font-medium">Awaiting verification</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Revision Requests</span>
              <div className="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <MessageSquare className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900">
              {revisionOrders.length}
            </div>
            <span className="text-[11px] text-purple-600 font-medium">Under active review</span>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="mt-10 flex border-b border-slate-200 text-xs sm:text-sm font-semibold">
          <Link
            href="/dashboard"
            className="border-b-2 border-blue-600 py-3 px-4 text-blue-600"
          >
            Orders Overview
          </Link>
          <Link
            href="/dashboard/messages"
            className="py-3 px-4 text-slate-600 hover:text-slate-900 transition-colors"
          >
            Team Messages
          </Link>
          <Link
            href="/dashboard/payments"
            className="py-3 px-4 text-slate-600 hover:text-slate-900 transition-colors"
          >
            Payments & Invoices
          </Link>
          <Link
            href="/dashboard/profile"
            className="py-3 px-4 text-slate-600 hover:text-slate-900 transition-colors"
          >
            Settings & Profile
          </Link>
        </div>

        {/* Recent Orders List (Requirement 105: Responsive Cards on Mobile) */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Your Presentation Orders
            </h2>
            <span className="text-xs text-slate-500">
              Showing {orders.length} orders
            </span>
          </div>

          {orders.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
              <FileText className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">
                You don't have any presentation orders yet.
              </h3>
              <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
                Select your educational level or enter a custom presentation topic to get started.
              </p>
              <Link
                href="/order"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700"
              >
                <span>Create Your First Presentation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {orders.map((ord) => (
                <div
                  key={ord.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {ord.order_number}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {ord.category}
                      </span>
                      {ord.level_name && (
                        <span className="text-xs text-slate-500 font-medium">
                          ({ord.level_name})
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900">
                      {ord.topic_name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span>{ord.slide_count} Slides</span>
                      <span>•</span>
                      <span>Language: {ord.language}</span>
                      <span>•</span>
                      <span>Deadline: {ord.deadline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 self-start md:self-center">
                    <div className="text-left md:text-right">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Price Quote
                      </div>
                      <div className="text-sm font-black text-slate-900">
                        ৳{ord.final_price?.toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${
                          ord.status === "completed"
                            ? "bg-emerald-100 text-emerald-800"
                            : ord.status === "preview_ready"
                            ? "bg-cyan-100 text-cyan-800"
                            : ord.status === "in_production"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {ord.status.replace(/_/g, " ")}
                      </span>
                    </div>

                    <Link
                      href={`/dashboard/orders/${ord.id}`}
                      className="flex items-center gap-1 rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <span>Manage Order</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
