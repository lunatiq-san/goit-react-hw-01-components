const PaintingStatistics = ({ stats }) => (
  <ul className="stat-list">
    {stats.map(({ id, label, percentage }) => (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    ))}
  </ul>
);

export default PaintingStatistics;
