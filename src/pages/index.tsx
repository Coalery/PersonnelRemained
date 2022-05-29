import React, { useEffect, useState } from 'react';

import { formatDate, calcPercent } from '../util';
import { Config } from '../config';

import '../styles/index.scss';

function Title() {
  const { name, subject, color } = Config;

  return (
    <h1 className="title">
      {name}의<br />
      <span style={{ color }}>{subject}</span> <span>현황</span>
    </h1>
  );
}

const DateIndicator = React.memo(() => {
  const { start, end } = Config;

  return (
    <div className="date-indicator">
      <p>{formatDate(start)}</p>
      <p>{formatDate(end)}</p>
    </div>
  );
});

type ProgressBarProps = {
  percent: string;
};

function ProgressBar({ percent }: ProgressBarProps) {
  const { color } = Config;

  return (
    <>
      <div className="progress-bar-container">
        <div className="background"></div>
        <div
          className="progress-bar"
          style={{ width: percent, backgroundColor: color }}
        ></div>
      </div>
      <DateIndicator />
    </>
  );
}

type ContentProps = {
  percent: string;
};

function Content({ percent }: ContentProps) {
  const { start, end } = Config;

  return (
    <div className="content-container">
      <p className="date-range">
        {formatDate(start)}부터 {formatDate(end)}까지,
      </p>
      <p>
        <span className="percent">{percent}</span> 진행 중!
      </p>
    </div>
  );
}

function IndexPage() {
  const [curDate, setDate] = useState(new Date());
  const { name, subject } = Config;

  const percent = calcPercent(curDate);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 25);
    return () => clearInterval(timer);
  }, [setDate]);

  return (
    <main>
      <title>
        {name}의 {subject} 현황
      </title>
      <div className="container">
        <Title />
        <ProgressBar percent={percent} />
        <Content percent={percent} />
      </div>
    </main>
  );
}

export default IndexPage;
