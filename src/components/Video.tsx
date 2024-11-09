import { IoClose } from "react-icons/io5";

interface VideoType {
  toggleVideo: () => void;
}

const Video = ({ toggleVideo }: VideoType) => {
  return (
    <div
      // onClick={toggleVideo}
      className="flex  justify-center items-center fixed top-0 right-0 left-0 bottom-0 custom-bg-rgba h-full w-full z-50"
    >
      <div className="absolute  w-[720px] h-[480.52px] z-[1000]">
        <button
          className="bg-white absolute cursor-pointer right-5 top-3"
          onClick={toggleVideo}
        >
          <IoClose className="size-6 text-black" />
        </button>
        <img src="/video.svg" alt="" />
        <video
          className="absolute hidden inset-0 w-full h-full object-cover opacity-50 z-0"
          autoPlay
          muted
          loop
        >
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
