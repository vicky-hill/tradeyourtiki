'use server';

import api from "@/utils/api"

/** @param payload: { title, text, feature } */
export async function addReq(payload) {
    if (!payload.title) delete payload.title;
    await api.post('/reqs', payload);
}

/** @param reqID: _id of req to be changed*/
/** @param payload: { title, text } */
export async function changeReq(reqID, payload) {
    await api.put(`/reqs/${reqID}/change`, payload);
}