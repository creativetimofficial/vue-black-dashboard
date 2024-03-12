export const NodeService = {
  async getTreeNodes() {
      try {
          const response = await fetch('http://localhost/location/'); // Замените на реальный URL вашего сервера
          if(!response.ok){
            throw new Error('Ошибка HTTP:' + response.status);
          }
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching tree nodes:', error);
          return [];
      }
  }
};