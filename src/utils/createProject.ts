import { TProject } from "@/Pages/Projects";

export const createPost = async (post: TProject) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    if (data) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
};
