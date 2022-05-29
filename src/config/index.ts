interface IConfig {
  start: Date;
  end: Date;
  name: string;
  subject: string;
  color: string;
}

export const Config: IConfig = {
  start: new Date(2022, 2, 16), // 2022년 3월 16일
  end: new Date(2024, 2, 20), // 2024년 3월 20일
  name: '러리',
  subject: '산업기능요원',
  color: '#48e9c6',
};
