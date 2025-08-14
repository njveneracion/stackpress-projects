import type { ServerPageProps } from 'stackpress/view/client';
import { useState, useEffect } from 'react';
import { 
  unload,
  useResponse,
  NotifyContainer,
  StackpressProvider
} from 'stackpress/view/client';

export function Head(props: ServerPageProps) {
  const { styles = [] } = props;
  //render
  return (
    <>
      <title>Stackpress</title>
      <meta name="description" content="Welcome to Stackpress" />
      {styles.map((href, index) => (
        <link key={index} rel="stylesheet" type="text/css" href={href} />
      ))}
    </>
  )
}

export function HomeBody() {
  //basic count state
  const [ count, setCount ] = useState(0);
  //response
  const response = useResponse<{ name: string }>();
  const { name = 'guest' } = response.results || {};
  //render
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
        Welcome {name} to Stackpress
      </h1>
      <button onClick={() => setCount(count => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default function HomePage(props: ServerPageProps) {
  //layout props
  const { data, session, request, response } = props;
  //unload flash message
  useEffect(unload, []);
  //render
  return (
    <StackpressProvider 
      //@ts-ignore
      data={data}
      session={session}
      request={request}
      response={response}
    >
      <HomeBody />
      <NotifyContainer />
    </StackpressProvider>
  )
}