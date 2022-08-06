import { publicRequest, userRequest } from '../requestMethods';
import { loginFailure, loginStart, loginSuccess } from './userRedux';

export const register = async (newUser) => {
  // dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/register', newUser);
    console.log(res.data)
    // dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err.message)
    // dispatch(loginFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const createCart = async (userId) => {
  try {
    const res = await userRequest.post('/carts', userId);
    console.log(res)
  } catch (err) {
    console.log(err.message)
  }
};
