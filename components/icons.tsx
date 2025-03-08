type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  arrow45deg: (props: IconProps) => (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_7950_47)">
        <path
          d="M2.91666 32.083L32.0833 2.91634"
          stroke="#EFEFEF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.91666 2.91634H32.0833V32.083"
          stroke="#EFEFEF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7950_47">
          <rect width="35" height="35" fill="white" transform="matrix(0 -1 1 0 0 35)" />
        </clipPath>
      </defs>
    </svg>
  ),
};
