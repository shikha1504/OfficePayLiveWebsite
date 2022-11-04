const BuildingData = {
  Buildingemail: "",
  Buildingpassword: "",
  Buildingconfirm: "",
  buildingname: "",
  address: "",
  email: "",
  gst: "",
  contact: "",
  city: "",
  pan: "",
  holdername: "",
  accnumber: "",
  Reaccnumber: "",
  ISFC: "",
};
export const BuildingReducer = (state = BuildingData, action) => {
  switch (action.type) {
    case "ADD-ACTION":
      //console.log('=========',state,'==========',action)
      return {
        ...state,
        buildingname: [...state.buildingname, action.payload.buildingname],
        address: [...state.address, action.payload.address],
        email: [...state.email, action.payload.email],
        gst: [...state.gst, action.payload.gst],
        contact: [...state.contact, action.payload.contact],
        city: [...state.city, action.payload.city],
        pan: [...state.pan, action.payload.pan],
      };

    default:
      return state;
  }
};

const createaccountoffice = {
  Officeemail: "",
  Officepassword: "",
  Officeconfirm: "",
};
export const CreateAccountofficeReducer = (
  state = createaccountoffice,
  action
) => {
  switch (action.type) {
    case "CREATE_ACCOUNT_OFFICE":
      // console.log('=========',state,'==========',action)
      return {
        ...state,
        Officeemail: [...state.Officeemail, action.payload.Officeemail],
        Officepassword: [
          ...state.Officepassword,
          action.payload.Officepassword,
        ],
        Officeconfirm: [...state.Officeconfirm, action.payload.Officeconfirm],
      };

    default:
      return state;
  }
};
const createaccountBuilding = {
  Buildingemail: "",
  Buildingpassword: "",
  Buildingconfirm: "",
};
export const CreateAccountBuildingReducer = (
  state = createaccountBuilding,
  action
) => {
  switch (action.type) {
    case "CREATE_ACCOUNT_BUILDING":
      // console.log('=========',state,'==========',action)
      return {
        ...state,
        Buildingemail: [...state.Buildingemail, action.payload.Buildingemail],
        Buildingpassword: [
          ...state.Buildingpassword,
          action.payload.Buildingpassword,
        ],
        Buildingconfirm: [
          ...state.Buildingconfirm,
          action.payload.Buildingconfirm,
        ],
      };

    default:
      return state;
  }
};
