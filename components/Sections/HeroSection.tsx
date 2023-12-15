import TypeWriter from "@/components/TypeWriter";
import NameASCIIArt from "@/components/NameASCIIArt";
import PictureASCIIART from "@/components/PictureASCIIART";

export default function HeroSection() {
  return (
    <div className="px-4 font-mono scollable h-screen snap-start snap-always text-3xl flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex text-[8px] leading-[10px]">
          <NameASCIIArt />
        </div>

        <TypeWriter Texts={["A Web Develoepr On The Side"]} />
      </div>
      <div className="w-full h-full text-xs flex justify-center items-center">
        <pre className="text-argentinian-blue text-[10px] leading-[12px]">
              <PictureASCIIART />
        </pre>
      </div>
    </div>
  );
}
