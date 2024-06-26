import axios from "axios";
import BASE_URL from '@/API/baseURL';

async function fetchAllBannersData() {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/banners`, 
        {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            }
        });
        return response.data.data;
    } catch (error) {
        return null;
    }
}

async function fetchBannerById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/banner/${id}`,
        {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            }
        })
        return response.data.data;
    } catch (error) {
        return null;
    }
}

async function updateBanner(id, bannerData) {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/update-banner/${id}`, bannerData, {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

async function deleteBanner(id) {
    try {
        const response = await axios.delete(`${BASE_URL}/api/v1/delete-banner/${id}`,
         {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

async function createBanner(formData) {
    try {
        const response = await axios.post(
            `${BASE_URL}/api/v1/create-banner`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            }
        );
        return response.data;
    } catch (error) {
        return null;
    }
};

export { fetchAllBannersData, fetchBannerById, updateBanner, deleteBanner, createBanner }