<template>
  <div class="links-page">
    <Sidebar />
    <div class="content">
      <h2>Полезные Ссылки</h2>
      <p>
        На этой странице вы найдете список полезных ссылок, которые помогут вам в изучении медицинской тематики и в работе с платформой.
      </p>

      <h3>Образовательные ресурсы:</h3>
      <ul>
        <li><a href="https://www.medicalnewstoday.com/" target="_blank">Медицинскии новости</a> - Новости и статьи о медицине.</li>
        <li><a href="https://www.ncbi.nlm.nih.gov/" target="_blank">НСБИ</a> - Национальный центр биотехнологической информации, база данных научных статей.</li>
        <li><a href="https://www.khanacademy.org/science/health-and-medicine" target="_blank">Академия: Здоровье и медицина</a> - Бесплатные курсы по медицине.</li>
      </ul>

      <h3>Ресурсы для олимпиад и тестов:</h3>
      <ul>
        <li><a href="https://www.medicalolympiad.org/" target="_blank">Медицинская Олимпиада</a> - Международные олимпиады по медицинской тематике.</li>
        <li><a href="https://www.quizlet.com" target="_blank">Квиз</a> - Платформа для создания флеш-карт и тестов по медицинским темам.</li>
      </ul>

      <h3>Полезные статьи:</h3>
      <ul>
        <li><a href="https://www.mayoclinic.org/" target="_blank">Клиника</a> - Обзор медицинских заболеваний и методов лечения.</li>
        <li><a href="https://www.healthline.com/" target="_blank">Лечение</a> - Полезные статьи по различным медицинским темам.</li>
      </ul>

      <h3>Форумы и сообщества:</h3>
      <ul>
        <li><a href="https://wsdffsd/r/medicine/" target="_blank">Что-то</a> - Форум для обсуждения медицинских вопросов.</li>
        <li><a href="https://forums.studentdoctor.net/" target="_blank">Докторина</a> - Форум для студентов медицинских вузов.</li>
      </ul>

      <h3>Ресурсы для карьерного роста:</h3>
      <ul>
        <li><a href="https://www.medicare.gov/" target="_blank">Медицина</a> - Ресурс для специалистов в области медицины и здравоохранения.</li>
        <li><a href="https://www.jobs.medicare.gov/" target="_blank">Мед работа</a> - Сайт для поиска работы в медицинской отрасли.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.links-page {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  margin-left: 10px; 
  overflow-y: auto;
}

h2 {
  margin-bottom: 10px;
  color: #3b8d76;
}

h3 {
  margin-top: 20px;
  color: #499972;
}

ul {
  margin-top: 15px;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
}

a {
  color: #3b8d76;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>