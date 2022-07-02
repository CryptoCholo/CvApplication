import { v4 as uuidv4} from "uuid";
import profilepic from "./utilities/profile.svg";

export const exampleCv = {
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Senior Web Developer',
      photo: profilepic,
      address: 'Example Street 10',
      phoneNum: '123456789',
      email: 'john.doe@gmail.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
    },
    experience: [
      {
        id: uuidv4(),
        position: 'Senior Web Developer',
        company: 'Facebook Inc.',
        city: 'Menlo Park',
        from: '2015',
        to: 'Present',
      },
      {
        id: uuidv4(),
        position: 'Junior Web Developer',
        company: 'Tesla Inc.',
        city: 'Palo Alto',
        from: '2012',
        to: '2015',
      },
    ],
    education: [
      {
        id: uuidv4(),
        universityName: 'University of Technology',
        city: 'Oklahoma',
        degree: 'Master',
        subject: 'Science',
        from: '2008',
        to: '2010',
      },
      {
        id: uuidv4(),
        universityName: 'University of Design Art',
        city: 'New York',
        degree: 'Bachelor',
        subject: 'Visual Art',
        from: '2005',
        to: '2008',
      },
    ],
  }