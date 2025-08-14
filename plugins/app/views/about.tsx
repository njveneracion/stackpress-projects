import type { ServerPageProps } from "stackpress/view/client";

export default function About(props: ServerPageProps) {
  const { response } = props;
  const { info = "Hi, I'm Nelson Jay Veneracion" } = response.results || {};

  return (
    <div>
      <h1>About</h1>
      <p>Info: {`${info}`}</p>
      <a href="/">Go back</a>
    </div>
  );
}
