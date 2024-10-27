import { data } from "@/data/data";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const singleData = data.find((item) => item._id === id);
  console.log(singleData);

  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-20">
        <div className="w-4/5  mx-auto rounded-3xl">
          <img
            src={singleData?.images[0]}
            alt=""
            className="w-full object-cover overflow-hidden rounded-3xl"
          />
        </div>
        <div className="w-4/5 mx-auto mt-10">
          <h2 className="">{singleData?.title}</h2>
          <p className="mt-10">{singleData?.content}</p>
        </div>
      </div>
    </>
  );
}
