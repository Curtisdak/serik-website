"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { navItems } from "./NavBar";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LittleMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="icon">
          <Menu className="w-6 h-6 z-10 md:hidden" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {navItems.map((item, index) => (
          <DropdownMenuItem key={index} className="hover:bg-primary/20">
            <a href={item.href}>{item.label}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
