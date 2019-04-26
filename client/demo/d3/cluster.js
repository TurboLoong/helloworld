import treeData from '../../json/tree.json';
export default function cluster(d3) {
    const width = 932;
    const radius = width / 2;
    let cluster = d3.cluster()
        .size([2 * Math.PI, radius - 100]);

    // 构造树形属性
    const root = cluster(d3.hierarchy(treeData).sort((a, b) => (a.height - b.height) || a.data.name.localeCompare(b.data.name)));

    const svg = d3.select('body').append('svg')
        .attr('width', '100%')
        .attr('height', 'auto')
        .style('padding', '10px')
        .style('box-sizing', 'border-box')
        .style('font', '10px sans-serif');

    const g = svg.append('g');

    const gLink = g.append('g')
        .attr('fill', 'none')
        .attr('stroke', '#555')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', 1.5)
        .selectAll('path')
        .data(root.links())
        .enter()
        .append('path')
        .attr('d', d3.linkRadial()
            .angle(d => d.x)
            .radius(d => d.y));

    const gNode = g.append('g')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 3)
        .selectAll('g')
        .data(root.descendants().reverse())
        .enter().append('g')
        .attr('transform', d => `
      rotate(${d.x * 180 / Math.PI - 90})
      translate(${d.y},0)
    `);

    gNode.append('circle')
        .attr('fill', d => d.children ? 'green' : 'red')
        .attr('r', 2.5);

    gNode.append('text')
        .attr('dy', '0.31em')
        .attr('x', d => d.x < Math.PI === !d.children ? 6 : -6)
        .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')
        .attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)
        .text(d => d.data.name)
        .filter(d => d.children)
        .clone(true).lower()
        .attr('stroke', 'white');

}