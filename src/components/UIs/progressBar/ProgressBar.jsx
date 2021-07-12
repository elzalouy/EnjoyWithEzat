import classes from "./ProgressBar.module.css";
const ProgressBar = (props) => {
  // radius = (width / 2) - (strokeWidth * 2)
  // circumference = radius * 2 * PI
  const value = props.value;
  const circumference = 22 * 2 * Math.PI;
  return (
    <svg className={classes.svg} height="60" width="50">
      <circle
        className={classes.progressRingCircle}
        fill="transparent"
        r={22}
        cx={30}
        cy={30}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: circumference - ((value / 100) * circumference),
        }}
      />
      <text
        x={25}
        y={30}
        textAnchor="middle"
        stroke="white"
        fontWeight='lighter'
        fontSize="10px"
        strokeWidth="0.7"
      >
        {value}%
      </text>
    </svg>
  );
};

export default ProgressBar;
