import React, { useEffect } from 'react'
import Head from "next/head";
import * as d3 from "d3";
import { graphviz } from "d3-graphviz";
// import * as graphviz from 'd3-graphviz';

export default function Home() {
  useEffect(() => {
    let x = d3.select("#graph")
    graphviz(d3.select("#graph"), { useWorker: false, }).renderDot("digraph  {a -> b}")
  }, []);

  return (
    <>
      <Head>
        <script src="https://unpkg.com/@hpcc-js/wasm/dist/index.min.js" type="application/javascript/"></script>
      </Head>
      <div id="graph">
      </div>
    </>
  );
}
