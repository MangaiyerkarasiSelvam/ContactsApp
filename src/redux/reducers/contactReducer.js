const initialState = [
  { id: 0, firstname: "Mangai",lastname:"Selvam", email: "email1@email.com", phonenumber: 8056452265, address:"12th street",city:"Coimbatore",state:"Tamilnadu",country:"India",pin:"641035" },
  { id: 1, firstname: "Manoj",lastname:"Mani", email: "email2@email.com", phonenumber: 8056543365, address:"12th street",city:"Coimbatore",state:"Tamilnadu",country:"India",pin:"641035" },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ firstname: null,lastname:null, email: null, phonenumber: null, address:null,city:null,state:null,country:null,pin:null}];
      return state;
    default:
      return state;
  }
};
