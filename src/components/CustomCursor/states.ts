import { signal } from "@preact/signals-react";

export const DEFAULT_CURSOR_SIZE = 10;
export const CURSOR_SPEED = 0.8;
export const STICKY_DISTANCE = 0.2;
export const MAX_STRETCH_FACTOR = 1.1;
export type CURSOR_MODES = "default" | "solid" | "opaque";

export const cursorSize = signal(DEFAULT_CURSOR_SIZE);
export const cursorText = signal("");
export const cursorMode = signal<CURSOR_MODES>("default");
