import axios from 'axios';
//const url = 'http://localhost:5000/api/posts/'

const url = 'api/posts/'
class PostService {

    static getPost() {
        return new Promise(async (resolve, reject) => {
            try {

                const res = await axios.get(url);
                const data = res.data;
                resolve(

                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    static getPostByParam(param) {
        return new Promise(async (resolve, reject) => {
            try {

                const res = await axios.get(`${url}${param}`);
                const data = res.data;
                resolve(

                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }


    static insertPost(first_name,last_name,email,city) {
        return axios.post(url, {
            first_name,
            last_name,
            email,
            city
        });
    }


    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;