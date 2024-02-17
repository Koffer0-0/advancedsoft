import axiosInstance from "@/services/instance";

const URLS = {
    allCategoriesUrl : (LMS + 'categories/?limit=100')
}

export const fetchAll = () => {
    return axiosInstance.get(URLS.allCategoriesUrl)
}
