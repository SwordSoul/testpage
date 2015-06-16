export default {
  //user json data, similar to the one we are suposed to receive from server
  users: [
    {
      id: 1,
      personalData: {
        name: 'Collin',
        lastName: 'Pharell',
        companyId: 1,
        website: 'hotaccount.com',
        localTime: '3 PM ET',
        linkedIn: 'linkedin.com',
        cv: 'My mission....',
        title: 'Chief Happiness Officer',
        email: 'collin.pharell@hotaccount.com',
        phone: '+1 714 304 506',        
        twitter: {
          account: '@hot_collin',
          lastTweets: [
            { 
              date: '2 w ago',
              text: 'lorem ipsum'
            }
          ]
        }
      },
      salesForce: {
        added: false,
        sfAccountType: null
      }
    },
  ],
  organizations: [
    {
      id: 1,
      title: 'Hotaccount',
      website: 'hotaccount.com',

      logoUrl: './hotAccount.png',
      industry: 'Sales Tech',
      employees: 1,
      revenue: 3,
      city: 'New York City'
    }
  ]
};