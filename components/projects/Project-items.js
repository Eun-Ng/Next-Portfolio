const ProjectItems = ({data}) => {
  console.log(data);
  const title = data.properties.Name.title[0].plain_text;
  const gitHub = data.properties.GitHub.url;

  return (
    <div className='p-6 m-3 bg-slate-700 rounded-md'>
      <h1>{title}</h1>
      <a target='_blank' href={gitHub} rel='noreferrer'>
        👉 GitHub
      </a>
    </div>
  );
};

export default ProjectItems;
