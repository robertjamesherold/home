import { SkeletonProductGridPage, DefaultProductGridPage, useProductGridPage } from './'


const ProductGridPage = () =>
{
  const { showSkeleton } = useProductGridPage();

  if (showSkeleton) {
    return <SkeletonProductGridPage />;
  }

  return (
    <DefaultProductGridPage />
  );
}

export default ProductGridPage