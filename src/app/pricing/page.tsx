import { MovingBorder } from "@/components/MovingBorder";
import { lobby_pass, monthly_unlimited, single_pass } from "@/utils/config";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <>
      <h2 className="font-semibold text-3xl text-center text-white mt-5 mb-10">
        A Perfect Balance of Quality, Quantity & Price.
      </h2>
      <div className="px-4 md:px-16  mx-auto mt-14">
        <div className="grid grid-cols-3 text-white">
          {single_pass.map((singlePass, idx) => {
            return (
              <div
                key={idx}
                className="overflow-hidden h-full w-full bg-white-300 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 "
              >
                <div className=" border-white/30 border-b px-6 py-5">
                  <span className="mb-1 inline-block font-medium backdrop-filter backdrop-blur-lg rounded-full bg-white/30 px-3 py-1 text-sm">
                    {singlePass.label}
                  </span>
                  <h4 className="font-bold text-4xl">
                    {singlePass.priceDollar}/
                    <span className="text-sm">{singlePass.priceRupee}</span>
                  </h4>
                </div>
                <div className="px-6 py-6">
                  <ul className="flex flex-col gap-3">
                    {singlePass.features.map((feature) => {
                      return (
                        <li className="flex gap-3 item-center">
                          <div className="w-6 h-6 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-full bg-white/30 flex items-center justify-center">
                            <Check size={16} />
                          </div>
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
          {monthly_unlimited.map((monthPass, idx) => {
            return (
              <div
                key={idx}
                className="overflow-hidden scale-[1.1] z-10 h-full w-full bg-white-300 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40"
              >
                <div className=" border-white/30 border-b px-6 py-5">
                  <span className="mb-1 inline-block font-medium backdrop-filter backdrop-blur-lg rounded-full bg-white/30 px-3 py-1 text-sm">
                    {monthPass.label}
                  </span>
                  <h4 className="font-bold text-4xl">
                    {monthPass.priceDollar}/
                    <span className="text-sm">{monthPass.priceRupee}</span>
                  </h4>
                </div>
                <div className="px-6 py-6">
                  <ul className="flex flex-col gap-3">
                    {monthPass.features.map((feature) => {
                      return (
                        <li className="flex gap-3 item-center">
                          <div className="w-6 h-6 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-full bg-white/30 flex items-center justify-center shrink-0">
                            <Check size={16} />
                          </div>
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
          {lobby_pass.map((lobbyPass, idx) => {
            return (
              <div
                key={idx}
                className="overflow-hidden h-full w-full bg-white-300 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 "
              >
                <div className=" border-white/30 border-b px-6 py-5">
                  <span className="mb-1 inline-block font-medium backdrop-filter backdrop-blur-lg rounded-full bg-white/30 px-3 py-1 text-sm">
                    {lobbyPass.label}
                  </span>
                  <h4 className="font-bold text-4xl">
                    {lobbyPass.priceDollar}/
                    <span className="text-sm">{lobbyPass.priceRupee}</span>
                  </h4>
                </div>
                <div className="px-6 py-6">
                  <ul className="flex flex-col gap-3">
                    {lobbyPass.features.map((feature) => {
                      return (
                        <li className="flex gap-3 item-center">
                          <div className="w-6 h-6 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-full bg-white/30 flex items-center justify-center shrink-0">
                            <Check size={16} />
                          </div>
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
