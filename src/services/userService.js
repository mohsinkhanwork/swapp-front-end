import axios from 'axios';
class UserService {
    async getNotifications() {
        try {
            const { data } = await axios.get('/notifications');
            return data;
        } catch (error) {
            return error;
        }
    }

    // instagram_link, facebook_link, linkedin_link
    async updateSocialLinks(links) {
        try {
            const { data } = await axios.post('/social-links', links);
            return data;
        } catch (error) {
            return error;
        }
    }

    // current_password, password, password_confirmation
    async updatePassword(password_fields) {
        try {
            const { data } = await axios.post('/update-password', password_fields);
            return data;
        } catch (error) {
            return error;
        }
    }

    // update-profile
    async updateProfile(userDetail) {

        try {
            const { data } = await axios.post('/profile', params, {
                headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            console.log ("check post data",data)
            return data;
        } catch (error) {
            return error;
        }
    }

    async deactivateAccount(password) {
        try {
            const { data } = await axios.post('/deactivate-account', {password});
            return data;
        } catch (error) {
            return error;
        }
    }

    async getFollowers(params) {
        try {
            const { data } = await axios.get('/followers',{
                params
            });
            return data;
        } catch (error) {
            return error;
        }
    }

    async getFollowing(params) {
        try {
            const { data } = await axios.get('/following',{
                params
            });
            return data;
        } catch (error) {
            return error;
        }
    }

    async getBlockedUsers(params) {
        try {
            const { data } = await axios.get('/blocked-users',{
                params
            });
            return data;
        } catch (error) {
            return error;
        }
    }

    async getUsers(params) {
        try {
            const { data } = await axios.get('/users',{
                params
            });
            return data;
        } catch (error) {
            return error;
        }
    }

    async getUserDetail(username) {
        try {
            const { data } = await axios.get(`/users/${username}`);
            return data;
        } catch (error) {
            return error;
        }
    }
    async followUser(userID) {
        try {
            const { data } = await axios.post('/follow', userID);
            return data;
        } catch (error) {
            return error;
        }
    }
    async unfollowUser(userID) {
        try {
            const { data } = await axios.post('/unfollow', { user_id: userID });
            return data;
        } catch (error) {
            return error;
        }
    }
    async blockUser(userID) {
        try {
            const { data } = await axios.post('/block', userID);
            return data;
        } catch (error) {
            return error;
        }
    }
    async unblockUser(userID) {
        try {
            const { data } = await axios.post('/unblock', userID);
            return data;
        } catch (error) {
            return error;
        }
    }



}
const userService = new UserService();
export default userService;
