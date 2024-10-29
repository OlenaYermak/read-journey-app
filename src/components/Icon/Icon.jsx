import Icons from "../../icons/icons.svg";

export default function Icon({ id, width, height, className }) {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${Icons}#${id}`} />
    </svg>
  );
}
