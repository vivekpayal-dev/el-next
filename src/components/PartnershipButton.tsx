type PartnershipButtonProps = {
  label: string;
};

const PartnershipButton = ({ label }: PartnershipButtonProps) => {
  return (
    <>
      <button className="border-1 px-5 mx-2 py-2 rounded-[40px] text-[17px] border-white">
        Apply Now
      </button>
    </>
  );
};

export default PartnershipButton;
