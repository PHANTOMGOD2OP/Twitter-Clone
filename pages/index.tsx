import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import Form from "@/components/Form"
console.log("db", process.env.DATABASE_URL)
    
export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
     <>
  )
}
