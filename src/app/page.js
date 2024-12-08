import Navigation from './Layout/Navigation';
import Building from './components/Building';

export default function Home() {
  return (
    <main className="flex">
      <Navigation />
      <div className="flex-1">
        <Building />
      </div>
    </main>
  );
}
