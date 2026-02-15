import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Projects() {
  return (
    <section id="projects" className="mb-32 animate-enter delay-300">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-text-title">Selected Work</h2>
          <p className="text-sm text-text-muted mt-1">A collection of products, dashboards, and experiments.</p>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-secondary transition-colors group border border-border-primary px-3 py-1.5 rounded-full hover:bg-surface-elevated"
        >
          View GitHub <Icon icon="lucide:arrow-up-right" width={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Bento Grid 6 Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Project 1: E-commerce (Large) */}
        <div className="md:col-span-2 group relative h-80 rounded-2xl overflow-hidden bg-surface-tertiary border border-border-primary hover:border-border-strong transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-gradient-from via-transparent to-transparent z-10"></div>

          {/* E-commerce Visual */}
          <div className="absolute top-10 left-10 right-0 h-full bg-page-bg border-t border-l border-border-primary rounded-tl-xl p-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
            <div className="flex gap-4 h-full">
              {/* Menu */}
              <div className="w-24 border-r border-border-primary pr-4 space-y-3 pt-2">
                <div className="h-2 w-12 bg-block-solid rounded-full"></div>
                <div className="h-2 w-16 bg-surface-hover rounded-full"></div>
                <div className="h-2 w-14 bg-surface-hover rounded-full"></div>
                <div className="h-2 w-16 bg-surface-hover rounded-full"></div>
              </div>
              {/* Grid */}
              <div className="flex-1 grid grid-cols-3 gap-3">
                <div className="bg-surface-elevated border border-border-primary rounded-lg aspect-[4/5] relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-block-solid rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-12 h-2 bg-block-solid rounded-full"></div>
                </div>
                <div className="bg-surface-elevated border border-border-primary rounded-lg aspect-[4/5] relative">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-block-solid rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-12 h-2 bg-block-solid rounded-full"></div>
                </div>
                <div className="bg-surface-elevated border border-border-primary rounded-lg aspect-[4/5]"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-6 z-20">
            <h3 className="text-lg font-medium text-text-heading mb-1">Luxe Market</h3>
            <p className="text-xs text-text-body">Headless Shopify storefront with Next.js 14.</p>
            <div className="flex gap-2 mt-3">
              <span className="text-[10px] text-text-body border border-border-primary px-2 py-0.5 rounded bg-page-bg/50">Next.js</span>
              <span className="text-[10px] text-text-body border border-border-primary px-2 py-0.5 rounded bg-page-bg/50">Stripe</span>
            </div>
          </div>
        </div>

        {/* Project 2: AI Chat (Tall) */}
        <div className="md:col-span-1 md:row-span-2 group relative rounded-2xl overflow-hidden bg-surface-tertiary border border-border-primary hover:border-border-strong transition-all duration-500 min-h-[300px]">
          <div className="absolute inset-0 flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-border-subtle pb-4 mb-4">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Icon icon="lucide:sparkles" width={12} />
              </div>
              <div className="h-2 w-20 bg-block-solid rounded-full"></div>
            </div>
            {/* Chat Area */}
            <div className="space-y-4 flex-1">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-block-solid flex-shrink-0"></div>
                <div className="bg-surface-hover p-2 rounded-lg rounded-tl-none text-[10px] text-text-muted w-3/4">
                  Analyze this dataset for me.
                </div>
              </div>
              <div className="flex gap-2 flex-row-reverse">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex-shrink-0"></div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-lg rounded-tr-none text-[10px] text-emerald-200/70 w-full group-hover:text-emerald-200 transition-colors">
                  Based on the Q3 metrics, user retention has increased by 15%.
                </div>
              </div>
              <div className="h-1 w-2 bg-block-solid rounded-full animate-pulse ml-9"></div>
            </div>
            {/* Input */}
            <div className="mt-auto pt-4 relative">
              <div className="w-full h-8 bg-page-bg border border-border-primary rounded-full"></div>
              <div className="absolute right-1 bottom-1 top-5 w-6 h-6 bg-block-solid rounded-full"></div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-gradient-from to-transparent pt-12">
            <h3 className="text-lg font-medium text-text-heading mb-1">Nexus AI</h3>
            <p className="text-xs text-text-body">LLM Chat interface with streaming.</p>
            <div className="flex gap-2 mt-3">
              <span className="text-[10px] text-text-body border border-border-primary px-2 py-0.5 rounded bg-page-bg/50">OpenAI</span>
              <span className="text-[10px] text-text-body border border-border-primary px-2 py-0.5 rounded bg-page-bg/50">RAG</span>
            </div>
          </div>
        </div>

        {/* Project 3: Finance (Standard) */}
        <div className="md:col-span-1 group relative h-64 rounded-2xl overflow-hidden bg-surface-tertiary border border-border-primary hover:border-border-strong transition-all duration-500">
          <div className="absolute inset-x-6 top-8 bottom-0 bg-page-bg border border-border-primary rounded-t-xl overflow-hidden flex flex-col pt-4 group-hover:-translate-y-1 transition-transform">
            {/* Graph Line */}
            <div className="px-4 mb-2 flex justify-between items-end">
              <div className="h-8 w-1 bg-indigo-500 rounded-t-sm"></div>
              <div className="h-12 w-1 bg-block-solid rounded-t-sm"></div>
              <div className="h-6 w-1 bg-block-solid rounded-t-sm"></div>
              <div className="h-16 w-1 bg-indigo-500 rounded-t-sm"></div>
              <div className="h-10 w-1 bg-block-solid rounded-t-sm"></div>
              <div className="h-20 w-1 bg-indigo-500 rounded-t-sm shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              <div className="h-14 w-1 bg-block-solid rounded-t-sm"></div>
            </div>
            <div className="border-t border-border-primary p-2 flex gap-2">
              <div className="h-4 w-12 bg-surface-elevated rounded border border-border-primary"></div>
              <div className="h-4 w-12 bg-surface-elevated rounded border border-border-primary"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-gradient-from via-gradient-via to-transparent">
            <h3 className="text-lg font-medium text-text-heading mb-1">CoinDash</h3>
            <p className="text-xs text-text-body">Crypto portfolio tracker.</p>
          </div>
        </div>

        {/* Project 4: Kanban/SaaS (Standard) */}
        <div className="md:col-span-1 group relative h-64 rounded-2xl overflow-hidden bg-surface-tertiary border border-border-primary hover:border-border-strong transition-all duration-500">
          <div className="absolute top-6 left-6 right-6 bottom-0 flex gap-3">
            {/* Column 1 */}
            <div className="w-1/2 bg-page-bg border border-border-primary rounded-t-lg p-2 space-y-2 group-hover:translate-y-1 transition-transform">
              <div className="h-1.5 w-8 bg-border-strong rounded-full mb-2"></div>
              <div className="h-12 bg-surface-elevated border border-border-primary rounded"></div>
              <div className="h-12 bg-surface-elevated border border-border-primary rounded"></div>
            </div>
            {/* Column 2 */}
            <div className="w-1/2 bg-page-bg border border-border-subtle rounded-t-lg p-2 space-y-2 opacity-50">
              <div className="h-1.5 w-8 bg-border-strong rounded-full mb-2"></div>
              <div className="h-12 bg-surface-elevated border border-border-primary rounded"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-gradient-from via-gradient-via to-transparent">
            <h3 className="text-lg font-medium text-text-heading mb-1">ZenTask</h3>
            <p className="text-xs text-text-body">Project management SaaS.</p>
          </div>
        </div>

        {/* Project 5: Component Library (Wide) */}
        <div className="md:col-span-2 group relative h-64 rounded-2xl overflow-hidden bg-surface-tertiary border border-border-primary hover:border-border-strong transition-all duration-500">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
            <div className="grid grid-cols-4 gap-4 p-8">
              <div className="w-20 h-8 rounded border border-border-strong"></div>
              <div className="w-20 h-8 rounded bg-block-solid"></div>
              <div className="w-20 h-8 rounded bg-block-contrast"></div>
              <div className="w-8 h-8 rounded-full border border-border-strong"></div>
              <div className="col-span-2 h-20 rounded border border-border-strong border-dashed"></div>
              <div className="col-span-2 h-20 rounded bg-block-solid"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-gradient-from to-transparent">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-lg font-medium text-text-heading mb-1">Vortex UI</h3>
                <p className="text-xs text-text-body">Accessible component library for React.</p>
                <div className="flex gap-2 mt-3">
                  <span className="text-[10px] text-text-body border border-border-primary px-2 py-0.5 rounded bg-page-bg/50">Storybook</span>
                  <span className="text-[10px] text-text-body border border-border-primary px-2 py-0.5 rounded bg-page-bg/50">NPM</span>
                </div>
              </div>
              <Icon icon="lucide:package" width={24} className="text-text-faint group-hover:text-text-heading transition-colors" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
