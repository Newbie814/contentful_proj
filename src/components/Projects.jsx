import { useFetchContents } from '../fetchContents';

const Projects = () => {
  const { loading, contents } = useFetchContents();

  if (loading) {
    return <h2 className='projects'>Loading...</h2>;
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {contents.map((content) => {
          const { id, title, url, img } = content;
          return (
            <a href={url} key={id} rel='noreferrer' className='project'>
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
