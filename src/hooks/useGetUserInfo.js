export const useGetUserInfo = () => {
    const {userName,userID,userPhoto,isAuth} = JSON.parse(localStorage.getItem('auth')) || {};

    return {
        userName,
        userID,
        userPhoto,
        isAuth,
    };
};