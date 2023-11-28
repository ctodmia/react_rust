import React, { useRef, useState, useEffect } from "react";
import { getData } from "../utils";
import { scaleLinear, select } from "d3";
import { Button, Typography, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { tokens } from "../theme";

let colorGradient = ["#2176ae", "#57b8ff", "#b66d0d", "#fe6847"];

function Circles({ width, height }) {
  const [data, setData] = useState(getData());
  const svgRef = useRef();

  const handleClick = () => setData(getData());

  useEffect(() => {
    const maxRadius = 40;
    const xScale = scaleLinear().domain([0, 1]).range([0, width]);

    const yScale = scaleLinear().domain([0, 1]).range([height, 0]);

    const rScale = scaleLinear().domain([0, 1]).range([0, maxRadius]);

    select(svgRef.current)
      .selectAll("circle")
      .data(data)
      .transition()
      .duration(1000)
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", (d) => rScale(d.r))
      .style("fill", (d) => colorGradient[d.color]);
  }, [data, width, height]);
  console.log(`app`, svgRef.current);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`}>
        {data.map((d) => (
          <circle fill="#fff"></circle>
        ))}
      </svg>
      <div>
        <Button variant="primary" onClick={handleClick}>
          <RefreshOutlinedIcon />
          <Typography variant="h5" color={colors.greenAccent[100]}>
            Refresh
          </Typography>
        </Button>
        <Button variant="outlined" onClick={handleClick}>
          <GitHubIcon />
          <Typography variant="h5" color={colors.grey[100]}>
            <Link
              href="https://github.com/ctodmia/react_rust"
              target="_blank"
              rel="noreferrer"
              color={colors.greenAccent[100]}
            >
              View Github
            </Link>
          </Typography>
        </Button>
      </div>
    </div>
  );
}

export default Circles;
