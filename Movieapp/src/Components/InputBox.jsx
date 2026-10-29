import React from "react";

export default function InputBox({ query, setQuery }) {
    return (
        <div className="w-full px-4 pt-8 pb-4">
            <div className="mx-auto max-w-xl">
                <label htmlFor="movie-search" className="sr-only">
                    Search for a movie
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-400 shadow-lg transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/30">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-5 w-5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path strokeLinecap="round" d="m20 20-4-4" />
                    </svg>
                    <input
                        id="movie-search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                        placeholder="Search for a movie..."
                    />
                </div>
            </div>
        </div>
    )
}