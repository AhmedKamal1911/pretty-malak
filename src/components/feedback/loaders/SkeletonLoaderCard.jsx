import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoaderCard = () => {
  return (
    <div className="relative w-full flex flex-col gap-5">
      <Skeleton className="h-[200px] sm:h-[350px] lg:h-[260px] bg-[#b1b1b1] z-10 rounded-sm" />
      <Skeleton className="h-[200px] sm:h-[350px] lg:h-[260px] bg-[#b1b1b1] z-10 rounded-sm" />
      <Skeleton className="h-[200px] sm:h-[350px] lg:h-[260px] bg-[#b1b1b1] z-10 rounded-sm" />
    </div>
  );
};

export default SkeletonLoaderCard;
