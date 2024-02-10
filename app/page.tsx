"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

type Props = {};

const HomePage = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mirrored, setMirrored] = useState<boolean>(true);
  return (
    <div className="flex h-screen">
      {/* Left division - webcam and Canvas */}
      <div className="relative">
        <div className="relative h-screen w-full">
          <Webcam
            ref={webcamRef}
            mirrored={mirrored}
            className="w-full h-full object-contain p-2"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 h-full w-full object-contain"
          ></canvas>
        </div>
      </div>

      {/* Right division - container for button panel and wiki section */}
      <div className="flex flex-row flex-1">
        <div className="border-primary/5 border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounded-md p-4">
          {/* Top section */}
          <div className="flex flex-col gap-2">
            <ModeToggle />

            <Separator />
          </div>

          {/* Middle section */}
          <div className="flex flex-col gap-2">
            <Separator />

            <Separator />
          </div>

          {/* Bottom section */}
          <div className="flex flex-col gap-2">
            <Separator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
