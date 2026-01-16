import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 pt-8 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Md. Tonmoy Khan. Built with Next.js & Tailwind CSS.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/tonmoykhan" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/tonmoykhan" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          <a href="mailto:tonmoy@example.com" className="hover:text-zinc-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
