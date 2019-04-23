export default function pack(d3, svg) {
    let packLayout = d3.pack()
        .size([600, 600])
        .padding(10);
    d3.json('/dist/city.json').then(function (cities) {
        let rootNode = d3.hierarchy(cities);
        rootNode.sum(function (d) {
            return d.value;
        });
        packLayout(rootNode);
        const node = svg.selectAll('g')
            .data(rootNode.descendants())
            .join('g')
            .attr('transform', d => `translate(${d.x + 1},${d.y + 1})`);

        node.append('circle')
            .attr('class', function (d) {
                return d.children ? 'node' : 'leafnode';
            })
            // .attr('cx', function (d) { return d.x; })
            // .attr('cy', function (d) { return d.y; })
            .attr('r', function (d) { return d.r; });

        node.append('text')
            .attr('class', 'nodeText')
            .style('fill-opacity', function (d) {
                return d.data.children ? 0 : 1;
            })
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.data.children ? '' : d.data.name; });
    });
} 