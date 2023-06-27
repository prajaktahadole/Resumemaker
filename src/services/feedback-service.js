import { axiosMethod } from "./helper";

export const findSkills = (config) => {
  return axiosMethod
    .get("/skill/findall", config)
    .then((response) => response.data)
    .catch((err) => {});
};

export const findSoftSkills = (config) => {
  return axiosMethod
    .get("/skill/softskill", config)
    .then((response) => response.data)
    .catch((err) => {});
};
export const REfindSkills = (config) => {
  return axiosMethod
    .get("/skill/findall", config)
    .then((response) => response)
    .catch((err) => {});
};

export const REfindSoftSkills = (config) => {
  return axiosMethod
    .get("/skill/softskill", config)
    .then((response) => response)
    .catch((err) => {});
};

export const getFeedbackAllData = (config) => {
  return axiosMethod
    .get("/feedback/allformsdata", config)
    .then((response) => response.data)
    .catch((error) => {});
};

export const getFeedbackAllDataByEmail = (email, config) => {
  return axiosMethod
    .get(`/feedback/allformdatabyemail/${email}`, config)
    .then((response) => response.data)
    .catch((error) => {});
};

// export const submitForm = (config) => {
//   return axiosMethod
//     .post("/form", config)
//     .then((response) => {})
//     .catch((err) => {});
// };

export const deleteFeedbackFormById = async (formId, config) => {
  return await axiosMethod.put(`/feedback/deletebyid/${formId}`, {}, config);
};

export const getFeedbackForm = (data) => {
  return axiosMethod
    .get(`/feedback/review/${data.id}`, data.config)
    .then((response) => response.data)
    .catch((error) => {});
};

export const REgetFeedbackForm = (data) => {
  return axiosMethod
    .get(`/feedback/review/${data.id}`, data.config)
    .then((response) => response)
    .catch((error) => {});
};

export const feedbackCountByInterviewer = async (interviewer,config) => {
  return await axiosMethod
    .get(`/feedback/feedbackcount/${interviewer}`, config)
    .then((response) => response.data)
    .catch((error) => {});
};

export const feedbackCountByInterviewerAll = async (config) => {
  return await axiosMethod
    .get(`/feedback/feedbackcountall`, config)
    .then((response) => response.data)
    .catch((error) => {});
};

export const feedbackCountByInterviewerandDate = async (interviewer, startDate, endDate, config) => {
  return await axiosMethod
    .get(`/feedback/countbydateandinterviewer/${interviewer}`, {
      ...config,
      params: {
        startDate,
        endDate,
      },
    })
    .then((response) => response.data)
    .catch((error) => {});
};

export const feedbackCountByDate = async (startDate, endDate, config) => {
  return await axiosMethod
    .get(`/feedback/countbydate`, {
      ...config,
      params: {
        startDate,
        endDate,
      },
    })
    .then((response) => response.data)
    .catch((error) => {});
};

export const putEngageData = async (formId, config, data) => {
  return  axiosMethod
  .put(`/feedback/updateengaged/${formId}`,data, config)
  .then((response) => response.data)
  .catch(error => {
    console.error(error);
  });
}
export const putReleaseData = async (formId, config) => {
    return  axiosMethod
        .put(`/feedback/updaterelease/${formId}`,{}, config)
        .then((response) => response.data)
        .catch(error => {
            console.error(error);
        });
}
export const getFilteredData = async (config) => {
    return await axiosMethod.get(`/feedback/getalldata`, config)
        .then((response) => response.data)
        .catch(error => {
            console.error(error);
        });
}

export const getSummarizedData = async (config) => {
    return await axiosMethod.get(`/feedback/summary`, config)
        .then((response) => response.data)
        .catch(error => {
            console.log(error)
        })
}

export const getSummarizedDataByEmail = async (email, config) => {
    return await axiosMethod.get(`/feedback/summary/${email}`, config)
        .then((response) => response.data)
        .catch(error => {
            console.log(error)
        })
}