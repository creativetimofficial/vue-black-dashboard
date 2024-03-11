export const NodeService = {
  async getTreeNodes(){
    try{
      const response = await fetch('http://localhost/user/create');
      const data = await response.json();
      return data;
    } catch (error){
      console.log('Error fetching tree nodes: ', error);
      return [];
    }
  }
};
