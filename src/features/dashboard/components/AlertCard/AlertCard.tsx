import Card from "@/components/ui/Card/Card";
import AlertHeader from "../AlertHeader/AlertHeader";
import AlertsList from "../AlertsList/AlertList";
import AlertFilters from "../AlertFilters/AlertFilters";

export default function AlertCard() {
  return (
    <Card light>
      <AlertHeader />
      <AlertsList />
      <AlertFilters />
    </Card>
  );
}
