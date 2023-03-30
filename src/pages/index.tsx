import { useSubscription } from 'streamr-client-react';

export default function Home() {
  useSubscription('0xA2AF948C508311e1D24270649d770cF4d4F5D0B5/foo/bar', {
    onSubscribed: () => console.log('subscribed'),
    onMessage: (content: unknown, metadata: unknown) =>
      console.log('message', content, metadata),
  });

  return (
    <main>
      <h1>Streamr React</h1>
    </main>
  );
}
