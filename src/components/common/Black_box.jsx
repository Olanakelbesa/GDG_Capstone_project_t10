import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

function BlackBox() {
  return (
    <div className="flex flex-col bg-black text-white hover:bg-gray-800 p-4 justify-start rounded-lg mx-14 my-14 mr-0">
      <h1 className="font-bold s text-4xl ml-0 m-5 ">Have any questions</h1>
      <p>Do not hesitage to give us a call. We are an
      expert team and we are happy to talk to you,</p>
      <div className="flex items-center ml-3 mt-11">
      <IoCall className="m-2 text-2xl" /><p className="m-3"> +251273452863</p>
      </div>
      <div className="flex items-center ml-3 mb-5">
      <TfiEmail className="m-2 text-2xl" />
      <p className="m-3">
        contact@domain.com
      </p>
      </div>
    </div>
  );
}

export default BlackBox;