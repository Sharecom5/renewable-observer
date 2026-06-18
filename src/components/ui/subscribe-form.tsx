"use client";

import { useState } from "react";
import { subscribeAction } from "@/app/actions/subscribe";

interface SubscribeFormProps {
  title?: string;
  description?: string;
  variant?: "footer" | "article";
}

export function SubscribeForm({ title, description, variant = "footer" }: SubscribeFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleAction(formData: FormData) {
    setStatus("loading");
    setMessage("");

    const result = await subscribeAction(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message || "Subscribed successfully!");
    } else {
      setStatus("error");
      setMessage(result.error || "Failed to subscribe.");
    }
  }

  const isArticle = variant === "article";

  return (
    <div className={`flex flex-col ${isArticle ? '' : 'gap-3 max-w-sm'}`}>
      {title && (
        <p className={isArticle ? "font-bold text-2xl mb-2 text-foreground relative z-10" : "text-sm font-semibold text-foreground"}>
          {title}
        </p>
      )}
      {description && isArticle && (
        <p className="text-muted-foreground mb-6 relative z-10">{description}</p>
      )}

      {status === "success" ? (
        <div className={`p-4 rounded-md border border-green-500/30 bg-green-500/10 text-green-600 font-medium ${isArticle ? 'relative z-10' : 'text-sm'}`}>
          {message}
        </div>
      ) : (
        <form action={handleAction} className={`flex ${isArticle ? 'flex-col sm:flex-row gap-3 relative z-10' : 'gap-2'}`}>
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email address" 
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 ${isArticle ? 'flex-1' : ''}`}
            required
            disabled={status === "loading"}
          />
          <button 
            type="submit"
            disabled={status === "loading"}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 shrink-0 ${status === "loading" ? "opacity-70 cursor-wait" : ""}`}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className={`text-red-500 mt-2 font-medium ${isArticle ? 'relative z-10 text-sm' : 'text-xs'}`}>{message}</p>
      )}
    </div>
  );
}
