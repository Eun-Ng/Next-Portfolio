import Image from 'next/image';

const ProjectItems = ({data}) => {
  const dataSource = data.properties;
  const title = dataSource.Name.title[0].plain_text;
  const desc = dataSource.Description.rich_text[0].plain_text;
  const period = dataSource.Period.date;
  const gitHub = dataSource.GitHub.url;
  const notion = dataSource.NotionDetail.url;
  const startDay = period.start;
  const endDay = period.end;
  const progress = dataSource.Progress.status.name;
  const stacks = dataSource.Stacks.multi_select.map((stacks) => stacks.name);
  const imgSrc = data.cover.file.url;

  const calculatedPeriod = (startDay, endDay) => {
    const startDateArr = startDay.split('-');
    const endDateArr = endDay.split('-');

    const startDate = new Date(
      startDateArr[0],
      startDateArr[1],
      startDateArr[2]
    );
    const endDate = new Date(endDateArr[0], endDateArr[1], endDateArr[2]);

    const diffInMs = Math.abs(endDate - startDate);
    const result = `${diffInMs / (1000 * 60 * 60 * 24)}일`;

    return result;
  };

  return (
    <div className='flex flex-col p-6 m-3 bg-slate-700 rounded-md'>
      <Image src={imgSrc} width='100%' height='100%' />
      <h1>{title}</h1>
      <p>{desc}</p>
      <a target='_blank' href={notion} rel='noreferrer'>
        👉 노션 상세페이지
      </a>

      <a target='_blank' href={gitHub} rel='noreferrer'>
        👉 GitHub
      </a>
      <p>
        프로젝트 기간: {startDay} ~ {endDay} (
        {calculatedPeriod(startDay, endDay)})
      </p>
      <p>{stacks}</p>
      <p>{progress}</p>
    </div>
  );
};

export default ProjectItems;
