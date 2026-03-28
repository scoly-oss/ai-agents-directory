"use client";

import { useState } from "react";

export default function CheckoutButton({
  plan,
  children,
  className,
}: {
  plan: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleCheckout} disabled={loading} className={className}>
      {loading ? "Loading..." : children}
    </button>
  );
}
