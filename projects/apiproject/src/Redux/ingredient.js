import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_INGREDIENT":
            return {
                ...state,
                data: action.ingredient,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state;
    }
}

    const ingredientUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
    export const getIngredient = () => {
        return dispatch => {
            axios.get(ingredientUrl)
                .then(response => {
                    console.log(response.data);
                    dispatch({
                        type: "GET_INGREDIENT",
                        random: response.data.drinks
                    })
                })
                .catch(err => {
                    dispatch({
                        type: "ERR_MSG",
                        errMsg: "ERROR: Sever has been over served."
                    })
                })
        }
    }
    export default reducer