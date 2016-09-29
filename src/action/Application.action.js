import dispatcher from "../dispatcher";
import axios from "axios";
import ApplicationConstants from "../constant/Application.constant";

export function start() {
    axios(ApplicationConstants.Info.URL).then((response) => {
        console.log(response);
        dispatcher.dispatch({
            type: ApplicationConstants.ActionType.RECEIVE_DATA,
            response: response
        });
    }, (error) => {
        dispatcher.dispatch({
            type: ApplicationConstants.ActionType.RECEIVE_API_ERROR,
            error: error
        });   
    });

}