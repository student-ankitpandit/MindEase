"use client";

import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  return (
    <button
      onClick={() => history.back()}
      className="mt-8 inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
    >
      <ArrowLeft className="w-3.5 h-3.5" />
      Go back to previous page
    </button>
  );
}
