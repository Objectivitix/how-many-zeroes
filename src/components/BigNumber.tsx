import { useMemo, useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { DECIMAL_DIGITS } from "../data/digits";
import { useCountUp } from "../useCountUp";

const WHOLE_PERCENT = 67;
const FORMULA = String.raw`\frac{3}{2} - \frac{1}{\sqrt{2}}\cot\frac{1}{\sqrt{2}} \approx`;

/**
 * The huge "67%". Hover (mouse), tap (touch) or Enter/Space (keyboard) reveals
 * the formula, hides the "%" and shows the long decimal expansion.
 */
export function BigNumber() {
  const count = useCountUp(WHOLE_PERCENT);
  const [revealed, setRevealed] = useState(false);
  const lastPointerType = useRef<string>("mouse");

  const formulaHtml = useMemo(
    () => katex.renderToString(FORMULA, { throwOnError: false, displayMode: false }),
    [],
  );

  const onPointerDown = (e: PointerEvent) => {
    lastPointerType.current = e.pointerType;
  };
  const onPointerEnter = (e: PointerEvent) => {
    if (e.pointerType === "mouse") setRevealed(true);
  };
  const onPointerLeave = (e: PointerEvent) => {
    if (e.pointerType === "mouse") setRevealed(false);
  };
  const onClick = (e: MouseEvent) => {
    // Real mouse clicks are already handled by hover; touch taps and
    // keyboard activation (detail === 0) toggle.
    if (lastPointerType.current === "mouse" && e.detail > 0) return;
    setRevealed((r) => !r);
  };

  return (
    <button
      type="button"
      className={`big-number${revealed ? " is-revealed" : ""}`}
      aria-pressed={revealed}
      aria-label={`${WHOLE_PERCENT} percent. Press to show more decimal places.`}
      onPointerDown={onPointerDown}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
      onBlur={() => setRevealed(false)}
    >
      <span
        className="formula"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: formulaHtml }}
      />
      <span className="digits-whole" aria-hidden="true">
        {count}
      </span>
      <span className="slot" aria-hidden="true">
        <span className="percent">%</span>
        <span className="decimals">.{DECIMAL_DIGITS}</span>
      </span>
    </button>
  );
}
