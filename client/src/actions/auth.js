import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
  // const dispatch = useDispatch();
  try {
    const { data } = await api.signIn(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // sign up the user...
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// import { AUTH } from "../constants/actionTypes";
// import * as api from "../api/index.js";

// export const signin = (formData, router) => async (dispatch) => {
//   try {
//     const { data } = await api.signIn(formData);

//     dispatch({ type: AUTH, data });

//     router.push("/");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signup = (formData, router) => async (dispatch) => {
//   try {
//     const { data } = await api.signUp(formData);

//     dispatch({ type: AUTH, data });

//     router.push("/");
//   } catch (error) {
//     console.log(error);
//   }
// };
