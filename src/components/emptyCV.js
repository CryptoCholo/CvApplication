import { v4 as uuidv4} from "uuid";

export const emptyCV = {
        personalInfo:  {
        firstName: "",
        lastName: "",
        title: "",
        photo: "",
        address: "",
        email: "",
        phoneNum: "",
        description: ""
},
        experience: [
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        }
      ],
      education: [
        {
          id: uuidv4(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
};