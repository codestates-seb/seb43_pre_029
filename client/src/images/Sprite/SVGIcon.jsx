const SVGIcon = ({ id, label = undefined, width = 24, alt = 'logo' }) => {
  return (
    <svg width={width} height={width} aria-label={alt} fill="none">
      <use href={`#${id}`} />
    </svg>
  );
};

export default SVGIcon;
