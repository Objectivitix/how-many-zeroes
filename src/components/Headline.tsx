import { BigNumber } from "./BigNumber";

const RH_URL = "https://en.wikipedia.org/wiki/Riemann_hypothesis";

function formatToday(): string {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Headline() {
  const today = formatToday();
  return (
    <h1 className="headline">
      <span className="headline-top">{today}: At least</span>
      <BigNumber />
      <span className="headline-bottom">
        of the zeroes are{" "}
        <a href={RH_URL} target="_blank" rel="noopener noreferrer">
          on the line
        </a>
        .
      </span>
    </h1>
  );
}
