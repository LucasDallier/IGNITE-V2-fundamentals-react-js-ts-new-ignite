import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LucasDallier.png",
      name: "Lucas Dallier Arraes",
      role: "Front-end developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. é um projeto que fiz no NLW return, evento gratuito da Rocketseat",
      },
      { type: "paragraph", content: "👉" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-09 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Luiz-Fellipe.png",
      name: "Luiz Fellipe",
      role: "Front-end developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. é um projeto que fiz no NLW return, evento gratuito da Rocketseat",
      },
      { type: "paragraph", content: "👉" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/thiagostival.png",
      name: "Thiago Felipe",
      role: "Front-end developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. é um projeto que fiz no NLW return, evento gratuito da Rocketseat",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
