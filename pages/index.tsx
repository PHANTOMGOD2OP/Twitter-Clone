import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import Form from "@/components/Form"

export default function Home() {
  return (
console.log("db", process.env.DATABASE_URL);
    
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
     <>
  )
}
