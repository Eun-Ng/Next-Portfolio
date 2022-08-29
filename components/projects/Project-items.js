import Image from 'next/image';

const ProjectItems = ({data}) => {
  const dataSource = data.properties;
  const title = dataSource.Name.title[0].plain_text;
  const desc = dataSource.Description.rich_text[0].plain_text;
  const gitHub = dataSource.GitHub.url;
  const notion = dataSource.NotionDetail.url;
  const period = dataSource.Period.date;
  const startDay = period.start;
  const endDay = period.end;
  const progress = dataSource.Progress.status.name;
  const stacks = dataSource.Stacks.multi_select;
  const imgSrc = data.cover.file?.url || data.cover.external?.url;

  // 날짜 차이 구하는 로직
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

  const setTag = (aTag) => {
    // purple / green / blue / red / gray
    if (aTag.color === 'purple') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-purple-300 dark:bg-purple-700 w-30'
          key={aTag.id}
        >
          {aTag.name}
        </h1>
      );
    } else if (aTag.color === 'green') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-green-300 dark:bg-green-700 w-30'
          key={aTag.id}
        >
          {aTag.name}
        </h1>
      );
    } else if (aTag.color === 'blue') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30'
          key={aTag.id}
        >
          {aTag.name}
        </h1>
      );
    } else if (aTag.color === 'red') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-red-400 dark:bg-red-700 w-30'
          key={aTag.id}
        >
          {aTag.name}
        </h1>
      );
    } else if (aTag.color === 'pink') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-pink-400 dark:bg-pink-700 w-30'
          key={aTag.id}
        >
          {aTag.name}
        </h1>
      );
    } else if (aTag.color === 'gray') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-gray-300 dark:bg-gray-700 w-30'
          key={aTag.id}
        >
          {aTag.name}
        </h1>
      );
    }
  };

  return (
    <div className='flex flex-col m-3 bg-slate-700 rounded-xl w-full'>
      <Image
        className='rounded-t-xl'
        src={imgSrc}
        alt='cover image'
        width='100%'
        height='60%'
        layout='responsive'
        objectFit='cover'
        quality={100}
      />
      <div className='p-4 flex flex-col'>
        <h1>{title}</h1>
        <h3>{desc}</h3>
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
        <div className='flex items-start mt-2'>
          {stacks.map((stack) => stackCol(stack))}
        </div>
        <p>{progress}</p>
      </div>
    </div>
  );
};

export default ProjectItems;
