export const normalizeSizes = (sizes?: string[]) => {
  if (!sizes) return undefined;
  return sizes.map((s) => s);
};
