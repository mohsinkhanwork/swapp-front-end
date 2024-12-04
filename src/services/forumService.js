import axios from 'axios';
class ForumService {

    // search, tags
    async getQuestions(params) {
        try {
            const { data } = await axios.get('/forum/questions',{
                params
            });
            return data;
        } catch (error) {
            return error;
        }
    }

    async getQuestionDetail(id) {
        try {
            const { data } = await axios.get(`/forum/questions/${id}/answers`);
            return data;
        } catch (error) {
            return error;
        }
    }

    async getComments(id) {
        try {
            const { data } = await axios.get(`/forum/answers/${id}/comments`);
            return data;
        } catch (error) {
            return error;
        }
    }
}
const forumService = new ForumService();
export default forumService;
