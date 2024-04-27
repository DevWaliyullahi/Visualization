import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface LineChartProps {
  data: { date: string; value: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    const margin = { top: 30, right: 20, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 350 - margin.top - margin.bottom;

    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    svg.append("foreignObject")
      .attr("width", width)
      .attr("height", 50)
      .html('<div style="text-align: left;"><h1 style="font-size: 1.5rem; font-weight: 600; color: #333; margin-bottom: 1rem;">Revenue Overtime</h1></div>');

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) as number])
      .nice()
      .range([height, 0]);

    const line = d3
      .line<{ date: string; value: number }>()
      .x((d) => x(d.date) || 0)
      .y((d) => y(d.value));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y).ticks(5).tickFormat(d3.format(".0s")));

    return () => {
      svg.selectAll("*").remove();
    };

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default LineChart;