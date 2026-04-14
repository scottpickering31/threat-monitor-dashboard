import { alertsCardMock } from "@/mocks/data/alertCardMock";
import AlertRow from "../AlertRow/AlertRow";

export default function AlertsList() {
  return (
    <div>
      {alertsCardMock.map((alert) => (
        <AlertRow key={alert.id} alert={alert} />
      ))}
    </div>
  );
}
