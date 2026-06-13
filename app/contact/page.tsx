import InfoComponent from "../_components/contact/InfoComponent";
import SectionHeader from "../_components/SectionHeader";

export const metadata = { title: "Contact" };
function page() {
  return (
    <div>
      <SectionHeader
        title="Gateway Connection"
        description="Initiate a request or trace professional coordinates. All pathways open."
      />
      <div>
      <InfoComponent />
      </div>
    </div>
  );
}

export default page;
