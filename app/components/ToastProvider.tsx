"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BellRing, X } from "lucide-react";

type ToastKind = "join" | "open-account" | "app-store" | "google-play";

type Toast = {
  id: number;
  title: string;
  description: string;
};

type ToastContextValue = {
  showUnavailableToast: (kind: ToastKind) => void;
};

const TOAST_COPY: Record<ToastKind, Omit<Toast, "id">> = {
  "join": {
    title: "Join Chanor is opening soon",
    description:
      "We’re still getting things ready behind the scenes. We’ll share access as soon as sign-ups go live.",
  },
  "open-account": {
    title: "Account opening is not live yet",
    description:
      "We’re still preparing account onboarding. We’ll make it available as soon as registrations are ready.",
  },
  "app-store": {
    title: "App Store download is not live yet",
    description:
      "The iOS release is still on the way. We’ll share the App Store link as soon as it’s ready.",
  },
  "google-play": {
    title: "Google Play download is not live yet",
    description:
      "The Android app is still being prepared. We’ll share the Google Play link as soon as it’s ready.",
  },
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);
  const timers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const dismissToast = useCallback((id: number) => {
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }

    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  }, []);

  const showUnavailableToast = useCallback(
    (kind: ToastKind) => {
      const id = nextId.current++;
      const toast = { id, ...TOAST_COPY[kind] };

      setToasts((currentToasts) => [...currentToasts.slice(-2), toast]);

      const timer = setTimeout(() => {
        dismissToast(id);
      }, 4200);

      timers.current.set(id, timer);
    },
    [dismissToast]
  );

  useEffect(() => {
    const activeTimers = timers.current;

    return () => {
      activeTimers.forEach((timer) => clearTimeout(timer));
      activeTimers.clear();
    };
  }, []);

  const contextValue = useMemo(
    () => ({ showUnavailableToast }),
    [showUnavailableToast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed inset-x-0 top-4 z-70 flex justify-center px-4 sm:justify-end sm:px-6"
      >
        <div className="flex w-full max-w-sm flex-col gap-3">
          <AnimatePresence initial={false}>
            {toasts.map((toast) => (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="pointer-events-auto overflow-hidden rounded-2xl border border-[#EC5C28]/15 bg-white shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start gap-3 px-4 py-3.5">
                  <div className="mt-0.5 rounded-full bg-[#FDE6DD] p-2 text-[#EC5C28]">
                    <BellRing className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-neutral-black">
                      {toast.title}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-neutral-black/75">
                      {toast.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => dismissToast(toast.id)}
                    className="rounded-full p-1 text-neutral-black/45 transition-colors hover:bg-neutral-black/5 hover:text-neutral-black/70"
                    aria-label="Dismiss notification"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <motion.div
                  className="h-1 bg-[#EC5C28]"
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ duration: 4.2, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useUnavailableToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useUnavailableToast must be used within a ToastProvider.");
  }

  return context.showUnavailableToast;
}
