"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";

const Navbar = () => {

  const { isSignedIn } = useUser();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-lg">
        <div className="px-6 py-4 flex justify-between items-center">

          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="TreeBio" width={42} height={42} />
            <span className="font-bold text-2xl tracking-widest text-[#41B313]">
              TreeBio
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <ModeToggle/>

            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="flex items-center gap-2">

                <SignInButton>
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button size="sm" className="bg-[#41B313] text-white">
                    Sign Up
                  </Button>
                </SignUpButton>

              </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;