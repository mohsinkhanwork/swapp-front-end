import axios from 'axios';
class SupportService {
    async getTickets() {
        try {
            const { data } = await axios.get('/support/tickets');
            return data;
        } catch (error) {
            return error;
        }
    }

    async getTicketDetail(ticket_number) {
        try {
            const { data } = await axios.get(`/support/tickets/${ticket_number}/replies`);
            return data;
        } catch (error) {
            return error;
        }
    }
}
const supportService = new SupportService();
export default supportService;
