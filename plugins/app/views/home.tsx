//plugins/app/views/home.tsx
import type { ServerPageProps } from "stackpress/view/client";
import { useState } from "react";

export function Head(props: ServerPageProps<{ title: string }>) {
  const { data, styles = [] } = props;
  //render
  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content="Welcome to Stackpress" />
      {styles.map((href, index) => (
        <link key={index} rel="stylesheet" type="text/css" href={href} />
      ))}
    </>
  );
}

type UserInfo = {
  name: string;
  age: number;
};

export default function HomePage(props: ServerPageProps) {
  //response
  const { response } = props;
  const { name = "guest", age = 0 } = (response.results || {}) as UserInfo;

  //basic count state
  const [count, setCount] = useState(0);
  //render
  return (
    <div>
      <h1 className="text-3xl font-bold font-sans">
        Welcome{" "}
        <span className={name === "guest" ? "text-red-500" : "text-green-500"}>
          {`${name}`.charAt(0).toUpperCase() + `${name}`.slice(1)}
        </span>{" "}
        to STACKPRESS
      </h1>
      <p>
        You are <span className="text-blue-500 text-2xl">{`${age}`}</span> years
        old.
      </p>
      <button className="mx-3" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <a href="/about">About</a>
    </div>
  );
}
