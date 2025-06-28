import CourseDetailServerRenderer from './course-detail-server-renderer';

export async function generateStaticParams() {
  return [
    { courseId: 'frontend-development' },
    { courseId: 'backend-development' },
    { courseId: 'fullstack-development' },
    { courseId: 'python-programming' }
  ];
}

interface CourseDetailPageProps {
  params: {
    courseId: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  return <CourseDetailServerRenderer courseId={params.courseId} />;
}