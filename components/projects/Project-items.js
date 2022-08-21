const ProjectItems = ({data}) => {
  const dataSource = data.properties;
  const title = dataSource.Name.title[0].plain_text;
  const desc = dataSource.Description.rich_text[0].plain_text;
  const period = dataSource.Period.date;
  const gitHub = dataSource.GitHub.url;
  const notion = dataSource.NotionDetail.url;
  const day = parseInt(period.end.slice(8, 10) - period.start.slice(8, 10) + 1);
  const progress = dataSource.Progress.status.name;
  const stacks = dataSource.Stacks.multi_select.map((stacks) => stacks.name);

  return (
    <div className='p-6 m-3 bg-slate-700 rounded-md'>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div>
        <a target='_blank' href={notion} rel='noreferrer'>
          👉 노션 상세페이지
        </a>
      </div>
      <div>
        <a target='_blank' href={gitHub} rel='noreferrer'>
          👉 GitHub
        </a>
      </div>
      <p>
        프로젝트 기간: {period.start} ~ {period.end} ({day}일)
      </p>
      <p>{progress}</p>
      <div className=''>{stacks}</div>
    </div>
  );
};

export default ProjectItems;
