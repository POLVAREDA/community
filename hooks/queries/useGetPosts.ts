import {useQuery} from "@tanstack/react-query";
import {getPosts} from "@/api/post";

function useGetPosts() {
    const { data, isSuccess, isError} = useQuery({
        queryFn:({pageParam})=> getPosts(pageParam),
        queryKey: ["post", "getPosts"],
    });

    console.log(data);


    return { data };
}

export default useGetPosts;