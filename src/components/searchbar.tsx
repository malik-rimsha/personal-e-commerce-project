// import Link from "next/link";
// import { Input } from "./ui/input";
// import { ShoppingCartIcon, Menu, CheckIcon } from "lucide-react";
// import { Button } from "./ui/button";
// import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
// import { Sheet } from "./ui/sheet";

// export default function Searchbar() {
//     return (
//         <nav className=" w-full border-b-2 bg-[#F0F2F3] p-4">
//             <div className="max-w-7xl h-4 ml-32 mx-auto flex items-center justify-between">
//                 <img className="h-20 w-30 " src="Rdlogo.png" alt="Logo" /> 
//                 <h1 className=" align-items: center display: flex font-bold text-lg ">RD Organic Hair Oil</h1>

//                 <div className="hidden w-20 md:flex ml-auto mr-20">
//                     <div className="relative">
//                         <ShoppingCartIcon className="absolute right-2 top-2" />
//                         <Input placeholder="cart" className="bg-white font-xs" />
//                     </div>
//                 </div>

//                 <Sheet>
//                     <SheetTrigger asChild>
//                         <Button variant={"outline"} size={"icon"} className="rounded-full">
//                             <Menu />
//                         </Button>
//                     </SheetTrigger>
//                     <SheetContent>
//                         <SheetHeader>
//                             <SheetTitle>
//                                 <img className="h-6 w-28 ml-10" src="1logo.png" alt="Logo" />
//                             </SheetTitle>
//                         </SheetHeader>
//                         <div className="flex flex-col gap-6 mt-6">
//                             <Link href={'/'} className="text-sm font-normal">Home</Link>
//                             <Link href={'product'} className="text-sm font-normal">Product</Link>    
//                             <Link href={'about'} className="text-sm font-normal">About</Link>
//                             <Link href={'contact'} className="text-sm font-normal">Contact</Link>
//                             <Link href={'cart'} className="text-sm font-normal">Cart</Link>
//                         </div>
//                         <div className="mt-4">
//                             <div className="relative">
//                                 <Input placeholder="cart" className="bg-offwhite" />
//                                 <ShoppingCartIcon className="absolute right-2 top-2" />
//                             </div>
//                         </div>
//                         <div className="mt-4 space-x-2">
//                             <Button variant={"outline"} size={"icon"} className="rounded-2xl">
//                                 <CheckIcon />
//                             </Button>
//                             <Button variant={"outline"} size={"icon"} className="rounded-full">
//                                 <ShoppingCartIcon />
//                             </Button>
//                         </div>
//                     </SheetContent>
//                 </Sheet>
//             </div>
//         </nav>
//     );
// }

import Link from "next/link";
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
          <img className="h-12 w-auto" src="Rdlogo.png" alt="Logo" />
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
                  <img className="h-8 w-auto" src="1logo.png" alt="Logo" />
                </SheetTitle>
              </SheetHeader>

              {/* Navigation Links */}
              <div className="flex flex-col gap-5 mt-8 text-center">
                <Link href="/" className="text-sm font-medium hover:underline">
                  Home
                </Link>
                <Link href="/product" className="text-sm font-medium hover:underline">
                  Product
                </Link>
                <Link href="/about" className="text-sm font-medium hover:underline">
                  About
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:underline">
                  Contact
                </Link>
                <Link href="/cart" className="text-sm font-medium hover:underline">
                  Cart
                </Link>
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
