import { useId, useState } from "react";
import { HISTORY, PLACEHOLDER_PHOTO } from "../data/history";

export function History() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="history">
      <button
        type="button"
        className="history-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span>HISTORY</span>
        <span className="chevron" aria-hidden="true">
          &gt;
        </span>
      </button>

      <div id={panelId} className="history-panel" hidden={!open}>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Value</th>
                <th scope="col">Author</th>
                <th scope="col">Year</th>
                <th scope="col">Paper</th>
              </tr>
            </thead>
            <tbody>
              {HISTORY.map((row, i) =>
                row.kind === "gap" ? (
                  <tr key={i} className="gap" aria-hidden="true">
                    <td>⋮</td>
                    <td>⋮</td>
                    <td>⋮</td>
                    <td>⋮</td>
                  </tr>
                ) : (
                  <tr key={i}>
                    <td className="value">{row.value}</td>
                    <td>
                      <span className="author">
                        <span className={row.author ? "" : "muted"}>{row.author ?? "…"}</span>
                        <img
                          className="photo"
                          src={row.photo ?? PLACEHOLDER_PHOTO}
                          alt={row.author ? `Photo of ${row.author}` : "Author photo placeholder"}
                          width={32}
                          height={32}
                        />
                      </span>
                    </td>
                    <td>{row.year ?? <span className="muted">…</span>}</td>
                    <td>
                      {row.paperUrl ? (
                        <a href={row.paperUrl} target="_blank" rel="noopener noreferrer">
                          Paper
                        </a>
                      ) : (
                        <span className="muted">URL</span>
                      )}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
