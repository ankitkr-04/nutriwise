import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="relative min-h-[350px] md:min-h-[550px]">
      {/* Background Image */}
      <Image
        fill
        src="/assets/images/food-banner.webp"
        alt="A colorful assortment of food items"
        className="object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-green-950 font-extrabold text-3xl md:text-5xl mx-6">
          Understand What You Eat
        </h1>
        <p className="text-green-900 text-md md:text-lg mt-3 mx-6 max-w-xl">
          Scan or search any food item to get detailed nutritional,
          sustainability, and allergy-related information.
        </p>

        {/* Search Form */}
        <div className="mt-6 w-full flex items-center justify-center px-4">
          <SearchForm />
        </div>
      </div>
    </section>
    <section className="mt-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold">Recent Scans</h2>
    </section>
    </>
  );
}
