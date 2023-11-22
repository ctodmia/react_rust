import React, {useRef, useState, useEffect} from 'react'
import {getData} from './utils'
import {scaleLinear, select } from 'd3'

const Circles = ({width, height}) => {
    const [data, setData] = useState(getData());
    const svgRef = useRef()

    useEffect(() => {
        const maxRadius = 40
        const xScale = scaleLinear()
            .domain([0, 1])
            .range([0, width])

        const yScale = scaleLinear()
            .domain([0,1])
            .range([height, 0])
            
        const rScale = scaleLinear()
            .domain([0, 1])
            .range([0, maxRadius])

        select(svgRef.current)
            .selectAll('circle')
            .data(data)
            .attr('cx', (d) => xScale(d.x))
            .attr('cy', (d) => yScale(d.y))
            .attr('r', (d) => rScale(d.r))
            .attr('fill', 'black')
    }, [data, width, height])
    console.log(`app`, svgRef.current)
    return (
        <div>
            <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`}>
                {data.map(d => <circle fill="#fff"></circle>)}
            </svg>
            <div>
                <button>Refresh Data</button>
            </div>
        </div>
    )
}

export default Circles