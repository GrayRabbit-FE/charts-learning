const data = [
    { name: 'questions', value: 17 },
    { name: 'schools', value: 25 },
    { name: 'philosophers', value: 35 }
];

const chartWidth = 480; //条形图的宽度
const chartHeight = 300; //条形图的高度
const margin = 15; //条形图的外边距

const containerWidth = chartWidth + 2 * margin; //容器的宽度
const containerHeight = chartHeight + 2 * margin; //容器的高度

const names = Array.from(data, (d) => d.name);
const values = Array.from(data, (d) => d.value);
const indices = Array.from(data, (_, i) => i);

const step = chartWidth / names.length;
const barWidth = step * 0.8;
const xs = Array.from(indices, (i) => i * step);
//底部对齐
const y = chartHeight;

const vmax = Math.max(...values);
const barHeights = Array.from(values, (v) => chartHeight * (v / vmax));

const nameColor = {
    questions: '#5B8FF9',
    philosophers: '#61DDAA',
    schools: '#65789B'
}

const colors = Array.from(names, (name) => nameColor[name]);