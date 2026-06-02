"use client";

import { useEffect, useState } from "react";

type ShareButtonsProps = {
  title: string;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(pageUrl || window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  const shareUrl = encodeURIComponent(pageUrl || "");
  const shareTitle = encodeURIComponent(title);

  return (
    <div className="mt-8 rounded-xl border border-[#ead7e8] bg-[#fcf7fb] p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f5b61]">Share</p>
          <h2 className="mt-1 text-2xl font-semibold text-[#173a63]">Share this article</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d9e3ec] bg-white px-4 py-2 text-sm font-medium text-[#173a63] transition-colors hover:border-[#0f5b61] hover:text-[#0f5b61]"
          >
            LinkedIn
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d9e3ec] bg-white px-4 py-2 text-sm font-medium text-[#173a63] transition-colors hover:border-[#0f5b61] hover:text-[#0f5b61]"
          >
            X
          </a>
          <a
            href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d9e3ec] bg-white px-4 py-2 text-sm font-medium text-[#173a63] transition-colors hover:border-[#0f5b61] hover:text-[#0f5b61]"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-full bg-[#173a63] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0f5b61]"
          >
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
}