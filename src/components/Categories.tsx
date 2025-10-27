import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      name: "Tramira Royal",
      // products: "3,584 Products",
      image: "/p9.png",
      href: "/categories/wing-chair",
    },
    {
      name: "Twin Essence",
      // products: "157 Products",
      image: "/p5.png",
      href: "/categories/wooden-chair",
    },
    {
      name: "Mustard Royal",
      // products: "154 Products",
      image: "/p10.png",
      href: "/categories/desk-chair",
    },
  ];

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="max-w-screen-lg mx-auto ">
        <h2 className="text-3xl font-bold tracking-tight  mb-8">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={"../components/productDectription/discription"}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    {category.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                   
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}