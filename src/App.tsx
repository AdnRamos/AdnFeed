import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';
import './global.css';

import styles from './App.module.css';

//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: string


const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/AdnRamos.png",
      name: "Adenilson Ramos",
      role: "Web Developer"
    },
    content: [
      
      {type: 'paragraph', content:'Fala galeraa 👋',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'adnramos.github.io/'},
      
    ],
    publishedAt: new Date('2023-10-28 05:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/giudicellisilva.png",
      name: "Giudicelli Elias",
      role: "Web Developer"
    },
    content: [
      
      {type: 'paragraph', content:'Fala galeraa 👋',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'https://giudicellisilva.github.io/giudicellielias/'},
      
    ],
    publishedAt: new Date('2023-10-25 05:00:00'),
  }
]


//Iteração : é repetir um processo várias vezes

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
            <Sidebar />
        </aside>
        <main>
            {
              posts.map(post => {
                return (
                  <Post 
                    key={post.id} 
                    post={post}
                    />
                )})
            }
        </main>
      </div>

    </div>
  )
}

