import React, { useEffect, useState } from "react";
import { PostCard, Container } from "../components";
import appwriteService from "../appwrite/config";
function AllPosts() {
    const [posts,setPosts]= useState([]);
    useEffect(()=>{
        appwriteService.getPosts([])
        .then((posts)=> {
            if(posts){
                setPosts(posts.documents)
            }
        })
        .catch((error)=>console.log("AllPosts :: error :: ",error))
    },[])
  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap ">
            {posts.map((post)=>(
                <div key={post.$id} className="p-2 w-1/4 ">
                    <PostCard  {...post}/>
                </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
