import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
type ScannedItemProps = {
  scannedItem?: {
    name?: string;
    healthScore?: number;
    description?: string;
    image?: string;
  };
  loading: boolean;
  isCaptured: boolean;
};

const ScannedItem = ({ scannedItem, loading }: ScannedItemProps) => {
  if (loading) {
    return (
      <div className="flex items-center h-36 gap-3 animate-pulse">
        {/* Skeleton Image Section */}
        <Skeleton className="w-28 h-28 shadow-lg border border-gray-100 rounded-lg" />

        {/* Skeleton Text Content */}
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
        </div>

        {/* Skeleton Button */}
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    );
  }

  return (
    <div className="flex items-center h-36 gap-3">
      {/* Image Section */}
      {scannedItem?.image ? (
        <Image
          className="shadow-lg border border-gray-100 rounded-lg"
          alt={scannedItem?.name || "Scanned item"}
          src={scannedItem?.image}
          height={110}
          
          width={110}
          style={{ objectFit: "contain" }}
          quality={60}
        />
      ) : (
        <Skeleton className="w-28 h-28 shadow-lg border border-gray-100 rounded-lg" />
      )}

      {/* Text Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold">
            {scannedItem?.name || "Unknown"}
          </h3>
          {scannedItem?.healthScore !== undefined ? (
            <p className="text-sm bg-green-300 rounded-2xl px-2 text-white font-bold">
              {scannedItem.healthScore}
            </p>
          ) : (
            <Skeleton className="h-6 w-12 rounded-md" />
          )}
        </div>
        <p className="text-gray-800 text-sm line-clamp-2">
          {scannedItem?.description || "No description available."}
        </p>
      </div>

      {/* Chevron Button */}
      <button className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100">
        <ChevronRightIcon size={24} className="text-gray-800" />
      </button>
    </div>
  );
};

export default ScannedItem;
