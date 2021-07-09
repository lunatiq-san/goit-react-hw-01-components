import PaintingStatistics from "./PaintingStatistics";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <PaintingStatistics stats={stats} />
  </section>
);

export default Statistics;
