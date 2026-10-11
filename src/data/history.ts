// History of records, newest first. Oldest (Selberg, 1942) last.
//
// PLACEHOLDER DATA: the user supplies the real rows/values/URLs/photos and
// will ask for them to be verified later. Fields left undefined render as
// muted placeholders ("…", "URL").

export interface HistoryRecord {
  kind: "record";
  /** Display string, e.g. "67.2%" */
  value: string;
  /** Author name; undefined renders "…" */
  author?: string;
  /** Path under public/, e.g. "/photos/selberg.jpg"; undefined uses the placeholder */
  photo?: string;
  year?: number;
  /** Link to the paper; undefined renders a muted "URL" */
  paperUrl?: string;
}

export interface HistoryGap {
  kind: "gap";
}

export type HistoryRow = HistoryRecord | HistoryGap;

export const PLACEHOLDER_PHOTO = "/photos/placeholder.svg";

export const HISTORY: HistoryRow[] = [
  { kind: "record", value: "67.2%", author: "Claude", year: 2026 },
  { kind: "record", value: "41.7%", year: 2022 },
  { kind: "record", value: "xx.x%", year: 1989 },
  { kind: "gap" },
  { kind: "record", value: "ε% (ε > 0)", author: "Atle Selberg", year: 1942 },
];
