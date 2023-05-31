type TitleProps = {
  headline: string
};

function Title({ headline }: TitleProps) {
  return (
    <h2>{headline}</h2>
  );
}

export default Title;
