import ContactForme from "../_components/contact/ContactForme";
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <InfoComponent />
        <ContactForme />
      </div>
    </div>
  );
}

export default page;
