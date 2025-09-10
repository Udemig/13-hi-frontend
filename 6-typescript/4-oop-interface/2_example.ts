interface IAddress {
  street: string;
  city: string;
  country: string;
}

interface IEducation {
  school: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

interface IJob {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
}

interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  age: number;

  address: IAddress;
  education: IEducation;
  job: IJob[];
}

// address'i Person interface'i içerisinde yazmayı tercih edersek durum bu
const updateLocation1 = (newAddress: { street: string; city: string; country: string }) => {};

// address'i ayrı bir interface'te yazmayı tercih edersek durum bu
const updateLocation2 = (newAddress: IAddress) => {};

// oluşturduğumuz interface'i kullanarak bir nesne oluşturalım
const person: IPerson = {
  id: "1",
  firstName: "Ali",
  lastName: "Kaya",
  age: 34,
  address: {
    street: "123 Main St.",
    city: "Los Angeles",
    country: "USA",
  },
  education: {
    school: "University of LA",
    degree: "Bachelor",
    startDate: new Date("2010-09-01"),
    endDate: new Date("2013-09-01"),
  },
  job: [
    {
      company: "Google",
      position: "Softwaare Engineer",
      startDate: new Date("2013-09-01"),
      endDate: new Date("2017-09-01"),
    },
  ],
};
