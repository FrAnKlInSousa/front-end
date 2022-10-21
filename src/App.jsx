/**default export */
// import Post from "./Post"
/**named export */
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"
import { format } from 'date-fns'
import './global.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/diego3g.png",
      name: 'Diego Fernandes',
      role: "Web developer"
    },
    content:[
      {type: "paragraph", content: "Fala pessoal 👋"},
      {type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻"},
      {type: "link" , content: "Acesse e deixe seu feedback 👉 devonlane.design"},
    ],
    publishedAt: new Date('2022-10-12 07:38:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: "Educator"
    },
    content:[
      {type: "paragraph", content: "Fala pessoal 👋"},
      {type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻"},
      {type: "link" , content: "Acesse e deixe seu feedback 👉 devonlane.design"},
    ],
    publishedAt: new Date('2022-10-08 20:14:33')
  }
]
export function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}


