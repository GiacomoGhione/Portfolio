"use client";

import { useEffect } from "react";

function getStore() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!window.__scrollLockStore) {
    window.__scrollLockStore = {
      count: 0,
      htmlOverflow: "",
      htmlScrollbarGutter: "",
      bodyOverflow: "",
    };
  }

  return window.__scrollLockStore;
}

function acquireScrollLock() {
  const store = getStore();

  if (!store) {
    return;
  }

  if (store.count === 0) {
    const html = document.documentElement;
    const body = document.body;

    store.htmlOverflow = html.style.overflow;
    store.htmlScrollbarGutter = html.style.scrollbarGutter;
    store.bodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    html.style.scrollbarGutter = "stable";
    body.style.overflow = "hidden";
  }

  store.count += 1;
}

function releaseScrollLock() {
  const store = getStore();

  if (!store || store.count === 0) {
    return;
  }

  store.count -= 1;

  if (store.count > 0) {
    return;
  }

  const html = document.documentElement;
  const body = document.body;

  html.style.overflow = store.htmlOverflow;
  html.style.scrollbarGutter = store.htmlScrollbarGutter;
  body.style.overflow = store.bodyOverflow;
}

export default function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) {
      return undefined;
    }

    acquireScrollLock();

    return () => {
      releaseScrollLock();
    };
  }, [isLocked]);
}
