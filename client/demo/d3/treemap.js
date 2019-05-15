import treeData from '../../json/tree.json';
import uuidv1 from 'uuid/v1';
export default function tree(d3, svg) {
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  let format = d3.format(',d');
  let treemap = d3.treemap()
    .size([900, 900])
    .padding(1)
    .round(true);

  let root = d3.hierarchy(treeData).sum(d => d.value).sort((a, b) => b.value - a.value);
  treemap(root);

  const leaf = svg.selectAll('g')
    .data(root.leaves())
    .join('g')
    .attr('transform', d => `translate(${d.x0},${d.y0})`);

  leaf.append('title')
    .text(d => `${d.ancestors().reverse().map(d => d.data.name).join("/")}\n${format(d.value)}`);

  leaf.append('rect')
    .attr('id', d => (d.leafUid = uuidv1()))
    .attr('fill', d => {
      while (d.depth > 1) d = d.parent; return color(d.data.name);
    })
    .attr('fill-pacity', 0.6)
    .attr('width', d => d.x1 - d.x0)
    .attr('height', d => d.y1 - d.y0);

  leaf.append('clipPath')
    .attr('id', d => (d.clipUid = uuidv1()))
    .append('use')
    .attr('xlink:href', d => d.leafUid);

  leaf.append('text')
    .attr('clip-path', d => d.clipUid)
    .selectAll('tspan')
    .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g).concat(format(d.value)))
    .join('tspan')
    .attr('x', 3)
    .attr('y', (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
    .attr('fill-opacity', (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
    .text(d => d);
}