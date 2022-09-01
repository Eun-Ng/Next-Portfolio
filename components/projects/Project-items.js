import Image from 'next/image';

const ProjectItems = ({data}) => {
  const dataSource = data.properties;
  const title = dataSource.Name.title[0].plain_text;
  const projectType = dataSource.ProjectType.multi_select[0].name;
  const desc = dataSource.Description.rich_text[0].plain_text;
  const gitHub = dataSource.GitHub.url;
  const notion = dataSource.NotionDetail.url;
  const period = dataSource.Period.date;
  const startDay = period.start;
  const endDay = period.end;
  const process = dataSource.Process.status.name;
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

  // 스택 태그 색깔
  const stackCol = (stack) => {
    if (stack.color === 'gray') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-gray-300 dark:bg-gray-500 w-30'
          key={stack.id}
        >
          {stack.name}
        </h1>
      );
    } else if (stack.color === 'orange') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-orange-500 dark:bg-orange-700 w-30'
          key={stack.id}
        >
          {stack.name}
        </h1>
      );
    } else if (stack.color === 'brown') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-red-700 dark:bg-red-900 w-30'
          key={stack.id}
        >
          {stack.name}
        </h1>
      );
    } else if (stack.color === 'blue') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-blue-500 dark:bg-blue-700 w-30'
          key={stack.id}
        >
          {stack.name}
        </h1>
      );
    } else if (stack.color === 'pink') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-pink-400 dark:bg-pink-700 w-30'
          key={stack.id}
        >
          {stack.name}
        </h1>
      );
    } else if (stack.color === 'yellow') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-yellow-300 dark:bg-yellow-500 w-30'
          key={stack.id}
        >
          {stack.name}
        </h1>
      );
    } else if (stack.color === 'purple') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-purple-500 dark:bg-purple-700 w-30'
          key={stack.id}
        >
          {stack.name}
        </h1>
      );
    } else if (stack.color === 'green') {
      return (
        <h1
          className='px-2 py-1 mr-2 rounded-md bg-green-500 dark:bg-green-700 w-30'
          key={stack.id}
        >
          {stack.name}
        </h1>
      );
    }
  };

  // 프로젝트 종류
  const project = (projectType) => {
    if (projectType === 'Toy Project') {
      return (
        <span className='px-2 py-1 mr-2 rounded-md bg-sky-400 dark:bg-sky-600 w-30'>
          {projectType}
        </span>
      );
    } else if (projectType === 'Team Project') {
      return (
        <span className='px-2 py-1 mr-2 rounded-md bg-green-400 dark:bg-green-600 w-30'>
          {projectType}
        </span>
      );
    }
  };

  // 프로젝트 진행 상황
  const processing = (process) => {
    if (process === 'In progress') {
      return (
        <span className='px-2 py-1 mr-2 rounded-md bg-sky-400 dark:bg-sky-600 w-30'>
          {process}
        </span>
      );
    } else if (process === 'Done') {
      return (
        <span className='px-2 py-1 mr-2 rounded-md bg-green-400 dark:bg-green-600 w-30'>
          {process}
        </span>
      );
    } else {
      return (
        <span className='px-2 py-1 mr-2 rounded-md bg-slate-400 dark:bg-slate-600 w-30'>
          {process}
        </span>
      );
    }
  };

  return (
    <div className='projectCard'>
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
        <h1 className='text-2xl font-hold'>{title}</h1>
        <h3 className='mt-4 text-xl'>{desc}</h3>
        <div className='projectType'>프로젝트 종류: {project(projectType)}</div>
        <a className='text-lg' target='_blank' href={notion} rel='noreferrer'>
          👉 노션 상세페이지
        </a>
        <a className='text-lg' target='_blank' href={gitHub} rel='noreferrer'>
          👉 GitHub
        </a>
        <p className='my-1 text-lg'>
          기간: {startDay} ~ {endDay} ({calculatedPeriod(startDay, endDay)})
        </p>
        <div className='stacks'>{stacks.map((stack) => stackCol(stack))}</div>
        <p className='processTag'>진행 상황: {processing(process)}</p>
      </div>
    </div>
  );
};

export default ProjectItems;
