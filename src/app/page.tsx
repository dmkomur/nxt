import { Status, StatusLable } from './components/status-lable';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Home</h1>
      <StatusLable status={Status.ACTIVE}>Active</StatusLable>
      <StatusLable status={Status.NOTACTIVE}>Not Active</StatusLable>
      <StatusLable status={Status.PENDING}>Pending</StatusLable>
      <StatusLable status={Status.SUSPENDED}>Suspended</StatusLable>
      <StatusLable status={Status.ACTIVE} disabled>
        Disabled
      </StatusLable>
    </main>
  );
}
