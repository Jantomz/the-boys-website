export default function ContentContainer({ children, extraClass }) {
  let classes = "w-[75%] m-auto mb-12 " + extraClass;

  return <div className={classes}>{children}</div>;
}
