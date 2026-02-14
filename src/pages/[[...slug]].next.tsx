import type { GetStaticPaths, GetStaticProps } from 'next';
import App from '../App';
import { routes } from '../next/routes';

type PageProps = {
  initialPath: string;
};

export default function CatchAllPage({ initialPath }: PageProps) {
  return <App initialPath={initialPath} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = routes.map((route) => {
    if (!route || route === '/') {
      return { params: { slug: [] } };
    }
    const slug = route.replace(/^\/+|\/+$/g, '').split('/');
    return { params: { slug } };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slugParam = params?.slug;
  const slugArray = Array.isArray(slugParam)
    ? slugParam
    : slugParam
      ? [slugParam]
      : [];
  const path = '/' + slugArray.join('/');

  return {
    props: {
      initialPath: path === '/' ? '/' : path,
    },
  };
};
