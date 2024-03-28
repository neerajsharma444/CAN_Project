export const API_URL = 'http://54.190.192.105:9185/angel/';

export const API_ENDPOINTS = {
  REGISTER: 'add_Investor',
  GET_ALL_STATES: 'get_all_state',
  LOGIN: 'investor_login',
  RESET_PASSWORD: 'resetlink_investor',
  ACTIVE_MENDATE: 'mandate/list',
  CALENDAR_EVENTS: 'getEventtillDate',
  UPDATE_PROFILE: 'update_Investor',
  CHANGE_PASSWORD: 'update-password/investor',
  ADD_REFERRAL: 'add/referral',
  REFERRAL_LIST: 'referral/list_by_mandate?user_mandate=',
  CALENDAR: 'get_events',
  PORTFOLIO: 'portfolio/list_by_mandate?user_registered_id=',
  FORUM_CATEGORY: 'get_all_forum_Category',
  FORUM_ADD_QUESTION: 'add_quetion',
  FORUM_ADD_RESPONSE: 'update_question_data',
  MYPROFILE: 'loggedin_user_dataByid?_id=',
  GET_QUESTION: 'quetion_data_by_id?_id=',
  //added URL for chat
  SOCKET_CHAT: 'http://54.190.192.105:9185',
  // SOCKET_CHAT:'http://172.24.0.65:9185',
  GET_CHAT_LIST: 'get_chat_byroom_id?roomId=',
  ADD_INTERESTED_MANDATE: 'add_interested/mandate',
  CREATE_CHAT: 'crete_chat/byinvestor',
  UPDATE_USER_FCM: 'update/fcm_token',
};
