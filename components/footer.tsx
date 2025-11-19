import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-y-0 items-center text-sm text-muted-foreground">
        <div className="text-center md:text-left">
          last_updated_by: <span className="font-medium">Deeku10</span>
        </div>

        <div className="text-center italic font-bold">Stay hungry stay foolish</div>

        <div className="text-center md:text-right">
          last_updated_on: <span className="font-medium">11/19/2025</span>
        </div>
      </div>
    </footer>
  );
}
