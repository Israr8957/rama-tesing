import { useRouter } from 'next/router';
import projects, { Project } from '../data/viewProject';
import { FC } from 'react';

const ViewProject: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string') return null;

  const project: Project | undefined = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="text-center py-10 text-red-500">Project not found.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-dark p-4 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="h-72 md:h-96 mb-6">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover rounded-lg" />
        </div>
        <h6 className="text-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[10px] text-transparent font-bold">
          {project.category}
        </h6>
        <h2 className="text-3xl font-bold text-black dark:text-white mt-2">{project.title}</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{project.description}</p>
        <div className="flex items-center gap-4 mt-6">
          {project.tools.map((tool, index) => (
            <img key={index} src={`/assets/images/casestudy/${tool}`} alt={tool} className="w-6 md:w-10" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
