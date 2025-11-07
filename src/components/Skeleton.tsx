// Skeleton.tsx
export const Skeleton: React.FC<{
  height?: string;
  width?: string;
  style?: React.CSSProperties;
}> = ({ height = '1rem', width = '100%', style }) => (
  <div
    role="status"
    aria-busy="true"
    className="absolute inset-0 bg-gray-700 dark:bg-gray-700"
    style={{
      height,
      width,
      borderRadius: 4,
      background:
        'linear-gradient(90deg, #eee 25%, #9a97976b 37%, #eee 63%) bg-amber-400',
      backgroundSize: '400% 100%',
      animation: 'skeletonShimmer 2000ms linear infinite',
      ...style,
    }}
  />
);

// Add keyframes for shimmer effect
const styleSheet = document.styleSheets[0];
const keyframes = `@keyframes skeletonShimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
