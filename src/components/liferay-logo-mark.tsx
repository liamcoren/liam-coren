import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const FILLED = 1;
const EMPTY = 0;

const GRID: number[] = [
  FILLED, FILLED, FILLED, EMPTY,
  FILLED, FILLED, EMPTY, FILLED,
  FILLED, EMPTY, FILLED, FILLED,
  EMPTY, FILLED, FILLED, FILLED,
];

export function LiferayLogoMark({ className }: Props) {
  return (
    <div
      className={cn(
        "box-border grid h-[120px] w-[120px] grid-cols-4 grid-rows-4 gap-[6px] rounded-[15px] bg-foreground p-[18px]",
        className,
      )}
      role="img"
      aria-label="Liferay"
    >
      {GRID.map((cell, i) => (
        <div
          key={i}
          className={cn(
            "min-h-0 min-w-0 rounded-[2px]",
            cell === FILLED ? "bg-background" : "bg-transparent",
          )}
        />
      ))}
    </div>
  );
}
