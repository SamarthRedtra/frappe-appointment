/**
 * Internal dependencies
 */
import { Skeleton } from "@/components/ui/skeleton";

const TimeSlotSkeleton = () => {
  return (
    <>
      <div className="space-y-2 w-full">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full rounded-md" />
        ))}
      </div>
    </>
  );
};

export default TimeSlotSkeleton;
