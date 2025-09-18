import { Status, StatusLabel } from './components/status-label';
import AddCompanyButton from './components/add-company-button';

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
      <StatusLabel status={Status.ACTIVE}>Active</StatusLabel>
      <StatusLabel status={Status.NOTACTIVE}>Not Active</StatusLabel>
      <StatusLabel status={Status.PENDING}>Pending</StatusLabel>
      <StatusLabel status={Status.SUSPENDED}>Suspended</StatusLabel>
      <StatusLabel status={Status.ACTIVE} disabled>
        Disabled
      </StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
