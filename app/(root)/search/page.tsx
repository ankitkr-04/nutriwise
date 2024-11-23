import SearchForm from "@/components/SearchForm";
import Image from "next/image";
const searchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };
  return (
    <>
      <section className="relative min-h-[350px] md:min-h-[550px] shadow-md">
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
            <SearchForm query={query} />
          </div>
        </div>
      </section>
      <section className="mx-2 md:mx-auto mt-6 max-w-6xl">
        <h2 className="font-semibold text-2xl ">You've searched for "{query}"</h2>
      </section>
    </>
  );
};

export default searchPage;
