import Card from "@/components/Card";
import { data } from "@/data/data";
import { TProject } from "@/Pages/Projects";

const Blog = () => {
  const mydata = data;
  return (
    <div>
      <div className="relative flex items-center justify-center mb-4 mt-10">
        <h1
          className="text-9xl text-white uppercase"
          style={{ WebkitTextStroke: "1px #dee2e6" }}
        >
          Blog
        </h1>
        <h1 className="absolute text-4xl uppercase text-blue-400">My Blog</h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
        {mydata.map((item: TProject) => (
          <Card key={item._id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
