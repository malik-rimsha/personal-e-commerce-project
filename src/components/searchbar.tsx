
import Link from "next/link";
import Image from "next/image"; // ✅ Added Next.js optimized Image
import { Input } from "./ui/input";
import { ShoppingCartIcon, Menu, CheckIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Searchbar() {
  return (
    <nav className="w-full border-b-2 bg-[#F0F2F3] p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          {/* ✅ Replaced <img> with <Image /> */}
          <Image src="/Rdlogo.png" alt="Logo" width={48} height={48} className="h-12 w-auto" />
          <h1 className="font-bold text-base sm:text-lg md:text-xl">
            RD Organic Hair Oil
          </h1>
        </div>

        {/* Search/Cart Section (Desktop only) */}
        <div className="hidden md:flex items-center ml-auto">
          <div className="relative w-36 lg:w-48">
            <Input placeholder="Cart" className="bg-white text-sm pr-8" />
            <ShoppingCartIcon className="absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64 sm:w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center">
                  {/* ✅ Replaced <img> with <Image /> */}
                  <Image src="/Rdlogo.png" alt="Logo" width={32} height={32} className="h-8 w-auto" /> RD Organic Hair Oil
                </SheetTitle>
              </SheetHeader>

              {/* Navigation Links */}
              <div className="flex flex-col gap-5 mt-8 text-center">
                <Link href="/" className="text-sm font-medium hover:underline">Home</Link>
                <Link href="/product" className="text-sm font-medium hover:underline">Product</Link>
                <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
                <Link href="/contact" className="text-sm font-medium hover:underline">Contact</Link>
                <Link href="/cart" className="text-sm font-medium hover:underline">Cart</Link>
              </div>

              {/* Cart Input (Mobile) */}
              <div className="mt-6 relative">
                <Input placeholder="Cart" className="bg-white pr-8" />
                <ShoppingCartIcon className="absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-2xl">
                  <CheckIcon />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ShoppingCartIcon />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

