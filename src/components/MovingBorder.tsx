"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorder() {
  return (
    <div>
      <Button borderRadius="1.75rem" className="bg- border-neutral-200">
        Borders are cool
      </Button>
    </div>
  );
}
