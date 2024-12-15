<template>
  <div class="articles-page">
    <!-- Левое меню -->
    <Sidebar />

    <!-- Основной контент -->
    <div class="content">
      <!-- Заголовок страницы -->
      <h1>Тема, большое длинное название темы</h1>
      <NuxtLink to="/" class="back-button">Вернуться</NuxtLink>

      <!-- Список статей/комментариев -->
      <div v-for="article in articles" :key="article.id" class="article">
        <div class="article-header">
          <div class="author">{{ article.author }}</div>
          <div class="date">{{ article.date }}</div>
        </div>
        <p class="article-text">{{ article.text }}</p>
      </div>

      <!-- Форма для добавления комментария -->
      <div class="reply-form">
        <textarea
          v-model="newReply"
          placeholder="Напишите свой ответ..."
          rows="5"
        ></textarea>
        <button @click="addReply">Добавить ответ</button>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          author: 'Фамилия И. О.',
          date: '18 января 13:15',
          text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев текста рыбы...',
        },
        {
          id: 2,
          author: 'Фамилия И. О.',
          date: '19 января 15:15',
          text: 'Сайт рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей...',
        },
      ],
      newReply: '',
    };
  },
  methods: {
    addReply() {
      if (this.newReply.trim()) {
        this.articles.push({
          id: this.articles.length + 1,
          author: 'Вы',
          date: new Date().toLocaleString(),
          text: this.newReply.trim(),
        });
        this.newReply = '';
      }
    },
  },
};
</script>

<style scoped>
.articles-page {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  overflow-y: auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.back-button {
  display: inline-block;
  margin-bottom: 20px;
  color: #3b8d76;
  text-decoration: underline;
  cursor: pointer;
}

.article {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.article-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.author {
  font-weight: bold;
}

.date {
  font-size: 12px;
  color: #888;
}

.article-text {
  font-size: 14px;
  color: #333;
}

.reply-form {
  margin-top: 20px;
}

textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
}

button {
  margin-top: 10px;
  background-color: #3b8d76;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2e705a;
}
</style>