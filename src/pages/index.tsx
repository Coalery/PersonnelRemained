import React, { useEffect, useState } from 'react';
import { min } from '../util';
import '../styles/index.scss';

const startDate = new Date(2022, 2, 16); // 2022년 3월 16일
const endDate = new Date(2024, 2, 20, 23, 59, 59); // 2022년 3월 20일 23시 59분 59초

type ProgressBarProps = {
  percent: string;
};

function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className="progress-bar-container">
      <div className="background"></div>
      <div className="progress-bar" style={{ width: percent }}></div>
    </div>
  );
}

type ContentProps = {
  curDate: Date;
};

function Content({ curDate }: ContentProps) {
  const totalDelta = endDate.getTime() - startDate.getTime();
  const curDelta = curDate.getTime() - startDate.getTime();

  const percent = min((curDelta / totalDelta) * 100.0, 100.0) + '%';

  return (
    <div className="content">
      <ProgressBar percent={percent} />
      <br />
      <p>{percent}</p>
    </div>
  );
}

function IndexPage() {
  const [curDate, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 25);
    return () => clearInterval(timer);
  }, [setDate]);

  return (
    <main>
      <title>러리의 산업기능요원 현황</title>
      <Content curDate={curDate} />
    </main>
  );
}

export default IndexPage;
