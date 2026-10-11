// Extra decimal digits revealed when hovering over the big number.
// They start right after the decimal point: 67.<DECIMAL_DIGITS>%
//
// PLACEHOLDER: the user will supply the real (very long) digit string.
// Only the first 13 digits below are the real leading digits of
// 3/2 - (1/sqrt(2)) * cot(1/sqrt(2)) (as a percentage); the rest is filler.
// The string is intentionally long so it overflows the viewport.
const LEADING = "2500703679412";
const FILLER = "0123456789".repeat(60);

export const DECIMAL_DIGITS: string = LEADING + FILLER;
