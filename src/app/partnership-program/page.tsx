import Footer from "@/components/Footer";
import PartnershipButton from "@/components/PartnershipButton";

export default function Partnership() {
  return (
    <>
      <div className="text-white h-[53%] flex items-center justify-center flex-col text-center">
        <h2 className="font-semibold text-3xl">
          This isn’t freelance — it’s a curated crew. Limited slots.
          <PartnershipButton label="Make the cut" />
          <div>
            <PartnershipButton label="Apply Now" />
            Premium-level talent only.
          </div>
        </h2>
        <p className="mt-3 text-[17px] font-semibold">44+ editors hired</p>
      </div>
      <Footer />
    </>
  );
}
