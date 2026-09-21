"use client";

import dynamic from "next/dynamic";

const OpeningLoader = dynamic(() => import("./OpeningLoader"), {
  ssr: false,
});

export default OpeningLoader;
