import MagicButton from './components/magic-button';
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">
        Home{' '}
        {new Date().toLocaleTimeString([], {
          minute: '2-digit',
          second: '2-digit',
        })}
      </h1>
      <MagicButton />
    </main>
  );
}
