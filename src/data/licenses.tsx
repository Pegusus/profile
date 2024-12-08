export interface License {
    title: string;
    organization: string;
    logo?: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl?: string;
  }
  
  export const licenses: License[] = [
    {
      title: "React Js",
      organization: "HackerRank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      issueDate: "Feb 2022",
      credentialUrl: "https://www.hackerrank.com/certificates/c26485296a39",
    },
    {
      title: "IEEE Member",
      organization: "IEEE",
      logo: "ieeelogo.png",
      issueDate: "Jan 2018",
      expiryDate: "Jan 2019",
      credentialId: "95570910",
    },
  ];
  