"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const HeavyChart = dynamic(() => import("../components/Chart"), {
  loading: () => <p>Loading Chart...</p>,
});

const Page = () => {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <h1>Dashboard Page</h1>

      <button
        onClick={() => setShowChart(!showChart)}
        className="bg-purple-600 text-white px-4 py-2 rounded-2xl"
      >
        Show Chart
      </button>

      <div>
        {showChart && <HeavyChart />}
      </div>
    </div>
  );
};

export default Page;